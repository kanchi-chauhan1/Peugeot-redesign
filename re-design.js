(function(){
	console.log('campaign:peugeot');
	function waitUntil(predicate, success, error) {
		var int = setInterval(function() {
			if (predicate()) {
				clearInterval(int);
				int = null;
				success();
			}
		}, 33);

		setTimeout(function() {
			if (int !== null) {
				clearInterval(int);
				if (typeof (error) === 'function') {
					error();
				}
			}
		}, 30000);
	}
	/* Wait for Element | OptiReady */
	(function(win) {
	  'use strict';
	  
	  var listeners = [], 
	  doc = win.document, 
	  MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
	  observer;
	  
	  function ready(selector, fn) {
	      // Store the selector and callback to be monitored
	      listeners.push({
	          selector: selector,
	          fn: fn
	      });
	      if (!observer) {
	          // Watch for changes in the document
	          observer = new MutationObserver(check);
	          observer.observe(doc.documentElement, {
	              childList: true,
	              subtree: true
	          });
	      }
	      // Check if the element is currently in the DOM
	      check();
	  }
	      
	  function check() {
	      // Check the DOM for elements matching a stored selector
	      for (var i = 0, len = listeners.length, listener, elements; i < len; i++) {
	          listener = listeners[i];
	          // Query for elements matching the specified selector
	          elements = doc.querySelectorAll(listener.selector);
	          for (var j = 0, jLen = elements.length, element; j < jLen; j++) {
	              element = elements[j];
	              // Make sure the callback isn't invoked with the
	              // same element more than once
	              if (!element.ready) {
	                  element.ready = true;
	                  // Invoke the callback with the element
	                  listener.fn.call(element, element);
	              }
	          }
	      }
	  }

	  // Expose 'ready'
	  win.optiReady = ready;
	          
	})(this); 
	var config = {
		selector:{

		},
		html:{
			topBar:['<div class="custom-topbar">',
			'	<div class="custom-inner">',
			'		<ul class="custom-points">',
			'			<li><img src="https://op-ffm.s3.eu-central-1.amazonaws.com/Uptilab/peugeot/car.png" class="custom-car"><span>Véhicules disponibles rapidement</span></li>',
			'			<li><img src="https://op-ffm.s3.eu-central-1.amazonaws.com/Uptilab/peugeot/Icon2.png" class="custom-prix"><span>Prix attractifs</span></li>',
			'			<li><img src="https://op-ffm.s3.eu-central-1.amazonaws.com/Uptilab/peugeot/Icon3.png" class="custom-tv"><span>Commande et reprise ferme en ligne</span></li>',
			'			<li><img src="https://op-ffm.s3.eu-central-1.amazonaws.com/Uptilab/peugeot/Vector+(6).png" class="custom-jours"><span>14 jours pour changer d’avis</span></li>',
			'			<li><img src="https://op-ffm.s3.eu-central-1.amazonaws.com/Uptilab/peugeot/Icon4.png" class="custom-conseil"><span>Conseils de nos experts</span></li>',
			'		</ul>	',
			'	</div>	',
			'</div>	'].join(''),
			rightSec:['<div class="custom-right-section">',
			'	<div class="custom-top-spec">',
			'	<div class="custom-title"></div>',
			'	<div class="custom-desc"></div>',
			'	<div class="custom-spec"></div>',
			'			<div class="custom-voir-detail"><ul class="custom-location-points"><li class="custom-locality"><img src="https://op-ffm.s3.eu-central-1.amazonaws.com/Peugeot/Icon+Color.png"><span></span></li><li class="custom-cal"><img src="https://op-ffm.s3.eu-central-1.amazonaws.com/Peugeot/Icon.png"> <div class="detail-cal"></div></li></ul></div>',
			'	</div>	',
			'	<div class="custom-bottom-spec">',
			'		<div class="inner-wrap">',
			'		  <div class="custom-price"><div class="custom-ttc"></div><span class="price-ttc-check"> € TTC </span><span class="custom-ou">ou</span><div class="custom-mois"></div><span class="val">€/Mois</span></div>',
			'			<div class="custom-detailsclick"><div class="click-sec"></div><div class="value-sec"></div></div>',
            '           <div class="list-items">',
            '           <div class="order-in-line">',
            '           <div class="custom-btn-area"><button class="custom-reservez" id="btnOrder2"><span class="custom-desktop">COMMANDEZ EN LIGNE</span><span class="custom-mobile">Commander en ligne</span></button></div>',
			'			<div class="custom-specpoints">',
			'				<ul>',
			'					<li><img src="https://op-ffm.s3.eu-central-1.amazonaws.com/Peugeot/lock.png" class="custom-lock"><span>Paiement sécurisé</span></li>',
			'					<li><img src="https://op-ffm.s3.eu-central-1.amazonaws.com/Peugeot/ant-design_form-outlined.png" class="custom-ant"><span>Réservation contre 200€ d’acompte</span></li>',
			'					<li><img src="https://op-ffm.s3.eu-central-1.amazonaws.com/Peugeot/Vector+(7).png" class="custom-vector"><span>14 jours pour changer d’avis</span></li>',
			'				</ul>	',
			'			</div>	',
            '           </div>',
			'			<div class="oa-heading">OU</div>',
            '           <div class="point-of-sale">',
            '           <div class="custom-btn-area"><button class="custom-reservez2" id="btnOrder3"><span class="custom-desktop">CONTACTEZ LE POINT DE VENTE</span><span class="custom-mobile">CONTACTEZ LE POINT DE VENTE</span></button></div>',
			'			<div class="custom-specpoints">',
			'				<ul>',
			'					<li><img src="https://image.flaticon.com/icons/png/512/747/747376.png" class="custom-personal"><span>Conseil personnalisé</span></li>',
			'					<li><img src="https://image.flaticon.com/icons/png/512/992/992700.png" class="custom-time"><span>Rappel dans la journée</span></li>',
			'					<li><img src="https://image.flaticon.com/icons/png/512/1077/1077976.png" class="custom-fund"><span>Aide au financement</span></li>',
			'				</ul>	',
            '           </div>',
			'			</div>	',
            '           </div>',
			'		</div>	',
			'',
			'	</div>	',
			'</div>	'].join(''),
			bottomSec:['<div class="custom-map-section">',
			'	<div class="wrapper">',
			'		<div class="inner-wrap">',
			'			<div class="left-bonus-sec">',
			'			</div>',
			'			<div class="right-route-sec">',
			'			</div>	',
			'		</div>	',
			'	</div>	',
			'</div>	'].join(''),

		}
	}	
	function customGaTracking(category, action, label, value) {
	    var checkIfGaReady = setInterval(function(){
	      if(typeof ga == "function" && typeof ga.getAll == "function") {
	        clearInterval(checkIfGaReady);
	                if ("ga" in window) {
	        tracker = ga.getAll()[0];
	         if (tracker)

	            tracker.send("event", category, action, label, value, {nonInteraction: true});
	    }
	      }
	    },100);
  	}

	function pageChanges(){
		jQuery('header.peugeot').after(config.html.topBar);
		jQuery('.reassurance-zone .reassurance-content').prependTo('section.description-section > .wrapper').addClass('custom-command');
		jQuery('section.reassurance-zone h2.center').prependTo('section.description-section > .wrapper').addClass('custom-vehicle');
		jQuery('section.block-slider .slider-right').prepend(config.html.rightSec);
		jQuery('section.description-section').before(config.html.bottomSec);
		jQuery('body').append('<div class="mobile-fixed-bar"><button class="custom-reservez custom-commander"><span class="custom-desktop">Réservez votre véhicule en ligne</span><span class="custom-mobile">Commander en ligne</span></button><button class="custom-contact-button custom-contracter">Contacter CE point de vente</button></div>');
		waitUntil(function(){
			return jQuery('.custom-right-section').length > 0;
		}, function(){
			var title = jQuery('div#PageProduitSection section.title span.title-model').text();
			jQuery('.custom-title').text(title);
			var subTitle = jQuery('.title-more-info span.vn-text').text();
			jQuery('.custom-desc').text(subTitle);
			var ttcPrice = jQuery('.order-bar-wrapper .price.PriceTotal .price-info .price-val').text().replace('€','').trim();
			jQuery('.custom-ttc').text(ttcPrice);
			var mois = jQuery('.Financement-text-primary span.monthly-price').text().trim();
			jQuery('.custom-mois').text(mois);
			var location = jQuery('.title-more-info .shipping').html();
			jQuery('.detail-cal').html(location);
			var calender = jQuery('.title .title-localisation').text().trim();
			jQuery('.custom-locality span').text(calender);
			var recovery = jQuery('.RecoveryAndFinanceBlock').html()
			jQuery('.left-bonus-sec').html(recovery);
			jQuery('.order-bar .price div#link-details').prependTo('.click-sec');
			jQuery('.custom-btn-area button.custom-reservez,.custom-reservez.custom-commander').on('click', function(){
				console.log('check')
				customGaTracking('Content', 'Redirection::Order', 'COMMANDEZ EN LIGNE', 0);
				jQuery('.order-bar .order button#btnOrder2').click();
			});	
            jQuery('.custom-btn-area button.custom-reservez,.custom-reservez.custom-commander').on('click', function(){
				console.log('check')
				customGaTracking('Content', 'Redirection::Order', 'COMMANDEZ EN LIGNE', 0);
				jQuery('.order-bar .order button#btnOrder2').click();
			});	
			jQuery('.custom-btn-area button.custom-reservez2,.custom-reservez2.custom-commander').on('click', function(){
				//console.log('check')
				//customGaTracking('Content', 'Redirection::Order', 'COMMANDEZ EN LIGNE', 0);
				jQuery('.order-bar .order button#BtContacterPDV2').click();
			});	


		});	
		waitUntil(function(){
			return jQuery('.expendable-details').length > 0;
		}, function(){
			var dropDown = jQuery('.expendable-details').html(); 
			jQuery('.value-sec').html(dropDown);
		});	
		waitUntil(function(){
			return jQuery('.custom-map-section').length > 0;
		}, function(){
            jQuery('.adress-contact.top .adress').after('<div class="custom-show-more"> <em>Plus de détail</em> <div class="expandable-ico " poppinmode="0"></div></div>');
            jQuery('.custom-show-more').click(function(){
                jQuery(this).toggleClass('custom-showarea');
                jQuery('.contact').toggleClass('custom-show-sec');
            });
            jQuery('.horaire + .title, .NumSIRET').wrapAll('<div class="custom-siret"></div>');
            jQuery('.accordion.concessionaire').prependTo('.right-route-sec');
			jQuery('.left-bonus-sec button#btnFinancement').click(function(){
			 jQuery('section.block-slider .slider-right button#btnFinancement').click();
			});
			jQuery('.click-sec em').text('Voir le détail');
			jQuery('.click-sec div#link-details').click(function(e){
			 e.stopPropagation();
			 e.preventDefault();
			 jQuery('.value-sec').slideToggle();
			});
			jQuery('.accordion.concessionaire').append('<button class="custom-contact-button">Contacter CE point de vente</button>');
			jQuery('.custom-contact-button,.custom-contact-button.custom-contracter').click(function(){
				jQuery('.order-bar .order button#BtContacterPDV2').click();
            })    
			jQuery('.reassurance-content.custom-command').after('<h2 class="custom-new-heading">Détail de votre véhicule</h2>')
            if(window.innerWidth > 767){
                jQuery('.left-bonus-sec div#block-wvo-id span.info-tooltip-reprise').click(function(){
                    jQuery('.slider-right div#block-wvo-id .Prime-reprise span.info-tooltip-reprise.RefentielToolTip').click()
                });
                jQuery('.left-bonus-sec div#sfg_fasol .Financement-text-primary span.info-tooltip-reprise').click(function(){
                    jQuery('.slider-right div#sfg_fasol .Financement-text-primary span.info-tooltip-reprise').click();
                });
			}  
            if(window.innerWidth < 767){
                jQuery('.left-bonus-sec div#block-wvo-id span.info-tooltip-reprise').click(function(){
                    jQuery('.MobileRecoveryAndFinanceBlock span.info-tooltip-reprise.RefentielToolTip').click();
                });
                jQuery('.left-bonus-sec div#sfg_fasol .Financement-text-primary span.info-tooltip-reprise').click(function(){
                    jQuery('.MobileRecoveryAndFinanceBlock span.info-tooltip-reprise.financement-detail').click();
                });
			}
		});	
	}
	function mobileSlider(){
		waitUntil(function(){
			return jQuery('.custom-topbar ul.custom-points').length > 0;
		}, function(){
			//$('head').append('<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">');
			jQuery.getScript("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js", function(){
			    console.log("Script loaded and executed.");
			    jQuery('.custom-topbar ul.custom-points').slick({
				  dots: false,
				  infinite: false,
				  speed: 300,
				  slidesToShow: 5,	
				  slidesToScroll: 5,
				  responsive: [
				    {
				      breakpoint: 767,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        speed: 30,
				        infinite: true,
				        autoplay: true,
 						autoplaySpeed: 2000,
 						arrow:false,
				      }
				    }
				  ]
				});
			});	
			jQuery(window).scroll(function(){
		    var topHeight = jQuery('h2.center.custom-vehicle').offset().top
		         if (jQuery(this).scrollTop() > topHeight){
		         jQuery('body').addClass("scroll-body");
		         }
		         else{
		         jQuery('body').removeClass("scroll-body");
		         }
		     });
		});	
	}

	waitUntil(function(){
		return typeof jQuery === "function";
	}, function(){
		pageChanges();
		mobileSlider();
	});

})();	

