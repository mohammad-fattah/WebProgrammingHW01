function writeIndexedLineGo() {
    let lineNumber = document.getElementById("LineNumber").value;
    if (lineNumber < 1  || lineNumber > 100) {
        document.getElementById("write_answer").innerHTML = "Please enter a number between 1 and 100.";
        return;
    }
    let request = new XMLHttpRequest();
    request.open('POST', '/go/write?Line=' + lineNumber, true);
    request.onreadystatechange = function () {
        let res = this.response.JSON
        document.getElementById("sha_answer").innerHTML = res["Answer"] + res["Error"]
    }
    request.send(requestBody);
}

function shaGo() {
    let requestBody = {};
    requestBody["M"] = document.getElementById("M").value;
    requestBody["N"] = document.getElementById("N").value;
    if (requestBody["M"] == "" || requestBody["N"] == "") {
        document.getElementById("sha_answer").innerHTML = "Please enter two numbers.";
        return;
    }
    requestBody = JSON.stringify(requestBody);
    let request = new XMLHttpRequest();
    request.open('POST', '/go/sha', true);
    request.onreadystatechange = function () {
        let res = this.response.JSON
        document.getElementById("sha_answer").innerHTML = res["Answer"] + res["Error"]
    }
    request.send(requestBody);
}
