// moles start popping up faster - timing interval that increases
// get as many points as you can - end to game


(function () {
"use strict";

	var gameInterval;	

// start game - button
// timer starts - need counter
	$("#start").click(function() {
	    activateMole();
	    gameInterval = setInterval (function() {
	    	activateMole();
	    }, 2000)
	    gameTimer();
	});

// hit the mole - click event on mole
// get a point - add to counter
	$(document).on('click', '.active', function() {
		var lastScore = $("#score").text();
		var newScore = parseInt(lastScore) + 1;
		var clickedMole = $(this);
		clickedMole.addClass("pow");
		$("#score").text(newScore);
	})

	function gameTimer () {
		var counter = 29;
		var countdown = setInterval(function() {
			$("#stopwatch").html(":" + counter);
			counter--
			if (counter < 0) {
				clearInterval(countdown);
				clearInterval(gameInterval);
				alert("Game Over");
			}
		}, 2000);
	}

// mole pops up - need randomizer for mole location, fade-in,fade-out
	function activateMole () {
		var randomNumber = Math.floor(Math.random() * 10);
		var moleLocation = $(".square")[randomNumber];
		$(moleLocation).addClass("active");
        setTimeout(function(){
    		$(moleLocation).removeClass("active");
    		$(moleLocation).removeClass("pow");
        }, 1000);
    };
})();





