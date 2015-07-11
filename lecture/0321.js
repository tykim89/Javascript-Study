/**
 * New node file
 */

function square(){				// 일반적인 함수 사용
	console.log("안녕");
}();									// 실행 안됨
var square2 = function(){		// 잘 사용 안함
	console.log("안녕2");
}();
var square3 = (function(){	// 앞에 "(" 붙이면 바로 실행 시킨다는 약속
	console.log("안녕3");
}());

function sumof(){
	var total=0;
	for(var i=0; i<arguments.length; i++){
		total += arguments[i];
	}
	return total;
}


function log(){
	var args_len = arguments.length;
	
	switch(args_len){
	case 1:
		console.log("1개 넣어었을 때 처리");
		break;
	case 3:
		console.log("3개 넣어었을 때 처리");
		break;
	}
}
