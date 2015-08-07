(function(){
	'use strict';

	$('ul li a').click(function(){
		//$('ul li a').css('background', "none");
		$(this).css("background", "red").parent().siblings().find('a').css('background', "none");;
		//$(this).css("background", "red").parent().closest("li").find('a').css('background', "none");;
		return false;
	});

})();