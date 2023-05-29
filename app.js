// const http = require('http');

const host = new Server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com'
})
console.log(host)
console.log(process.memoryUsage())

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);