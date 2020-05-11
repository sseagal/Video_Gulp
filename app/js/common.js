$(function() {

	$('#my-menu').mmenu({
	extensions:[ "position-right", 'theme-black', 'effect-menu-slide', 'pagedim-black'], 
	navbar: {
		title: '<img src="img/logo.png" alt="Logo">' }	
	});

	var api = $('#my-menu').data('mmenu');

	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	})
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 700
		navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>']
	});
	

	//    $(document).ready(function () {
    //  $(".navbar-toggle").on("click", function () {
    //    $(this).toggleClass("active");
    //  });
  //  });

  	//<script>
    //document.addEventListener(
    //    "DOMContentLoaded", () => {
    //        var menu = new Mmenu( "#my-menu" );
    //        var api = menu.API;

    //        api.bind( "openPanel:start",
    //            ( panel ) => {
    //                console.log( "Started opening panel: " + panel.id );
    //            }
    //        );
    //        api.bind( "openPanel:finish",
    //            ( panel ) => {
    //                console.log( "Finished opening panel: " + panel.id );
    //            }
    //        );
    //    }
    //);
//</script>

});
  