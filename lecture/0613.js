function Person(name){
	this.name = name || "혁준";
}

Person.prototype.getName = function(){
	return this.name;
}

Person.prototype.getAge = function(){
	return this.age;
}

function Korean(name, age){
	this.age = age || 29;
}
Korean.prototype = new Person();

var kor2 = new Korean("동욱22", 22);
console.log(kor2.getName());
console.log(kor2.getAge());


// 자바스크립트의 상속 구현
var person = {
	type : "인간",
	getType : function(){
		return this.type;
	},
	getName : function(){
		return this.name;
	}
};

var joon = Object.create(person);
joon.name = "혁준";

console.log(joon.getType());
console.log(joon.getName());




function Person(){};
var p1 = new Person();
function Book(){};
var p2 = new Book();
function show(obj){
	if(obj instanceof Person){
		console.log("Person의 인스턴스입니다.");
	}else if(obj instanceof Book){
		console.log("Book의 인스턴스입니다.");
	}else{ 
		console.log("잘못된 입력입니다.");
	}
}
show(p1);
show(p2);
show(new Object());