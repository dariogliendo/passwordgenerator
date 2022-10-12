const generator = require('generate-password')

let pwd = generator.generate({length: 12, numbers: true, symbols: true, exclude: '\'¡¨*[_:;\\~`^', uppercase: true})
console.log(pwd)