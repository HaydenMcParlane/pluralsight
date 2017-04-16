$(document).ready(function(){
    var main = $("#main");    
    
    main.mouseenter(function(){
        main.css("background-color", "#888");        
    }); 

    main.mouseleave(function(){
        main.css("background-color", "");        
    });  
});