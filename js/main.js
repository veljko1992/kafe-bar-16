// Plugins

// Magnific pop-up for album pictures
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});
});
// Magnific pop-up for album pictures END

// Load more pictures Plugin
var winWidth;
var num;

function itemsNum() {
  winWidth = $(window).width();
  if (winWidth < 576) {
    num = 4;
  }
  else if (winWidth < 768) {
    num = 6;
  }
  else if (winWidth < 992) {
    num = 8;
  }
  else {
    num = 9;
  }
  $('.gallery-img').css('display', 'none');
  $(".gallery-img").slice(0,num).show();
  if (num >= $(".gallery-img:hidden").length) {
    $("#loadMore").hide();
  }
  $("#loadMore").off("click");
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".gallery-img:hidden").slice(0,num).slideDown();
    if ($(".gallery-img:hidden").length == 0){
      $("#loadMore").fadeOut("slow");
    }
    $("html,body").animate({scrollTop:$(this).offset().top}, 800);
  });
  if ($(".gallery-img:hidden").length !== 0){
    $("#loadMore").show();
  }
}
itemsNum();
$(window).on("resize", itemsNum);
// Load more pictures Plugin END

 // Carousel Plugin
 $('.testemonials').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        }
    },
		autoplay:true,
autoplayTimeout:8000,
autoplayHoverPause:false
});
$('.sponsor').owlCarousel({
	 loop:true,
	 margin:10,
	 nav:true,
	 responsive:{
			 0:{
					 items:2
			 },
			 992:{
					 items:4
			 }
	 },
	 autoplay:true,
autoplayTimeout:8500,
autoplayHoverPause:false
});

// validate form
$("#cont-form").validate();

// sakrivanje podataka e mail i broj
$(".number").click(function () {
	$(this).find("span").text("1234");
});
$(".mail").click(function () {
	$(this).find("span").text("sesnaest.rs");
});

// Protekli događaji
$('.past-events-button').on('click', function () {
	$('.past-events-holder').slideDown(600);
});

// Home bkg image position
var homeImageHeight;
$(window).on("resize", function () {
	setHomeBkgPosition();
});
setHomeBkgPosition();
function setHomeBkgPosition () {
	homeImageHeight = $('.home-image').height();
	$('#home').css({
		backgroundPosition : "0 " + (homeImageHeight + 70) + "px"
	});
}
