$(function(){
	var bsHiddenClass = "hide"
	$(".ce-btn-show-details").click(function(e){
		e.preventDefault();
		var eventDetailsObj = $(this).parents(".ce-event").children(".ce-event-details");

		if(eventDetailsObj.hasClass(bsHiddenClass))
		{
			eventDetailsObj.removeClass(bsHiddenClass);
			$(this).html("Hide details &laquo;")

		}
		else
		{
			eventDetailsObj.addClass(bsHiddenClass);
			$(this).html("View details &raquo;")
		}
	})
});