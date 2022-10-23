let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.mobile-menu');
// const menu = $(".menu-content__container");
// const menuBtn = $(".main-myButton");
const pic = $(".link-icon");
const line = $(".link");

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    if ((menu.has(e.target).length === 0) && (menuBtn.has(e.target).length === 0)) {
        menuBtn.toggle("active");
        menu.toggle("active");
        // line.removeClass("underline");
    }
})

