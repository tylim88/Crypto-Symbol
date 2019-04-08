// const crypto = require('./dist/index')

// console.log(crypto.symbol('liTecoin'), crypto.name('lTc'))
// console.log(crypto.crypto('liTecoin'), crypto.crypto('lTc'))

const { crypto } = require('./dist/index')

console.log(crypto('liTecoin'), crypto('lTc'))
