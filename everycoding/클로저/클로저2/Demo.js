/* 클로저(closure)는 내부함수와 밀접한 관계를 가지고 있는 주제다. 내부함수는
외부함수의 지역변수에 접근할 수 있는데 외부함수의 실행이 끝나서 외부함수가
소멸된 이후에도 내부함수가 외부함수의 변수에 접근할 수 있다. 이러한 메커니즘
을 클로저라고한다 */

function outter() {
    var title = "coding everybody";
    return function() {
        alert(title);
    }
}
inner = outter();
inner();

/* function outter() {}는 외부함수이고 function() {alert(title);} 내부함수
여기서 inner = outter();에서 outter();를 호출하면 function() {alert(title);
    의 내부함수는 실행 후 작동이 멈춘다 하지만 inner();를 호출하면 작동이
    멈춘 function(){alert(title);}이 재작동해서 결과물이 나온다
    클로저의 신기함!!!!*/
