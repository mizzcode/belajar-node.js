const fs = require('fs')

fs.readFile('filesystem/notes.txt', 'utf-8', function (error, data) { 
    if (error) {
        console.log(error)
    }

    console.log(data)
})

const readbleStream = fs.createReadStream('./filesystem/article.txt', {
    highWaterMark: 10
})

readbleStream.on('readable', () => {
    try {
        process.stdout.write(`[${readbleStream.read()}]`)
    } catch(error) {
        console.log(error)
    }
})

// readbleStream.on('end', () => {
//     console.log('Done')
// })