// For every number that isn't a multiple of 3 or 5, return a period '.'
// For every number that is a multiple of 3 (but not 5), return 'fizz'
// For every number that is a multiple of 5 (but not 3), return 'buzz'
// For every number that is a multiple of 3 and 5, return 'fizzbuzz'

function FizzBuzz(n) {
    var output = ''

    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += 'fizzbuzz'
        }  else if (i % 3 === 0 ) {
            output += 'fizz'
        }  else if (i % 5 === 0) {
            output += 'buzz'
        } else {
            output += '.'
        }
    }
    return output
}

console.assert(FizzBuzz(1) === '.')
console.assert(FizzBuzz(2) === '..')
console.assert(FizzBuzz(3) === '..fizz')
console.assert(FizzBuzz(5) === '..fizz.buzz')
console.assert(FizzBuzz(10) === '..fizz.buzzfizz..fizzbuzz')

//Added to test all conditions
console.assert(FizzBuzz(15) === '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz')
