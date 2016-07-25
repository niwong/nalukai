$(document).foundation();

	var i = 0;

$('#name').click(function() {
	console.log('click');
	i++;
	console.log(i);

	if (i % 2 === 0) {
		console.log('even');
		$("#studInfo").remove();
	} else {
		console.log('odd');
		$( "#row1" ).after("<div class=\"callout\" id=\"studInfo\"><h5>This is a callout.</h5><p>It has an easy to override visual style, and is appropriately subdued.</p></div>" );
	}
});


// .append a triangle based on class and id ex. columns 2 people will have a middle triangle