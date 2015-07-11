function outer(){
	var name = 'tykim';
	
	function inner(){
		name += '@naver.com';
		name += ' Hello';
		console.log(name);
	};
	return inner;
};

var myFunc = outer();

console.log('outer : ');
outer();

console.log('myFunc : ');
myFunc();



var Counter = (function(){
	var privateCounter = 0;
	
	return {
		increment : function(){
			privateCounter++;
		},
		decrement : function(){
			privateCounter--;
		},
		value : function(){
			return privateCounter;
		}
	}
})();
console.log(Counter.value());
Counter.increment();
Counter.decrement();

var Counter = function(){
	var privateCounter = 0;
	
	return {
		increment : function(){
			privateCounter++;
		},
		decrement : function(){
			privateCounter--;
		},
		value : function(){
			return privateCounter;
		}
	}
};

var a = Counter();
a.value();