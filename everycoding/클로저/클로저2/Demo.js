// 클로저
function outter() {
    var title = "coding everybody";
    return function() {
        alert(title);
    }
}
inner = outter();
inner();

/* return function() {alert(title);}하면 outter(); = inner에 의해서
inner(); 의해서 호출이되고 출력이된다. */