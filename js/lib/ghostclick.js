(function($){var x,y,t;window.addEventListener('touchstart',function(e){x=e.touches[0].clientX;y=e.touches[0].clientY;},true);window.addEventListener('touchmove',function(e){x=e.touches[0].clientX;y=e.touches[0].clientY;},true);window.addEventListener('touchend',function(e){t=new Date();},true);$(window).on('tap doubleTap',function(e){if(!e.defaultPrevented){t=0;}});window.addEventListener('click',function(e){var time_threshold=1000,space_threshold=30;if(new Date()-t<=time_threshold&&Math.abs(e.clientX-x)<=space_threshold&&Math.abs(e.clientY-y)<=space_threshold){e.stopPropagation();e.preventDefault();}},true);}(Zepto));