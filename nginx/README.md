# WebProgrammingHW01 : NGINX
This web server in Nginx-based. Here is Instruction how to deploy.
# How to deploy
1. Install Nginx.
2. set these locations in `/etc/nginx/nginx.conf` using command `nano`
```
location / {
    root /root/project/WebProgrammingHW01/front;
}
```
```
location /go/sha/ {
    proxy_pass http://localhost:8080;    
}
```
```
location /go/write/ {
    proxy_pass http://localhost:8080;    
}
```
```
location /nodejs/sha/ {
    proxy_pass http://localhost:3000;    
}
```
```
location /nodejs/write/ {
    proxy_pass http://localhost:3000;    
}
```

