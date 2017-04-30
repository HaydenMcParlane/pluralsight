(function(){
angular.module("start.core").directive("start", StartDirective);

function StartDirective(){
    return {
        "scope": {
            "entries": "="
        },
        "restrict": "E",
        "controller": "StartController",
        "controllerAs": "vm",
        "templateUrl": "static/start.html"
    };
}
}());