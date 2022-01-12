// 배열이 없다면....

// 출력을 일일히 써줘야한다(배열이 없다면)
// console.log로 출력할때
function get_member1() {
    return "egoing"
};
console.log(get_member1())

function get_member2() {
    return "k8805"
};
console.log(get_member2());

function get_member3() {
    return "sorialgi"
};
console.log(get_member3());


// document.write로 출력
function get_member4() {
    return "Kim<br/>"
};
document.write(get_member4());

function get_member5() {
    return "berg<br/>"
};
document.write(get_member5());

function get_member6() {
    return "young<br/>"
};
document.write(get_member6());

// 배열이 없다면 출력방법도 달라진다
// 단, document.write방식, console.log방식의 출력이 다르다.

function get_members() { // 자주 사용하는 배열
    return ["egoing<br/>","k8805<br/>","sorialgi<br/>"]
};
var new_get_members = get_members();
console.log(new_get_members[0,1,2]);
document.write(new_get_members[0]);
document.write(new_get_members[1]);
document.write(new_get_members[2]);
