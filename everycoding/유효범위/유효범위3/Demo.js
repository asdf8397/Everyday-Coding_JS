// 전역변수의 사용
/* 불가피하게 전역변수를 사용해야 하는 경우는 하나의 객체를 전역변수로 만들고
객체의 속성으로 변수를 관리하는 방법을 사용한다 */

// (1)
MYAPP = {}
MYAPP.calculator = {
    "left" : null,
    "right" : null
}
MYAPP.coordinate = {
    "left" : null,
    "right" : null
}

MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());

// (2)
function someone(){
    var MYAPP = {}
    MYAPP.calculator = {
        "left" : null,
        "right" : null
    }
    MYAPP.coordinate = {
        "left" : null,
        "right" : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum() {
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}
someone();

// (3)
(function (){
    var MYAPP = {}
    MYAPP.calculator = {
        "left" : null,
        "right" : null
    }
    MYAPP.coordinate = {
        "left" : null,
        "right" : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum() {
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}()); 

// ↑이것은 익명함수로 사용할때 사용하게 된다. 모듈화를 사용할때 사용하게 된다.

/* (1)의 var MYAPP = {}은 지역변수이다,,, (3)은 (function(){})은 전역변수이다.
왜??? function으로 감쌌기때문에 */