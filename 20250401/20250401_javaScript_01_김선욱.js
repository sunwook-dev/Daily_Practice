// 문제1
function sum(num1, num2) {
  let total = num1 + num2;
  console.log(total);
}
sum(3,5);


//문제2
//방법1
let arr = [1,2,3,4,5,6];
function filterEven(num) {
  return num % 2 == 0;
}
let result = arr.filter(filterEven);
console.log(result);

//방법2
console.log(arr.filter(num => num % 2 == 0));


