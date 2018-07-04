// script.src="js/jquery.min.js";
let something = function (event) {
    console.log(event)
}

$(function() {
    $('select[name="cities"]').change(function() {
        var $this = $(this);
        localStorage.setItem('cityName',$this.val())
        location.reload(true);
        // console.log("ahmedabad",localStorage.getItem('cityName'));
    });
});
$(document).ready(function () {
    $('.shops-slt').click(function (e) {
        $(this).toggleClass('shopsSlt-current')
    });
    $('.catelougesSlider').owlCarousel({
        loop: true,
        margin: 60,
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                margin: 30,
            },
            600: {
                items: 2,
                margin: 30,
            },
            1000: {
                items: 3,
                margin: 30,
            }
        }
    })
    $('.collectionsSlider').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })
    $('.offersSlider').owlCarousel({
        autoplay: true,
        nav: true,
        margin: 30,
        center: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                margin: 2,
            },
            600: {
                items: 3,
                margin: 5,
            },
            1000: {
                items: 3,
            },
            1100: {
                items: 5,
            }
        }
    });
    $('.newlyAdded').owlCarousel({
        loop: true,
        margin: 60,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            600: {
                items: 2,
                margin: 20,
            },
            1000: {
                items: 3,
                margin: 20,
            }
        }
    })
});
