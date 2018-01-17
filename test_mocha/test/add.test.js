import 'babel-polyfill';
import add from '../src/add';
import chai from 'chai';

let expect = chai.expect;

describe('加法函数测试', function () {

    it('1+1=2',function () {
        expect(add(1,1)).to.be.equal(2);
    })
});