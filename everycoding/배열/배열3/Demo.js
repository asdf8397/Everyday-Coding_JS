// 배열의 사용
/**
 * 배열의 진가는 반복문과 결합했을때 나타난다. 반복문으로 리스트에 담긴 정보
 * 하나씩 꺼내서 처리할 수 있기 때문이다.
 */

function get_members1() {
    return ["egoing","k8805","sorialgi"];
}

var members = get_members1();
document.write(members[0] + "<br/>");
document.write(members[1] + "<br/>");
document.write(members[2] + "<br/>");

function get_Sport_team(){
    return ["soccer_team","basketball_team","baseball_team"];
}

var Sport = get_Sport_team();
document.write(Sport[0].toUpperCase() + "<br/>");
document.write(Sport[1].toUpperCase() + "<br/>");
document.write(Sport[2].toUpperCase() + "<br/>");

// .toUpperCase는 소문자를 대문자로 만들어줄때 사용한다.
// .toUpperCase는 JS에 내장되어있으므로 내장함수라고한다.
// document.write(members[0].toUpperCase());로 출력하면 대문자로 출력된다.

function get_name() {
    return ["egoing_friend","k8805_friend","sorialgi_friend"];
}

var friend = get_name();
for(i=0; i<friend.length; i++) {
    document.write()
}