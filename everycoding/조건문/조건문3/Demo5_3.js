// 논리연산자 AND 연산자: &&
/* &&는 좌항과 우항이 모두 참(true)일 때 참이 된다.*/
// && 좌우항이 모두 true이어야 작동한다.
if(true && true) {
    console.log(1)
};

if(true && false) {
    console.log(2)
};

var ID = prompt("아이디를 입력해주세요.");

if (ID === "scv2314") {
    alert("아이디를 정상적으로 입력하셨습니다.")
    var Password = ("비밀번호를 입력해주세요.")
    prompt(Password === "asdf8397")
    alert("비밀번호를 정상적으로 입력하셨습니다.")
} else {
    alert("아이디 또는 비밀번호를 다시 한번 확인해주세요.")
};