var i = 5;
function a() {
    var i = 10;
    b();
}

function b() {
    document.write(i);
}
a(); 
/* var i = 5;는 전역변수이고 function a(){var i = 10;}은 지역변수이다.
그리고 function b() {document.write(i);는 지역변수가 아니다
    그래서 function b() {document.write(i);}를 var i = 5;에서 가져와서
    결론적으로 function a()에서 b()를 호출하니까 홈페이지에 5가 적힌다
    
    이유는 function b() {document.write(i);}는 지역변수가 아니다
    var를 지정해 주지 않았거든
    결론적으로 말하면 function a() function b() 각각 다른 객체로 봐야한다
    그래서 function b()가 function a()와 다른 객체이므로 document.write(i)
    는 var i = 5; 전역변수를 가져와서 적용하게 되는것이다.*/