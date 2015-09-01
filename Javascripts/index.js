var width = window.innerWidth;
var height = window.innerHeight;
var mouse_x = -1;
var mouse_move = false;
var vel_x = 0;
var accel_x = 0;
var intervalHandle = null;

$(document).ready(function() {
	$(".globe-cont").css("width", height + "px");
	$(".globe-cont").css("padding-bottom", height + "px");

});

$(document).mousedown(function(event) {
	clearInterval(intervalHandle);
	mouse_x = event.pageX;
	mouse_move = true;
	vel_x = 0;
});

$(document).mousemove(function(event) {
	if(mouse_move == true) {
		vel_x = event.pageX - mouse_x;
		$(".img-cont").css("left", (parseInt($(".img-cont").css("left")) + vel_x) + "px");
		mouse_x = event.pageX;
	}
});

$(document).mouseup(function(event) {
	mouse_move = false;
	if(vel_x > 0) {
		accel_x = -0.8;
	} else {
		accel_x = 0.8;
	}
	intervalHandle = setInterval(function(){
		vel_x = vel_x + accel_x;
		$(".img-cont").css("left", (parseInt($(".img-cont").css("left")) + vel_x) + "px");
		if(Math.abs(vel_x) < 0.5) {
			vel_x = 0;
			clearInterval(intervalHandle);
		}
		console.log(vel_x);
	}, 10);
});

$(".globe-img").on('dragstart', function(event) { event.preventDefault(); });