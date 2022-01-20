// 치환
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);

// 결과 출력
// 생활코딩 : <a href="http://opentutorials.org/course/1">http://opentutorials.org/course/1</a> 입니다. 네이버 : <a href="http://naver.com">http://naver.com</a> 입니다.

/* content에 생활코딩 url이 있다 var result = content.replace(urlPattern, function(url) { return '<a href="'+rul+'">'+url+'</a>일때
    content.replace에 urlPattern을 적용한다면 결과값은 결과값 출력에서 보여주는 것처럼 url을 한번씩 반복하는 반복문으로 출력된다.*/