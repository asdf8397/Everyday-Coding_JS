// 함수
// 함수의 쉬운예시
function numbering() {
    // function numbering()함수를 생성한것이다.
    document.write("김치 Yummy<br/>")
}
numbering();
numbering();
numbering();
numbering();
numbering();

// 함수선언후 선언한 함수 붙여넣은 만큼 출력됨

function function_numbering() {
    var i = 0;
    while(i<10) {
        document.write(i + "김치는 발효식품입니다.<br/>");
        i++;
    }
}
function_numbering();
// 반복문을 지정한 만큼 갯수만큼 함수가 출력됨

function func_numbering() {
    for(var a = 0; a<10; a++) {
        document.write(a + "안녕하십니까 여기가 돈까스 맛집입니까?<br>")
    }
}
func_numbering();

