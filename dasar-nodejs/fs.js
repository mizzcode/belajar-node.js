const fs = require('fs')

const readFile = fs.readFileSync('./dasar-nodejs/notes.txt', 'utf-8')

console.log(readFile)

// tulis berkas

fs.writeFileSync('./dasar-nodejs/note.txt', 'Hello Mizz')