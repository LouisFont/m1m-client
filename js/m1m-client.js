require( "angular-material/angular-material.css" );
require( "./m1m-client.css" );

var angular						= require( "angular" ),
	m1mClientMultimediaModule	= require( "./Components/m1m-multimedia-manager/m1m-multimedia-manager.js" ),
	m1mClientMediaModule		= require( "./Components/m1m-media/m1m-media.js" ),
	m1mClientRendererModule		= require( "./Components/m1m-renderer/m1m-renderer.js" )
	;

angular	.module( "m1m-client-Module", [m1mClientMultimediaModule,m1mClientMediaModule,m1mClientRendererModule] );
 