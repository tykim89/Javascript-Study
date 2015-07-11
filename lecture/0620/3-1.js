$(function(){

	var $submitBtn = $("#submit");
	var $id = $("#id");
	var $name = $("#name");
	var $age = $("#age");

	$submitBtn.click(function(){
		$.ajax({
			type:"GET",
			url:"http://localhost:8087/js/study/tykim",
			dataType:"jsonp",
			success:function(result){
				$id.val(result.id);
				$name.val(result.name);
				$age.val(result.age);
			}
		});
	});
})