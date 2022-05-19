// // main.js
// import sumModule from './sum.js';
// import { sum2 } from './sum.js';

// console.log(sumModule(1, 2));

// console.log(sum2(2,3));

const queryString = require('query-string');

console.log(location.search);
//=> '?foo=bar'

const parsed = queryString.parse(location.search);
console.log(parsed);
//=> {foo: 'bar'}

console.log(location.hash);
//=> '#token=bada55cafe'