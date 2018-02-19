$( document ).ready(function() {
	function isInView(elem){
		//		return $(elem).offset().top - $(window).scrollTop() < $(elem).height() ;

		if (typeof jQuery === "function" && elem instanceof jQuery) {
			elem = elem[0];
		}

		var rect = elem.getBoundingClientRect();

		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
		);
	}

	$(window).scroll(function(){
		if (isInView($('.skills'))){
			$(".btn-floating").removeClass("scale-out")
		}else{
			$(".btn-floating").addClass("scale-out")
		}
	})

	
	
})