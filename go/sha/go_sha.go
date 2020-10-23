package main

import (
	"crypto/sha256"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"
)

type Params struct {
	N	string
	M 	string
}

type Response struct {
	Operation string
	Answer    string
	Error     string

}

func calculateSHA(body io.ReadCloser) Response {
	var params Params
	var err error
	var response Response
	response.Operation = "SHA256"
	err = json.NewDecoder(body).Decode(&params)
	if err != nil {
		response.Error = "Unexpected Error <- Failed to parse json"
		response.Answer = ""
		return response
	}
	m, err := strconv.Atoi(params.M)
	if err != nil {
		response.Error = "Number was expected as M"
		response.Answer = ""
		return response
	}
	n, err := strconv.Atoi(params.N)
	if err != nil {
		response.Error = "Number was expected as N"
		response.Answer = ""
		return response
	}
	response.Answer = fmt.Sprintf("%x", sha256.Sum256([]byte(strconv.Itoa(m + n))))
	response.Error = ""
	return response
}

func serve(w http.ResponseWriter, r* http.Request) {
	var response Response = calculateSHA(r.Body)
	j, _ := json.Marshal(response)
	fmt.Fprint(w, string(j))
}

func main() {
	http.HandleFunc("/go/sha", serve)
	_ = http.ListenAndServe(":8080", nil)
}