My Portfolio Website
=====================

# Deploy

This website is packaged as a container and deployed using nginx.
```
docker build -t my-portfolio-app .
docker tag my-portfolio-app:latest registry.tahmidcloud.com/my-portfolio-app:latest
docker push registry.tahmidcloud.com/my-portfolio-app:latest

# Check the registry
curl -u user:pass https://registry.tahmidcloud.com/v2/_catalog
```
