var obj = {
	name : "김태영",
	age : 27
};

console.log(obj.name);
console.log(obj["name"]);



var htmlString = "";
for(var i=0; i<10; i++){
	htmlString += "<li>이동욱</li>";
}
console.log(htmlString);

var htmlString = [];
for(var i=0; i<10; i++){
	htmlString.push("<li>이동욱</li>");
}
htmlString.join();
console.log(htmlString);



function Member(name, age){
	this.name = name;
	this.age =age;
};

Member.description = "이것은 Member 생성자입니다.";
var member1 = new Member("이동욱", 28);
var memberProto = Member.prototype;

console.log(member1);
console.log(Member.description);
console.log(member1.description);
console.log(Member.prototype.description);



var Member = {};
Member.age = 29;
console.log(Member.age);
Member.age = undefined;
delete Member.age;
console.log(Member.age);

console.log(Member.job);
Member.job ="학생";

if(!Member.job){
	delete Member.job;
}
console.log(Member.job);



function Book(){
	this.title = "자바스크립트 ~~";
	this.price = 25000;
};

var book = new Book();
Book.prototype.category = "IT";
book.author = null;
book.totalPage = undefined;

for(var prop in book){
	console.log(prop+" : "+book[prop]);
}