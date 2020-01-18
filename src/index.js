/**
 * 로딩 시 스크립트 파일을 찾는 순서..
 * 1. lodash/lodash.js
 * 2. lodash/index.js
 * require() << common.js function... webpack 설치를 해야함..
 */
/*import _ from 'lodash';*/
var _ = require('lodash');
import './css/style.css';
import './css/hello.scss';

// named import: 반드시 {} 안에 동일한 이름으로 import
import {area} from './js/circle';

// default import: {}가 없고 이름을 바꿀 수 있다.
import cube from './js/cube';

const component = () => {
    let element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    // _ 변수는 Lodash.js에서 global로 선언을 하고 있다.
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

console.log('webpack dev!!!', area(5));
console.log('default import:', cube(5));

document.body.appendChild(component());