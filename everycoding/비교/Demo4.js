// 비교
// 연산자
a = 10;
b = 10;
// a에 10을 넣어줄때 연산자라고 함
// js는 var 같은 변수선언해주지 않고 a = 10;을 써도 됨

// 비교연산자
// 두가지의 변수를 비교해서 true, false가 나오는것에 따라서 참, 거짓을 비교하는것
// 변수지정해서 연산할수있음
console.log(a==b); // true
console.log(a<b); // false
console.log(a>b); // false
console.log(a>=b); // true
console.log(a<=b); // true

// 비교동등연산자(equal operator)
// 변수지정하지 않고 연산할수있음
console.log(1==1); // true
console.log(2==2); // true
console.log("one"=="one"); // true
console.log("two"=="two"); // true

// 일치연산자
// 일치연산자는 === 좌우항이 정확하게 같을때 true 다르면 false가 된다.
console.log(1=== "1"); // false
console.log(1=="1"); // true

// 부정 !=
console.log(1!=2); // true
console.log(1!=1); // false
console.log("one" != "one"); // false
console.log("two" != "two"); // false
console.log("one" != "two"); // true
// 부등호
console.log(10>20); // false
console.log(10>1); // true
console.log(10>10); // false
console.log(10>=20); // false
console.log(10>=1); // true
console.log(10>=10); // true

// undifined 프로그래머가 의도하지 않고 값이 없는것
// null 프로그래머가 값이 비어있지만 따로 지정한것(공간)

// DataType
// number(숫자): -1, 0, 1, 2, 3
// boolean(참,거짓): true, false
// String(문자열): "a", "b", "c"