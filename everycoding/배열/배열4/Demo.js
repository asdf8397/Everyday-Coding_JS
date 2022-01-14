// 배열의 조작
/*배열의 끝에 원소를 추가하는 방법이다. push는 인자로 전달된 값을 배열(li)에
추가하라는 명령이다.*/
var spelling = ["a","b","c","d","e"];
li.push("f","g");
console.log(li);
// 정렬된 배열 안에 추가할때 .push를 사용한다.

var fruits = ["apple","banana","strawberry"];
fruits.concat()

var li = ["a","b","c","d","e"];
li.push("apple");
console.log(li);

// 배열에서 배열 안의 내용을 추가할때 방법이 다르다.
var li_1 = ["a","b","c","d","e"];
li_1.push("f");
console.log(li_1);

var li_2 = ["a","b","c","d","e","f"];
li_2 = li_2.concat("g","h");
console.log(li_2);

// push와 concat이 다르다.
/*
push는 배열에 단일의 내용을 추가할때 push를 사용한다
.push(□,□);를 넣을 경우 추가되긴하지만 되도록 concat을 사용할것

concat은 배열에 여러개의 내용을 추가할때 사용하게 된다.
.concat(□,□,□)처럼 여러개를 넣을때 사용하게 된다.
*/

var li_3 = ["a","b","c","d","e","f","g"];
li.unshift
