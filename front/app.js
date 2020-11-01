function writeIndexedLine(lang) {

}

function sha(lang) {
    let requestBody = {};
    requestBody["M"] = document.getElementById("M").value;
    requestBody["N"] = document.getElementById("N").value;
    if (requestBody["M"] == "" || requestBody["N" == ""]) {
        document.getElementById("sha_answer").innerHTML = "Please enter two numbers.";
        return
    }
    requestBody = JSON.stringify(requestBody);
    let request = new XMLHttpRequest();
    request.open('POST', '/' + lang + '/sha', true)
    request.onreadystatechange = function () {
        let res = this.response.JSON
        document.getElementById("sha_answer").innerHTML = res["Answer"] + res["Error"]
    }
    request.send(requestBody);
}
