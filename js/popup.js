$('.open-popup-first').click(function (e){
    e.preventDefault();
    $('.popup-bg-first').fadeIn(600);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function (){
    $('.popup-bg-first').fadeOut(600);
    $('html').removeClass('no-scroll');
});

$('.open-popup-second').click(function (e){
    e.preventDefault();
    $('.popup-bg-second').fadeIn(600);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function (){
    $('.popup-bg-second').fadeOut(600);
    $('html').removeClass('no-scroll');
});

$('.open-popup-third').click(function (e){
    e.preventDefault();
    $('.popup-bg-third').fadeIn(600);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function (){
    $('.popup-bg-third').fadeOut(600);
    $('html').removeClass('no-scroll');
});

$('.open-popup-fourth').click(function (e){
    e.preventDefault();
    $('.popup-bg-fourth').fadeIn(600);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function (){
    $('.popup-bg-fourth').fadeOut(600);
    $('html').removeClass('no-scroll');
});