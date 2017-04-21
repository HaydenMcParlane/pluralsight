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
        var toggleButtonIcon = toggleButton.children("i");
        switch(sidebarAndWrapper.hasClass("hide-sidebar")){
            case true: {
                toggleButtonIcon.removeClass("fa-chevron-left");
                toggleButtonIcon.addClass("fa-chevron-right");
                break;
            }
            case false: { 
                toggleButtonIcon.removeClass("fa-chevron-right");
                toggleButtonIcon.addClass("fa-chevron-left");
                break; 
            }
            default:
                alert("Logical Error: hide-sidebar should be either present or not.")
        }        
    });
    
         
});