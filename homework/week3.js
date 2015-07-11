/**
 * @time 3 weeks
 * @since 2015-03-07
 * @author tykim
 * */

//Work1
function aa(a){
	
	for(var i=0; i<a; i++){
		var value = '';
		
		for(var j=0; j<a-i; j++){
			value += ' ';
		}
		for(var k=0; k<i*2+1; k++){
			value += '*';
		}	
		console.log(value);
	}
	
	for(var i=0; i<a-1; i++){
		value = '';
		
		for(var j=0; j<i+2; j++){
			value += ' ';
		}
		for(var k=0; k<2*a-(i*2+3); k++){
			value += '*';
		}
		console.log(value);
	}
	
}

console.log('=============');
aa(5);
console.log('=============');
aa(3);


//Work2
var a;
function sumLineNum(a){
	
	var mok = parseInt(a/10);
	var res1 = a%10;
	var res2;
	var sum = res1;

	for(var i=0; i<a; i++){
		res2 = mok%10;
		sum += res2;
		mok = parseInt(mok/10);
		if(mok==0){
			break;
		}
	}
	console.log(sum);
}

sumLineNum(5678);