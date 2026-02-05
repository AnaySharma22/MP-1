function displayResult(result) {
    let output = document.getElementById("output");
    output.innerHTML = String(result);

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function addition() {
    let n1 = Number(document.getElementById("first-number").value);
    let n2 = Number(document.getElementById("second-number").value);
    let result = n1 + n2;
    displayResult(result);
}

function subtraction() {
    let n1 = Number(document.getElementById("first-number").value);
    let n2 = Number(document.getElementById("second-number").value);
    let result = n1 - n2;
    displayResult(result);
}

function multiplication() {
    let n1 = Number(document.getElementById("first-number").value);
    let n2 = Number(document.getElementById("second-number").value);
    let result = n1 * n2;
    displayResult(result);
}

function division() {
    let n1 = Number(document.getElementById("first-number").value);
    let n2 = Number(document.getElementById("second-number").value);

    if (n2 === 0) {
        displayResult("Cannot divide by zero");
    } else {
        let result = n1 / n2;
        displayResult(result);
    }
}

function power() {
    let base = Number(document.getElementById("first-number").value);
    let exponent = Number(document.getElementById("second-number").value);
    let result = 1;

    for (let i= 0; i < exponent; i++) {
        result *= base;
    }

    displayResult(result);
}

function clearCalc() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}
