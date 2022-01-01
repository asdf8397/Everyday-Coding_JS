// 객체생성1
var grades = {'egoing': 10, 'k8805':6, 'sorialgi': 80}; 
    // ↑ 객체          // ↑ key    ↑ value

// 객체생성2
var grades1 = {};
grades1['egoing'] = 20;
grades1['k8805'] = 16;
grades1['sorialgi'] = 180;

// 객체생성3
var grades2 = new Object();
grades2['egoing'] = 33;
grades2['k8805'] = 86;
grades2['sorialgi'] = 280;

// 생성된 객체들의 수를 찍는 방법
// grades1.egoing, grades1["sorialgi"];
console.log(grades1["sorialgi"]);
alert(grades1.egoing);

var grade = {"Kim": 10, "Park": 20, "Lee": 30};
for(grade) {
    document.write("name")
}