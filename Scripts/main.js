$(document).ready(function(){

    //Reveal animation in jumbotron
    //Index
    $("#index-jumbotron h2").delay(500).animate({"opacity":"1"}, 1000);
    $("#index-jumbotron h1").delay(1000).animate({"opacity":"1"}, 1000);
    $("#index-jumbotron p").delay(1500).animate({"opacity":"1"}, 1000);
    
    //Other pages
    $(".jumbotron h1").delay(500).animate({"opacity":"1"}, 1000);
    $(".jumbotron p").delay(1000).animate({"opacity":"1"}, 1000);
    $(".jumbotron div").delay(1000).animate({"opacity":"1"}, 1000);
    
    //Text appears on scroll
    $(window).scroll(function(){
        $(".scroll-hidden").each(function(i){
            var bottomObject = $(this).offset().top + $(this).outerHeight();
            var bottomWindow = $(window).scrollTop() + $(window).height();

            if (bottomWindow * 1.2 > bottomObject){
                $(this).animate({"opacity":"1"}, 1000);
            }
        });
    });
});