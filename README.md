My Portfolio Website
=====================

# Deploy

This website is packaged as a container and deployed using nginx.

```bash
source .env
docker build -t my-portfolio-app .
docker tag my-portfolio-app:latest ${DOCKER_REGISTRY}/my-portfolio-app:latest
docker push ${DOCKER_REGISTRY}/my-portfolio-app:latest

# Check the registry
curl -u user:pass https://${DOCKER_REGISTRY}/v2/_catalog
```
