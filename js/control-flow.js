// console.log(name)
// whatsUp()
//
// var name = 'Tom'
// console.log('What\'s Up?')
//
// function whatsUp () {
//     console.log('What is up?')
// }
// whatsUp()

// var mph = 10
// var hours = 5
// var distance1 = hours * mph
// console.log(distance)

// var distanceTraveled = distance(55, 2)
// distanceTraveled = distanceTraveled + distance(80, 16)
// distanceTraveled = distanceTraveled + distance(25, .25)
// console.log(distanceTraveled)

// console.log(distance(65))

var movie = 'Forest Gump'
// var year = 1995

if (movie === 'Forest Gump') {
    console.log('It is true.')
} else if (movie === 'Groundhog Day') {
    console.log('Repeat.')
} else {
    console.log(movie + 'is awesome!')
}

switch (movie) {
    case 'Forest Gump':
        console.log('Buba-gump Shrimp')
        break;
    case 'Groundhog Day':
        console.log('Just put your little hand in mine')
        break;
    default:
        console.log(movie + 'is awesome!')
}

console.log(1 % 3)
if (15 % 5 === 0) {
    console.log('Yes it is divisable by three.')
}

var list = ['Sally', 'Joel', 'Kyle', 'Troy', 'Manny', 'Sam', 'Whitney', 'Jeff', 'Brian', 'Young Mi', 'Keith', 'Charlie']

for (var i = 0; i <= list.length; i++) {
    console.log(i + ' - Looping...')
}

for (var i = 0; i <= 100; i++) {
    console.log(`<div id="Row-${i}" class="row"><div class="col-sm-12"></div></div>`)
}

var total = 0

for (var i = 0; i < 300; i++) {
    total += i
    // document.querySelector('.container').innerHTML += `<button class="btn btn-primary btn-lg">Button ${i}</button>`
}

function distance(mph, hours) {
    if (hours === undefined){
        hours = 10
    }

    if (mph > 65) {
        // console.log('Warning: Too Fast!')
        return 'Warning: Too Fast! No way you will get a distance from us.'
    }
    return mph * hours
}

function add(x, y) {
    return x + y
}

console.assert(add(1, 1) === 2)
