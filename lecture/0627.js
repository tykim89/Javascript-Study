var MYAPP = MYAPP || {};

MYAPP.Parent = function(){};
MYAPP.Child = function(){};

MYAPP.some_var = 1;
MYAPP.modules = {};

MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {
	a : 1,
	b : 2
};
MYAPP.modules.module1 = {};

console.log(MYAPP.modules.module1.a);


/*
** namespace 패턴
*/
var MYAPP = MYAPP || {};

MYAPP.namespace = function(name){
	var parts = name.split('.'),
		Parent = MYAPP,
		i;

	if(parts[0] === 'MYAPP'){
		parts = parts.slice(1);
	}

	for(i=0; i<parts.length; i++){
		Parent[parts[i]] = Parent[parts[i]] || {};
		Parent =  Parent[parts[i]];
	}

	return Parent;
}

var module2 = MYAPP.namespace('MYAPP.modules.module2');
console.log(module2 === MYAPP.modules.module2);
console.log(module2);




var today = new Date();
/*var year = today.getFullYear();
var month = today.getMonth();*/
var date = today.getDate();
var day = ['일요일', '월요일', '화요일', '수요일', '목요일','금요일', '토요일'];

console.log("오늘은 " + date + "일 " + day[today.getDay()] + "입니다.");


(function(){

	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',],
		today = new Date();
		message = 'Tooday is ' + days[today.getDay()] + ', ' + today.getDate();

	console.log(message);
})();




(function(who, when){
	console.log('I met ' + who + ' on ' + when);
}('이동욱', new Date()));



(function(a, b, c){
	console.log(a*b*c);
}(3, 2, 3));


console.log("=================");


var obj = {
	message : (function(){
		var who = 'me',
			what = 'call';
			
		return what + ' ' + who;
	})(),
	getMessage : function(){
		console.log('call me');
	}
};

console.log(obj.getMessage());
obj.message = '111';
console.log(obj.message);


console.log("=================");


var Calculator = (function(){
	var counter = 0;

	return {
		increment : function(){
			return counter++;
		},
		reset : function(){
			counter = 0;
			return counter;
		},
		decrease : function(){
			return counter--;
		},
		show : function(){
			console.log(counter);
		}
	}
})();

Calculator.show();
Calculator.increment();
Calculator.show();
Calculator.decrease();
Calculator.show();
Calculator.decrease();
Calculator.show();