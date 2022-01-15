function factorial () {
    const number = document.getElementById('input').value;
    if (number < 0) {
        document.getElementById('result').innerHTML = `Error!`
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


function euclidean () {
    let num1 = document.getElementById('input1').value;
    let num2 = document.getElementById('input2').value;

    let euclid = []
    while ((num1 % num2) > 0) {
        euclid = num1 % num2 
        num1 = num2
        num2 = euclid
        document.getElementById('euclideanResult').innerHTML = euclid
        console.log(euclid)
    }
}