/* 함수에는 arguments라는 변수에 담긴 숨겨진 유사 배열이 있다 이 배열에는
함수를 호출할때 입력한 인자가 담겨있다 */
function sum() {
    var i, _sum = 0;
    for(i = 0; i < arguments.length; i++) {
        document.write(i+' : '+arguments[i]+'<br/>');
        _sum += arguments[i];
    }
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));