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


//문제3

// Todo 항목을 관리할 수 있는 `TodoList` 클래스를 작성하세요.

// - 클래스는 내부에 Todo 항목들을 저장할 배열을 가집니다.
// - 다음의 메서드를 구현합니다.
//   - `add(todo)`: 주어진 문자열 `todo`를 리스트에 추가합니다.
//   - `remove(index)`: 주어진 인덱스의 Todo 항목을 삭제합니다.
//   - `getTodos()`: 현재의 Todo 항목들을 배열 형태로 반환합니다.
// - 작성한 클래스를 사용해 몇 가지 Todo 항목을 추가하고, 삭제한 후 최종 리스트를 콘솔에 출력하는 예제 코드를 작성하세요.

class TodoList {
  todos;
  constructor() {
    this.todos = [];
  }  

  add(todo) { 
    return this.todos.push(todo);
  }

  remove(index) {
    return this.todos.splice(index,1);
  }

  getTodos() {
    return console.log(this.todos);
  }
}

let todoList = new TodoList();
todoList.add("공부하기");
todoList.add("밥먹기");
todoList.add("놀기");
todoList.getTodos();
todoList.remove(2);
todoList.getTodos();

