const expect = require('chai').expect;
describe('index.js: ', function() {
    it('isNum() should work fine.', function() {
        expect(isNum(1)).to.be.equal(true)
        expect(isNum('1')).to.be.equal(false)
    })
})