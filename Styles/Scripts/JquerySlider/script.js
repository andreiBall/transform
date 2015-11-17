(function ($) {
var hwSlideSpeed = 700;/**/
var hwTimeOut = 4000;/**/
$(document).ready(function(e) {
	$('.MainTabsContent').css(
		{"position" : "absolute"}).hide().eq(0).show();
	var slideNum = 0;
	var slideTime;
	slideCount = $(".Slider .MainTabsContent").size();
	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('.MainTabsContent').eq(slideNum).fadeOut(hwSlideSpeed);
		if(arrow == "next"){
			if(slideNum == (slideCount-1)){slideNum=0;}
			else{slideNum++}
			}
		else if(arrow == "prew")
		{
			if(slideNum == 0){slideNum=slideCount-1;}
			else{slideNum-=1}
		}
		else{
			slideNum = arrow;
			}
		$('.MainTabsContent').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
		}
	var $adderSpan = '';
	var pause = false;
	var rotator = function(){
			if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
			}
	rotator();
    $('.Slider').tabslet(
    { mouseevent: 'hover', attribute: 'Data-Tab' });
	$('.Slider').hover(    
        function()
		{clearTimeout(slideTime); pause = true;},
        function()
		{pause = true; rotator();
        });
    rotator();
});
})(jQuery);	

