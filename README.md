My Portfolio Website
=====================

# Deploy

This website is packaged as a container and deployed using nginx.
```
docker build -t my-portfolio-app .
docker tag my-portfolio-app:latest registry.tahmidcloud.com/my-portfolio-app:latest
docker push registry.tahmidcloud.com/my-portfolio-app:latest

# Check the registry
curl -u user:pass http://192.168.1.142:5000/v2/_catalog
```
