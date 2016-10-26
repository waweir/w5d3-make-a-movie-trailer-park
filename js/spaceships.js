// Object literal
var spaceship1 = {
    topSpeed: '2lyph',
    shipName: 'Galaxy Cruiser',
    launch: function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
        var landing = setTimeout(this.land, 3000)
    },
    land: function() {
        console.log('Prepare for landing!')
    }
}
spaceship1.launch()

// Object New
var spaceship2 = new Object()
spaceship2.topSpeed = '3lyph'
spaceship2.shipName = 'Rocket'
spaceship2.launch = function() {
    console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    var landing = setTimeout(this.land, 3000)
}
spaceship2.land = function() {
    console.log('Prepare for landing!')
}
spaceship2.launch()

// Constructor Function
var Spaceship = function() {
    this.topSpeed = '7lyph'
    this.shipName = 'Zoom!'
    this.launch = function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
        var landing = setTimeout(this.land, 3000)
    }
}
var spaceship3 = new Spaceship()
spaceship3.launch()

Spaceship.prototype.land = function() {
    console.log('Prepare for landing!')
}

// make spaceship visual
var img = document.querySelector('img')
var imgMarginBottom = Number(getComputedStyle(img).marginBottom.replace('px', ''))
var message = document.querySelector('#message_content')

// Class
class SpaceshipClass {
    constructor(topSpeed, shipName) {
        this.topSpeed = topSpeed
        this.shipName = shipName
        this.launch = function() {
            console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
            message.innerHTML = (this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
            img.style.marginBottom = imgMarginBottom + 32 + 'vh'
            var landing = setTimeout(this.land, 3000)
        }
        this.land = function() {
            console.log('Prepare for landing!')
            message.innerHTML = ('Prepare for landing!')
            img.style.marginBottom = 0 + 'vh'
        }
    }
}
var spaceship4 = new SpaceshipClass('0.1lyph', 'Snail')
// spaceship4.launch()

// Clone first two objects
var spaceship5 = Object.create(spaceship1)
spaceship5.topSpeed = '10lyph'
spaceship5.shipName = 'Speedy'
spaceship5.launch()

var spaceship6 = Object.create(spaceship2)
spaceship6.topSpeed = '8lyph'
spaceship6.shipName = 'Vroom Vroom'
spaceship6.launch()

// Extend second two objects
var spaceship7 = new Spaceship()
spaceship7.topSpeed = '15lyph'
spaceship7.shipName = 'Flash'
spaceship7.launch()

class SpaceshipExtend1 extends SpaceshipClass {
    constructor(topSpeed, shipName) {
        super(topSpeed, shipName)
    }
}
var spaceship8 = new SpaceshipExtend1('15lyph', 'Shoot for the Stars')
// spaceship8.launch()

// add event listener for spaceship8
document.querySelector('#shipName').innerHTML = spaceship8.shipName
document.querySelector('#topSpeed').innerHTML = spaceship8.topSpeed
document.querySelector('#launch_button').addEventListener('click', function() {
    spaceship8.launch()
})


//
