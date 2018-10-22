$(function() {
    var startStores = 12;
    var endStores = startStores + 11;

    function GetParameterValues(param) { var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'); for (var i = 0; i < url.length; i++) { var urlparam = url[i].split('='); if (urlparam[0] == param) { return urlparam[1]; } } }
    var numberReg = /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    $('.profilesubmit').click(function() { if ($('#nameInput').val() == "") { console.log("in the if") } else { console.log("in else") } });
    $('.catlg').click(function() { var cityName = GetParameterValues('city'); if (cityName) { window.location.href = $(this).attr('name') + "&city=" + cityName; } else { window.location.href = $(this).attr('name'); } });
    $('.newsebtn').click(function() {
        var cityName = GetParameterValues('city');
        localStorage.setItem('bread', $(this).attr('id'))
        if (cityName) { window.location.href = $(this).attr('name') + "&city=" + cityName; } else { window.location.href = $(this).attr('name'); }
    });
    $('#loadmoreshop').click(function() {
        var catid = '';
        var urls = "https://api.zeepzoop.com/stores/search?startStores=" + startStores + "&endStores=" + endStores;
        if ($(this).attr('name') == 'Home-Decor') {
            catid = "5a51e626ff645771bf57dc1a"
            urls += "&category=" + catid;
        } else if ($(this).attr('name') == 'Clothing') {
            catid = "5a51e507ff645771bf57dc14"
            urls += "&category=" + catid;
        } else if ($(this).attr('name') == 'Jewellery') {
            catid = "5a51e528ff645771bf57dc15"
            urls += "&category=" + catid;
        } else if ($(this).attr('name') == "Accessories") {
            catid = "5a51e544ff645771bf57dc16"
            urls += "&category=" + catid;
        }
        var buisnessOffline = GetParameterValues('buisnessOffline');
        var buisnessOnline = GetParameterValues('buisnessOnline');
        var cityName = GetParameterValues('city');
        if (buisnessOffline) { urls += '&buisnessOffline=true'; } else if (buisnessOnline) { urls += '&buisnessOnline=true'; }
        if (cityName) { urls += '&location=' + cityName; }
        var request = $.ajax({ url: urls, type: "get", dataType: 'JSON', headers: { 'Authorization': "maximumvsminimumsecurity", 'Content-Type': "application/json" }, });
        request.done(function(response) {
            startStores = startStores + 12;
            endStores = startStores + 11;
            if (response.data.length < 12) {
                $('#loadmoreshop').before('<div class="noMore">No more Stores</div>');
                $('#loadmoreshop').remove();
            }
            html = '';
            for (i = 0; i < response.data.length; i++) { if (response.data[i].storeCity !== 'Surat' && response.data[i].storeCity !== 'Vadodara') html += '<div class="bagsmore-item">' + '<img src="https://api.zeepzoop.com/' + response.data[i].storeBanner + '" alt="">' + '<div class="watermark-logo"> <img src="images/img-watermark-icon.png" alt=""> <span>' + response.data[i].avgRating + '</span> </div>' + '<div class="info-share-book">' + '<div class="bag-info-cont"> <a href="/brand/' + response.data[i].URL + '" style="display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;" class="bag-title">' + response.data[i].storeName + '</a>' + '<p style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">' + response.data[i].storeDiscription + '</p></div>' + '</div></div>'; } $('.mid-scn-main .bagsmore-list-main').append(html);
        });
        request.fail(function(jqXHR, textStatus) {
            console.log("Request failed: " + textStatus);
            alert("Request failed: " + textStatus);
        });
    });
    var startcatalouge = 21;
    var endcatalouge = startcatalouge + 22;
    $('#loadcatalouge').click(function() {
        var urls = "https://api.zeepzoop.com/catalogs/featurecatalog?startCatalogs=" + startcatalouge + "&endCatalogs=" + endcatalouge;
        var buisnessOffline = GetParameterValues('buisnessOffline');
        var buisnessOnline = GetParameterValues('buisnessOnline');
        var cityName = GetParameterValues('city');
        if (buisnessOffline) { urls += '&buisnessOffline=true'; } else if (buisnessOnline) { urls += '&buisnessOnline=true'; }
        if (cityName) { urls += '&location=' + cityName; }
        var request = $.ajax({ url: urls, type: "get", dataType: 'JSON', headers: { 'Authorization': "maximumvsminimumsecurity", 'Content-Type': "application/json" }, });
        request.done(function(response) {
            startcatalouge = startcatalouge + 21;
            endcatalouge = startcatalouge + 22;
            if (response.data.length < 6) {
                $('#loadcatalouge').before('<div class="noMore">No more Catalogs</div>');
                $('#loadcatalouge').remove();
            }
            html = '';
            for (i = 0; i < response.data.length; i++) { if (response.data[i] && response.data[i].storeURL !== null) { html += '<div class="catalouges-item">' + '<div class="catalouges-pic">' + '<a href="/brand/' + response.data[i].storeURL + '""><img class="catimagesize" src="https://api.zeepzoop.com/' + response.data[i].catalogUrl + '"alt="" /></a>' + '</div>' + '</div>'; } } $('.mid-scn-main .catalouges-pdt-main').append(html);
        });
        request.fail(function(jqXHR, textStatus) {
            console.log("Request failed: " + textStatus);
            alert("Request failed: " + textStatus);
        });
    });
    $('select[name="cities"]').change(function() {
        var $this = $(this);
        var cityname = $this.val();
        localStorage.setItem('cityName', cityname)
        window.location.href = "/?city=" + cityname + " ";
    });
});
$(document).ready(function() {
    if (localStorage.getItem('storetype') && localStorage.getItem('storetype') == "online") {
        $('select[name="cities"]').css("display", "none");
        $('.onlinecollectiondiv').css("display", "-webkit-inline-box");
        $('.offlinecollectiondiv').css("display", "none");
        $('.onlinestorediv').css("display", "-webkit-inline-box");
        $('.offlinestorediv').css("display", "none");
        $('.onlinenewstore').css("display", "-webkit-inline-box");
        $('.offlinenewstore').css("display", "none");
        $('.offlineoffer').css("display", "none");
        $('.onlineoffer').css("display", "block");
    } else {
        $('select[name="cities"]').css("display", "-webkit-inline-box");
        $('.onlinecollectiondiv').css("display", "none");
        $('.offlinecollectiondiv').css("display", "-webkit-inline-box");
        $('.onlinestorediv').css("display", "none");
        $('.offlinestorediv').css("display", "-webkit-inline-box");
        $('.onlinenewstore').css("display", "none");
        $('.offlinenewstore').css("display", "-webkit-inline-box");
        $('.onlineoffer').css("display", "none");
        $('.offlineoffer').css("display", "block");
    }
    $('.shops-slt').click(function(e) {
        $(this).toggleClass('shopsSlt-current')
        if ($(this).hasClass('shopsSlt-current')) {
            $('select[name="cities"]').css("display", "-webkit-inline-box");
            $('.onlinecollectiondiv').css("display", "none");
            $('.offlinecollectiondiv').css("display", "-webkit-inline-box");
            $('.onlinestorediv').css("display", "none");
            $('.offlinestorediv').css("display", "-webkit-inline-box");
            $('.onlinenewstore').css("display", "none");
            $('.offlinenewstore').css("display", "-webkit-inline-box");
            $('.onlineoffer').css("display", "none");
            $('.offlineoffer').css("display", "block");
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            window.history.pushState({ path: newurl }, '', newurl);
        } else {
            $('select[name="cities"]').css("display", "none");
            $('.onlinecollectiondiv').css("display", "-webkit-inline-box");
            $('.offlinecollectiondiv').css("display", "none");
            $('.onlinestorediv').css("display", "-webkit-inline-box");
            $('.offlinestorediv').css("display", "none");
            $('.onlinenewstore').css("display", "-webkit-inline-box");
            $('.offlinenewstore').css("display", "none");
            $('.offlineoffer').css("display", "none");
            $('.onlineoffer').css("display", "block");
        }
    });
    $(window).on('scroll', function() { if ($(window).scrollTop() > 25) { $('body').addClass('body-fixed'); } else { $('body').removeClass('body-fixed'); } })
    $(window).trigger('scroll')
    $('.nav-toggle').click(function(e) {
        $('.sidebarmenu').addClass('sidebarmenu-show')
        $('.overlay-bg').addClass('overlay-bg-show')
    });
    $('.side-menu-close, .overlay-bg').click(function(e) {
        $('.sidebarmenu').removeClass('sidebarmenu-show')
        $('.overlay-bg').removeClass('overlay-bg-show')
    });
});