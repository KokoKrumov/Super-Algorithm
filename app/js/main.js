$(document).ready(function () {

    // 'use strict';

    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
        disable: window.innerWidth < 1024
    });
    AOS.refresh({});

    if (window.innerWidth > 1024) {
        $(".step-item:odd, .feature-block_part:even").attr("data-aos", "fade-left");
        $(".step-item:even, .feature-block_part:odd").attr("data-aos", "fade-right");
    }

});