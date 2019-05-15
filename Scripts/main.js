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
    
});