/*********문제1 ************/

//var는 i값이 200이지만 블록레벨 스코프에서는 적용이 안되기 때문에
//for문으로 인해 i값이 변경이되어 10이 출력됨
var i = 200;
for (var i = 0; i < 10; i++) {  
  console.log(i);
}
console.log(i); 

console.log('=======================');

//var는 함수레벨 스코프에서는 적용이 되기 때문에 func1함수 내에서는 400이 출력되고
//밖에서는 300이 출력됨
var var1 = 300;     
function func1() {
  var var1 = 400;
  console.log(var1);
}
func1();
console.log(var1);  

console.log('=======================');

//let(블록스코프)
let j = 50;   //블록밖에서 선언된 j
for (let j = 0; j < 10; j++){
  console.log(j);   //블록스코프 안의 j는 밖의 j와 다르기 떄문에 0~9까지출력
}
console.log(j);   //블록 밖에서 선언된 J를 출력


console.log('=======================');


/*********문제2 ************/
function makeCounter() {
  let count = 0;
  
  function innerMakeCounter() {
    return count++;    
  }
  return innerMakeCounter
}

const counter1 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log('=======================');

const counter2 = makeCounter();
console.log(counter2());


console.log('=======================');


/*********문제3 ************/
function Shape(name) {
  //객체 초기화
  this.name = name;
}

Shape.prototype.getName = function () {
  return this.name;
}

function Triangle(name, base, height) {
  //객체 초기화
  this.name = name;
  this.base = base;
  this.height = height;
}

Triangle.prototype = Shape.prototype; 

Triangle.prototype.getArea = function () {
  return (this.base * this.height) / 2;
}

const tri = new Triangle("삼각형", 5, 10);
console.log(tri.getName());
console.log(tri.getArea());


/////////////////////////////////////////////////////////////////////

// 프로토타입 문제
// 문제1

// 문제2

// 문제3

function Book(title, author, price) {
  this.title = title;
  this.author = author;
  this.price = price;
}

Book.prototype.getInfo = function() {
  return this.title, this.author, this.price;
}

Book.prototype.setDiscount = function(percent) {
  //인자로 받은 `percent`(% 할인율)만큼 `price`를 조정한 뒤, 최종 `price`를 반환하세요
  return this.price + (this.price * percent);
}

const book1 = new Book("JavaScript 완벽 가이드", "David Flanagan", 50000);
console.log(book1.getInfo());
console.log(book1.setDiscount(10));


// Todo 항목을 관리할 수 있는 `TodoList` 클래스를 작성하세요.

// - 클래스는 내부에 Todo 항목들을 저장할 배열을 가집니다.
// - 다음의 메서드를 구현합니다.
//   - `add(todo)`: 주어진 문자열 `todo`를 리스트에 추가합니다.
//   - `remove(index)`: 주어진 인덱스의 Todo 항목을 삭제합니다.
//   - `getTodos()`: 현재의 Todo 항목들을 배열 형태로 반환합니다.
// - 작성한 클래스를 사용해 몇 가지 Todo 항목을 추가하고, 삭제한 후 최종 리스트를 콘솔에 출력하는 예제 코드를 작성하세요.

class TodoList {
  date;
  subject;

  arr = [];

  constructor(date, subject) {
    this.date = date;
    this.subject = subject;
  }  

  add() { 
    return this.arr.push("todo");
  }

  remove() {
    return this.arr.remove()
  }

  getTodos() {
    return
  }
}

let todoList = new TodoList(50, '스터디하기');
let todoList2 = new TodoList(40, '대출받기');
let todoList3 = new TodoList(30, '시험준비하기');
console.log(todoList.add());
console.log(todoList);

