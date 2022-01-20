// 유효범위
// 유효범위(Scope)는 변수의 수명을 의미한다 결과는 global이다.

var vscope = "global";
function fscope() {
    alert(vscope);
}
fscope();

var vscope = "global";
function  fscope() {
    var vscope = "local";
    alert(vscope);
}
fscope();

// local: 지역변수, global: 전역변수

var vscope = "global";
function fscope() {
    alert(vscope);
}
function fscope2() {
    alert(vscope);
}
fscope();
fscope2();