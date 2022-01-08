// while(true)는 무한루프이다.
// 반복문 무한루프가 실행되지않게하려면 (true)의 조건을 변경시켜야한다.
/*
while(true) {
    document.write("Coding everybody<br/>");
}
*/
var i = 0;
while(i < 10) {
    document.write("Coding everybody" + i + "<br/>" )
    // i = i + 1;
    // i++
    i += 1;
}