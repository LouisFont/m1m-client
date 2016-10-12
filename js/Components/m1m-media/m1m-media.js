var angular		        = require( "angular" ),
    CommModule          = require( "../../Services/CommModule.js" ),
    angularMaterial		= require( "angular-material" ),
    template            = require( "./m1m-media.html" )
    ;
module.exports = "m1m-media-Module";

console.log( "Init of m1m-media-Module", CommModule, angularMaterial);

function controller($scope, CommService) {
    var ctrl = this;
    console.log( "m1mMedia:", $scope, CommService );
}
controller.$inject = ["$scope", "CommService"];

angular .module     ( module.exports, [CommModule, angularMaterial] )
        .component  ( "m1mMedia", {
            controller  : controller,
            bindings    : {data: "<"},
            template	: template
        });
