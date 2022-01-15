// 제거
var li_1 = ["a","b","c","d","e"];
li_1.shift();
console.log(li_1);

// 배열에서 .shift()는 배열의 0자리의 배열을 삭제한다
// 배열의 제일 첫번째 값을 삭제할때 사용한다.

var li_2 = ["c","d","e","f","g"];
li_2.pop();
console.log(li_2);
// 배열에서 .sort()는 배열의 맨마지막 배열의 값을 삭제할때 사용한다.
// 배열의 값을 삭제할때 사용한다.


// 정렬
var li_3 = ["c","d","e","a","b"];
li_3.sort();
console.log(li_3);

// 혼잡스럽게 되어있는 배열을 정배열할때 사용한다.

var li_4 = ["a","b","c","d","e","f","g"];
li_4.reverse();
console.log(li_4);

// 혼잡스럽게 되어있는 배열을 역배열로 정렬할때 사용한다.
/* 
단, a,b,c,d,e,f,g 이런식으로 되어있는 배열을 reverse로 역배열로 놓을경우
g,f,e,d,c,b,a로 역배열로 정렬된다 하지만 혼란스럽게 섞여있는 배열은
reverse의 역배열로 정렬되지 않는다.
*/



// 배열 나만의 응용문제

// 배열에서 변수지정후 정렬후 역배열하는방법
var li_5 = ["c","a","b","f","g","d","e"];
li_5.sort();
var li_6 = li_5;
li_6.reverse();
console.log(li_6);

// 배열에서 변수지정하지 않고 역배열을 하는방법
var li_7 = ["c","a","b","f","g","d","e"];
li_7.reverse();
console.log(li_7);

// 시작은 같았으나 결과값은 다르게 나온다.