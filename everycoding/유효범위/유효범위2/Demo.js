// 유효범위의 효용
// 유효범위의 필요성

function a() {
    var i = 0;
}
for(var i = 0; i < 5; i++) {
    a();
    document.write(i);
}
/*
function a() {
    i = 0;
}
for(var i = 0; i < 5; i++) {
    a();
    document.write(i);
}
*/
/* for(var i = 0; i < 5; i++) {} 이고 function a() {i=0;}이다
    여기서 for문의 안에 들어있는 var i = 0;은 전역변수이다.
    function a() {i=0;}으로 지정하면 i = 0; 또한 전역변수가 된다.
    그렇다면 for(var i = 0; i < 5; i++) {a();} 일때 for문의 반복문이 돌면서
    i의 값이 ++되야하지만 fnuction a() {i = 0;}으로 지정한 전역변수가
    계속 0으로 초기화 시키게된다 그러면 무한반복문이 걸리게된다.*/