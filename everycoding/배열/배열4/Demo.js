// 배열의 조작
/*배열의 끝에 원소를 추가하는 방법이다. push는 인자로 전달된 값을 배열(li)에
추가하라는 명령이다.*/
var spelling = ["a","b","c","d","e"];
spelling.push("f","g");
console.log(spelling);
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
li_3.unshift("z");
console.log(li_3);
/*
li_3의 배열에 내부에서 "a","b","c","d","e","f","g"에서
.unshift("z")를 추가하면 배열은 "z","a","b","c","d","e","f","g"가 된다.
.unshift는 배열의 제일 앞에 .unshift()로 지정한 것을 넣게한다.
*/

var li_4 = ["a","b","c","d","e","f"];
li_4.splice(2,3,"pineapple");
console.log(li_4);
/*
.splice는 배열의 중간 중간에 배열에 추가될 값을을 넣을수있다.
.splice(0,1)일때 추가되는 값은 0의 배열 자리에 추가되고
.splice(1,2)일때 추가되는 값은 1의 배열 자리에 추가되고
.splice(2,3)일때 추가되는 값은 2의 배열 자리에 추가되게 된다

당연 추가되면 배열에서 기존에 배열에 들어있던 값은 사라지고 새로 들어오는
값이 그자리를 차지하게 된다.
*/