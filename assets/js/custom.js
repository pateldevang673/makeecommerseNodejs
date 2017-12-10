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


$('.reset .form .submit').click(function () {

    $('.reset .form').removeClass('success').removeClass('error');

    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    if (!password.match(/^[a-zA-Z0-9]{8,}$/)) {
        $('#password').parent('.input').addClass('error');
    } else {
        $('#password').parent('.input').removeClass('error');
    }

    if (!confirmPassword.match(/^[a-zA-Z0-9]{8,}$/)) {
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
    var url = 'http://localhost:3000/auth/reset/' + token;

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