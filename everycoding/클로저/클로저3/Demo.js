function factory_movie(title) {
    return {
        get_title : function () {
            return title;
        },
        set_title : function(_title) {
            title = _title
        }
    }
}
ghost = factory_movie("Ghost in the shell");
matrix = factory_movie("Matrix");


// 클로저 무슨말인지 모르겠음
// 자기소개서부터 준비해야해서 오늘은 여기까지 하겠음
// 생활코딩 클로저(3/4): private variable 다시 볼것