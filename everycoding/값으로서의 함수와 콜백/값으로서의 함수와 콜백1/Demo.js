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

// --------------------------------------

// 값으로서의 함수
/* JS에서는 함수도 객체다 다시 말해 일종의 값이다 거의 모든 언어가 함수를
가지고 있다. JS의 함수가 다른 언어의 함수와 다른 점은 함수가 값이 될수 있다는점 */


// 함수를 값이라고 생각하면된다

function a() {}

// function a() {} === var a =  function() {}
                        // ↑
// 함수가 값이 될수있는 이유는 var a = function() {}에 담길수있기 때문이다.

a = {
    b:function() { 
        // function은 값이고 function은 객체안에 저장될수있다. b는 객체이다.
        // b: key, function(){}은 value이다.
        /* key는 변수와 같은 역활을 하고있다. 
        객체안에서 변수의 역활을 하는것 속성이라고하며 property라고한다.
        속성에 저장되어있는 갓ㅂ이 함수라면 함수는 메소드(method)라고 부른다.
        */
    }
};

function cal(func, num) {
    return func(num)
}
function increase(num) {
    return num + 1
}
function decrease(num) {
    return num - 1
}
alert(cal(increase, 1));
alert(cal(decrease, 1));