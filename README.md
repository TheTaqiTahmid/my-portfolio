My Portfolio Website
=====================

# Overview

This is my personal portfolio website. It is a simple website that showcases
my projects and skills. The wbsite has an Overview, Projects, Interests, and
Experience section. The website is deployed on my self-hosted Kubernetes cluster.

For more info regarding my homelab setup, please visit my
[Homelab Repository](https://github.com/TheTaqiTahmid/homeserver)

# Build

This website is built using React and Typescript and is packaged as a container.

```bash
npm install
npm run build
```

# Deploy

This website is packaged as a container and deployed using nginx.

```bash
source .env
docker build -t my-portfolio-app .
docker tag my-portfolio-app:latest $DOCKER_REGISTRY/my-portfolio-app:latest
docker push $DOCKER_REGISTRY/my-portfolio-app:latest

# Check the registry
curl -u user:pass https://$DOCKER_REGISTRY/v2/_catalog
```

# CI/CD
Run in Gitea Actions within kubernetes cluster

Current, the project has workflow files for:
- Build and push the container to the registry
- Deploy the container to the Kubernetes cluster

Thus making a commit to the master branch will automatically build the
container and deploy it to the cluster.