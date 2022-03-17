// 타입 변환
// // 동적 타이핑
// if("test"){  //true 로 자동 변환
//     console.log("true");
// }

// "2"  + 2; // "22"

// 2 + 5 + "1" // "71"

// 원시, 참조 타입
// // 원시 타입 : 변수에 할당될 때 메모리 상에 고정된 크기로 저장되고 해당 변수가 원시 데이터의 값(value) 보관

// // 참조 타입 : 변수에는 데이터에 대한 참조(reference)만 저장

// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b); // 1, 2


// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// var a = { x: 1 };
// var b = a;
// b.x = 2;
// console.log(a, b); 

// //call by value
// function byValue(count) {
//     count = count + 2;
// }
// var count = 3;
// byValue(count);
// console.log(count); //3
  
// //call by reference
// function byReference(count) {
// count.push('2');
// }
// var count = ['1'];
// byReference(count);
// console.log(count); // ["1","2"]

// 구문
// // if 문
// var isMan = true;
// var gender = '';

// if (isMan) {
//     gender = '남자'
// } else {
//     gender = '여자'
// }

// var gender = isMan ? '남자' : '여자'; // 삼항 연산자

// // for 문
// for (var count = 0; count < 5; count++) {
//     //총 5번 실행
// }

// var obj = { a: 1, b: 2 };

// //느리다.비권장
// for (var prop in obj) {
//     console.log(prop, obj[prop]);
// }

// function log(str) {
//     console.log(str);
//     return str;
// }

// var result = log('hello')

// console.log(result)

// 주요 전역 함수
// alert('alert');

// var who = prompt('당신은 누구세요?');

// var isDelete = confirm('삭제하시겠습니까?');
// if(isDelete){
//     // ... 
// }

// if(confirm('삭제하시겠습니까?')){
// // ... 
// }

// var enc = encodeURIComponent('카카오');
// decodeURIComponent(enc);

// isNaN('1'); //숫자 인지 아닌지 확인 

// parseInt('12');
// parseInt('09', 10); //항상 두번째 인자 주는 습관
// parseFloat('10.33');

// function test() {
//     console.log('test()');
// }

// var id = setTimeout(test, 1000); //1초후 1번실행

// var id = setInterval(test, 1000); //1초마다 계속 실행

// //setInterval 보다 나은 방법
// function test() {
// console.log('test()');
// setTimeout(test, 1000);
// }

// var nick = 'aji'; //전역변수

// function test() {
//   var age = 30; //지역변수
//   console.log(nick, age);
// }

// test();
// console.log(age);

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, 3));

// // 익명 함수표현식
// var car = function() {
//     //코드
// };

// //중첩함수

// // 익명 즉시실행함수, 스코프 보호
// (function() {
//     //코드
// })();

// var text = 'abc def ghi jkl abc def'; // 대상 문자열
// var testReg = /abc/; // 찾을 문자열
// var result = testReg.test(text);

// console.log(result); // true

var todos = ['운동']

function create(todo) {
    todos.push(todo)
    console.log(todos)
}

create('게임');

function read(){
    console.log(todos)
}

read();

function update(oldTodo, newTodo){
    for(var i = 0; i < todos.length; i++){
        if(todos[i]===oldTodo){
            todos.splice(i, 1);
            todos.push(newTodo)
            i--;
        }
    }
    console.log(todos);
}
update('게임', '공부');

function Delete(oldTodo){
    for(var i = 0; i < todos.length; i++){
        if(todos[i]===oldTodo){
            todos.splice(i, 1);
            i--;
        }
    }
    console.log(todos);
}
Delete('게임')




