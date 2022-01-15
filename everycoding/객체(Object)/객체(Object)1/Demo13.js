// 객체
// 객체의 생성
// 객체생성 버전1
var grades = {"egoing": 10, "k8805": 6, "sorialgi": 80};
console.log(grades.egoing, grades.k8805, grades.sorialgi);
console.log(grades.egoing);
console.log(grades.k8805);
console.log(grades.sorialgi);

// 객체생성 버전2
var fruits = {};
fruits["apple"] = 10;
fruits["mango"] = 6;
fruits["sorialgi"] = 80;

console.log(fruits.apple);
console.log(fruits.mango);
console.log(fruits.sorialgi);
console.log(fruits["apple"]);
console.log(fruits["mango"]);
console.log(fruits["sorialgi"]);

// 객체생성 버전3
var sports = new Object();
sports["soccer"] = 10;
sports["football"] = 6;
sports["tennis"] = 80;

console.log()