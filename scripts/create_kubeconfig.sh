#!/usr/bin/env bash

function usage() {
    echo "--namespace <namespace> --user <user>  --kubeconfig <kubeconfig>"
}

function create_namespace() {
    local namespace="$1"
    kubectl create namespace "$namespace" \
        --dry-run=client -o yaml | kubectl apply -f -
}

function create_service_account() {
    local user="$1"
    local namespace="$2"

    kubectl create serviceaccount "$user" \
        --namespace "$namespace" \
        --dry-run=client -o yaml | kubectl apply -f -

    # Create associated secret
    kubectl apply -f - <<EOF
apiVersion: v1
kind: Secret
metadata:
  name: ${user}-secret
  namespace: ${namespace}
  annotations:
    kubernetes.io/service-account.name: ${user}
type: kubernetes.io/service-account-token
EOF

    echo "Service account $user created in namespace $namespace"
}

function create_role() {
    local user="$1"
    local namespace="$2"

    kubectl create role "$user" \
        --verb=get,list,watch,create,update,delete,patch,exec \
        --resource=pods,pods/exec,services,deployments,secrets,configmaps \
        --namespace "$namespace" \
        --dry-run=client -o yaml | kubectl apply -f -

    echo "Role $user created in namespace $namespace"
}

function create_role_binding() {
    local user="$1"
    local namespace="$2"

    kubectl create rolebinding "$user" \
        --role="$user" \
        --serviceaccount="$namespace:$user" \
        --namespace "$namespace" \
        --dry-run=client -o yaml | kubectl apply -f -

    echo "Role binding $user created in namespace $namespace"
}

function create_kubeconfig() {
    local user="$1"
    local namespace="$2"
    local kubeconfig="$3"

    SECRET_NAME=${user}-secret
    CLUSTER_NAME=$(kubectl config view --minify -o jsonpath='{.clusters[0].name}')
    TOKEN=$(kubectl get secret "$SECRET_NAME" -n "$namespace" -o jsonpath='{.data.token}' | base64 --decode)
    CA=$(kubectl get secret "$SECRET_NAME" -n "$namespace" -o jsonpath='{.data.ca\.crt}')

    SERVER=$(kubectl config view --minify -o jsonpath='{.clusters[0].cluster.server}')

    # Create kubeconfig file with proper indentation
    cat >"${kubeconfig}" <<EOF
apiVersion: v1
kind: Config
clusters:
- name: ${CLUSTER_NAME}
  cluster:
    server: ${SERVER}
    certificate-authority-data: ${CA}
contexts:
- name: ${CLUSTER_NAME}-${namespace}-ci
  context:
    cluster: ${CLUSTER_NAME}
    namespace: ${namespace}
    user: ${user}
current-context: ${CLUSTER_NAME}-${namespace}-ci
users:
- name: ${user}
  user:
    token: ${TOKEN}
EOF

    echo "Kubeconfig file created at ${kubeconfig}"
}

# Main script
function main() {
    local namespace=""
    local user=""
    local kubeconfig=""

    while [[ "$#" -gt 0 ]]; do
        case $1 in
        -n|--namespace)
            namespace="$2"
            shift
            ;;
        -u|--user)
            user="$2"
            shift
            ;;
        -k|--kubeconfig)
            kubeconfig="$2"
            shift
            ;;
        -h|--help)
            usage
            exit 0
            ;;
        *)
            usage
            exit 1
            ;;
        esac
        shift
    done

    if [[ -z "$namespace" || -z "$user" || -z "$kubeconfig" ]]; then
        usage
        exit 1
    fi

    create_namespace "$namespace"
    create_service_account "$user" "$namespace"
    create_role "$user" "$namespace"
    create_role_binding "$user" "$namespace"
    create_kubeconfig "$user" "$namespace" "$kubeconfig"
}

# Call the main function
main "$@"