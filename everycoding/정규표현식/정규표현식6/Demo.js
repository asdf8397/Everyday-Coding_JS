// 사례
// 캡쳐

var pattern = /(w+) \s(\w+)/;
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1");
console.log(result);
// 캡쳐의 결과: everybody coding
/* var pattern= /(w+) \s(\w+)/에 $2가 /(w+) $1은 (\w+)/에 적용된다.
    \s는 공백이다
    그렇다는건 var result = str.replace var str의 "coding everybody를
    바꾸게된다. pattern으로 결과는 everybody coding으로 나오게 된다.*/
