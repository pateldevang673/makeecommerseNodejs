var winHei, winWid;
winHei = $(window).height(),
    winWid = $(window).width();


$(document).ready(function() {
    $('.fulHei').height(winHei);
    $('.headSrchBtnWrp').click(function(e) {
        e.preventDefault();
        $('body').addClass('showSearch');
    });
    $(window).click(function() {
        $('body').removeClass('showSearch');
    });
    $('.headMainCont,.headMainCont > *').click(function(event) {
        event.stopPropagation();
    });
    $('.headSrchClse').click(function(e) {
        e.preventDefault();
        $('body').removeClass('showSearch');
    });
    $('.headOpnMenuIcn').click(function(e) {
        e.preventDefault();
        $('body').addClass('sideMenOpen');
    });
    $('.sideMenClose,.sideNavOlay').click(function(e) {
        e.preventDefault();
        $('body').removeClass('sideMenOpen');
    });
    $('.loginTrig').click(function(e) {
        e.preventDefault();
        $('body').addClass('loginShow');
    });

    function closLogin() {
        $('body').removeClass('loginShow');
    };
    $('.loginClose, .logOlay').click(function(e) {
        e.preventDefault();
        closLogin();
    })
    $(window).scroll(function() {
        $('html,body').scrollTop() > 100 ? $('body').addClass('fixHead') : $('body').removeClass('fixHead');

        $('html,body').scrollTop() > 600 ? $('body').addClass('scrlTpVisb') : $('body').removeClass('scrlTpVisb');
    })
    $('.scrlTpIcon').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 800, 'easeOutQuint');
    })
});
$(window).load(function() {
    if (winWid > 1000) {
        $.stellar({ hideDistantElements: false, horizontalScrolling: false });
    }
});