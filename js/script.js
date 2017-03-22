$(document).ready(function() {

	//slider
	(function() {

		//cache Dom
		var $window = $(window);
		var $slider = $('.js-slider');

		runSlick();

		//getOptions
		function getOptions($slider) {
			var slide = '#' + $slider.getAttribute('id') + ' .js-slider-item';
			var slidesToShow = $slider.getAttribute('data-slides');

			return {
				slide: slide,
				slidesToShow: slidesToShow ? slidesToShow : '1',
				dots: true,
				arrows: false
			};
		}

		//run slick
		function runSlick() {
			for(var i = 0; i < $slider.length; i++) {
				$($slider[i]).slick(getOptions($slider[i]));
			}
		}
	})();
});