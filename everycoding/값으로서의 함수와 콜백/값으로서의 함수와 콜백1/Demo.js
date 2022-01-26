// 값으로서의 함수
/* JS에서 함수도 객체이다 다시 말해 일종의 값이다 거의 모든 언어가 함수를
가지고 있다.
JS의 함수가 다른 언어의 함수와 다른 점은 함수가 값이 될 수 있다는 점이다*/

function a() {}

a = {
    b: function () {
        
    }
}

// 똑같은 function임에도 부르는 명칭이 다르다.
// function a() {} ---- 함수
// a = { b:function() {} --- 메소드 };

function cal(func, num) {
    return func(num)
}
function increase(num) {
    return num + 1
}
function  decrease(num) {
    return num-1
}
alert(cal (increase, 1));
alert(cal (decrease, 1));