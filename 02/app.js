// 2주차 실습

var name = 'seungdeok';
console.log(name); // 이름을 찍는다.

name = 111;
var age = 26;
var isMan = 'true' // 문자열
var isMan1 = true // 불린형
var message = 'hello' + name;

console.log(isMan);
console.log(isMan1);

// object
var image = {};
image.width = 1;
image.height = 2;

image['width'] = 1; // 연관 배열

// array
var arr = [1,2,3,4,5];
console.log(arr)

var person = {
    nick: 'SD',
    age:26,
    area: 'jeju',
    sayHello: function() {
        console.log('hello'); 
    }
}

// JSON : API 통신을 위해 사용
// window : 브라우저 가장 최상위 객체


person.sayHello();