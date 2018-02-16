$(document).ready(function(){

    'use strict';

    var body = $("[data-body='true']");
    var mainNavBtn = $("[data-target='#bs-example-navbar-collapse-1']");

    mainNavBtn.click(function(){
        if( body.hasClass("overflow-hidden") ) {
            body.removeClass("overflow-hidden");
        } else {
            body.addClass("overflow-hidden");
        }
    });
});