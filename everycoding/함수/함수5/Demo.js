numbering = function () {
    i = 0;
    while(i < 10) {
        document.write(i);
        i += 1;
    }
}
numbering();
// numbering = function() {} 은 function()이라는 함수가 numbering에 대입된것
// 그래서 출력할때 numbering();의 식으로 호출해야한다.

// 익명함수
/*
(function (){
    i = 0;
    while(i < 10) {
        document.write(i);
        i += 1;
    }
})() ← 함수의 정의와 호출을 같이하는것(익명함수)라고한다.
익명함수(function이 괄호안에 들어가서 정의되어있으므로) ()간단하게 괄호로 호출한다.
*/