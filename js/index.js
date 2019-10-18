$(document).ready(function(){
    // slick
    $('.container').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        fade: true,
        autoplay: true,
        arrows: false,
    });
    //nav logo
    $(window).scroll(function(){
        let h =$('body,html').scrollTop();
		if (h > 200){
			$('nav').addClass('scroll_nav');
			$('.logo').addClass('scroll_logo');
			$('.logo h1').addClass('scroll_logoh1');
			$('.search').addClass('scroll_search');
			$('.menu li').addClass('scroll_menu');
		} else {
			$('nav').removeClass('scroll_nav');
			$('.logo').removeClass('scroll_logo');
			$('.logo h1').removeClass('scroll_logoh1');
			$('.search').removeClass('scroll_search');
			$('.menu li').removeClass('scroll_menu');
		}
	});
    //gotop
    $('#gotop').hide();
    $(window).scroll(function(){
        let h =$('body,html').scrollTop();
        if ( h > 1000){
            $('#gotop').fadeIn();
        } else {
            $('#gotop').fadeOut();
        }
        return false;
    });
    $('#gotop').click(function(){
        $('html,body').animate({scrollTop:0},900);
    });
    // menu toggler
    $('.toggler').click(function(){
        $('.menu').slideToggle();
        $('.toggler').toggleClass('togglerX')
    })
})