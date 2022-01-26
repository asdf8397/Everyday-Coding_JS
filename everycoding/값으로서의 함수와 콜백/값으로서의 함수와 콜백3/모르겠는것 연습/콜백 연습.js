// 개어렵다 다시 한번봐야함
var numbers = [20,10,9,8,7,6,5,4,3,2,1];
var sortfunc = function(a, b) {
    console.log(a,b);
    return a - b;

    // 1,2,3,4,5,6,7,8,9,10,20
}
console.log(numbers.sort(sortfunc)); //sortfunc콜백함수


// 문법(Syntax)
// Array.sort(sortfunc)

// sortfunc은 원소들간의 무엇이 우선인지 판단하게 한다.(기본적인 옵션)
// sort는 오름차순으로 정렬

/* sort에 의해서 정렬이 된다 numbers=[]배열은 여기서 console.log(a,b)는
    var numbers=[] 배열을 비교하면서 정렬할때 사용되게 된다. */