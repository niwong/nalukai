$(document).foundation();

	var i = 0;

$('.column1').click(function() {
	i++;

	if (i % 2 === 0) {
		$("#studInfo").remove();
		$(".triangle").remove();
	} else {
		var isOne = $(this).hasClass("row1");
		var isTwo = $(this).hasClass("row2");
		var isThree =$(this).hasClass("row3");
		var isFour = $(this).hasClass("row4");
		var isFive = $(this).hasClass("row5");
		var isSix = $(this).hasClass("row6");
		var isSeven = $(this).hasClass("row7");

		if (isOne === true) {
			$( "#row1" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#miranda');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var img = imgPos();

				var move = img - 12;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		// if (isTwo === true) {
		// 	$( "#row2" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#keona');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();

		// }
		// if (isThree === true) {
		// 	$( "#row3" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#ian');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();

		// }
		// if (isFour === true) {
		// 	$( "#row4" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#kiana');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();

		// }
		// if (isFive === true) {
		// 	$( "#row5" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#gabby');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();

		// }
		// if (isSix === true) {
		// 	$( "#row6" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#ethan');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();

		// }
		// if (isSeven === true) {
		// 	$( "#row7" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#kelli');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();

		// }
	}
});

$('.column2').click(function() {
	i++;

	if (i % 2 === 0) {
		$("#studInfo").remove();
		$(".triangle").remove();
	} else {
		var isOne = $(this).hasClass("row1");
		var isTwo = $(this).hasClass("row2");
		var isThree =$(this).hasClass("row3");
		var isFour = $(this).hasClass("row4");
		var isFive = $(this).hasClass("row5");
		var isSix = $(this).hasClass("row6");
		var isSeven = $(this).hasClass("row7");

		if (isOne === true) {
			$( "#row1" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#aya');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var img = imgPos();

				var move = (img * 3) + 8;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		// if (isTwo === true) {
		// 	$( "#row2" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#sophia');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();

		// }
		// if (isThree === true) {
		// 	$( "#row3" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#sheridan');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();

		// }
		// if (isFour === true) {
		// 	$( "#row4" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#lei');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();

		// }
		// if (isFive === true) {
		// 	$( "#row5" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#ally');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();

		// }
		// if (isSix === true) {
		// 	$( "#row6" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#julia');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();

		// }
		// if (isSeven === true) {
		// 	$( "#row7" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#noah');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();	

		// }
	}
});

$('.column3').click(function() {
	i++;

	if (i % 2 === 0) {
		$("#studInfo").remove();
		$(".triangle").remove();
	} else {
		var isOne = $(this).hasClass("row1");
		var isTwo = $(this).hasClass("row2");
		var isThree =$(this).hasClass("row3");
		var isFour = $(this).hasClass("row4");
		var isFive = $(this).hasClass("row5");
		var isSix = $(this).hasClass("row6");
		var isSeven = $(this).hasClass("row7");

		if (isOne === true) {
			$( "#row1" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#jasmine');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var img = imgPos();


				// 26 = offset
				var move = (img * 5) + 26;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();
		}
		// if (isTwo === true) {
		// 	$( "#row2" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#eli');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();
		// }
		// if (isThree === true) {
		// 	$( "#row3" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#renz');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();
		// }
		// if (isFour === true) {
		// 	$( "#row4" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#makai');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();
		// }
		// if (isFive === true) {
		// 	$( "#row5" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#mason');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();
		// }
		// if (isSix === true) {
		// 	$( "#row6" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#ema');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();

		// }
		// if (isSeven === true) {
		// 	$( "#row7" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		// 	$("#studInfo").before("<div class=\"triangle\"</div>");	

		// 	// centering of triangle
		// 	var imgCenterX = 0;
		// 	var triCenterX = 0;

		// 	function alterPosX(imgCenterX, triCenterX) {

		// 		function imgPos() {
		// 			var $this = $('#nick');
		// 			var halfImgWidth = $this.width() / 2;

		// 			imgCenterX = halfImgWidth;

		// 			return imgCenterX;
		// 		}

		// 		imgPos();

		// 		var move = imgCenterX - 12;

		// 		$('.triangle').css('margin-left', move);

		// 	}

		// 	alterPosX();
		// }
	}
});