$(document).ready(function() {
var stickyNavTop = $('.nav').offset().top;

var stickyNav = function(){
var scrollTop = $(window).scrollTop();



if (scrollTop > stickyNavTop) {
  $('.nav').addClass('sticky');
} else {
  $('.nav').removeClass('sticky');
}
};

stickyNav();

$(window).scroll(function() {
stickyNav();
});
});

$("#gmenu > ul > li > a").click(function(){
  $(".current").removeClass("current");
  $(this).addClass("current");
});

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();

var target = this.hash,
 $target = $(target);
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 500, 'swing', function () {
 window.location.hash = target;
 });
 });
