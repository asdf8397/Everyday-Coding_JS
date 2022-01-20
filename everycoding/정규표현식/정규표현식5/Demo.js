/* 정규표현식 패턴을 만들때 옵션을 설정할수있으며 옵션에 따라서 검출되는
데이터가 달라진다.*/

// i옵션
// i를 붙이면 대소문자를 구분하지 않는다.
var xi = /a/;
console.log("Abcde".match(xi)); // null
/* ("Abcde".match(xi));에서 var xi = /a/;를 매칭하려고 했으나 
소문자 a가 없으므로 매칭되지 않으며 null로 나타난다.*/

var oi = /a/i;
console.log("Abcde".match(oi)); // ["A"];
/*("Abcde".match(oi);에서 var oi = /a/i; 이다 여기서 i는 대소문자를 무시
하게되고 ("Abcde")에서 대문자 A를 무시하고 a와 A는 매치가 된다.*/

// g옵션
// g를 붙이면 검색된 모든 결과를 리턴한다.
var xg = /a/;
console.log("abcdea".match(xg));
/* ("abcdea".match(xg));에서 var xg = /a/;이다 여기서 a를 return한다
그러나 a가 2개임에도 첫번째의 a밖에 return되지않는다.*/

var og = /a/g;
console.log("abcdea".match(og));
/* ("abcdea".match(og));에서 var og = /a/g a를 return(출력)할때
모든 a를 return하게 된다. 결과적으로 return의 a는 2개가 나온다.*/
// 예시

var ig = /a/ig;
console.log("AabcdAa".match(ig)); //["A","a","A","a"]
/* 여기서 결과값은 "A","a","A","a"로 출력된다. i는 소대문자 무시
g는 모든 검색된 결과를 리턴한다.*/