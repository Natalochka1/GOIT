(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);


 $(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(200);
            }
        );
    }); // end ready


    jQuery(document).ready(function() {
    jQuery(".niceCheck").mousedown(
       
        function() {
            changeCheck(jQuery(this));
        });
    jQuery(".niceCheck").each(
        
        function() {
            changeCheckStart(jQuery(this));
        });
});

/* 
    функция смены вида и значения чекбокса
    el - span контейнер дял обычного чекбокса
    input - чекбокс
*/
function changeCheck(el) {
    var el = el,
        input = el.find("input").eq(0);
    if (!input.attr("checked")) {
        el.css("background-position", "0 -17px");
        input.attr("checked", true)
    } else {
        el.css("background-position", "0 0");
        input.attr("checked", false)
    }
    return true;
}

/*     если установлен атрибут checked, меняем вид чекбокса*/
function changeCheckStart(el) {
    var el = el,
        input = el.find("input").eq(0);
    if (input.attr("checked")) {
        el.css("background-position", "0 -17px");
    }
    return true;
}



$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );


    //CUSTOM SELECT
        $('select').styler({
            selectSearch: true,
            selectSearchLimit: 5
        });
        $('input').attr('class', 'styler');

    //CASTOTM CHECKBOX
        $(".niceCheck").mousedown(function() {
            changeCheck($(this));
        });
        $(".niceCheck").each(function() {
            changeCheckStart($(this));
        });
});