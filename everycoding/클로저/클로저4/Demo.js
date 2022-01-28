// 다시봐도 모르겠음

var arr = []
for(var i = 0; i < 5; i++) {
    arr[i] =function() {
        return i;
    }
}

for(var index in arr) {
    console.log(arr[index] ());
}