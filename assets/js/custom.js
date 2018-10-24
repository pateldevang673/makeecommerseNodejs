$(function() {
    function GetParameterValues(param) {
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < url.length; i++) {
            var urlparam = url[i].split('=');
            if (urlparam[0] == param) {
                return urlparam[1];
            }
        }
    }
    var numberReg = /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    $('.profilesubmit').click(function() {
        if ($('#nameInput').val() == "") {
            console.log("in the if")
        } else {
            console.log("in else")
        }
    });

    $('.catlgurl').click(function() {
        var cityName = GetParameterValues('city');
        if (cityName) {
            window.location.href = $(this).attr('name') + "&city=" + cityName;
        } else {
            window.location.href = $(this).attr('name');
        }
    });

    $('.newsebtn').click(function() {
        var cityName = GetParameterValues('city');
        localStorage.setItem('bread', $(this).attr('id'))
        if (cityName) {
            window.location.href = $(this).attr('name') + "&city=" + cityName;
        } else {
            window.location.href = $(this).attr('name');
        }
    });

    var startStores = 12;
    var endStores = startStores + 11;
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

        if (buisnessOffline) {
            urls += '&buisnessOffline=true';
        } else if (buisnessOnline) {
            urls += '&buisnessOnline=true';
        }
        if (cityName) {
            urls += '&location=' + cityName;
        }
        var request = $.ajax({
            url: urls,
            type: "get",
            dataType: 'JSON',
            headers: {
                'Authorization': "maximumvsminimumsecurity",
                'Content-Type': "application/json"
            },
        });
        request.done(function(response) {
            startStores = startStores + 12;
            endStores = startStores + 11;
            if (response.data.length < 12) {
                $('#loadmoreshop').before('<div class="noMore">No more Stores</div>');
                $('#loadmoreshop').remove();
            }
            html = '';
            for (i = 0; i < response.data.length; i++) {
                if (response.data[i].storeCity !== 'Surat' && response.data[i].storeCity !== 'Vadodara')
                    html += '<li><a href="/brand/' + response.data[i].URL + '" class="sclHov"><img src="https://api.zeepzoop.com/' + response.data[i].storeBanner + '" alt="img"></a>' + '<div class="featShpInfWrp">' + '<a href="/brand/' + response.data[i].URL + '" class="popGrdTtle">' + response.data[i].storeName + '</a>' + '<div class="popGrdDesc">' + response.data[i].storeDiscription + '</div>' + '<div class="featShpActBtn">' + '</div>' + '</div>' + '<div class="featShpRate">' + response.data[i].avgRating + '</div>' + '</li>';
            }
            $('.centerAlign .popularGridWrap').append(html).fadeIn();
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

        if (buisnessOffline) {
            urls += '&buisnessOffline=true';
        } else if (buisnessOnline) {
            urls += '&buisnessOnline=true';
        }
        if (cityName) {
            urls += '&location=' + cityName;
        }
        var request = $.ajax({
            url: urls,
            type: "get",
            dataType: 'JSON',
            headers: {
                'Authorization': "maximumvsminimumsecurity",
                'Content-Type': "application/json"
            },
        });

        request.done(function(response) {
            startcatalouge = startcatalouge + 21;
            endcatalouge = startcatalouge + 22;
            if (response.data.length < 6) {
                $('#loadcatalouge').before('<div class="noMore">No more Catalogs</div>');
                $('#loadcatalouge').remove();
            }
            html = '';
            for (i = 0; i < response.data.length; i++) {

                if (response.data[i] && response.data[i].storeURL !== null) {
                    html += '<li><a href="/brand/' + response.data[i].storeURL + '""><img src="https://api.zeepzoop.com/' + response.data[i].catalogUrl + '" alt="img"></a></li>';
                }
            }
            $('ul.feaListMainWrp').append(html);
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