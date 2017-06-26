/**
 * Created by OLEG on 15.06.2017.
 */
$(document).ready(function(){
    $(".show-menu").click(function(){
        $(".nav").slideToggle();
    })
});

/*
$(window).resize(function() {
    if ($(window).width() > 981){
        $(".nav").css("display","inline-block");
    }
    if ($(window).width() < 980){
        $(".nav").css("display","none");
    }
});*/
