## Deployment

A `Deployment` manages a set pod Pods to run an application workload, usually one that does not maintain **state**. A `Deployment` provides declarative updates for Pods and ReplicaSets. When we describe a desired state in a  `Deployment`, the Deployment controller changes the actual state to the desired state at a controlled rate.

![[deployment-diagram.svg]]
In Kubernetes, a `Deployment` is limited to containing a single pod template specification (PodSpec). This template serves as the blueprint for creating identical pods. The Deployment controller ensures that the desired number of replicas of this pod template are maintained and running at all times.

Within this single pod template, developers have the flexibility to define either a single container or multiple containers that will run within each pod. When multiple containers are specified, they are co-located and managed together as a single unit within the pod.

The number of replicas specified in the `Deployment` configuration determines how many identical pods will be created, each containing the same set of defined containers. For example, if a `Deployment` specifies three replicas of a pod template that contains two containers, Kubernetes will create three identical pods, each running both containers.


## DaemonSet

A ``DaemonSet`` is a Kubernetes resource designed to ensure that a specific pod runs on every node within a cluster, making it ideal for node-level operations and infrastructure services. These pods typically provide essential node-local facilities that support the cluster's fundamental operations, such as:

- Network management tools
- Log collection systems
- Storage management solutions
- Monitoring agents
![[daemonset-diagram.svg]]
Like Deployments, `DaemonSet`s are constrained to a single pod template specification (PodSpec). Within this template, administrators can define one or multiple containers that will run together in each pod. The key distinction from Deployments is that `DaemonSet`s automatically manage pod distribution, ensuring exactly one pod instance runs on each cluster node without requiring explicit replica configuration.

This architecture makes `DaemonSet`s particularly suitable for implementing cluster-wide infrastructure services that need to operate consistently across all nodes. By automatically scheduling pods on both existing nodes and any new nodes added to the cluster, `DaemonSet`s maintain uniform functionality throughout the cluster's infrastructure.


## StatefulSet

A `StatefulSet` is a Kubernetes resource designed to manage stateful applications that require stable network identities, persistent storage, and ordered deployment and scaling. Unlike Deployments, which treat pods as interchangeable units, `StatefulSet`s maintain a unique, persistent identity for each pod, making them ideal for applications such as:

- Distributed databases
- Message brokers
- Applications requiring stable network identifiers
- Systems needing ordered deployment and scaling

![[statefulset-diagram.svg]]
Like Deployments and `DaemonSet`s, `StatefulSet`s are limited to a single pod template specification (PodSpec), within which administrators can define one or multiple containers. However, `StatefulSet`s possess distinct characteristics:

- Pods receive predictable names and persistent identifiers (e.g., app-0, app-1, app-2)
- Pod creation, scaling, and deletion occur in a predetermined order
- Each pod can be associated with its own persistent storage volume. Whereas in Deployment the all the pods share the same persistent storage. 
- Network identities remain stable across pod rescheduling

The ordered nature of `StatefulSet`s ensures that pods are created sequentially (0 to N), and scaled down in reverse order (N to 0), making them suitable for applications where pod ordering and uniqueness are crucial for proper operation. A following pod will not launch until the current Pod reaches a running and ready state. 


## Comparison Between Deployment, DaemonSet, and StatefulSet

| Feature/Aspect | Deployment | DaemonSet | StatefulSet |
|---------------|------------|----------|-------------|
| **Primary Use Case** | General purpose workloads, stateless applications | Node-level operations, infrastructure services | Stateful applications, databases |
| **Pod Identity** | Pods are identical and interchangeable | Pods are identical but node-specific | Pods have unique, persistent identities (pod-0, pod-1) |
| **Scaling** | Manual or automatic scaling with specified number of replicas | Automatic - one pod per node | Manual scaling with ordered pod creation/deletion |
| **Pod Template** | Single PodSpec | Single PodSpec | Single PodSpec |
| **Pod Names** | Random (e.g., app-7849d89d47-xxxx) | Random with node affinity | Predictable, ordered (e.g., app-0, app-1) |
| **Storage** | Can use PVC (shared among all pods) | Can use PVC (one per node) | Unique PVC per pod using volumeClaimTemplates |
| **Network Identity** | Service load balances to any pod | Node-level networking possible | Stable network identity per pod |
| **Update Strategy** | Rolling update by default | Rolling update on each node | Ordered update from N-1 to 0 |
| **Common Examples** | - Web applications<br>- Microservices<br>- API servers | - Monitoring agents<br>- Log collectors<br>- Network plugins | - Databases<br>- Message queues<br>- Distributed systems |
| **Scale Down Order** | Random | From specific nodes | Reverse order (N to 0) |
| **Node Placement** | Any available nodes | One pod per node | Any available nodes (with ordering) |
| **Replica Configuration** | `.spec.replicas` field | No replica field (automatic) | `.spec.replicas` field 
