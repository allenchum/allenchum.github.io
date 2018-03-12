$(function() {
    $('.arrow').click (function() {
      $('html, body').animate({scrollTop: $('.welcome').offset().top }, 3000);
      return false;
    });
  });