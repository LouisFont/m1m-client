/**
 * Created by fontl on 14/09/16.
 */
var angular		        = require( "angular" ),
    CommModule          = require( "../../Services/CommModule.js" ),
    angularMaterial		= require( "angular-material" ),
    ngDraggable 		= require( "ng-draggable" ),
    template            = require( "./m1m-media.html" )
    ;
module.exports = "m1m-media-Module";


function controller($scope) {

}
controller.$inject = ["$scope"];

angular .module     ( module.exports, [] )
    .component  ( "m1mMedia", {
        controller  : controller,
        bindings    : {bf: "<"},
        template	: template
    });

