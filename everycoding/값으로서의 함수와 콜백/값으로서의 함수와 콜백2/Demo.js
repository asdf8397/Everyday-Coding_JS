// JS 값으로서 함수와 콜백(2/4): 함수의 용도

function cal(mode) {
    var funcs = {
        "plus": function (left, right) {return left + right},
        "minus": function(left, right) {return left - right}
    }
    return funcs[mode];
}
alert(cal("plus")(2,1));
alert(cal("minus")(2,1));
/* alert(cal("plus")(2,1)); */
/* alert 호출을 cal("plus")(2,1)을 하게된다 이때 cal("plus")는 function 함수
를 거쳐서 cal("plus")는 cal(mode)에 들어가게 된다 여기에 들어가면
return funcs[mode]에 적용되게 되고 funcs를 통해서 var funcs에 들어가서 
"plus"는 연산이 되게 된다 이 값은 2,1을 left + right값으로서 3으로 출력된다.*/

/* alert(cal("minus")(2,1)); */
/* alert 호출은 cal("minus")에 따라서 cal (2,1)을 하게된다 이것이
"minus"에 들어가게 되고 "minus"는 left - right값으로서 1로 출력된다. */


var process = [
    function(input) {return input + 10;},
    function(input) {return input * input;},
    function(input) {return input / 2;}
];
var input = 1;
for(var i = 0; i < process.length; i++) {
    input = process[i](input);
}
alert(input);
/* var process = []배열에 function(input) {}을 넣은상태로 
for(var i = 0; i < process.length; i++)로 process.length만큼 반복하게된다
(배열의 길이만큼) 0,1,2만큼 반복하게 된다*/
/* process[i] ← 대괄호가 배열을 나타냄으로 process 0,1,2가 나온것을
대입했을때 var process = [function(input)]들을 나타내게된다.
var input = 1;이므로 input = process[i](input)일때 여기서 (input)에 1을
넣어주고 이것은 var process = []의 배열들에 [0,1,2]순서대로 적용되게 된다. 
이것을 input에 적용해서 alert(input);에 적용해서 알림으로 뜨게 된다.*/