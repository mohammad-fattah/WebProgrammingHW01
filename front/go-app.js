async function writeIndexedLineGo() {
    let lineNumber = document.getElementById("LineNumber").value;
    if (lineNumber < 1 || lineNumber > 100) {
        document.getElementById("write_answer").innerHTML =
            "Please enter a number between 1 and 100.";
        return;
    }

    console.log(lineNumber);
    const line = await fetch(`/go/write?Line=${lineNumber}`)
        .then((data) => data.text())
        .then(function (data) {
            document.getElementById("write_answer").innerHTML = data;
        })
        .catch((error) => {
            document.getElementById("write_answer").innerHTML =
                "an error occured";
        });
}

async function shaGo() {
    let firstNumber = document.getElementById("M").value;
    let secondNumber = document.getElementById("N").value;

    const request = {
        M: firstNumber,
        N: secondNumber,
    };

    const line = await fetch(`/go/sha`, {
        method: "POST",
        body: JSON.stringify(request),
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
