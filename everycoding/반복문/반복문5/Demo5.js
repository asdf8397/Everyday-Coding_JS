// 반복문의 제어(break)
// 반복작업을 중단시키고 싶다면?

// break
for(var i = 0; i < 10; i++) {
    if(i===5) {
        break;
    }
    document.write("coding everybody" + i + "<br/>");
}
// for반복문 안에 조건문 if가 들어갈수있다.
/* 
if(i===5) {break;} 해주면 i는 0부터 0<10;까지 올라갈수있지만 
i===5에서 break 되고 break된 값 0~5까지의 값이 출력되고 종료된다.
*/

// continue
for(var i  = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    document.write("coding everyday" + i + "<br/>");
}
/*
반복문의 조건
i=0; i<10;
if(i===5) {continue;}

여기서 i는 0부터 10까지 반복문이 재생된다 근데 여기서
i===5의 조건을 걸어주면 i는 0부터 5까지 재생되고 5에서 stop(정지)
걸리게 된다.
continue를 걸어주면 stop(정지)된 5를 제외한 0부터 9까지 출력된다.

왜??  ▶ 5번에서 i===5이면서 5에서 stop이 걸리기 때문에 5를 기준으로
*/
// break, continue 차이점
/* break는 반복문을 종료
 * continue는 그 순간에만 종료시키고 반복문은 계속되게 한다.
 */