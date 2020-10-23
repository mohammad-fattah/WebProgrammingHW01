package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"
)

func getLine(i int) string {
	data, err := ioutil.ReadFile("Test.txt")
	if err != nil {
		return "Error: File is not accessible"
	}
	lines := strings.Split(string(data), "\n")
	if i == 0 {
		return "Error: Invalid index"
	}
	i = i - 1
	if int(len(lines)) <= i || i < 0 {
		return "Error: out of bound"
	}
	return string(lines[i])
}

func serve(w http.ResponseWriter, r* http.Request) {
	_ = r.ParseForm()
	i, _ := strconv.Atoi(r.Form.Get("Line"))
	_, _ = fmt.Fprint(w, getLine(i))
}

func main()  {
	http.HandleFunc("/go/write", serve)
	_ = http.ListenAndServe(":8080", nil)
}