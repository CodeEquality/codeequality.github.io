//Event details animated hide/show
$(function(){
	$(".ce-default-hidden").hide();
	$(".ce-btn-show-details").click(function(e){
		e.preventDefault();
		var eventDetailsObj = $(this).parents(".ce-event").children(".ce-event-details");

		if(eventDetailsObj.is(":hidden"))
		{
			eventDetailsObj.slideDown("fast");
			$(this).html("Hide details &laquo;");

		}
		else
		{
			eventDetailsObj.slideUp("fast");
			$(this).html("View details &raquo;");
		}
	})
});


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

//Toggle logo
$(function(){
	var dir = "img/"
	var options = ["logo", "logo_alt", "logo_alt_2", "logo_alt_3"];
	var curr = 0;

	$('.ce-btn-logo-toggle').click(function(){
		curr = ++curr % options.length;
		$('.navbar-brand > img').attr('src', dir + options[curr] + "_dark.png");
		$('#about img.logo').attr('src', dir + options[curr] + ".png");
	})

})