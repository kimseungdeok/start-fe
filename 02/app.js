// 2주차 실습

var name1 = 'seungdeok';
console.log(name1); // 이름을 찍는다.

name1 = 111;
var age = 26;
var isMan = 'true' // 문자열
var isMan1 = true // 불린형
var message = 'hello' + name1;

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

month = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]

var article = {
    title: '제목1',
    url: 'http://naver.com'
}

var articles = [article];
// Create
var todos = ['운동'];
var todo = '게임';
todos.push(todo);
console.log(todos);
// Read
todos.forEach(function(todo){
    console.log(todo);
});
// Update
var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

// Delete 1
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);

// Delete 2
var todos = ['운동', '공부'];
var deleteTodo = '공부';
var newTodos = todos.filter(function(toods) {
  return todo !== delteTodo;
});
console.log(newTodo);