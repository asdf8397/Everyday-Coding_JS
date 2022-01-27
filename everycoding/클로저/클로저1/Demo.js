// 클로저
/* 클로저(closuer)는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는
것이다. */
function outter() {
    function inner() { // var inner = function() {}
        var title = "coding everybody";
        alert(title);
    }
    inner();
}
outter();
// function inner() {}는 내부변수, function outter() {}는 외부변수

// 내부함수는 외부함수의 지역변수에 접근할 수 있다. 결과 coding everybody
function outter() {
    var title = "coding everybody"; // 외부함수에 정의된 지역변수
    function inner() {
        alert(title);
    }
    inner();
}

// 내부함수에서 외부함수에 정의된 지역변수에 접근할수있다 
/* function inner() {alert(title);}을 var title = "coding everybody";가
들어갈수있다. */