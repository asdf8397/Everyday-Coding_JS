// 함수(function)의 예시1
function get_argument(arg) {
    return arg*100;
}
console.log(get_argument(1));
console.log(get_argument(2));

// function get_argument(arg)에서 arg는 입력
// return 출력

// 함수(function)의 예시2
function get_argument(arg1, arg2) {
    return arg1 + arg2;
}

console.log(get_argument(10,20));
console.log(get_argument(40,50));

/* arg는 입력받아드린다.
 * console.log(get_argument(1));에서 출력하게될때 console.log(get_argument(1)은
    function get_argument(arg)에 의해서 get_argument에 1이 들어가게되고 return의 값
    으로 arg*100 1*100으로 출력 값은 100이 출력된다.

    console.log(get_argment(10,20));은 console.log하기전 function함수를 거치게되는데
    get_argment(10,20);은 get_argument(arg1, get2)에 입력되서 10, 20은 get1, get2에
    지정되고 return arg1 + arg2; 값으로 연산되서 console.log에 출력되게 된다.
    값은 30으로 출력됨
 */