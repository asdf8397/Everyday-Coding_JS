// 조건문은 if로 시작한다.
// if문
if(true) {
    console.log("result: true")
};
if(false) {
    console.log("result: false")
};
if(true) {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
};
console.log(5);
if(false) {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
};
console.log(7);

// if else문
if(true) {
    console.log("안녕하세요 처음뵙겠습니다 js처음 배웁니다.")
};
if(false) {
    console.log("안녕하세요 처음 뵙겠습니다. js처음배우고 처음 작성해봅니다.")
} else {
    console.log("false일 경우 지금 보시고 계신 글자가 나옵니다.")
};

// if문의 else if
if(true) {
    console.log("안녕하세요 else if문을 배우고 있습니다.")
} else if(true) {
    console.log("만약 else if문이 작동이 된다면 지금의 글이 보일겁니다.")
};
if(false) {
    console.log("여기에 적힌게 보인다면 아마도 true일 것입니다.")
} else if(false) {
    console.log("여기에 적힌거 보여? 222222")
} else if(true) {
    console.log("여기에 적힌게 보이니? 33333")
} else if(true) {
    console.log("나도 true라고 근데 왜 왜 왜")
};
console.log("아주 잘한것 같다 else if문");

if(false) {
    console.log("여기에 적고있는 지금 false이므로 else if 또는 else가 보이겠지")
} else if(true) {
    console.log("else if 처음에 true이면 뒤에 오는 else if true여도 무시한다.")
} else if(true) {
    console.log("아마도 무시당했을거야 보이면 대박이지만")
}; // else if뒤엔 else가 붙을수 없음 사용할수 조차 없음

// 조건문의 응용(이거 중요합니다.)
// prompt("당신의 나이는?") 
/* 프롬프트는 입력할수있는 창이 나오고 입력창에 입력하면 console에 입력창에
입력한것들이 적히게 된다.*/

// 응용을 해보았다
if(false) {
    console.log("false니까 else 또는 else if를 소환한다.")
} else if(true) {
    prompt("당신의 이름은 무엇입니까")
} else if(true) {
    console.log("오늘 공부 많이 했는것 같지 않고 그냥 그랬어요")
};

// 메모 Demo8.html까지했음 다음 Demo8_1.html부터 하면됩니다.

prompt("안녕하세요 아무것이나 입력해주세요");