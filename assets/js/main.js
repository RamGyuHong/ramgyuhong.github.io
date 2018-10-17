/*=========================================================
Template Name: Haribo - Onepage Portfolio Template
Author Name: Mohammad Masum
Author URL:https://themeforest.net/user/WebFirefly
==========================================================*/

(function ($) {
	"use strict";

	/*======================
    Javascript for preloader
    =======================*/
   $(window).on("load", function(){
   		$(".preloader").fadeOut();
   })
	
	$(document).ready(function(){
		/*==========================
		javaScript for typed string
		============================*/
		var typed = new Typed('.typed', {
            stringsElement: '.typed-strings',
            typeSpeed: 100,
            backSpeed: 20,
            loop: true 
        });
		/*==========================
		javaScript for smooth scroll
		============================*/
		$(".navbar-nav .nav-link").on("click", function(e){
			e.preventDefault();
			var hash = this.hash;
			var position = $(hash).offset().top;
			$("html").animate({
				scrollTop : position
			}, 1000);
		});

		/*==========================================================
		Closes responsive menu when a scroll trigger link is clicked
		============================================================*/ 
	        $('.nav-link').on('click', function () {
	            $('.navbar-collapse').collapse('hide');
	        });

		/*==========================
		javaScript for sticky header
		============================*/
			$(".sticky-header").sticky();
			
		/*======================
		Javascript for barfiller 
		=======================*/
    		$('#bar1').barfiller({
    			barColor: '#484848',
    		});
    		$('#bar2').barfiller({
    			barColor: '#484848'
    		});
    		$('#bar3').barfiller({
    			barColor: '#484848'
    		});
    		$('#bar4').barfiller({
    			barColor: '#484848'
			});
			$('#bar5').barfiller({
    			barColor: '#484848'
    		});

		/*======================
		javaScript for filtering 
		=======================*/
			$(".project-filter span").on("click", function(){

				$(".project-filter span").removeClass("active");
				$(this).addClass("active");

				var selector = $(this).attr("data-filter");
				$(".project-lists").isotope({
					filter : selector,
				});
			});
		

		/*============================
		  Javascript for magnificPopup
		============================*/
	 		$(".project-lists").magnificPopup({

		 		delegate: '.gallary',
		 		type: 'image',
		 		gallery: {
		            enabled: true
		        }
	 		});

	 	/*============================
		  Javascript for ripple
		============================*/
			$('.home-11.hero-area').ripples({
	            resolution: 512,
	            dropRadius: 20,
	            perturbance: 0.1,
	        });	
	    /*=================================
		  Javascript for hero area carousel
		==================================*/
			$(".hero-area-slide").owlCarousel({
				items:1,
				autoplay:true,
				autoplayTimeout: 5000,
				animateOut: 'fadeOut',
				loop:true,
				nav:true,
				navText:["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
				dots:false
			});

		
		/*===================================
		  Javascript for testimonial carousel
		====================================*/
			$(".testimonial-carousel").owlCarousel({
				items:1,
				autoplay:false,
				autoplayTimeout: 5000,
				loop:true,
				nav:true,
				navText:["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
				dots:false
			});


		/*=============================
		  Javascript for scroll to top
		==============================*/
			$(window).on("scroll", function () {
			if ($(this).scrollTop() > 250) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
	        });
	        $('.scroll-up').on("click", function () {
	            $("html, body").animate({
	                scrollTop: 0
	            }, 1000);
	            return false;
	        });

});



}(jQuery));		