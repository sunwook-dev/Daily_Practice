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
    return count += 1;    
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