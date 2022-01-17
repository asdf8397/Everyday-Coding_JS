// 객체지향 프로그래밍_맛보기
var grades = {
    "list" : {"egoing" : 10, "k8805" : 6, "sorialgi": 80},
    "show" : function() {
        for(var name in this.list) {
            document.write(name + ":" + this.list[name] + "<br/>");
        }
    }
};
grades.show(); // 출력
/* 
show를 function()함수로 지정하고 for문을 출력할때 
변수 grades 안에 "show" : function()으로 설정되어있고
show안에 for문의 출력으로 이루어져있기때문에
호출때도 grades.show()로 출력해야한다.
*/
document.write("<br/>");
