// funzionalità di apertura  menu
$('.header-right > a').click(function () {
  $('.hamburger-menu').addClass('active');
});

// funzionalità di chiusura  menu
$('.close').click(function () {
    $('.hamburger-menu').removeClass('active');
  });
