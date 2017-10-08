var currentActive = 'Calendar';

var rotateSpeed = 200;
var labelSpeed = 600;
var menuSpeed = 300;
var navSpeed = 400;
var opacitySpeed = 500;
var showSpeed = 300;
var dataSpeed = 800;
var hideSpeed = 300;
var swapSpeed = 1600;




$(document).ready(function() {

	if (window.navigator.standalone) {
		$('body').css('background', 'none');
		$('#site').css('top', '0px').css('left', '0px');
		//$('.statusBar').addClass('hidden');
	}

	$('#site').click(function(e){
		var xCoor = e.pageX;
		var yCoor = e.pageY;
		fingerTap(xCoor,yCoor);

	});

	//setClickHandlers();
	runAnimations();

});

function runAnimations() {
	setTimeout(function(){
		fingerTap(300,23);
		plusClick();
		setTimeout(function(){
			spellTrash()
			keyboardSubClick();
			setTimeout(function(){
				fingerTap(294,526);
				secondKeyboardClick();
				setTimeout(function(){
					fingerTap(42,23);
					backFromAppointment();
					setTimeout(function(){
						runAnimations();
					}, 1000);
				}, 6500);
			}, 2500);
		}, 2500);
	}, 1500);
}


function fingerTap(x,y) {
	//console.log("" + x + ", " + y);
	$('.fingerTap').css({'height':'40px', 'width':'40px', 'opacity':'.8', 'border-radius':'20px', 'left':(x-20), 'top':(y-20)});
	$('.fingerTap').stop().animate({'height':'44px', 'width':'44px', 'opacity':'1', 'border-radius':'22px', 'left':(x-22), 'top':(y-22)}, 75, function(){
		$('.fingerTap').stop().animate({'height':'20px', 'width':'20px', 'opacity':'.3', 'border-radius':'10px', 'left':(x-10), 'top':(y-10)}, 350, function(){
			$('.fingerTap').css('opacity', '0');
		});

	});
}

function spellTrash() {
	var coordinateArray = [{x:144, y:363, letter:"T"}, {x:112, y:363, letter:"R"}, {x:32, y:419, letter:"A"}, {x:65, y:419, letter:"S"}, {x:192, y:419, letter:"H"}, {x:170, y:527, letter:" "}, {x:96, y:439, letter:"D"}, {x:32, y:419, letter:"A"}, {x:177, y:363, letter:"Y"}];
	var arrayPosition = 0;
	var interval = setInterval(function(){
		var xPos = coordinateArray[arrayPosition].x;
		var yPos = coordinateArray[arrayPosition].y;
		fingerTap(xPos,yPos);
		arrayPosition++;
		if (arrayPosition >= 9) {
			clearInterval(interval);
		}
	}, 70);

}

function plusClick() {

	if (currentActive == 'Calendar') {
		barVisible = false;
		$('.popUpMenu').stop().animate({'top': '549px'}, rotateSpeed, function() {
			$('.popUpMenu').addClass('hidden');
		});		
		$('.content').unbind();
		$('.content').click(function() {
			//resetPlusClick();
		});
		addVisible = true;
		$('.keyboard').stop().animate({'top': '332px'}, 200);
		$('.content').stop().animate({'top': '20px'}, showSpeed);
		$('.topBar').stop().animate({'height': '65px'}, showSpeed);
		$('.menuIcon').stop().animate({'opacity': '0'}, showSpeed);
		$('.addIcon').stop().animate({'opacity': '0'}, showSpeed);
		$('.title').stop().animate({'opacity': '0'}, showSpeed, function() {
			$('.menuIcon, .addIcon, .title').addClass('hidden');
		});
		$('.enterAppointment').removeClass('hidden').stop().animate({'top': '4px', 'opacity': '1'}, showSpeed);
		$('.familyDots').removeClass('hidden').stop().animate({'top': '4px', 'opacity': '1'}, showSpeed, function() {
			firstKeyboardClick();
		});
	}
}

function resetPlusClick() {
	$('.content, .keyboard').unbind();
	$('.keyboard').stop().animate({'top': '548px'}, 200);
	$('.content').stop().animate({'top': '0px'}, hideSpeed);
	$('.topBar').stop().animate({'height': '44px'}, hideSpeed);
	$('.menuIcon, .addIcon, .title').removeClass('hidden').stop().animate({'opacity': '1'}, hideSpeed);
	$('.enterAppointment').stop().animate({'top': '-16px', 'opacity': '0'}, showSpeed);
	$('.familyDots').stop().animate({'top': '-16px', 'opacity': '0'}, showSpeed, function() {
		$('.enterAppointment, .familyDots').addClass('hidden');
	});
	//setScrollListener();
}

function firstKeyboardClick() {
	$('.keyboard, .content').unbind();
	$('.content').click(function() {
		//resetFirstKeyBoardClick();
	});
	$('.keyboard').click(function() {
		//keyboardSubClick();
	});

}

function keyboardSubClick(){
	$('#textEntry').addClass('hidden');
	$('.textEntryData').removeClass('hidden').stop().animate({'opacity': '1'}, dataSpeed);
	$('.allDotSelected').stop().animate({'opacity': '1'}, dataSpeed);
	$('.allDotBlack').stop().animate({'opacity': '0'}, dataSpeed);
	$('.cursor').stop().animate({'top': '3px', 'left': '122px'}, dataSpeed, function() {
		$('.keyboard').click(function() {
			//secondKeyboardClick();
		});
	});


}

function resetFirstKeyBoardClick() {
	$('.content, .keyboard').unbind();
	$('.keyboard').stop().animate({'top': '548px'}, 200);
	$('.content').stop().animate({'top': '0px'}, hideSpeed);
	$('.topBar').stop().animate({'height': '44px'}, hideSpeed);
	$('.textEntryData').stop().animate({'opacity': '0', 'top': '-11px'}, hideSpeed);
	$('.menuIcon, .addIcon, .title').removeClass('hidden').stop().animate({'opacity': '1'}, hideSpeed);
	$('.enterAppointment').stop().animate({'top': '-16px', 'opacity': '0'}, showSpeed);
	$('.familyDots').stop().animate({'top': '-16px', 'opacity': '0'}, showSpeed, function() {
		$('.enterAppointment, .familyDots').addClass('hidden');
		$('#textEntry').removeClass('hidden');
		$('.cursor').css('left', '8px').css('top', '4px');
		$('.textEntryData').addClass('hidden').css('top', '9px');
		$('.allDotSelected').css('opacity', '0');
		$('.allDotBlack').css('opacity', '1');
	});
	//setScrollListener();
}

function secondKeyboardClick() {
	$('.keyboard, .content').unbind();
	moveApptHTML();
	$('.newContent').removeClass('hidden');
	$('.keyboard').unbind().stop().animate({'top': '548px'}, hideSpeed);
	$('.cursor').addClass('hidden');
	var timeout = setTimeout(function() {	
		$('#sevenAM').stop().animate({'left': '131px'}, dataSpeed);
		$('.allDotSelected').stop().animate({'opacity': '0'}, dataSpeed);
		$('#monday').removeClass('hidden').stop().animate({'left': '40px', 'top': '29px', 'opacity': '1', 'font-size': '16px'}, dataSpeed);
		$('#maySixth').removeClass('hidden').stop().animate({'left': '101px', 'top': '29px', 'opacity': '1', 'font-size': '16px'}, dataSpeed);
		$('.textEntryDefaults').removeClass('hidden').stop().animate({'opacity': '1'}, dataSpeed, function() {
			var secondTimeout = setTimeout(function() {
				$('.otherBackground').removeClass('hidden');
				$('.otherBackground').stop().animate({'opacity': '1'}, swapSpeed);
				$('.subData').stop().animate({'opacity': '1'}, swapSpeed);
				$('.bottomArea').stop().animate({'opacity': '1'}, swapSpeed, function() {
					$('.fixed').css('z-index', '3000');
					//$('.newContent').css('overflow', 'scroll');
				});
				$('.textEntryData, .textEntryDefaults, .textEntrySpecial').css('font-weight', '100');
				$('.fillerData').stop().animate({'opacity': '1'}, swapSpeed);
				$('#trashDay').stop().animate({'top': '52px', 'left': '76px', 'font-size': '24px', 'color': '#209fd1'}, swapSpeed);
				$('#monday').stop().animate({'top': '86px', 'left': '76px', 'font-size': '24px', 'color': '#209fd1'}, swapSpeed);
				$('#maySixth').stop().animate({'top': '86px', 'left': '169px', 'font-size': '24px', 'color': '#209fd1'}, swapSpeed);
				$('#sevenAM').html('7:00 am').stop().animate({'top': '178px', 'left': '76px', 'font-size': '24px', 'color': '#209fd1'}, swapSpeed);
				$('#eightAM').html('8:00 am').stop().animate({'top': '212px', 'left': '76px', 'font-size': '24px', 'color': '#209fd1'}, swapSpeed);
				$('#dotMatt').stop().animate({'left': '76px', 'top': '127px'}, swapSpeed);
				$('#dotKate').stop().animate({'left': '154px', 'top': '127px'}, swapSpeed);
				$('#dotJackson').stop().animate({'left': '76px', 'top': '151px'}, swapSpeed);
				$('#nameMatt').stop().animate({'left': '92px', 'top': '120px', 'opacity': '1'}, swapSpeed);
				$('#nameKate').stop().animate({'left': '170px', 'top': '120px', 'opacity': '1'}, swapSpeed);
				$('#nameJackson').stop().animate({'left': '92px', 'top': '144px', 'opacity': '1'}, swapSpeed);
				$('.backButton, .title').removeClass('hidden').stop().animate({'opacity': '1'}, swapSpeed);
				$('.topBar').stop().animate({'height': '44px'}, swapSpeed, function() {
					$('.topBar').attr('style', '');
					$('.backButton').unbind();
					$('.backButton').click(function() {
						//backFromAppointment();
					});

				});
				$('.enterAppointment, #to, #from, #on, .familyDots').stop().animate({'opacity': '0'}, swapSpeed/2);
				$('.title').html('Appointment');
			}, 1*swapSpeed);
		});
	}, .5*dataSpeed);
}

function backFromAppointment() {
	$('.backButton').unbind();
	$('.content').css('top', '0px');
	$('.backButton').stop().animate({'left': '320px'}, menuSpeed);
	$('.title').stop().animate({'left': '320px'}, menuSpeed);
	$('.newContent').stop().animate({'left': '320px'}, menuSpeed);
	$('.otherBackground').stop().animate({'left': '320px'}, menuSpeed, function() {
		//slide callback
		//set corrent top area
		$('#sevenAM').html('7 am');
		$('#eightAM').html('8 am');
		$('.textEntry').removeClass('hidden');
		$('.cursor').removeClass('hidden');
		$('.textEntryData').addClass('hidden');
		$('.familyDots').addClass('hidden');
		$('.title').css('opacity', '0').css('left', '0px').html('May 2014');
		$('.menuIcon').removeClass('hidden').stop().animate({'opacity': '1'}, hideSpeed);
		$('.addIcon').removeClass('hidden').stop().animate({'opacity': '1'}, hideSpeed);
		$('.title').removeClass('hidden').stop().animate({'opacity': '1'}, hideSpeed, function () {
			$('.newContent').addClass('hidden');
			moveBackApptHTML();
			//reset all the plus stuff...
			$('.backButton, #trashDay, #monday, #maySixth, #sevenAM, #eightAM, #dotMatt, #dotKate, #dotJackson, #nameMatt, #nameKate, #nameJackson, .textEntryData, .textEntryDefaults, .textEntrySpecial, .fillerData, .otherBackground, .subData, .bottomArea, .newContent, .fixed, .allDotBlack, .allDotSelected, .cursor').attr('style', '');
			//setScrollListener();

		});

	});
}


function moveApptHTML() {
	for (i=0; i<6; i++) {
		$('.fixed div:last').detach().appendTo('.newContent');
	}
}

function moveBackApptHTML() {
	for (j=0; j<6; j++) {
		$('.newContent div:last').detach().appendTo('.fixed');
	}
}