// 입력과 출력
function get_member1() {
    return "egoing"
};

function get_member2() {
    return "k8805"
};

alert(get_member1());
alert(get_member2());

// return의 기능

// return함수를 종료시킨다.
// return뒤에 있는 값을 함수의 출력값으로 출력하게된다.

// return의 출력에서 실수한 내용
// alert(get_member1);으로 출력하면 function의 전체가 출력된다.
// alert(get_member1()); 출력하면 return의 값이 출력된다.

function get_member3() {
    return "algo"
    return "re"
    return "thum"
    return "study"
};
console.log(get_member3());

/* 
function으로 get_member3 지정하고 return "algo" 이후 여러 return값이 있지만
제일 처음의 algo만 출력된다. return이 되었기때문에 종료한것
*/