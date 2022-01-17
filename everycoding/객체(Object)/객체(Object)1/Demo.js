// 객체(Object)

// 객체와 배열의 차이점
// 배열은 a,b,c는 0,1,2 숫자가 들어가게 된다
// 객체는 a,b,c는 각각의 칸에 first, second, third같은것들이 들어갈수있다.


// 객체의 생성1
var grades1 = {"egoing": 10, "k8805": 6, "sorialgi": 80};
// "egoing":10, "k8805":6, "sorialgi": 80처럼 숫자가 아니라 다른것이 들어가 된다.

// 객체생성 출력1
console.log(grades1.egoing);
console.log(grades1.k8805);
console.log(grades1.sorialgi);
console.log(grades1["egoing"]);
console.log(grades1["k8805"]);
console.log(grades1["sorialgi"]);
console.log(grades1[egoing]);
console.log(grades1[k8805]);
console.log(grades1[sorialgi]);

// egoing은 key가 되고 10은 value가 된다. 객체를 만드는 다른 방법이다.


// 객체생성2
var grades2 = {}
grades2["egoing"] = 30;
grades2["k8805"] = 100;
grades2["sorialgi"] = 300;

// 객체생성 출력2
console.log(grades2.egoing);
console.log(grades2.k8805);
console.log(grades2.sorialgi);
console.log(grades2["egoing"]);
console.log(grades2["k8805"]);
console.log(grades2["sorialgi"]);
console.log(grades2[egoing]);
console.log(grades2[k8805]);
console.log(grades2[sorialgi]);


// 객체생성3
var Animal_age = Object();
Animal_age["Cat"] = 5;
Animal_age["Dog"] = 3;
Animal_age["Rabbit"] = 4;

// 객체생성 출력3
console.log(Animal_age.Cat);
console.log(Animal_age.Don);
console.log(Animal_age.Rabbit);
console.log(Animal_age["Cat"]);
console.log(Animal_age["Dog"]);
console.log(Animal_age["Rabbit"]);
console.log(Animal_age[Cat]);
console.log(Animal_age[Dog]);
console.log(Animal_age[Rabbit]);
