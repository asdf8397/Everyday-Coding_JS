// 함수
// 함수(function)란 하나의 로직을 재실행 할 수 있도록 하는 것으로 코드의 재사용성을 높여준다.

// 함수의 형식
/* 
function 함수명(인자...[,인자]) {
    // 코드
    // return
};
*/

// 함수의 쉬운 예시

function numbering() {
    document.write("kimchi");
}
numbering();
numbering();
numbering();
numbering();
numbering();

/* 
numbering(); numbering; 차이
numbering();은 (); 함수의 호출이다.
numbering;은 그냥 변수이다.
*/

// 함수의 재사용성
function numberings() {
    var i = 0;
    while(i < 10) {
        document.write(i);
        i += 1;
    }
}

numberings();