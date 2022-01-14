// 배열의 사용
function sports() {
    return ["soccer","baseball","basketball","football"];
}
var Sports_team = sports();
for(i=0; i<Sports_team.length; i++) {
    document.write(Sports_team[i] + "<br/>")
}

// 배열의 제어
/*
배열은 복수의 데이터를 효율적으로 관리, 전달하기 위한 목적으로 고안된
데이터 타입이다.
데이터의 추가/수정/삭제와 같은 일을 편리하게 할 수 있도록 돕는 다양한
기능을 가지고 있다.
*/
// 배열의 크기
var arr1 = [1,2,3,4,5,6];
alert(arr1.length);

var arr2 = [10,11,12,13,14];
alert(arr2);

// 출력값 alert(arr2)와 alert(arr1.length)는 다르다.
/*
alert(arr2);은 출력때 배열의 값들이 전체다 출력된다
alert(arr1.length);는 배열의 마지막값 6의 값이 출력된다.
*/

// 배열의 길이 만큼 console에 출력
var array_list = [3,4,5,6,7,8];
var list = array_list;

for(i=0; i<list.length; i++) {
    console.log(list[i]);
}