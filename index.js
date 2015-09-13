$(document).ready(function() {

	$(".tint").css("opacity", 1.0);
	$(".tint").hover(function() {
		$(this).animate({opacity: 0.7}, 500);
	}, function() {
		$(this).animate({opacity: 1}, 500);
	});
	

	$(".tint").mouseenter(function() {
		$(this).animate({opacity: 0.7}, 500);
	});

	$(".tint").mouseleave(function() {
		$(this).animate({opacity: 1}, 500);
	});
});