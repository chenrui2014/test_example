//import _ from 'lodash';
//import Print from './print';

function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //element.innerHTML = join(['Hello', 'webpack'], ' ');
    //element.onclick = Print.bind(null, 'Hello webpack!');

    // Assume we are in the context of `window`
    this.alert('Hmmm, this probably isn\'t a great idea...')

    return element;
}

document.body.appendChild(component());
