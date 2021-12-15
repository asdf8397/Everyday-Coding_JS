// 배열의 제어
		// 배열의 복수의 데이터를 효율적으로 관리, 전달하기 위한 목적으로 고안된 데이터 타입니다. 따라서 데이터의 추가/수정/삭제와 같은 일을 편리하게 할 수 있도록 돕는 다양한 기능을 가지고 있다.

		// 배열의 크기
		var arr = [1,2,3,4,5];
		console.log(arr.length);
		// 배열의 크기 5(5개)

		// 배열의 조작
		// 추가
		// 다음은 배열의 끝에 원소를 추가하는 방법이다. push는 인자로 전달된 값을 배열(li)에 추가하는 명령이다. 배열 li의 값은 a,b,c,d,e,f가 됐다.

		var li =["a","b","c","d","e","f"];
		// console에서 li를 출력하면 ["a","b","c","d","e","f"]; -- 6이라고 적힌다
		// 여기서 li.push("g");라고하면 ["a","b","c","d","e","f","g"];로 배열이 추가되게 된다.
		// push 밀어넣다.

		var li = ["a","b","c","d","e"];
		li = li.concat(["f","g"]);
		alert(li);
		// li를 했을때 a,b,c,d,e,f,g까지 합쳐진 값이 출력된다.

		var list = ["a","b","c","d","e","f","g"];
		list = list.unshift("z");
		// list.unshift는 배열의 제일처름 a앞에 "z"를 넣는것