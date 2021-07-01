$(document).ready(function(){

    /* перевод картинки svg в код */
    $('.icon img, img.icon').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
    /* end перевод картинки svg в код */

    function format(state) {
        if (!state.id) return state.text; // optgroup
        return "<span class='flag_img'><img class='flag' src='img/flags/" + state.id.toLowerCase() + ".png'/></span>" + "<span>" + state.text; + "<span>";
        console.log(state.id.toLowerCase());
    }
    $(".lang_select").select2({
        minimumResultsForSearch: Infinity,
        formatResult: format,
        formatSelection: format,
        escapeMarkup: function(m) { return m; }
    });



    $(".m_slider").slick({
        infinite: true,
        arrows: true,
        dots: true,
        //autoplay: true,
        //speed: 3000,
        //autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });

    $(function () {
        $('input, textarea').each(function () {
            $(this).blur(function(){
                if(!this.value){
                    $(this).removeClass('hide_label');
                }
                else{
                    $(this).addClass('hide_label');
                }
            });
            if ( !this.value ) {
                $(this).removeClass('hide_label');
            }
            else{
                $(this).addClass('hide_label');
            }
        });
    });



    if($('.main_clients_list .item').length > 6){
        $('.main_clients_list').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.main_clients_list .item').length > 2){
        $('.main_clients_list').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 767 && $('.main_clients_list .item').length > 3){
        $('.main_clients_list').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 991 && $('.main_clients_list .item').length > 3){
        $('.main_clients_list').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    }


    if($('.gallery_list .item').length > 4){
        $('.gallery_list').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.gallery_list .item').length > 1){
        $('.gallery_list').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 767 && $('.gallery_list .item').length > 2){
        $('.gallery_list').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 991 && $('.gallery_list .item').length > 2){
        $('.gallery_list').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    }




});


