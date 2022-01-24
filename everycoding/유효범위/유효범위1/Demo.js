// 유효범위(Scope)는 변수의 수명을 의미한다. 결과는 global이다.

// (1)
var vscope = "global";
function fscope() {
    alert(vscope);
}
fscope();
// vscope을 호출하면 fscope()함수의 밖에 선언되어있는 vscope어 접근할수있다.

// (2)
var vscope = "global";
function fscope() {
    var vscope = "local";
    alert(vscope);
}
fscope();
/* fscope();을 호출하면 var vscope = "local";이 출력된다 이유는 vscope을
호출했을때 지역변수 function fscope() {}안에 vscope이 없을경우
전역변수 var vscope = "global"을 출력할수있게 된다.*/

var vscope = "global";
function fscope1() {
    alert(vscope);
}
function fscope2() {
    alert(vscope);
}
fscope1();
fscope2();
/* 함수를 지정한 function fscope1()과 function fscope2()에서 호출 vscope을 
    하는데 fscope1()과 fscope2()는 둘다 vscope의 "global" 전역변수를 호출함으로
    2번 호출될때 vscope은 global로 호출된다.
    */

var vscope = "global";
function fscope() {
    var vscope = "local";
    var lv = "local variables";
    alert(lv);
}
fscope();
alert(lv); 
/* 출력하면 undifined생성된다 왜?? var lv는 function fscope()안의 지역변수
안에 들어있으므로 alert(lv)는 출력되지 않는다.*/

// (1)
var vscope = "global";
function fscope() {
    var vscope = "local";
}
fscope();
alert(vscope);

// (2)
var vscope = "global";
function fscope() {
    vscope = "local";
}
fscope();
alert(vscope);
/* 
(1)
function fscope()지역변수를 지정했음에도 var scope = "global"과
 var vscope = "local"을 했을때 출력하면 vscope = "global"과 vscope = "local"
 은 각각 변수를 지정했는것이기 때문에 alert(vscope)을하면 global이 출력된다
 
 (2)
 그러나 var vscope = "global"로 지정하고 vscope = "local" var변수없이 지정했다면
 아무리 function fscope(){}로 지역변수 지역변수 전역변수로 나뉘어져있어도
 구분이 허물어지고 alert(vscope)하면 "global"이 아니라 "local"이 출력된다.*/
 

var vscope = "global";
function fscope() {
    var vscope = "local";
    vscope = "local";
}
fscope();
alert(vscope);
/* function fscope() {} 안에 var vscope = "local";과 vscope = "local"; 이 생성
되어있다 이때 var vscope = "local"이므로 alert(vscope)를 생성했을때 지역변수가
나오게 된다.*/