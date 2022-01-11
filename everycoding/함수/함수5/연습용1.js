// 함수를 정의할때 다르게 할수있다.
numbering = function() {
    i = 0;
    while(i<10) {
        i = i += 1
        document.write(i + "Hello function World<br/>")
    }
};
console.log(numbering());
numbeirng();

// 일반적인 함수의 정의
/* function numbering() {} 형식으로 시작한다.
    하지만 function을 지정하지 않고 numbering = function(){}
    을 지정하는 경우도 가능하다.
    하지만 이때의 호출은 function은 함수를 나타냄으로
    numbering = function(){}을 해줬을때도 호출땐 numbering()로
    호출을 해야한다.
 */
/**
 * 정의된 함수
 * numbering();으로 출력한 값이나 console.log(numbering());으로
 * 출력한 값은 똑같다.
 */