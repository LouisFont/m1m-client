var angular		        = require( "angular" ),
    CommModule          = require( "../../Services/CommModule.js" ),
    angularMaterial		= require( "angular-material" ),
    template            = require( "./m1m-renderer.html" )
    ;
module.exports = "m1m-renderer-Module";

console.log( "Init of m1m-renderer-Module", CommModule, angularMaterial);

function controller($scope, CommService) {
    var ctrl = this;

    this.play = function(mediaRendererId){
        CommService.play(mediaRendererId);
    }
    this.pause = function(mediaRendererId){
        CommService.pause(mediaRendererId);
    }
    this.stop = function(mediaRendererId){
        CommService.stop(mediaRendererId);
    }
    this.setVolume = function(mediaRendererId, volume){
        CommService.setVolume(mediaRendererId, volume);
    }
    this.getMediasStates = function(mediaRendererId){
        console.log( "getMediasStates", mediaRendererId );
        CommService.getMediasStates(mediaRendererId).then(function(data){
            ctrl.states = data;
            $scope.$applyAsync();
        });
    }
}
controller.$inject = ["$scope", "CommService"];

angular .module     ( module.exports, [CommModule, angularMaterial] )
        .component  ( "m1mRenderer", {
            controller  : controller,
            bindings    : {renderer: "<"},
            template	: template
        });
