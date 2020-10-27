# WebProgrammingHW01 : Go
A web server, serving _SHA256_ and _Write_ requests, Implemented with _[Go](https://golang.org/)_ 
# Instruction to deploy
1. Build `main.go` using command `go build main.go`.
2. Copy `go-server.sevice` to path `/lib/systemd/system`.
3. Execute these commands in terminal:
```
systemctl start go-server
systemctl status go-server
systemctl enable go-server
systemctl daemon-reload
```
4. Make sure that Nginx is correctly configed to pass `/go/sha` and `/go/write` requests to port 8080. Instruction for Nginx configuration is available in related package.
