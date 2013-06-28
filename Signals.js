$(document).ready(function(){
	$(".basecamp").hover(function () {
    	$(".Main").hide();
    	$(".Project").show();
    	$(".upperarrow 1").show();
    
    },
	function(){
		$(".Main").show();
		$(".Project").hide();
		$("upperarrow 1").hide();
	});
});