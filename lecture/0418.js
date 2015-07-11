//클로져
var mySon = (function(){
	return {
		name : '달봉이',
		age : 8,
		increaseAge : function(){
			this.age++;
		}
	};
})();

mySon.increaseAge();
mySon.increaseAge();

for(var prop in mySon){
	console.log(prop + " : " + mySon[prop]);
}

// object 선언 방법2
var mySon = {
	name : '달봉이',
	age : 8,
	increaseAge : function(){
		this.age++;
	}
};

// object 안에 하위 object
var child = {
	name : '자식',
	age : 7,
	Parent : {
		name : '부모',
		age : 41
	}
};

console.log("이 표현 뭘까요??" + child.Parent.name);


// 프로토타입과 this
Array.prototype.sum = function(){
	var sum=0;
	for(var i=0; i<this.length; i++){
		sum += this[i];
	}
	return sum;
};

var arr3 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr3.sum());


// 프로토타입
function Person(name){
	this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function(){
	return 'Ny name is '+ this.name;
}

var p2 = new Person('TyKim');
console.log(p2.introduce());


// 상속
function Person(name){
	this.name = name + '사람';
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
	return 'Ny name is '+ this.name;
}

function Programmer(name){
	this.name = name + ' 개발자';
}
Programmer.prototype = new Person();

var p1 = new Programmer('TyKim');
console.log(p1.name);
console.log(p1.introduce());

// 부모 자식의 겹치는 name속성을 해결할 수 있는 방법은?

