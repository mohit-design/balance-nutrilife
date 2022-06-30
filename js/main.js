$(document).ready(function() {
  // OnScroll Navbar Fixed
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 50) {
	    $(".bg-logo-menu-desktop").addClass("active");
      $(".menu-listing-desktop").addClass("active");
	   } else {
	    $(".bg-logo-menu-desktop").removeClass("active");
      $(".menu-listing-desktop").removeClass("active");
	   }
	});
});