async function writeIndexedLineNodeJs() {
    let lineNumber = document.getElementById("LineNumber").value;
    if (lineNumber < 1 || lineNumber > 100) {
        document.getElementById("write_answer").innerHTML =
            "Please enter a number between 1 and 100.";
        return;
    }

    console.log(lineNumber);
    const line = await fetch(`/nodejs/write?Line=${lineNumber}`)
        .then((data) => data.text())
        .then(function (data) {
            console.log(data);
            document.getElementById("write_answer").innerHTML = data;
        })
        .catch((error) => {
            document.getElementById("write_answer").innerHTML =
                "an error occured";
        });
}

async function shaNodeJs() {
    let firstNumber = document.getElementById("first-number").value;
    let secondNumber = document.getElementById("second-number").value;

    let request = {
        First: +firstNumber,
        Second: +secondNumber,
    };

    const line = await fetch(`/nodejs/sha`, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request, null, 2),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("sha_answer").innerHTML = data.Answer;
        })
        .catch((error) => {
            document.getElementById("sha_answer").innerHTML =
                "an error occured";
        });
}
