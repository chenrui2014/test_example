import 'babel-polyfill';
import multiply from '../../src/multiply';
import chai from 'chai';

let expect = chai.expect;

describe('乘法测试',function () {
   it('1乘以1等于1',function () {

       expect(multiply(1,1)).to.be.equal(1);
   })
});