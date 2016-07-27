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
			$( "#row1" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Miranda Canniff</h5><ul class=\"studDet\"><li>—Concept Design—</li><li>Kohala High School</li><li>Junior</li></ul><p>My life revolves around design. Art imitates life, and I think it’s truly transcendent to be able to express myself creatively in a universal format that people will understand without words.Visual representation and communication is so important to me, so I imagine myself with a career path revolving around Arts and Communication. I took a media class my Freshman year of High School, and we worked on the Yearbook and the school newspaper. That’s really where I found my passion of getting messages across to people. Graphic design is such a perfect way to do this because it has the potential to encompass both the logos and pathos involved in connecting with people.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;

			function alterPosX(imgCenterX) {

				function imgPos() {
					var $this = $('#miranda');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = imgCenterX - 12 + rowMargin;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isTwo === true) {
			$( "#row2" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Keona Conroy-Humphrey</h5><ul class=\"studDet\"><li>—Engineering—</li><li>Lanai High School</li><li>Junior</li></ul><p>I have a deep passion for STEM. I was first introduced to STEM in middle school and I immediately fell in love. Not just with the science, technology, engineering and math aspects but with everything it touched. Programming, digital media, photography, videography, journalism, leadership, and much, much more. The many concepts it covered allowed me to discover my passion, engineering, and fueled my fascination even more. With STEM also came leadership opportunities that helped shaped me as a leader. Leadership is something that help me with my engineering work and vice versa.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#keona');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = imgCenterX - 12 + rowMargin;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isThree === true) {
			$( "#row3" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Ian Denzer</h5><ul class=\"studDet\"><li>—Full-Stack Engineer—</li><li>Kealakehe High School</li><li>Senior</li></ul><p>I’ve always loved building, taking apart, and rebuilding things, from which, I’ve gained a strong interest in engineering and creating a universal background to uniquely solve problems. Even when I was younger, tinkering with lego kits I obsessed over creating my own unique designs, ignoring the kit included instructions as if they were never even there. You know? It’s a powerful concept, creating something unique, something useful, something people will enjoy, and by becoming a full stack developer and engineer, I know I can approach any problem recognizing I will always be able to at least partially solve it.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#ian');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = imgCenterX - 12 + rowMargin;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isFour === true) {
			$( "#row4" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Kiana Liu</h5><ul class=\"studDet\"><li>—Videography—</li><li>Kamehameha Maui High School</li><li>Sophomore</li></ul><p>I realized my passion was photography at this place called Hana in Maui. I was camping with my family and I had an old camera from my mom that I was using. We were super disconnected from the cities, away from technology, without wifi. All I could do was take pictures. So I took pictures of random things like nature. One day we went to the waterfalls, and just saw this stunning waterfall with a rainbow in front. I was so beautiful I wanted to capture it. Everything just clicked, like “that’s my passion, this is what I’m here for, this is why I’m on Earth” and everything else disappeared. It was a magical moment.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#kiana');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = imgCenterX - 12 + rowMargin;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isFive === true) {
			$( "#row5" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Gabriel \"Gabby\" Navalta</h5><ul class=\"studDet\"><li>—Videography—</li><li>Laupahoehoe Community Public Charter School</li><li>Junior</li></ul><p>Passions? Making videos. Aspirations? Really up in the air. I like making videos, but the content I make now is not really making a change for the better. Not yet, at least. I see what other videographers are able to make, but what really stands out to me is the message they portray and the changes they’re able to make. They travel the world and inspire people to push their boundaries in what they can make. They always push themselves to ask: “why?” and I really love that. I want to create content that will inspire others just like how their content inspires me.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#gabby');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = imgCenterX - 12 + rowMargin;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isSix === true) {
			$( "#row6" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Ethan Sandomire</h5><ul class=\"studDet\"><li>—Negotiation/Business—</li><li>Mid-Pacific High School</li><li>Freshman</li></ul><p>A whirligig is a wooden sculpture that moves around powered by a mini windmill. I first started making them about two years ago. I really enjoy the finished product because it moves in an interesting way. The one that I made was a lumberjack splitting a log in half. A four-bladed propeller was the power source. The mechanical function that moves the lumberjack was an eccentric cam shaft that moved up and down, thus moving the lumberjack itself. I love making these because animated sculptures make me happy.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#ethan');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = imgCenterX - 12 + rowMargin;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isSeven === true) {
			$( "#row7" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Kelli Tamashiro</h5><ul class=\"studDet\"><li>—Programming/Design—</li><li>Saint Andrews Priory</li><li>Junior</li></ul><p>In third grade, I asked my dad for a website for my birthday. My dad has always been my “enabler,” and would always try to find ways to support me, no matter how weird the request. At the time, I was seriously obsessed with a browser game called Club Penguin. I would constantly check all the fansites and blogs. I thought it was so cool that you could have something online where you could just express yourself. My dad noticed how I was just so into this game, and introduced me to a blogging site where I could create my own website, simultaneously fulfilling my birthday wish. Naturally, I started putting up whatever I could think of. The majority of the website was made up of Club Penguin drawings made in Microsoft Paint and poorly written tips about where to find secret areas, but I was excited about it nonetheless, and I would invite all my friends to check out this cool thing I created.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#kelli');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = imgCenterX - 12 + rowMargin;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
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
			$( "#row1" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Aya Chang</h5><ul class=\"studDet\"><li>—Photography—</li><li>Kamehameha Kapalama High School</li><li>Junior</li></ul><p>If I were to choose just one thing I’m interested in, it would be photography because of its ability affect peoples’ emotions. Photography has the unique ability to communicate in the way that words can’t. As you experience the world with photography, over time you develop an innate ability to recognize the best way to capture an image. After being exposed to photography, I’ve started to perceive life in an entirely different way. Small interactions between people have become more apparent–a glance between strangers, a laugh exchanged between a couple. I’ve learned to notice the light reflecting off of the trees at sunset.  I’ve finally begun to appreciate the beauty that is our world.</p></div>" );
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

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				console.log(imgPadding);

				var move = (imgCenterX * 3) - 12 + rowMargin + (imgPadding * 2);

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isTwo === true) {
			$( "#row2" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Sophia Davis</h5><ul class=\"studDet\"><li>—Programming—</li><li>Kihei Charter School</li><li>Junior</li></ul><p>There’s a picture of me at less than two years old standing on my Uncle’s desk in front of giant old computer monitor, with my little fingers resting on the keyboard.When I was little, my dad would explain to my sister and I about how all sorts of things worked, from airplanes with cameras on their noses to the tiny little electrons flowing through circuits that light up our modern world. I became obsessed with anything STEM. I’ve continued to pursue that love of technology, creating things, and learning everything I possibly can. My dream is to create a biomedical technologies startup that researches cures for diseases/conditions and implements them using engineering. I used to dream a lot of the future and I often felt like I was born too early.  However, now, I want to work towards helping to build the bright future that I dream about so often.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#sophia');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = (imgCenterX * 3) - 12 + rowMargin + (imgPadding * 2);

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isThree === true) {
			$( "#row3" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Sheridan Hanby</h5><ul class=\"studDet\"><li>—Writing—</li><li>Hawaii Technology Academy</li><li>Junior</li></ul><p>I wish to go into Forensic Anthropology. Forensic Anthropology seems disconnected from entrepreneurship, but I believe that by learning these skills and harnessing them I can change the way people view forensic science. A decent amount of forensic science is written off or not taken seriously, and most of this is because of the technology used. By going into the field I not only want to learn about the field itself but also use my skills to evolve the technology within it.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#sheridan');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = (imgCenterX * 3) - 12 + rowMargin + (imgPadding * 2);

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isFour === true) {
			$( "#row4" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Leilani Maui</h5><ul class=\"studDet\"><li>—Programming—</li><li>Homeschool</li><li>8th Grade</li></ul><p>I really enjoy learning about programming. It was my first experience with coding and I like I have power and control when I use it. Whatever it was that I type is exactly what happens. I can make my own little world in my own way. I love coding and decided to keep pursuing it in programming.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#lei');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = (imgCenterX * 3) - 12 + rowMargin + (imgPadding * 2);

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isFive === true) {
			$( "#row5" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Ally Nisenoff</h5><ul class=\"studDet\"><li>—Programming/Photography—</li><li>West Hawaii Explorations Academy</li><li>Senior</li></ul><p>With my first robotics program I was hooked. All it said was: print “Hello World.” It amazed me, this simple piece of code, code I never thought I’d be able to write. Afterwards, I read everything I could about coding. I practiced, practiced, and practiced some more. I got so into it that I taught myself how to program an FRC robot, and started looking into other programming languages. I know now, no matter what I decide to do in my future career, these skills will benefit me.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#ally');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = (imgCenterX * 3) - 12 + rowMargin + (imgPadding * 2);

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isSix === true) {
			$( "#row6" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Julia Smith</h5><ul class=\"studDet\"><li>—Programming/Photography—</li><li>West Hawaii Explorations Academy</li><li>Junior</li></ul><p>With my first robotics program I was hooked. All it said was: print “Hello World.” It amazed me, this simple piece of code, code I never thought I’d be able to write. Afterwards, I read everything I could about coding. I practiced, practiced, and practiced some more. I got so into it that I taught myself how to program an FRC robot, and started looking into other programming languages. I know now, no matter what I decide to do in my future career, these skills will benefit me</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#julia');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = (imgCenterX * 3) - 12 + rowMargin + (imgPadding * 2);

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isSeven === true) {
			$( "#row7" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Noah Williams</h5><ul class=\"studDet\"><li>—Creative Strategy—</li><li>Punahou School</li><li>Senior</li></ul><p>I think it’s hard for me to say my life revolves around any certain hobby or interest. I’ve always been the type to figure out how to solve problems while working toward a larger goal. A lot of times the end goal seems far off and grandiose, but I really love navigating the steps it takes, and having to learn skills and theories on the spot to materialize that bigger, “art-student” vision. Or, parts of it at least. I’ve recently been involving myself in event planning, so when it comes to strategizing, organizing, and orchestrating all of the different moving parts to work together perfectly, it’s really an incredible feeling.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#noah');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = (imgCenterX * 3) - 12 + rowMargin + (imgPadding * 2);

				$('.triangle').css('margin-left', move);

			}

			alterPosX();	

		}
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
			$( "#row1" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Jasmine Conroy-Humphrey</h5><ul class=\"studDet\"><li>—Engineering—</li><li>Lanai High School</li><li>Junior</li></ul><p>For the past three years, my school has actively focused on science, technology, engineering, and mathematics. I feel like STEM is a field where I really fit in. I go to an after school program to work on projects of my choice and we go to an annual STEM conference on Maui where we showcase our the projects we’ve been working on over the last year. Being a part of STEM has given me the opportunity to be a part of some incredible projects with equally incredible people.</p></div>" );
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

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = (imgCenterX * 5) + rowMargin + (imgPadding * 4) - 12;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isTwo === true) {
			$( "#row2" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Eli Dawson</h5><ul class=\"studDet\"><li>—Design—</li><li>West Hawaii Explorations Academy</li><li>Sophomore</li></ul><p>When I was in the seventh grade, I joined an after school app design class. That class was my first ever experience with designing anything that wasn’t a sandcastle. I made a very basic application with Sketch and a simple wire framing program using Google’s Material Design documents. Even if my application was crude, I fell in love with digital design. It was something that felt natural to me. I haven’t stopped since.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#eli');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = (imgCenterX * 5) + rowMargin + (imgPadding * 4) - 12;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isThree === true) {
			$( "#row3" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Renezel \"Renz\" Lagran</h5><ul class=\"studDet\"><li>—Graphic Design/Videography—</li><li>Maui High School</li><li>Senior</li></ul><p>I've always had passion in creativity and technology. My favorite product of its perfect combination is graphic design. I discovered this passion in 8th grade — where my curiosity became too difficult to manage after seeing a manipulated photo of a gorilla's head on a bird's body. My goal was to replicate this silly yet fascinating work. In order to do this, I needed to learn Photoshop. Fast forward to today, I can do more than defy nature's work. I commit myself to the art of typography, color combinations, and everything to do with craft. Graphic design has become part of my everyday routine--something I do for the community and for myself. Creating logos, posters and banners for small businesses combined my passion of volunteering and designing.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#renz');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = (imgCenterX * 5) + rowMargin + (imgPadding * 4) - 12;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isFour === true) {
			$( "#row4" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Makai Mossman</h5><ul class=\"studDet\"><li>—Design/3D Modeling—</li><li>Kamehameha Maui</li><li>Senior</li></ul><p>I absolutely love to design things. Ever since I could, I've been drawing out things I'd love to build. However, I don't have the know-how to actually build the things I've drawn so I want to pursue a career as a mechanical engineer so I can finally build one of my latest designs.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#makai');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = (imgCenterX * 5) + rowMargin + (imgPadding * 4) - 12;

				$('.triangle').css('margin-left', move);
			}

			alterPosX();

		}
		if (isFive === true) {
			$( "#row5" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Mason Puett</h5><ul class=\"studDet\"><li>—Videography—</li><li>Konawaena High School</li><li>Senior</li></ul><p>One time my grandfather and I built a birdhouse, and right as we were about to finish he yelled “Last piece!” I can still hear his voice from that moment. It was at that moment I knew I wanted to build and design products. As I got older, I played video games all the time, but eventually I got curious and started taking apart my consoles. The designs of the systems fascinated me, and I always found myself imagining how I could improve on their designs. I lost a few of them in the process, but the idea that I could innovate and learn from my mistakes was really exciting to me.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#mason');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = (imgCenterX * 5) + rowMargin + (imgPadding * 4) - 12;

				$('.triangle').css('margin-left', move);
			}

			alterPosX();

		}
		if (isSix === true) {
			$( "#row6" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Emiley Stallings</h5><ul class=\"studDet\"><li>—Writing/Gray Hat—</li><li>BYU Independent Study</li><li>Sophomore</li></ul><p>I am the head programmer on my robotics team. I have had a little design experience from helping out with app designs. I’m very good at getting along with everyone. Back on Oahu, I assisted with teaching kids how to use a program called Scratch. In the middle of the camp, one of the mentors suggested that I should learn Xcode, and the experience of teaching myself this programming language has been amazing. In the future I want to create an app for IOS that users would genuinely enjoy.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#ema');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = (imgCenterX * 5) + rowMargin + (imgPadding * 4) - 12;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
		if (isSeven === true) {
			$( "#row7" ).after("<div class=\"callout\" id=\"studInfo\"><h5 class=\"names\">Nicholas \"Nick\" Wong</h5><ul class=\"studDet\"><li>—Full-Stack Developer—</li><li>Kamehameha Kapalama</li><li>Junior</li></ul><p>The seventh grade marked the beginning of my journey teaching myself how to write code.Coding soon became a passion for me that took over my free time. I felt I found yet another method to express myself. Through my code, I am able address problems affecting me, my community, and the world. I revolutionized the way companies conduct business in Hawaii by giving local companies an online presence, allowing their business to be conducted at a much faster rate. Many businesses today have a problem with connecting to potential clients quickly and effectively. Utilizing my web design and webmaster skills I help fix this problem through my work with Hawaii Water and Drainage (HWAD). I created and currently administer a business-oriented website that allows HWAD to display their work to potential clients and serve as a catalyst in their client-solidifying process.</p></div>" );
			$("#studInfo").before("<div class=\"triangle\"</div>");	

			// centering of triangle
			var imgCenterX = 0;
			var triCenterX = 0;

			function alterPosX(imgCenterX, triCenterX) {

				function imgPos() {
					var $this = $('#nick');
					var halfImgWidth = $this.width() / 2;

					imgCenterX = halfImgWidth;

					return imgCenterX;
				}

				var imgCenterX = imgPos();

				var rowMarginString = $('.row').css('margin-left');
				var rowMargin = parseInt(rowMarginString);

				var imgPaddingString = $('.headshotCont').css('padding-left');
				var imgPadding = parseInt(imgPaddingString);

				var move = (imgCenterX * 5) + rowMargin + (imgPadding * 4) - 12;

				$('.triangle').css('margin-left', move);

			}

			alterPosX();

		}
	}
});