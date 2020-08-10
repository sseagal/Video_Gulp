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

	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService()
			}, 100);
		});
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});
	
	function carouselService() {
		$('.carousel-services-item').each(function() {
			var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService();

	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	function onResize() {
		$('.carousel-services-content').equalHeights();
	}onResize();
	window.onresize = function() {onResize()};

	//    $(document).ready(function () {
    //  $(".navbar-toggle").on("click", function () {
  	//   $(this).toggleClass("active");
    //  });
    //});

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
  