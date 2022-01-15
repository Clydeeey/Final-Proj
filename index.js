function factorial () {
    const number = document.getElementById('input').value;
    if (number < 0) {
        document.getElementById('result').innerHTML = `Error!`
    }

    else if (number === 0) {
        document.getElementById('result').innerHTML = `The factorial of ${number} is 1.`
    }

    else {
        let result = 1;
        for (i = 1; i <= number; i++) {
            result *= i;
        document.getElementById('result').innerHTML = `The factorial of ${number} is ${result}`
    }
    }
}

function fibonacci () {
    const number = document.getElementById('fibonacciNumber').value
    if (number === 0) {
        document.getElementById('result2').innerHTML = '0'
    }

    else {
    let f1 = 0
    let f2 = 1
    let sequence = []
    for (i = 1; i <= number; i++) {
        sequence = f1 + f2
        document.getElementById('result2').innerHTML = sequence
        console.log(sequence)
        f1 = f2
        f2 = sequence
    }
    }
}
function percentage() {

    let percent = document.getElementById("percent").value;

    let num = document.getElementById("num").value;
    document.getElementById("result")
        .value = (num / 100) * percent;
}
