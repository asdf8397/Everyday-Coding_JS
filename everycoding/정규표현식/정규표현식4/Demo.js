// 문자열 메소드 실행

// var pattern = /a/;

        // ↓ 대입

// String.match()
// RegExp.exec()
console.log("abcdef".match(pattern)); // ["a"]
console.log("bcdefg".match(pattern)); // null
// var pattern은 /a/를 대입했고 출력할때 "abcdef"일때 ["a"] 출력
// var pattern은 /a/를 대입했고 출력할때 "bcdefg"일때 /a/의 값이 없으므로 null
// ***** 추가메모 RegExp.exec()와 String.match()는 비슷하다


// String.replace()
console.log("abcdef".replace(pattern, "A")); // Abcdef
/* console.log("abcdef".replace(pattern, "A"))일때 var pattern = /a/;의
값이랑 "abcdef의 값이 일치하지만 여기서 .replace로 "A"를 넣어줘서
결과값은 Abcdef이라고 할수있게 변경한다.*/