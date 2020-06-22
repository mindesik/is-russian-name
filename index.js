const names = require('./data/names')
const cyrillicToTranslit = require('cyrillic-to-translit-js')

module.exports = name => {
  for (let fName of names) {
    if (fName.toLowerCase() == cyrillicToTranslit().reverse(name.toLowerCase())) {
      return true
    }
  }
  
  return false
}