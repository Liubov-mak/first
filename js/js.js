$ function function_name(argument) {
	// body...
}     
     $(".owl-carousel").owlCarousel({
     	"margin": 60,     	
     	"loop": true,     	
     	"nav": true,
     	"responsiveClass": true,
     	"dots": true, 
     	"navText": ["<img src='images/left.png'>", "<img src='images/right.png'>"     	
     	],    	

     	// Адаптация
			"responsive": {
			// Ширина от 0
			0: {
			"items": 1,
			"loop": false
			},
			// Ширина от 480
			480: {
			"items": 2
			},
			// Ширина от 768
			768: {
			"items": 3
			},
			// Ширина от 1200
			1200: {
			"items": 4
			}
          }    	
     });
