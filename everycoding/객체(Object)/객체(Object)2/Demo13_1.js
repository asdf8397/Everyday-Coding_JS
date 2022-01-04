var grades = {"egoing":10, "k8805":20, "sorialgi": 30};
for(key in grades) {
    document.write("key : " + key + " value : " + grades[key] + "<br/>");
}

// var grades = {"egoing":10, "k8805":20, "sorialgi":30};
// grades는 변수지정 "egoing":10에서 egoing은 key 10은 값(value)이다

/* for(key in grades) {
    document.write("key:" + key + " value : " + grades[key] + "<br/>");
    여기서 key는 for문에서 지정한 key가 들어가야되고 grades는
    변수지정의 var grades가 for(key in grades)로 들어가야 한다.
}
 */

var grades1 = {"egoing":150, "long":250, "sorialgi":350};
for(sound in grades1) {
    document.write("sound: " + key + "value : " + grades1[sound] + "<br/>");
}

/*
var grades1 = {"egoing":150, "long":250, "sorialgi":350};
for(sound in grades1) {
    document.write("sound: " + key + "value : " + grades1[sound] + "<br/>");
}
*/

/** 변수로 지정한 var grades1은 for문의(sound in grades1) 여기 안에서
 *  사용해 줘야한다
 * for(sound in grades1)에서 sound는 key값으로 지정해줄때 key라고 지정해줘도되지만
 * 변경할수도 있다.
 * document.write("sound(key대신에 sound적어 줘도 되고 맘대로 가능하다
 *  단 for문의 괄호안에 sound를 변경해주면 document.write를 변경해줘야 한다.")
 */

// 직접 만들어봄

var likeit = {"egoing":50, "sound":60, "sorialgi":70};
for(key in likeit) {
    document.write("key : " + key + "value : " + likeit[key] +"<br>");
}