/* 클로저(closure)는 내부함수가 외부함수의 맹락(context)에 접근할 수 있는 것
    을 가르킨다. 클로저는 JS를 이용한 고난이도의 테크닉을 구사하는데 필수적인
    개념으로 활용된다.*/

// 내부함수
function outter() {
    function inner() {
        var title = "coding everybody"
        alert(title);
    }
    inner();
}
outter();

/* function outter() {} 여기서 outter의 안에 function inner() {}가 들어가는데
function inner() {}는 내부함수이고 outter(){}는 외부함수이다. */


function outter() {
    var title = "coding everybody";
    function inner() {
        alert(title);
    }
    inner();
}
outter();

/* function outter() {}는 외부함수이고 function inner() {}는 내부함수이다.
여기서 var title = "coding everybody";는 외부함수에 정의되어 있는 지역변수이다.
    inner() {alert(title)};일때 내부함수에 title 변수를 사용했을때 inner에
    title이라는 지역변수가 존재하지 않는다면 title은 외부함수의 지역변수에
    접근해서 coding everybody를 가져오게 된다.*/