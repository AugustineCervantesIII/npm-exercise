
const $ = require('jquery');

const sayHello = 'hello ganymede';
const byeBye = 'goodbye'
console.log(sayHello);
console.log(byeBye);

$('body').css('background-color', 'grey');
$('h1').css('color', 'white');


// const { hello, bye } = require('./hello-world');
// console.log(hello);
// console.log(bye);

//using import
// import {hello, bye, sayHi} from './hello-world-import';
// console.log(hello);
// console.log(bye);
// console.log(sayHi);

//1
// const {introduction} = require('./say-hello');
// console.log(introduction)

//2
// const data = require('./say-hello');
// console.log(data.address.zipcode);

//3import
// import toSay from './say-hello';
// console.log(toSay);