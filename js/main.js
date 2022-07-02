$(document).ready(function() {
  // OnScroll Navbar Fixed
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 50) {
	    $(".bg-logo-menu-desktop").addClass("active");
      $(".menu-listing-desktop").addClass("active");
			$(".img-logo-header-desktop").attr("src", "images/logo.png"); 
	   } else {
	    $(".bg-logo-menu-desktop").removeClass("active");
      $(".menu-listing-desktop").removeClass("active");
			$(".img-logo-header-desktop").attr("src", "images/logo-white.png");
	   }
	});
});
// Window Loader JS
;(function(){
  function id(v){return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());