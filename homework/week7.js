/**
 * @time 7 weeks
 * @since 2015-04-04
 * @author tykim
 * */

// Q1
function prevCalculator(num1, num2, name){

	switch(name){
		case 'add':
			console.log(num1 + num2);
			break;
		case 'minus':
			console.log(num1 - num2);
			break;
		case 'multiple':
			console.log(num1 * num2);
			break;
		case 'divide':
			console.log(num1 / num2);
			break;
		default:
			console.log("사칙연산만 가능합니다.");
	}
};

function laterCaculator(num1, num2, name){
	
	switch(name){
		case 'add':
		case 'minus':
		case 'multiple':
		case 'divide':
			prevCalculator(num1, num2, name);
			break;
		default:
			var def = function(n1, n2){
				console.log(n1+name+n2);
			};
			def(num1, num2);
			break;
	}
};

laterCaculator(2, 3, 'multiple');


// Q2
function MainProgram(arg){

	LibraryFunction(arg, CallbackFunction);

};

function CallbackFunction(result){
	result = result * 2;
	console.log("4배수 : " + result);
};

function LibraryFunction(arg, callback){
	var data;
	data = arg * 2;
	console.log("2배수 : " + data);
	callback(data);
};