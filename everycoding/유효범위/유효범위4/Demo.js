/* JS는 함수에 대한 유효범위만 제공한다 많은 언어들이 블록(대체로 {,}에 대한
    유효범위를 제공하는 것과 다른점이다. */

for(var i = 0; i < 2; i++) {
    var str_name = "coding everybody";
}
alert(str_name);

/* 단순비교 */
/* js와 java의 차이*/
/* 자바는 for문밖에서 출력을하게되면 에러의 발생시킨다 하지만
js의 경우 alert(str_name); 현재의 위치 for문 밖에 있지만 출력하면 에러의
발생은 발생하지 않는다. */