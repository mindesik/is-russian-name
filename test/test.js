const assert = require('assert')
const { describe, it } = require('mocha')
const isRussianName = require('../index')

describe('Main', function() {
  it('Ivan should return true', function(done) {
    assert.equal(isRussianName('Ivan'), true)
    done()
  })
  
  it('Dmitrii should return true', function(done) {
    assert.equal(isRussianName('Dmitrii'), true)
    done()
  })
  
  it('John should return false', function(done) {
    assert.equal(isRussianName('John'), false)
    done()
  })
})
