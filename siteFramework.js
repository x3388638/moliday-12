$(document).ready(function() {
	$(window).on('resize', resize);
	function resize() {
		var winH = $(window).innerHeight();
		var contentH = winH - 80;
		$('nav, section, #content-home-filter').css('height', contentH);
	};
	resize();
});
