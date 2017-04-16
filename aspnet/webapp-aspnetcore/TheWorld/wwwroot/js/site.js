$(document).ready(function(){
    var main = $("#main");    
    
    main.mouseenter(function(){
        main.css("background-color", "#888");                       
    }); 

    main.mouseleave(function(){
        main.css("background-color", "");        
    });      

    var sidebarAndWrapper = $("#sidebar,#wrapper");
    $("#sidebarToggle").on("click", function(){
        sidebarAndWrapper.toggleClass("hide-sidebar");
        var toggleButton = $(this);
        switch(sidebarAndWrapper.hasClass("hide-sidebar")){
            case true: toggleButton.text("Show Menu"); break;
            case false: toggleButton.text("Hide Menu"); break;
            default:
                alert("Logical Error: hide-sidebar should be either present or not.")
        }
    }); 


});