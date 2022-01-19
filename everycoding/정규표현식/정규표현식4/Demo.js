// 문자열 메소드 실행

// var pattern = /a/;

        // ↓ 대입

// String.match()
// RegExp.exec()
console.log("abcdef".match(pattern));
console.log("bcdefg".match(pattern));

// String.replace()
console.log("abcdef".replace(pattern, "A"));


// RegExp.exec()
console.log(pattern.exec("abcdef"));  // ["a"]