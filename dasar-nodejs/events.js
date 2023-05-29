const {EventEmitter} = require('events')

const emitter = new EventEmitter

const umbrella = (color = 'black') => {
    console.log(`Hujan...\nMenggunakan payung warna: ${color}`)
}
const wfh = () => {
    console.log(`Bekerja di rumah aja`)
}
const sick = () => {
    console.log(`Demam...`)
}


emitter.on('rain', umbrella)
emitter.once('rain', wfh)
emitter.once('rain', sick)

emitter.emit('rain')