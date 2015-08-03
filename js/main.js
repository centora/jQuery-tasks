(function(){
	'use strict';

  $('ul li a').click(function(){
    $('ul li a').css('background', "none");
    $(this).css("background", "red");
    return false;
  });

})();