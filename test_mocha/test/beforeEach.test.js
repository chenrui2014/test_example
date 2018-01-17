import chai from 'chai';

let expect = chai.expect;

describe('beforeEach示例',function () {
    
    let foo = false;
    beforeEach(function () {
        foo = true;
    });

    it('修改全局变量应该成功',function () {

        expect(foo).to.be.ok;
    })
})