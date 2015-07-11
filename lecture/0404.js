var arr = [1,2,5,3,9,10,20,7];

console.log(arr.sort(numSort));
console.log(arr.sort(numSort2));
console.log(arr.sort(numSort3));
console.log(arr.sort(function(a, b){
	return a-b;
}));

function numSort(a, b){
	if(a>b){
		return 1;
	}else if(a<b){
		return -1;
	}else{
		return 0;
	}
};	

function numSort2(a, b){
	return a-b;
};

function numSort3(a, b){
	return b-a;
};