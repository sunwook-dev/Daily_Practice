//문제 1
// const input = document.getElementById("input");	//input 태그를 가져옴
// const button = document.getElementById("button");	//button 태그를 가져옴
// const output = document.getElementById("result");	//output 태그를 가져옴

// button.addEventListener("click", function () {	//button 태그에 클릭 이벤트 리스너를 추가함
//   const value = input.value;  //
//   output.innerHTML = value;  
//   input.value =  "";
// })

//문제2
let str = ['사과', '배', '포도', '귤', '딸기'];
let first = str.shift();
console.log(str);
let end = str.push('바나나', '오렌지');
console.log(str);
let newStr = str.concat('체리');
console.log(str);
console.log(newStr);

//문제3
function getBackground() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function startBtn() {  
  const target = document.getElementById('target');
  count = 0;
  setInterval(() => { 
    getBackground() 
  }, 1000);    
}