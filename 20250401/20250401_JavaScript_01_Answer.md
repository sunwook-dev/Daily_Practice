## E01 정답

<aside>

```jsx
function sum(a, b) {
  return a + b;
}

// 예시 테스트
console.log(sum(3, 5)); // 8
console.log(sum(-2, 7)); // 5

```

</aside>

---

## E02 번호 정답

```jsx
function filterEven(numbers) {
  const evens = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
}

// 예시 테스트
console.log(filterEven([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEven([10, 15, 20, 25]));   // [10, 20]

```
---

## E03 번호 정답

```jsx
class TodoList {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    // 인덱스가 유효한 경우에만 삭제
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    } else {
      console.log("유효하지 않은 인덱스입니다.");
    }
  }

  getTodos() {
    return this.todos;
  }
}

// 예시 테스트
const myTodoList = new TodoList();
myTodoList.add("자바스크립트 복습");
myTodoList.add("문제 풀기");
myTodoList.add("코드 리뷰");

console.log("추가 후:", myTodoList.getTodos()); 
// 출력 예: ["자바스크립트 복습", "문제 풀기", "코드 리뷰"]

myTodoList.remove(1); // 두 번째 항목 삭제

console.log("삭제 후:", myTodoList.getTodos()); 
// 출력 예: ["자바스크립트 복습", "코드 리뷰"]
```