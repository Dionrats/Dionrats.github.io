$(document).ready(function(){

	var num = 1;
	var pic = "";

	$(".left").click(function(){
			if(num < 3)
				num++;
			else
				num = 1;
			pic = "img/fancy" + num + ".jpg";
			var image = $(".sldr-img");
				image.fadeOut('fast', function () {
        		image.attr('src', pic);
        		image.fadeIn('fast');
    		});
			//$(".sldr-img").attr("src",pic);
	});

	$(".right").click(function(){
			if(num > 1)
				num--;
			else
				num = 3;
			pic = "img/fancy" + num + ".jpg";
			var image = $(".sldr-img");
				image.fadeOut('fast', function () {
        		image.attr('src', pic);
        		image.fadeIn('fast');
    		});
	});

	window.setInterval(function(){
  		if(num < 3)
				num++;
			else
				num = 1;
			pic = "img/fancy" + num + ".jpg";
			var image = $(".sldr-img");
				image.fadeOut('fast', function () {
        		image.attr('src', pic);
        		image.fadeIn('fast');
    		});
	}, 5000);

});