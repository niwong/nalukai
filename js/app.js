$(document).foundation();

	var i = 0;

$('.column1').click(function() {
	i++;

	if (i % 2 === 0) {
		$("#studInfo").remove();
		$(".triangleLeft").remove();
		$(".triangleCenter").remove();
		$(".triangleRight").remove();
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
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isTwo === true) {
			$( "#row2" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isThree === true) {
			$( "#row3" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isFour === true) {
			$( "#row4" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isFive === true) {
			$( "#row5" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isSix === true) {
			$( "#row6" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isSeven === true) {
			$( "#row7" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
	}
});

$('.column2').click(function() {
	i++;

	if (i % 2 === 0) {
		$("#studInfo").remove();
		$(".triangleLeft").remove();
		$(".triangleCenter").remove();
		$(".triangleRight").remove();
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
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isTwo === true) {
			$( "#row2" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isThree === true) {
			$( "#row3" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isFour === true) {
			$( "#row4" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isFive === true) {
			$( "#row5" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isSix === true) {
			$( "#row6" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isSeven === true) {
			$( "#row7" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
	}
});

$('.column3').click(function() {
	i++;

	if (i % 2 === 0) {
		$("#studInfo").remove();
		$(".triangleLeft").remove();
		$(".triangleCenter").remove();
		$(".triangleRight").remove();
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
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isTwo === true) {
			$( "#row2" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isThree === true) {
			$( "#row3" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isFour === true) {
			$( "#row4" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isFive === true) {
			$( "#row5" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isSix === true) {
			$( "#row6" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
		if (isSeven === true) {
			$( "#row7" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
			$("#studInfo").before("<div class=\"triangleLeft\"</div>");	
		}
	}
});