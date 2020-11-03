var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

    tabNavs[i].addEventListener("click", function(e){
        e.preventDefault();
        var activeTabAttr = e.target.getAttribute("data-tab");

        for (var j = 0; j < tabNavs.length; j++) {
            var contentAttr = tabPanes[j].getAttribute("data-tab-content");

            if (activeTabAttr === contentAttr) {
                tabNavs[j].classList.add("active");
                tabPanes[j].classList.add("active");
            } else {
                tabNavs[j].classList.remove("active");
                tabPanes[j].classList.remove("active");
            }
        }
    });
}


window.onscroll = function showHeader() {
    let header =    document.querySelector(".header");
    if (window.pageYOffset > 300) {
        header.classList.add("header-fixed");
    }
    else  {
        header.classList.remove("header-fixed")
    }
};
$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
$('.burger-menu_button').on(  'click',function () {
    $('.burger-menu').toggleClass('burger-menu_active')
    $('.burger-menu_nav').toggleClass('burger-menu_active')
})
$('.burger-menu_link').on('click',function () {
    $('.burger-menu').removeClass('burger-menu_active')
    $('.burger-menu_nav').removeClass('burger-menu_active')
})
jQuery(document).ready(function($) {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        fixedContentPos: true
    });
});
jQuery(function($){
    $("#skills").viewportChecker({
        callbackFunction:function(){
    $(".progress-bar").hide();
            $(".progress-bar").show();
        }
    });
});
jQuery(window).scroll(function(){
    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-300;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');

        }
    })
});
