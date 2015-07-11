function callFunction(print){
	print();
}

callFunction(function(){
					return console.log("출력1");
});

				
				
function returnFunction(name){
	var result = "Hello" + name;
	
	return function(){
			console.log(result);
			};
};

returnFunction("이동욱")();


/// 교재
function add(x,y){
	alert(add.Description);
	return x+y;
}
add.Description = "Im function";
add(1,2);

var a = function(arg){
	var b = function(in){
		return in*2;
	};
	return '결과 : ' + b(arg);
};

function a(arg){
	function b(bb){
		return bb*3;
	};
	return '결과 : ' + b(arg);
};