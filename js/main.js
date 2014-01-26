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