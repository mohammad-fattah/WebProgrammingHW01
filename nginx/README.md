# WebProgrammingHW01 : NGINX
This web server in Nginx-based. Here is Instruction how to deploy.
## NGINX Configuration
Add these locations to `/etc/nginx/nginx.conf`, or you can simply replace it with relevant file in this repository.
```
location / {
    root /root/WebProgrammingHW01/front;
    index index.html index.htm;
}
```
```
location /go/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8080/go/;
}
```
```
location /nodejs/{
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:3000/nodejs/;
}
```
## Systemd Services
```
systemctl daemon-reload
systemctl start service_name
systemctl enable service_name
systemctl status service_name // make sure service is actived
```
## SELinux
