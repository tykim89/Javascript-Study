/**
 * @time 6 weeks
 * @since 2015-03-28
 * @author tykim
 * */

// Q1
var company = signIn("zum internet", "서초구 반포대로 3 이스트빌딩");
var student = signIn("이학생", 29, "금오공대");
var developer = signIn("김개발", 870912, "zum internet", 3);

var skillStack = [];
skillStack.push("java");
skillStack.push("javascript");
skillStack.push("mySql");
skillStack.push("bootstrap");

var freelancer = signIn("최프리", "010-3583-1515", skillStack, 6);

var memberList = [company, student, developer, freelancer];

function signIn(){
	var res = [];
	for(var i=0; i<arguments.length; i++){
		 res[i] = arguments[i];
	}
	return res;
};

function getMemberList(list){
	var result ='';
	for(var i=0; i<list.length; i++){
		switch(i){
			case 0 :
				result += '=======================================' + '\n';
				for(var j=0; j<company.length; j++){
					if(j==0){
						result += 'name : ' + company[j] + '\n';
					}else if(j==1){
						result += 'location : ' + company[j] + '\n';
					}
				}
				result += '=======================================' + '\n';
				break;
			case 1 :
				for(var j=0; j<student.length; j++){
					if(j==0){
						result += 'name : ' + student[j] + '\n';
					}else if(j==1){
						result += 'age : ' + student[j] + '\n';
					}else if(j==2){
						result += 'campus : ' + student[j] + '\n';
					}
				}
				result += '=======================================' + '\n';
				break;
			case 2 :
				for(var j=0; j<developer.length; j++){
					if(j==0){
						result += 'name : ' + developer[j] + '\n';
					}else if(j==1){
						result += 'birthday : ' + developer[j] + '\n';
					}else if(j==2){
						result += 'company : ' + developer[j] + '\n';
					}else if(j==3){
						result += 'developYear : ' + developer[j] + '\n';
					}
				}
				result += '=======================================' + '\n';
				break;
			case 3 :
				for(var j=0; j<freelancer.length; j++){
					if(j==0){
						result += 'name : ' + freelancer[j] + '\n';
					}else if(j==1){
						result += 'phoneNumber : ' + freelancer[j] + '\n';
					}else if(j==2){
						result += 'skillStack : ' + freelancer[j] + '\n';
					}else if(j==3){
						result += 'developYear : ' + freelancer[j] + '\n';
					}
				}
				break;
		}
	}
	console.log(result);
};

getMemberList(memberList);



// Q2
function Menu(name, price){
           
};

var menus = [ 
new Menu("삼겹살", 6000), 
		new Menu("돼지갈비", 6000),
		new Menu("목살", 8000),
		new Menu("항정살", 10000),
		new Menu("차돌박이", 10000),
		new Menu("한우등심", 12000),
		new Menu("한우갈비", 12000),
		new Menu("육회", 18000)
		];


function Customer(no, menu, count){
	this.no = no;
	this.menu = menu;
	this.count = count;
};

var normal = new Customer(0, "삼겹살", 3);
var coupang = new Customer(1, "돼지갈비", 4);
var coupang2 = new Customer(1, "차돌박이", 4);
var subscriber = new Customer(2, "항정살", 3);
var vip = new Customer(3, "육회", 3);

/*
	필요하면 각 손님별 추가코드를 작성해주세요
*/
Customer.prototype.limit=0;


function calculate(customer){
	/*
		코드를 완성해주세요
	*/
	console.log("===============");
};

calculate(normal);
calculate(coupang);
calculate(coupang2);
calculate(subscriber);
calculate(vip);
