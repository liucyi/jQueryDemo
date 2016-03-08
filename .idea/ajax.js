; (function ($) {
 	//$.extend({//全局	 
	//	"nav": function (color) {
	//		$(".nav").css({
	//			"list-style": "none",
	//			"margin": 0,
	//			"padding": 0,
	//			"display": "none",
	//			"color":color

	//		});
	//		$(".nav").parent().hover(function () {
	//			$(this).find(".nav").slideDown("slow");
	//		}, function () {
	//			$(this).find(".nav").stop().slideUp("slow");
	//		})
	//	}
	//	})



	//****************************************************

		$.fn.extend({//局部
			"nav": function (color) {
				$(this).find(".nav").css({
					"list-style": "none",
					"margin": 0,
					"padding": 0,
					"display": "none",
					"color": color

				});
				$(this).find(".nav").parent().hover(function () {
					$(this).find(".nav").slideDown("slow");
				}, function () {
					$(this).find(".nav").stop().slideUp("slow");
				})
			}
		})
})(jQuery)
