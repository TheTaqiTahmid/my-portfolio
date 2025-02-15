## Introduction

A pod specification can define one or more volumes and specify where they should be mounted. Each volume requires a name, a type, and a mount point. *The same volume can be shared across multiple containers within a pod, enabling container-to-container communication.* Volumes with the `ReadWriteMany` access mode can also be shared across multiple pods, allowing each pod to write to the volume. However, there is no built-in mechanism for concurrency control, which increases the risk of data corruption unless external locking mechanisms are implemented.

A particular access mode is part of a Pod request. As a request, the user may be granted more, but not less access, though a direct match is attempted first. The cluster groups volumes with the same mode together, then sorts volumes by size, from smallest to largest. The claim is checked against each in that access mode group, until a volume of sufficient size matches. The three access modes are:

- `ReadWriteOnce`, which allows read-write by a single node
- `ReadOnlyMany`, which allows read-only by multiple nodes
- `ReadWriteMany`, which allows read-write by many nodes

Only a single pod can write to a `ReadWriteOnce` volume. Any additional pods, regardless of whether they are on the same node or a different node, will be unable to write to the volume and will fail to become ready, resulting in a `FailedAttachVolume` error.

When a volume is requested, the local kubelet uses the **kubelet_pods.go** script to map the raw devices, determine and make the mount point for the container, then create the symbolic link on the host node `filesystem` to associate the storage to the container. The API server makes a request for the storage to the **`StorageClass`** plugin, but the specifics of the requests to the `backend` storage depend on the plugin in use.

If a request for a particular **`StorageClass`** was not made, then the only parameters used will be access mode and size. The volume could come from any of the storage types available, and there is no configuration to determine which of the available ones will be used.

## Volume Spec

Here is an example volume spec:
```yaml
apiVersion: v1  
kind: Pod  
metadata:  
  name: fordpinto   
  namespace: default  
spec:  
  containers:  
  - image: simpleapp   
    name: gastank   
    command:  
    - sleep  
    - "3600"  
    volumeMounts:  
    - mountPath: /scratch  
      name: scratch-volume  
  volumes:  
  - name: scratch-volume  
    emptyDir: {}
```

One of the many types of storage available is an `emptyDir`. The kubelet will create the directory in the container, but not mount any storage. Any data created is written to the shared container space. As a result, it would not be persistent storage. When the `Pod` is destroyed, the directory would be deleted along with the container. 

## Volume Types

Ref: https://kubernetes.io/docs/concepts/storage/volumes/

There are various types of volumes available in Kubernetes, each with its own advantages and limitations. Some are local to the node, while others rely on network-based resources.

For example, in cloud environments like GCE or AWS, you can use `GCEPersistentDisk` or `awsElasticBlockStore` to mount GCE or EBS disks in your Pods. This requires preconfigured accounts and appropriate permissions.

Local volumes such as `emptyDir` and `hostPath` are simple to use:

- **`emptyDir`**: Creates a temporary directory for the Pod. It is deleted when the Pod stops but recreated when the container restarts.
- **`hostPath`**: Mounts a resource from the node’s `filesystem`, such as a directory, file, socket, or block device. These resources must already exist on the host unless you use `DirectoryOrCreate` or `FileOrCreate`, which create the resources if they are missing.

For shared access across multiple Pods, network-based options like **NFS (Network File System)** or **iSCSI (Internet Small Computer System Interface)** are good choices.

In addition to these, Kubernetes supports many other volume types, including `azureDisk`, `azureFile`, `csi`, `local`, `secret`, `persistentVolumeClaim`, and more. The **Container Storage Interface (CSI)** adds even more flexibility by enabling custom storage plugins without modifying Kubernetes itself. This has led to the deprecation and removal of many older "in-tree" storage drivers, with their functionality redirected to CSI drivers.

_Note: Ensure you verify volume compatibility and life-cycle when choosing a type, as older in-tree drivers may no longer be supported in newer Kubernetes versions._

## Shared Volume example

The volumes attached to a pod can be shared across all the containers within a pod even with `ReadWriteOnce` access. Here is an example YAML file with two containers sharing the same volume.

```yaml
   **containers:  
   - name: alphacont  
     image: busybox  
     volumeMounts:  
     - mountPath: /alphadir  
       name: sharevol  
   - name: betacont  
     image: busybox  
     volumeMounts:  
     - mountPath: /betadir  
       name: sharevol  
   volumes:  
   - name: sharevol  
     emptyDir: {}**
```

Now, take a look at the following commands and outputs:

```bash
$ kubectl exec -ti exampleA -c betacont -- touch /betadir/foobar  
$ kubectl exec -ti exampleA -c alphacont -- ls -l /alphadir

total 0  
-rw-r--r-- 1 root root 0 Nov 19 16:26 foobar
```

You could use `emptyDir` or `hostPath` easily, since those types do not require any additional setup, and will work in your Kubernetes cluster. 

Note that one container (**betacont**) wrote, and the other container (**alphacont**) had immediate access to the data. There is nothing to keep the containers from overwriting the other's data. Locking or versioning considerations must be part of the containerized application to avoid corruption.

## Persistent Volumes and Claims

A persistent volume (pv) is a storage abstraction used to retain data longer than the Pod using it. `Pods` define a volume of type `persistentVolumeClaim` (pvc) with various parameters for size and possibly the type of backend storage known as `storageClass`. The cluster then attaches the `persistentVolume`. 

There are several phases to persistent storage.
1. Provision: **Provisioning** can be from PVs created in advance by the cluster administrator, or requested from a dynamic source, such as the cloud provider.
2. Bind: **Provisioning** can be from PVs created in advance by the cluster administrator, or requested from a dynamic source, such as the cloud provider.
3. Use: **Provisioning** can be from PVs created in advance by the cluster administrator, or requested from a dynamic source, such as the cloud provider.
4. Release: **Provisioning** can be from PVs created in advance by the cluster administrator, or requested from a dynamic source, such as the cloud provider.
5. Reclaim: The **reclaim** phase has three options:
	- **Retain**, which keeps the data intact, allowing for an administrator to handle the storage and data.
	- **Delete** tells the volume plugin to delete the API object, as well as the storage behind it. 
	- The **Recycle** option runs an **rm -rf /mountpoint** and then makes it available to a new claim. With the stability of dynamic provisioning, the Recycle option is planned to be deprecated.

We can check the pvc and pv in our cluster with the following kubectl commands:

```bash
kubectl get pvc -n <namespace>
kubectl get pv -n <namespace>
```

### Persistent Volume

The following example shows a basic declaration of a Persistent Volume using the hostPath type. It will provision a 10Gi storage in one of the nodes in the cluster.

```yaml
kind: PersistentVolume  
apiVersion: v1  
metadata:  
  name: 10Gpv01  
  labels:   
    type: local** **spec:  
  capacity:   
    storage: 10Gi  
  accessModes:  
    - ReadWriteOnce  
  hostPath:  
    path: "/somepath/data01"
```

Each type will have its own configuration settings. For example, an already created `Ceph` or `GCE` Persistent Disk would not need to be configured, but could be claimed from the provisioner. 

One thing to note is that the Persistent Volumes are not  a namespaces object, but the persistent volume claims are. 

The use of locally attached storage has been graduated to a stable feature. This feature is often used as part of distributed file systems and databases. 

### Persistent Volume Claim

With persistent volume created in the cluster, we can then write a manifest for a claim, and use that claim in your pod definition. In the pod, the volumes uses the `persistentVolumeClaim`. 

```yaml
kind: PersistentVolumeClaim  
apiVersion: v1  
metadata:  
  name: myclaim  
spec:  
  accessModes:  
  - ReadWriteOnce  
  resources:  
    requests:  
      storage: 8GI
```

And, in the pod we can add the volume like this:

```yaml
spec:  
  containers:  
....  
  volumes:  
  - name: test-volume  
    persistentVolumeClaim:  
      claimName: myclaim
```

Or, in more complex form with more config,

```yaml
    volumeMounts:  
    - name: Cephpd  
      mountPath: /data/rbd  
  volumes:  
  - name: rbdpd  
    rbd:  
      monitors:  
      - '10.19.14.22:6789'  
      - '10.19.14.23:6789'  
      - '10.19.14.24:6789'  
      pool: k8s  
      image: client  
      fsType: ext4  
      readOnly: true  
      user: admin  
      keyring: /etc/ceph/keyring
```

## Dynamic Provisioning

While handling volumes with a persistent volume definition and abstracting the storage provider using a claim is powerful, a cluster administrator still needs to create those volumes in the first place. The dynamic provisioning allows for the cluster to request storage from an exterior, pre-configured source. API calls made by the appropriate plugin allow for a wide range of dynamic storage class. 

The **StorageClass** API resource allows an administrator to define a persistent volume provisioner of a certain type, passing storage-specific parameters.

With a **StorageClass** created, a user can request a claim, which the API Server fills via auto-provisioning. The resource will also be reclaimed as configured by the provider. AWS and GCE are common choices for dynamic storage, but other options exist, such as a Ceph cluster or iSCSI. Single, default class is possible via annotation.

Here is an example of a `StorageClass` using Longhorn:

```yaml
allowVolumeExpansion: true  
apiVersion: storage.k8s.io/v1  
kind: StorageClass  
metadata:  
   storageclass.kubernetes.io/is-default-class: "true"  
 name: longhorn  
parameters:  
 dataLocality: disabled  
 disableRevisionCounter: "true"  
 fromBackup: ""  
 fsType: ext4  
 numberOfReplicas: "1"  
 staleReplicaTimeout: "30"  
 unmapMarkSnapChainRemoved: ignored  
provisioner: driver.longhorn.io  
reclaimPolicy: Delete  
volumeBindingMode: Immediate
```

## Secrets

Secret is a type of Kubernetes volume and an object that contains small amount of sensitive information such as a password or TLS private key. Using secret mean, the confidential information does not need to be included in the pods manifest or application code. 

Secrets can be encoded manually or via kubectl create secret.

```bash
$kubectl create secret generic postgres --from-literal=password=root
```

A secret is not encrypted, only base64-encoded by default. It is possible to also encypt secret but for that an `EncryptionConfiguration` with a key and proper identity. Then the kube-apiserver needs teh --encryption-provider-config flag set to a provider such as ksm or aescbc. Once this is enabled, all the secrets need to be recreated.

Here is an example how to use secret in a podSpec

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: mypod
    image: redis
    env:
    - name: SECRET_KEY  <- Here secret is read and saved to env variable
	  valueFrom:
		  secretKeyRef:
			name: mysecret
			key: username
    volumeMounts:  <- Here secret is mounted to a file called /etc/foo
    - name: foo
      mountPath: "/etc/foo"
      readOnly: true
  volumes:
  - name: foo
    secret:
      secretName: mysecret
      optional: true
```

There is no limit how many number of secrets can be used, but there is a 1MB limit to their size. Each secret occupies memory, along with other API objects, so very large number of secrets could deplete memory on a host.

They are stored in the `tmpfs` storage on the host node, and are only sent to the host running the `Pod`. 

Kubernetes provides several built-in types of secrets for some common usage scenarios.

|Built-in Type|Usage|
|---|---|
|`Opaque`|arbitrary user-defined data|
|`kubernetes.io/service-account-token`|ServiceAccount token|
|`kubernetes.io/dockercfg`|serialized `~/.dockercfg` file|
|`kubernetes.io/dockerconfigjson`|serialized `~/.docker/config.json` file|
|`kubernetes.io/basic-auth`|credentials for basic authentication|
|`kubernetes.io/ssh-auth`|credentials for SSH authentication|
|`kubernetes.io/tls`|data for a TLS client or server|
|`bootstrap.kubernetes.io/token`|bootstrap token data

## ConfigMaps

A `ConfigMap` is akin to a `Secret`, with the distinction that its data is not encoded. In alignment with Kubernetes' principle of decoupling, utilizing a `ConfigMap` separates a container image from its configuration artifacts. This separation ensures that the container does not need to be rebuilt each time the configuration information is modified; instead, the container can simply reference the values stored in the `ConfigMap`.

`ConfigMap` stores data in key-value pairs or as plain configuration files in various formats. The data can be populated from a collection of files, all files within a directory, or from literal values.

A `ConfigMap` can be consumed in multiple ways. For instance, a container can use the data as environment variables, or the values can be passed to commands within a pod. Additionally, a volume or a file within a volume can be created, with options for different names and specific access modes. Furthermore, cluster components such as controllers can utilize the data stored in a `ConfigMap`.

Here is a summary of ways `configMap` can be consumed:

1. Inside a container command and args
2. Environment variables for a container
3. Add a file in read-only volume, for the application to read
4. Write code to run inside the Pod that uses the Kubernetes API to read a `ConfigMap`

Here is an example of `configMap` containing whole file created from literal.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: wireguard-config
  namespace: media  # Adjust the namespace accordingly
data:
  wg0.conf: |
    [Interface]
    Address = ipv4/32,ipv6/128
    PrivateKey = notarealkey
    MTU = 1320
    DNS = 10.128.0.1, fd7d:76ee:e68f:a993::1

    [Peer]
    PublicKey = fake
    PresharedKey = fake
    Endpoint = asia.vpn.fake.org:1637
    AllowedIPs = 0.0.0.0/0,::/0
    PersistentKeepalive = 15
```

Here is an example, how this value is used in  `deployment`.

```yaml
          volumeMounts:
            - name: wireguard-config
              mountPath: /config/wg_confs   <- The wg0.conf file path will be like: /config/wg_confs/wg0.conf
-------------------------
      volumes:
        - name: wireguard-config
          configMap:
            name: wireguard-config
```

Here is an example of `configMap` storing data as key-value pair.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: game-demo
data:
  # property-like keys; each key maps to a simple value
  player_initial_lives: "3"
  ui_properties_file_name: "user-interface.properties"

  # file-like keys
  game.properties: |
    enemy.types=aliens,monsters
    player.maximum-lives=5    
  user-interface.properties: |
    color.good=purple
    color.bad=yellow
    allow.textmode=true    
```

And here the `configMap` values are consumed in two different ways.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: configmap-demo-pod
spec:
  containers:
    - name: demo
      image: alpine
      command: ["sleep", "3600"]
      env:
        # Define the environment variable
        - name: PLAYER_INITIAL_LIVES # Notice that the case is different here
                                     # from the key name in the ConfigMap.
          valueFrom:
            configMapKeyRef:
              name: game-demo           # The ConfigMap this value comes from.
              key: player_initial_lives # The key to fetch.
        - name: UI_PROPERTIES_FILE_NAME
          valueFrom:
            configMapKeyRef:
              name: game-demo
              key: ui_properties_file_name
      volumeMounts:
      - name: config
        mountPath: "/config"
        readOnly: true
  volumes:
  # You set volumes at the Pod level, then mount them into containers inside that Pod
  - name: config
    configMap:
      # Provide the name of the ConfigMap you want to mount.
      name: game-demo
      # An array of keys from the ConfigMap to create as files
      items:
      - key: "game.properties"
        path: "game.properties"
      - key: "user-interface.properties"
        path: "user-interface.properties"
```

A ConfigMap doesn't differentiate between single line property values and multi-line file-like values. What matters is how `Pods` and other objects consume those values.

For this example, defining a volume and mounting it inside the `demo` container as `/config` creates two files, `/config/game.properties` and `/config/user-interface.properties`, even though there are four keys in the `ConfigMap`. This is because the Pod definition specifies an `items` array in the `volumes` section. If we omit the `items` array entirely, every key in the `ConfigMap` becomes a file with the same name as the key, and we get 4 files (player_initial_lives, ui_properties_file_name, game.properties, user-interface.properties).