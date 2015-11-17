/**
 * Tabslet jQuery plugin
 *
 * @copyright Copyright 2012, Dimitris Krestos
 * @license   Apache License, Version 2.0 (http://www.opensource.org/licenses/apache2.0.php)
 * @link    http://vdw.staytuned.gr
 * @version   v1.4.2
 */

  /* Sample html structure

  <div class='tabs'>
    <ul class='horizontal'>
      <li><a href="#tab-1">Tab 1</a></li>
      <li><a href="#tab-2">Tab 2</a></li>
      <li><a href="#tab-3">Tab 3</a></li>
    </ul>
    <div id='tab-1'></div>
    <div id='tab-2'></div>
    <div id='tab-3'></div>
  </div>

  */

(function($,window,undefined){
    $.fn.tabslet=function(options){
	    var defaults={
		    mouseevent:"click",
			attribute:"href",
			animation:false,
			autorotate:false,
			pauseonhover:true,
			delay:2000,
			active:1,
			controls:{prev:".prev",next:".next"
			}
		};
		var options=$.extend(defaults,options);
		return this.each(function(){var $this=$(this);
		options.mouseevent=$this.data("mouseevent")
		||options.mouseevent;options.attribute=$this.data("attribute")
		||options.attribute;options.animation=$this.data("animation")
		||options.animation;options.autorotate=$this.data("autorotate")
		||options.autorotate;options.pauseonhover=$this.data("pauseonhover")
		||options.pauseonhover;options.delay=$this.data("delay")
		||options.delay;options.active=$this.data("active")
		||options.active;$this.find("> div").hide();
		$this.find("> div").eq(options.active-1).show();
		$this.find("> ul li").eq(options.active-1).addClass("active");
		var fn=eval(function(){$(this).trigger("_before");
		$this.find("> ul li").removeClass("active");
		$(this).addClass("active");$this.find("> div").hide();
		var currentTab=$(this).find("a").attr(options.attribute);
		if(options.animation){$this.find(currentTab).animate({opacity:"show"},"slow",
		function(){$(this).trigger("_after")})}
		else{$this.find(currentTab).show();
		$(this).trigger("_after")}return false});
		var init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)");
		init;var elements=$this.find("> ul li"),i=options.active-1;
		function forward(){
		    i=++i%elements.length;options.mouseevent=="hover"?elements.eq(i).trigger("mouseover"):elements.eq(i).click();
			var t=setTimeout(forward,options.delay);$this.mouseover(
			    function(){if(options.pauseonhover){clearTimeout(t)}})}if(options.autorotate){setTimeout(forward,0);
				if(options.pauseonhover){$this.on("mouseleave",function(){setTimeout(forward,1000)})}}
				function move(direction){if(direction=="forward"){i=++i%elements.length}
				if(direction=="backward"){i=--i%elements.length}elements.eq(i).click()}
				$this.find(options.controls.next).click(function(){move("forward")});
				$this.find(options.controls.prev).click(function(){move("backward")});
				$this.on("destroy",function(){$(this).removeData()})})};
				$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})})(jQuery);
(function(a){
    a.Placeholder={settings:{color:"rgb(169,169,169)",dataName:"original-font-color"},init:function(b){
	    if(b){a.extend(a.Placeholder.settings,b)}var c=function(b){return a(b).val()};
		var d=function(b,c){a(b).val(c)};var e=function(b){return a(b).attr("placeholder")};
		var f=function(a){var b=c(a);return b.length===0||b==e(a)};
		var g=function(b){a(b).data(a.Placeholder.settings.dataName,a(b).css("color"));a(b).css("color",a.Placeholder.settings.color)};
		var h=function(b){a(b).css("color",a(b).data(a.Placeholder.settings.dataName));a(b).removeData(a.Placeholder.settings.dataName)};
		var i=function(a){d(a,e(a));g(a)};var j=function(b){if(a(b).data(a.Placeholder.settings.dataName)){d(b,"");h(b)}};
		var k=function(){if(f(this)){j(this)}};
		var l=function(){if(f(this)){i(this)}};
		var m=function(){if(f(this)){j(this)}};a("textarea, input[type='text']").each(function(b,c){
		if(a(c).attr("placeholder")){a(c).focus(k);a(c).blur(l);a(c).bind("parentformsubmitted",m);a(c).trigger("blur");a(c).parents("form").submit(
		function(){a(c).trigger("parentformsubmitted")})}});return this},cleanBeforeSubmit:function(b){
		if(!b){b=a("form")}a(b).find("textarea, input[type='text']").trigger("parentformsubmitted");return b}}})(jQuery)
