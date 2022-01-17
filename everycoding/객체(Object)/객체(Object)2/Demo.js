// 객체와 반복문의 조우

var people_grade = {"egoing": 100, "k8805": 90, "sorialgi": 80};
for(var key in people_grade) {
    document.write("key : " + key + " people_grade : " + people_grade[key] + "<br/>")
};

/*
key는 people_grade의 "egoing", "k8805", "sorialgi"를 나타낸다
그치만 for(var key in people_grade)일때는 people_grade[key]가 되면
"egoing", "k8805", "sorialgi"의 정수의 값이 된다.
*/
document.write("<br/>");


// 화면 오류 잘 모르겠음 일단 진도 나가고 고쳐야함
var korean_average_height = {"male": 173, "female": 167};
for(korean_height in korean_average_height) {
    document.write("korean_height : " + korean_height + "korean_average_height : " + korean_average_height[korean_height] + "<li/>")
};

// 헷갈리지 말아야할것
/*
var people_grade = {"egoing":100, "k8805": 90, "sorialgi":80}에서
var people_grade 변수를 지정한 people_grade {} 중괄호 안에 
배열을 key값은 벌써 지정되어 있다
for문으로 출력할때 for(key in people_grade)에서 people_grade는 바꾸면
안되지만 for(key in people_grade)에서 key라는것을 다른 name이나 point처럼
key값의 이름만 바꿔도 상관없다.
key값을 다른 이름으로 바꿔도 결국 for(key in people_grade)로 변하지않는다
people_grade 안에(in)들어오는 값 key이기때문에 바뀌어도 상관없다.
*/