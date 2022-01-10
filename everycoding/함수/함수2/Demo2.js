// 함수의 효용
function numberings() {
    var algo = 0;
    while(algo < 20) {
        document.write(algo);
        algo += 1;
    }
}
// 함수의 효용 - 함수의 가독성이 좋아야하고 그래야 유지보수가 쉽다
// 쉽게 말해서 코드가 잘 정리되게 깔끔해야하며 같은 코드여도 단계가 적어야 한다.

/*
for(var algo = 0; algo<20; algo++) {
    var algo = 0;
    while(algo < 20) {
        document.write(algo+"<br/>");
    }
}
*/
/*
1. 코드의 가독성
2. 재사용성
3. 유지보수의 용이
이렇지 않을경우 버그가 발생하고 어려워 질 수 있다.
*/