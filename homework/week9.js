var Book = (function(){
	var name, category, price, author, salePrice;
	
	return {
		setName : function(nm){
			name = nm;
		},
		setCategory : function(cate){
			category = cate;
		},
		setPrice : function(prc){
			price = prc;
		},
		setAuthor : function(auth){
			author = auth;
		},
		setSalePrice : function(salePrc){
			//salePrice = parseInt(price * (salePrc*0.01));
			salePrice = price * salePrc * 0.01;
		},
		showInfo : function(){
			console.log('name : ' + name);
			console.log('category : ' + category);
			console.log('price : ' + price);
			console.log('author : ' + author);
			console.log('salePrice : ' + salePrice);
		/*	for(prop in Book){
				console.log(prop + ' : ' + Book[prop]);
			};*/
		}
	};
})();

Book.setName('자바스크립트 객체지향 프로그래밍');
Book.setCategory('IT');
Book.setPrice(25000);
Book.setAuthor('황인균');
Book.setSalePrice(70);
Book.showInfo();

console.log("====== Book 정보 변경 ======");
Book.setName('자바스크립트 핵심가이드');
Book.setCategory('IT');
Book.setPrice(22000);
Book.setAuthor('더글라스 크락포트');
Book.setSalePrice(70);
Book.showInfo();
