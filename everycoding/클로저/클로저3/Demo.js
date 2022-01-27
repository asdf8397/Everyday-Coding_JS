function factory_movie(title) {
    return {
        get_title : function () {
            return title;
        },
        set_title : function(_title) {
            if(typeof _title === "string") {
                title = _title
            } else {
                alert("제목은 문자열이어야 합니다.");
            }
        }
    }
}
ghost = factory_movie("Ghost in the shell");
matrix = factory_movie("Matrix");
alert(ghost.get_title());
alert(matrix.get_title());
ghost.set_title(1); // set_title에 넣으니까 문자가 아니므로 제목은 문자열이어야 합니다가 뜬다.
// ghost.set_title("공각기동대");
alert(ghost.get_title());
alert(matrix.get_title());

// 매겨변수는 함수안에서 지역변수로 사용된다.... 여기서의 title은 지역변수이고
/* 지역변수는 내부 함수에서 접근가능하므로 get_title을 호출하면 factory_movie */

/* get_title, set_title 함수가 정의되어있는 형식 factory_movie 메소드들은
내부함수라고 한다 factory_movie 내부함수 */

// 설명
/* get_title: function() {return: title;}을 호출하면 factory_movie(title)
을 가져오게 된다. 그리고 set_title: function(_title)의 _title을 호출하면
_title = title이 같다고 할수있으며 set_title(_title)은 factory_movie(title)
을 호출하게된다. */
                
                    // ↓ 기본바탕으로 문제를 풀어보자
/*
ghost = factory_movie("Ghost in the shell");
factory_movie(title)에 "Ghost in the shell"을 담아주고 return{}의 안의
get_title과 set_title을 ghost에 담아준다

matrix = factory_movie("Matrix");
factory_movie(title)에 "Matrix"을 담아주고 return{}의 안의
get_title과 set_title을 matrix에 담아준다. 
확인을 위해서 alert(ghost.get_title()); ,, alert(matrix.get_title());을 
호출해주면 "Ghost in the shell", "Matrix"가 경고로 뜬다.

ghost.set_title("공각기동대")를 하게되면 결과는 
set_title : function(_title){title = _title}에 담기게되서
function title_movie(title)에 담기게 되고
alert(ghost.get_title);을 하면 결과값은 공각기동대가 출력이 된다
여기서 헷갈리지 말아야할것은 ghost.set_title("공각기동대");는 ghost로 된
호출에서만 공각기동대가 나온다는 것이지 matrix에선 나오지 않는다.

alert(matrix.get_title());을 하면 결과값은 
*/

/*
소프트웨어가 커지다보면 많은 데이터가 있게되는데 누구나 수정할수있게되는
것은 소프트웨어가 망가질 가능성이 크다
그것의 보안에 대해서 전역변수, 지역변수가 나눠져야한다는 것이다
*/
/*
get_title과 set_title만 접근하기때문에 누가 어떻게 하던지간에 영향을 주지
않는다.
*/