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
Copy .service files to `/lib/systemd/system/`, then use these commands for each to start them.
```
systemctl daemon-reload
systemctl start service_name
systemctl enable service_name
systemctl status service_name // make sure service is actived
```
## SELinux & Firewall
Give HTTP access to port 8080 and 3000 and excluding them from a few of SELINUX rules. 
```
firewall-cmd --permanent --add-service=http
chmod +x /root/WebProgrammingHW01/go/main
firewall-cmd --zone=public --add-port=8080/tcp --permanent
firewall-cmd --zone=public --add-port=3000/tcp --permanent
sudo chown -R $USER:$USER /root/WebProgrammingHW01/front
chcon -vR system_u:object_r:httpd_sys_content_t:s0 /root/WebProgrammingHW01/
sudo setcap CAP_NET_BAND_SERVICE=+eip /root/WebProgrammingHW01/go/main
```
