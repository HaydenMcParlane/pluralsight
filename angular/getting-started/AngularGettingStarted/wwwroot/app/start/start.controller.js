(function(){
angular.module("start.core", []).controller("StartController", [ '$scope', StartController]);

function StartController(){    
    this.entries = [];
    this.entries.push({
        name: "Entry 1"
    });
    this.entries.push({
        name: "Entry 2"
    });    
    this.entries.push({
        name: "Entry 3"
    }); 
    this.entries.push({
        name: "Entry 4"
    }); 
}

}());