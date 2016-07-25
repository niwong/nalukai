$(document).foundation();

	var i = 0;

$('.column1').click(function() {
	i++;

	if (i % 2 === 0) {
		$("#studInfo").remove();
		$(".triangle").remove();
	} else {

	var isOne = $(this).hasClass("column1");
	var isTwo = $(this).hasClass("column2");
	var isThree = $(this).hasClass("column3");

	if (isOne === true) {
		console.log('column1');
	}
	if (isTwo === true) {
		console.log('column2');
	}
	if (isThree === true) {
		console.log('column3');
	}

	$( "#row1" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
	$("#studInfo").after("<div class=\"triangle\"</div>");

	}
});

$('.column2').click(function() {
	i++;

	if (i % 2 === 0) {
		$("#studInfo").remove();
		$(".triangle").remove();
	} else {

		var isOne = $(this).hasClass("column1");
		var isTwo = $(this).hasClass("column2");
		var isThree = $(this).hasClass("column3");

		if (isOne === true) {
			console.log('column1');
		}
		if (isTwo === true) {
			console.log('column2');
		}
		if (isThree === true) {
			console.log('column3');
		}

		$( "#row1" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		$("#studInfo").after("<div class=\"triangle\"</div>");
	}
});

$('.column3').click(function() {
	i++;

	if (i % 2 === 0) {
		$("#studInfo").remove();
		$(".triangle").remove();
	} else {

		var isOne = $(this).hasClass("column1");
		var isTwo = $(this).hasClass("column2");
		var isThree = $(this).hasClass("column3");

		if (isOne === true) {
			console.log('column1');
		}
		if (isTwo === true) {
			console.log('column2');
		}
		if (isThree === true) {
			console.log('column3');
		}

		$( "#row1" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
		$("#studInfo").after("<div class=\"triangle\"</div>");

	}
});