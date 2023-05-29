// todo 1
const { EventEmitter } = require('events')

const myEmitter = new EventEmitter

// todo 2
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`)
}

// todo 3
myEmitter.on('birthday', birthdayEventListener)

//todo 4
myEmitter.emit('birthday', 'Jani Chan')