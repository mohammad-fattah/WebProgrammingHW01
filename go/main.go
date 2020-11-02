package main

import (
	"crypto/sha256"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"
)

type Params struct {
	First  string
	Second string
}

type Response struct {
	Operation string
	Answer    string
	Error     string
}

func calculateSHA(body io.ReadCloser) Response {
	var params Params
	var response Response
	response.Operation = "SHA256"
	b, err := ioutil.ReadAll(body)
	defer body.Close()
	err = json.Unmarshal(b, &params)
	if err != nil {
		response.Error = "Unexpected Error <- Failed to parse json"
		response.Answer = ""
		return response
	}
	m, err := strconv.Atoi(params.First)
	if err != nil {
		response.Error = "Number was expected for both inputs!"
		response.Answer = ""
		return response
	}
	n, err := strconv.Atoi(params.Second)
	if err != nil {
		response.Error = "Number was expected for both inputs!"
		response.Answer = ""
		return response
	}
	response.Answer = fmt.Sprintf("%x", sha256.Sum256([]byte(strconv.Itoa(m+n))))
	response.Error = ""
	return response
}

func serveSHA(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		var response Response = calculateSHA(r.Body)
		j, _ := json.Marshal(response)
		fmt.Fprint(w, string(j))
	}
}

func getLine(i int) string {
	data, err := ioutil.ReadFile("../database/lines.txt")
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

func serveWrite(w http.ResponseWriter, r *http.Request) {
	_ = r.ParseForm()
	i, _ := strconv.Atoi(r.Form.Get("Line"))
	_, _ = fmt.Fprint(w, getLine(i))
}

func main() {
	http.HandleFunc("/go/sha", serveSHA)
	http.HandleFunc("/go/write", serveWrite)
	_ = http.ListenAndServe(":8080", nil)
}
