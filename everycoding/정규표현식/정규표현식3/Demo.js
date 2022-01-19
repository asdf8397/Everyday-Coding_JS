// 정규표현식 메소드 실행
// 정규표현식을 컴파일해서 객체를 만들었다면 문자열에서 원하는 문자를 찾아낼수있다.


// var pattern = /a/;
     
    // ↓ 대입

// RegExp.exec()
console.log(pattern.exec("abcdef")); // ["a"]
// 실행결과는 문자열 a를 값으로 하는 배열을 리턴한다.
/*
변수를 지정한 pattern의 /a/값을 찾아내려고 했을때 
console.log(pattern.exec("abcdef")); 에서 pattern안에 /a/가 들어가 있으므로
["a"]배열로 추출이 된다.
*/

console.log(pattern.exec("bcdefg")); // null
// 인자 "bcdef"에는 a가 없기 때문에 null을 리턴한다.
/*
변수를 지정한 pattern의 /a/ 값을 찾아내려고 했을때
console.log(pattern.exec("bcdefg"));에서 pattern안에 /a/가 없으므로
null로 나타난다

null 공간은 차지하고 있으나 비어져 있다는 뜻
*/


// RegExp.test()
// test는 인자 안에 패턴에 해당되는 문자열이 있으면 true, 없으면 false를 리턴한다.

console.log(pattern.test("abcdef")); // true
// pattern.test("abcdef") 패턴 안에 /a/가 속해 있으므로 boolean값으로 true


console.log(pattern.test("bcdefg")); // false
// pattern.test("bcdefg") 패턴 안에 /a/가 속하지 않으므로 boolean값으로 false


// RegExp.test(), RegExp.exec()의 차이점
// .test()는 boolean값으로 true, false exec()는 값을 추출