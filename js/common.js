$(function() {

	var mob = 992;
	// Toogle menu
		$('.menu-expand').on('click', function() {
			$(this).toggleClass('on');
			$('.menu-for-mob').toggleClass('showMenu');
		});

		$(".header-nav").clone().appendTo('.menu-for-mob');


	// Toggle submenu
		$("#nav li.menu-item-has-children > a").on("click", function (e) {
		    if (window.innerWidth < mob) {
		        if (!$(this).hasClass("clicked")) {
		            e.preventDefault();
		            $(this).next("ul").slideToggle("fast");
		        }
		    }
		});


	// Footer tabs
		$( '.footer-menu-title' ).on( 'click', function() {
			if ( window.innerWidth < mob ) {
				if ( !$( this ).closest( '.footer-menu' ).hasClass( 'activeItem' ) ) {
					$( '.footer-menu' ).removeClass( 'activeItem' );
					$( '.footer-menu-list' ).slideUp( 'fastItem' );
				}

				$( this ).closest( '.footer-menu' ).toggleClass( 'activeItem' );
				$( this ).next( '.footer-menu-list' ).slideToggle( 'fastItem' );
			}
		} );

	//Minicart
		$( 'body' ).on( 'click', '.js-minicart-toggler', function() {
		    var $minicart = $( '.js-minicart' );
		    $minicart.toggleClass( 'active' );
		} );

	// Close minicart on outside click
		$( 'body' ).on( 'click', '*', function( e ) {
			var $this = $( e.target );
			
			if ( $this.is( '.minicart' ) &&
				!$this.closest( '.minicart-inner' ).length &&
				!$this.is( '.js-minicart-toggler' ) &&
				!$this.closest( '.js-minicart-toggler' ).length ) {
				$( '.minicart' ).removeClass( 'active' );
			}
		} );

	// Quantity
		$( 'body' ).on( 'click', '.btn-count', function( e ) {
		    var $input = $( this ).siblings( '.input' ),
		      $btnupdate = $( this ).closest( 'form' ).find( '[name="update_cart"]' ),
		      val = Number( $input.val() ),
		      min_val = 1,
		      max_val = $input.attr( 'max' ) ? $input.attr( 'max' ) : 999,
		      step = $input.attr( 'step' ) ? parseFloat( $input.attr( 'step' ) ) : 1;

		    e.preventDefault();

		    if ( $( this ).hasClass( 'btn-count-minus' ) ) {
		      if ( val > min_val ) {
		        $input.val( val - step )
		      } else {
		        $input.val( min_val )
		      }
		    }

		    if ( $( this ).hasClass( 'btn-count-plus' ) ) {
		      if ( val < max_val ) {
		        $input.val( val + step )
		      } else {
		        $input.val( max_val )
		      }
		    }

		    if ( $btnupdate.length ) {
		      $btnupdate.removeAttr( 'disabled' );
		    }
		    $input.trigger( 'change' );
		});

	// Sliders

		if ($('.offer-slider-wrap').length) {
			$('.offer-slider-wrap').slick({
				arrows: true,
				fade: true,
				autoplay: true,
				autoplaySpeed: 5000,
				infinite: false,
				verticalSwiping: true,
				dots: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: '<div class="prev"></div>',
				nextArrow: '<div class="next"></div>',
				responsive: [
				    {
				      breakpoint: 992,
				      settings: {
				        verticalSwiping: false
				      }
				    }
				]
			})
		}

		var maxHeight = -1;
		$('.offer-slider-item.slick-slide').each(function() {
		  if ($(this).height() > maxHeight) {
		    maxHeight = $(this).height();
		  }
		});
		$('.offer-slider-item.slick-slide').each(function() {
		  if ($(this).height() < maxHeight) {
		    $(this).css('margin', Math.ceil((maxHeight-$(this).height())/2) + 'px 0');
		  }
		});


		if ($('.product-slider-wrap').length) {
			$('.product-slider-wrap').slick({
				arrows: true,
				infinite: false,
				swipeToSlide: true,
				fade: true,
				autoplay: true,
				autoplaySpeed: 5000,
				dots: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: '<div class="prev"></div>',
				nextArrow: '<div class="next"></div>',
			})
		}

		if ($('.related-slider-wrap').length) {
			$('.related-slider-wrap').slick({
				infinite: false,
				slidesToShow: 4,
				slidesToScroll: 1,
				swipeToSlide: true,
				arrows: true,
				prevArrow: '<div class="prev-wrap"><div class="prev prevFst"></div><div class="prev prevSnd"></div></div>',
				nextArrow: '<div class="next-wrap"><div class="next nextFst"></div><div class="next nextSnd"></div></div>',
				responsive: [
				    {
				      breakpoint: 992,
				      settings: {
				        slidesToShow: 3
				      }
				    },
				    {
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 2
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        slidesToShow: 1
				      }
				    }
				]
			})
		}

		$('.related-slider-wrap').on('setPosition', function (event, slick) {
		    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
		});

		if ($('.category-slider').length) {
			$('.category-slider').slick({
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				swipeToSlide: true,
				arrows: true,
				variableWidth: true,
				prevArrow: '<div class="prev-wrap"><div class="prev prevFst"></div><div class="prev prevSnd"></div></div>',
				nextArrow: '<div class="next-wrap"><div class="next nextFst"></div><div class="next nextSnd"></div></div>',
				responsive: [
					{
				      breakpoint: 1220,
				      settings: {
				        slidesToShow: 2,
				      }
				    },
				    {
				      breakpoint: 640,
				      settings: {
				        slidesToShow: 1,
				      }
				    }
				]
			})
		}


	// Anchors
      $('.scroll-down').on('click','a[href^="#"]',function( e ) {
          e.preventDefault();

          var linkUrl = this.getAttribute( 'href' ),
            needToScroll = !this.parentElement.hasAttribute( 'role' );

          if ( linkUrl !== '#' && needToScroll ) {
            var id = linkUrl,
              element = document.querySelector( id );

            if ( element ) {
              var topPos = element.getBoundingClientRect().top + window.pageYOffset;

              window.scrollTo( { top: topPos, behavior: 'smooth' } );
            }
          }
        });

      $('.btn-anchor').on('click','a[href^="#"]',function( e ) {
          e.preventDefault();

          var linkUrl = this.getAttribute( 'href' ),
            needToScroll = !this.parentElement.hasAttribute( 'role' );

          if ( linkUrl !== '#' && needToScroll ) {
            var id = linkUrl,
              element = document.querySelector( id );

            if ( element ) {
              var topPos = element.getBoundingClientRect().top + window.pageYOffset;

              window.scrollTo( { top: topPos, behavior: 'smooth' } );
            }
          }
        });

      $('.contact-links').on('click','a[href^="#"]',function( e ) {
          e.preventDefault();

          var linkUrl = this.getAttribute( 'href' ),
            needToScroll = !this.parentElement.hasAttribute( 'role' );

          if ( linkUrl !== '#' && needToScroll ) {
            var id = linkUrl,
              element = document.querySelector( id );

            if ( element ) {
              var topPos = element.getBoundingClientRect().top + window.pageYOffset;

              window.scrollTo( { top: topPos, behavior: 'smooth' } );
            }
          }
        });


      //textareas autoheight
	  if ($(".js-textarea").length) {
	    autosize($('.js-textarea'))
	  }

	  //select
		$('.select-lang').SumoSelect({
			csvDispCount: 0,
			floatWidth: 0
		});
});

