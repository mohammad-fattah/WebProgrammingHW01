async function writeIndexedLineNodeJs() {
    let lineNumber = document.getElementById("LineNumber").value;
    if (lineNumber < 1 || lineNumber > 100) {
        document.getElementById("write_answer").innerHTML =
            "Please enter a number between 1 and 100.";
        return;
    }

    console.log(lineNumber);
    const line = await fetch(
        `http://192.168.1.105/nodejs/write/${lineNumber}`,
        {
            mode: "no-cors",
        }
    )
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
    let firstNumber = document.getElementById("M").value;
    let secondNumber = document.getElementById("N").value;

    const request = {
        first: firstNumber,
        second: secondNumber,
    };

    const line = await fetch(`http://192.168.1.105/nodejs/sha`, {
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify(request),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("sha_answer").innerHTML = data.sha;
        })
        .catch((error) => {
            document.getElementById("sha_answer").innerHTML =
                "an error occured";
        });
}
