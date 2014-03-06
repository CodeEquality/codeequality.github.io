
//Smooth scrolling. Taken from http://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});

//Toggle logo tool
$(function(){
	var dir = "img/"
	var options = ["logo", "logo_alt", "logo_alt_2", "logo_alt_3"];
	var curr = 0;

	$('.ce-btn-logo-toggle').click(function(){
		curr = ++curr % options.length;
		$('.navbar-brand > img').attr('src', dir + options[curr] + "_dark.png");
		$('#about img.logo').attr('src', dir + options[curr] + ".png");
	});
});

//Hide responsive menu on menu item click
$(function(){
	var navbarToggle = $('.navbar-toggle');

	$(".navbar-nav li a").click(function(){
		if(navbarToggle.is(":visible")){
			navbarToggle.trigger('click');
		}
	});
});

//Highlight active section in nav. Modified from http://jsfiddle.net/x3V6Y/ 
$(function(){
    var sections = {},
        _height  = $(window).height(),
        i        = 0;
    
    // Grab positions of our sections 
    $('section').each(function(){
        sections[this.id] = $(this).offset().top;
    });

    $(document).scroll(function(){
        var $this = $(this),
            pos   = $this.scrollTop();

        pos += $($('.navbar')[0]).height();
            
        for(i in sections){
            if(sections[i] < pos && sections[i] < pos + _height){
                $('a').removeClass('active');
                $('a[href="/index.html#' + i + '"]').addClass('active');
            }  
        }
    });
});