/*!

=========================================================
* GW Design System - v1.0.0
=========================================================

* GitHub Page: https://github.com/bvsbharat/gw-design-system
* Copyright 2019 (https://www.linkedin.com/in/bvsbharat/)
* Licensed under MIT (https://github.com/bvsbharat/gw-design-system/blob/master/LICENSE.md)

* Coded by BVS BHARAT KUMAR

=========================================================

*/
/*global $, Typed, google, document, window */

$(function () {

    "use strict";
    var documentEl = $(document),
        dl = $('.color-option .dl li');

    // Change Template Colors // linear-gradient(to right, rgb(38, 101, 123), rgb(116, 200, 230))
    dl.eq(0).css("backgroundColor", "#00739d").end()
        .eq(1).css("backgroundColor", "");

    dl.on('click', function () {
        restColor();
        $(this).css("backgroundColor", "#00739d");
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });

    // Show Color Option Div When Click On The Gear
    $(".option-box .gear-check").on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("slide_in_out")) {
            $(".option-box").stop().animate({
                right: "0px"
            }, 500);
            $(".color-option").stop().animate({
                right: "-190px"
            }, 500);
        } else {
            $(".option-box").stop().animate({
                right: "178px"
            }, 500);
            $(".color-option").stop().animate({
                right: "0"
            }, 500);
        }
        $(this).toggleClass("slide_in_out");
        return false;
    });

    function restColor(){
        dl.eq(0).css("backgroundColor", "#fff").end()
        .eq(1).css("backgroundColor", "#fff");
    }


});