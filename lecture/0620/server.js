var express = require('express');
var app = express();

app.get('/js/study', function(req, res){
	res.send([{name:'TYKim'}, {name:'TYKim2'}]);
});

app.get('/js/study/:id',function(req, res){
	var result = {
		id : req.params.id,
		name : req.params.id + '님의 이름',
		age : '27'
	};
	res.jsonp(result);
});

app.listen(8087);
console.log('Express Listening on port 8087...');