$.fn.visible = function (partial) {
    var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height() - $w.height() / 3,
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};

$(window).scroll(function (event) {
    $(".items").each(function (i, el) {
        el = $(el);
        if (el.visible(true)) {
            el.addClass("active");
        } else {
            // el.removeClass("active");
        }
    });
});

console.log(localStorage.getItem('apiPath'));

$('.reset .form .submit').click(function () {

    $('.reset .form').removeClass('success').removeClass('error');


    var confirmPassword = $('#confirmPassword').val();

    console.log(password.length, confirmPassword.length);

    if (password.length <= 8) {
        $('#password').parent('.input').addClass('error');
    } else {
        $('#password').parent('.input').removeClass('error');
    }

    if (confirmPassword.length <= 8) {
        $('#confirmPassword').parent('.input').addClass('error');
        $('#confirmPassword').parent('.input').children('p').text('Password must be at least 8 characters');
    } else {
        $('#confirmPassword').parent('.input').removeClass('error');
        if (password == confirmPassword) {
            $('#confirmPassword').parent('.input').removeClass('error');
            passwordRest(password);
        } else {
            $('#confirmPassword').parent('.input').addClass('error');
            $('#confirmPassword').parent('.input').children('p').text('Password mismatch');
        }
    }
});

function passwordRest(password) {
    var token = getUrlVars()["token"];
    if (window.location.href.indexOf("http://www.zeepzoop.com/") > -1 || window.location.href.indexOf("http://zeepzoop.com/") > -1) {
        var url = 'http://api.zeepzoop.com/auth/reset/' + token;
    } else if (window.location.href.indexOf("http://www.dev.zeepzoop.com/") > -1 || window.location.href.indexOf("http://dev.zeepzoop.com/") > -1) {
        var url = 'http://dev.api.zeepzoop.com/auth/reset/' + token;
    } else {
        var url = 'http://api.zeepzoop.com/auth/reset/' + token;
    }

    data = {
        password: password
    };

    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function (data) {
            $('.reset .form').addClass('success');
            $('.reset .form > p').text(data.data);
        },
        error: function (jqXHR, exception, data) {
            $('.reset .form').addClass('error');
            $('.reset .form > p').text(jqXHR.responseJSON.message);
        }
    });
}


function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
$('.blog .author .social-media a').on("click", function (event) {
    event.preventDefault();
    var window_width = $(window).width();
    var window_height = $(window).height();
    var top = window_height - 500;
    var top_vertical = top / 2;
    var left = window_width - 500;
    var left_center = left / 2;
    var share_link = $(this).prop('href');
    window.open(share_link, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=" + top_vertical + ",left=" + left_center + ",width=500,height=500");
});

var startBlogs = 12;
var endBlogs = startBlogs + 11;

$('#loadMoreBlog').click(function () {

    var request = $.ajax({
        url: "http://api.zeepzoop.com/blogs/search?startBlogs=" + startBlogs + "&endBlogs=" + endBlogs,
        type: "get",
        dataType: 'JSON',
        headers: {
            'Authorization': "maximumvsminimumsecurity",
            'Content-Type': "application/json"
        },
    });

    request.done(function (response) {
        startBlogs = startBlogs + 12;
        endBlogs = startBlogs + 11;
        if (response.data.length < 12) {
            $('#loadMoreBlog').before('<div class="noMore">No more blog</div>');
            $('#loadMoreBlog').remove();
        }
        html = '';
        for (i = 0; i < response.data.length; i++) {
            html += '<a href="' + response.data[i].URL + '"> <div class="img"><img src="http://api.zeepzoop.com/' + response.data[i].blogPicture + '"></div><div class="info"> <h3>' + response.data[i].title + '</h3> <p>' + response.data[i].metaDescription + '</p></div><div class="author"> <div class="img"><img src="http://api.zeepzoop.com/' + response.data[i].authorImage + '"></div><div class="profile"><span>' + response.data[i].authorName + '</span></div></div></a>'
        }
        $('.blogs .items').append(html);
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
});