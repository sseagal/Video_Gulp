$(function() {

	$('#my-menu').mmenu({
	extensions:[ "position-right", 'theme-black', 'effect-menu-slide', 'pagedim-black'], 
	navbar: {
		title: '<img src="img/logo.png" alt="Logo">' }	
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('openPanel', function() {
		$('.hamburger').addClass('is-active');
	}).bind('closePanel', function() {
		$('.hamburger').removeClass('is-active');
	});

	    $(document).ready(function () {
      $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
      });
    });
});
  