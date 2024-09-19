$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        768:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1400:{
            items: 4,
        },
        1500:{
            items: 5,
        },
        1600:{
            items: 6,
            loop: false,
        }
    }
});