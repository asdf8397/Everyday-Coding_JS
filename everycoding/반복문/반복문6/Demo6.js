// 반복문의 중첩
for(var i = 0; i < 10; i++) {
    for(var a = 0; a <10; a++) {
        document.write("Coding everybody" + i + a + "<br/>")
    }
}
/* 
00부터 99까지 출력하고 싶으면 반복문 for문안에 반복되는 중첩으로 써준다
중첩반복문이라고하며 중첩반복문은 document.write에 var i; var a;변수를
지정한 값은 변수로 들어가는것이 아닌 문자로 들어가게 된다.
*/