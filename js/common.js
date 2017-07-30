$(function() {


	// Smooth Scroll to block
	$('a[href^="#l"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false; 
   });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.js-toggle-menu').click(function(e){
          e.preventDefault();
          $('.mobile-header-nav').slideToggle();
          $(this).toggleClass('open');
    });

});
$(document).ready(function () {
	var $tabs = $('.horizontalTab');

	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,

	});

	$(".btn-slide").click(function(){
		$(".panel").slideToggle("slow");
		$(".footnote ul").addClass("active"); return false;
		
	});

	$(".btn-slide-2").click(function(){		
		$(".footnote ul").removeClass("active"); return false;
		
	});
	
});
