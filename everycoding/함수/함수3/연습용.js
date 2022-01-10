// 입력과 출력
function get_member1() {
    return "egoing"
};
alert(get_member1());

function get_member2() {
    return "sorialgi"
};
alert(get_member2());

// return의 기능
/**
 * return은 함수를 종료시킨다.
 * return 뒤에 있는 값을 함수의 출력값으로 출력하게 된다.
 * 
 * 출력할때 넣어주는것에 따라서 출력값이 달라진다.
 * console.log(get_member1); 와 console.log(get_member1()); 출력이 다르다.
 * get_member1은 function(함수)의 전체가 출력이 되고 get_member1()은
 * 함수 안의 get_member1(){return "sorialgi"}가 출력된다.
 */

function get_number3() {
    return "this"
    return "is"
    return "my"
    return "money"
};
console.log(get_number3());
/*
function(함수)로 지정하고 출력할때 하나의 함수안에
return을 여러개를 적용시켰다고할지라도 결국 출력되는 function함수의
return값은 제일 첫번째 return이 출력이 된다.
*/