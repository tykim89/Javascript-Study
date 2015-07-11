/**
 * @time 4 weeks
 * @since 2015-03-14
 * @author tykim
 * */

function Member(name, job, workMonth){
	this.name = name;
	this.job = job;
	this.workMonth = workMonth;
};

var memberList = [];
memberList.push(new Member('홍길동', 'java개발자', 2));
memberList.push(new Member('장길산', 'php개발자', 3));
memberList.push(new Member('이순신', '프론트개발자', 6));
memberList.push(new Member('장보고', 'asp개발자', 5));

function getDeveloperList(memberList){
	
	var result = '';
	var member;
	var comp;
	
	for(var i=0; i<memberList.length; i++){
		member = memberList[i];
		
		for(var mb in member){
			
			if(mb == 'workMonth'){
				if(member[mb] >= 5){
					comp = '중급 개발자입니다.'
				}else{
					comp = '초급 개발자입니다.'
				}
			}
			
			switch(mb){
				case 'name' :
					result += '이름 : ' + member[mb] + '\n';
					break;
				case 'job' :
					result += '직업 : ' + member[mb] + '\n';
					break;
				default :
					result += comp + '\n';
			}

/* 		if(mb == 'name'){
				result += '이름 : ' + member[mb] + '\n';
			}else if(mb == 'job'){
				result += '직업 : ' + member[mb] + '\n';
			}else{
				result += comp + '\n';
			} */
			
		}
		result += '===================' + '\n';
	}
	console.log(result);
	
};

getDeveloperList(memberList);