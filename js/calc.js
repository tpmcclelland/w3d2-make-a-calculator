function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function divide(x, y) {
    return x / y
}

function multiply(x, y) {
    return x * y
}

function remainder(x, y) {
    return x % y
}

function increment(x) {
    return x += 1
}

function decrement(x) {
    return x -= 1
}

var answer
answer = add(40, 110)
console.assert(answer === 150)
answer = subtract(answer, 9)
console.assert(answer === 141)
answer = divide(answer, 6)
console.assert(answer === 23.5)
answer = multiply(answer, 2)
console.assert(answer === 47)
answer = increment(answer)
console.assert(answer === 48)
answer = remainder(answer, 2)
console.assert(answer === 0)
answer = decrement(answer)
console.assert(answer === -1)


document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('firstValue').value = ''
})

document.getElementById('addButton').addEventListener('click', function() {
    document.getElementById('firstValue').value = calculate('add');
})

document.getElementById('subtractButton').addEventListener('click', function() {
    document.getElementById('firstValue').value = calculate('subtract')
})

document.getElementById('multiplyButton').addEventListener('click', function() {
    document.getElementById('firstValue').value = calculate('multiply')
})

document.getElementById('divideButton').addEventListener('click', function() {
    document.getElementById('firstValue').value = calculate('divide')
})

document.getElementById('remainderButton').addEventListener('click', function() {
    document.getElementById('firstValue').value = calculate('remainder')
})

document.getElementById('incrementButton').addEventListener('click', function() {
    document.getElementById('firstValue').value = calculate('increment')
})

document.getElementById('decrementButton').addEventListener('click', function() {
    document.getElementById('firstValue').value = calculate('decrement')
})

function calculate(operation){
    var result
    var firstValue = Number(document.getElementById('firstValue').value)
    var secondValue = Number(document.getElementById('secondValue').value)

    switch (operation) {
        case 'add':
            result = add(firstValue, secondValue)
            break;
        case 'subtract':
            result = subtract(firstValue, secondValue)
            break;
        case 'multiply':
            result = multiply(firstValue, secondValue)
            break;
        case 'divide':
            result = divide(firstValue, secondValue)
            break;
        case 'remainder':
            result = remainder(firstValue, secondValue)
            break;
        case 'increment':
            result = increment(firstValue)
            break;
        case 'decrement':
            result = decrement(firstValue)
            break;
        default:
            result = 0
    }

    return result
}
