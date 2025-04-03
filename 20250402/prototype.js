

//(문제 1)** 다음 중 **프로토타입(Prototype)**에 대한 설명으로 **옳은 것**은?
// A. 자바스크립트 객체는 프로토타입이 존재하지 않는다.  
// B. 프로토타입을 사용하면 클래스가 없어도 객체 간 상속이 가능하다.  
// C. 프로토타입은 ES6에서 삭제되었으므로 사용할 수 없다.  
// D. 프로토타입 체이닝은 더 이상 권장되지 않는다.  
// E. 모든 생성자 함수에는 반드시 `__constructor__` 프로퍼티가 존재한다.

//B

//(문제 2)** 객체 `obj`가 있을 때, `obj.__proto__`는 일반적으로 무엇을 가리키는가?
// A. `obj` 자신의 프로퍼티 목록  
// B. `Object.prototype` 혹은 그 상위에 있는 객체  
// C. 자바스크립트 엔진이 만든 임시 변수  
// D. `obj`가 전역에서 선언된 위치  
// E. null

//B

//(문제 3)** 아래 코드와 관련하여, `console.log(student1.toString())`을 호출하면 어떤 일이 벌어지는가?

// ```js
// function Student(name) {
//   this.name = name;
// }
// Student.prototype.toString = function () {
//   return "Name: " + this.name;
// };

// let student1 = new Student("Kim");
// console.log(student1.toString());
// ```

// A. `student1` 객체 안에 `toString` 메서드가 없으므로 오류가 발생한다.  
// B. 객체 `student1`의 프로퍼티인 `toString`만 탐색하고, 없으면 `undefined`를 반환한다.  
// C. `Student.prototype.toString`을 호출하여 `"Name: Kim"`이 출력된다.  
// D. 기본 `Object.prototype.toString`이 호출되어 `[object Object]`가 출력된다.  
// E. 런타임 에러(Runtime Error)가 발생한다.

//C

// **(문제 4)** 생성자 함수 `Parent`와 `Child`에서 프로토타입을 이용해 상속 관계를 맺으려면, 다음 중 올바른 코드 조합은?

// A. `Child.__proto__ = Parent;`  
// B. `Child.prototype = new Parent();`  
// C. `Child = Parent.prototype;`  
// D. `Child.prototype.constructor = Parent.prototype;`  
// E. `Child.prototype = Parent.__proto__;`

//B

// **(문제 5)** 프로토타입 체이닝에 대한 설명 중 틀린 것은?

// A. 객체에서 프로퍼티를 찾지 못하면, 그 객체의 `__proto__`를 따라 위로 올라가며 찾는다.  
// B. 최상위 체인에 `Object.prototype`이 위치한다.  
// C. 프로토타입 체인은 런타임 시점에 동적으로 결정되지 않고, 객체 생성 시점에 정해진다.  
// D. 메서드를 재정의하면, 재정의된 메서드가 해당 객체에서 먼저 발견되어 우선 호출된다.  
// E. 생성자 함수의 `prototype` 속성을 변경하면, 새로 생성되는 인스턴스의 프로토타입 체인에도 영향이 있다.

//C

// 2. OX 문제(5문항)

// **(문제 1)**  
// 프로토타입 객체에 메서드를 추가하면, 이미 생성된 객체들도 그 메서드를 사용할 수 있다.  
// ( O / X ) O

// **(문제 2)**  
// `prototype` 프로퍼티는 오직 함수(일반 함수, 생성자 함수)에만 존재하고, 일반 객체에는 없다.  
// ( O / X ) O

// **(문제 3)**  
// `Child.prototype = Parent.prototype;` 형태로 상속을 하면, `Child` 인스턴스와 `Parent` 인스턴스가 같은 프로토타입 객체를 공유하게 된다.  
// ( O / X ) O

// **(문제 4)**  
// 프로토타입 체이닝을 통해 탐색되는 순서는 `인스턴스 → 인스턴스.__proto__ → Object.prototype → null` 순이다.  
// ( O / X ) O

// **(문제 5)**  
// `__proto__`는 표준이 아닌 옛날 문법이므로, 현재 브라우저에서는 전혀 지원되지 않는다.  
// ( O / X ) X
