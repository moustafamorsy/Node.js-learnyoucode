const fs = require('fs')

const contents = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1

console.log(contents);