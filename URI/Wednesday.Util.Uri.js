/**
 * Wednesday.Util.Uri.js
 * @author Alexander Vince < alexv@wednesdayagency.com >
 * @date Saturday 7th December 2013
 * @copyright 2013 Wednesday Agency - Alexander Vince < alexv@wednesdayagency.com >
 * @license New BSD License < http://creativecommons.org/licenses/BSD/ >
 *
 *
 * @dependencies Modernizr, jQuery ( $ )
 *
 * 
 * Module Sandbox
 * @param  { jQuery } $ Library
 * @param  { Object } window global
 * @param  { Undefined } undefined
 * @return { False }
 */
( function( $, window, undefined )
{


	/**
	 * Set ECMA5 strict mode
	 */
	'use strict';


	/**
	 * Wednesday Namespace
	 * @type { Object }
	 */
	var Wednesday = window.Wednesday = window.Wednesday || {};
	Wednesday.Util = Wednesday.Util || {};
	Wednesday.Util.Uri = Wednesday.Util.Uri || {};


	//Determine whether to search for URI string or hash bang
	var supportsHistory = $( 'html' ).hasClass( 'history' ) ? true : false,

	//Prefix to all #hash based uris
	hashBangPrefix  = '!';


	/**
	 * get current uri
	 * @return { String } uri
	 */
	Wednesday.Util.Uri.getUri = function()
	{

		var uriArr = Wednesday.Util.Uri.getUriArray(),
		retVal =  uriArr.join( '/' );

		return '/' + retVal;

	};


	/**
	 * get segment or uri
	 * @param  { Integer } segment index
	 * @return { String } uri segment
	 */
	Wednesday.Util.Uri.getUriSegment = function( segment )
	{

		var uriArr = Wednesday.Util.Uri.getUriArray(),
		retVal = uriArr[ segment ] ? uriArr[ segment ] : undefined;

		return retVal;

	};


	/**
	 * get uri components as an array
	 * @return { Array } array of uri components
	 */
	Wednesday.Util.Uri.getUriArray = function()
	{

		var uriArr = Wednesday.Util.Uri.getUriByType().split( '/' ),
		cleanArr = [];

		for ( var _i = 0, _len = uriArr.length; _i < _len; _i++ )
		{

			if ( uriArr[ _i ] !== '' )
			{

				cleanArr.push( uriArr[ _i ] );

			}

		}

		return cleanArr;

	};


	/**
	 * Get browser uri based on support of HTML5 History
	 * @return { String } uri
	 */
	Wednesday.Util.Uri.getUriByType = function()
	{

		var uriArr;

		if ( supportsHistory )
		{

			uriArr = Wednesday.Util.Uri.getPathName();
			
		}
		else
		{

			uriArr = Wednesday.Util.Uri.getHashBangPathName();

		}

		return uriArr;

	};


	/**
	 * get pathname from location object
	 * @return { String } pathname
	 */
	Wednesday.Util.Uri.getPathName = function()
	{

		return window.location.pathname;

	};

	/**
	 * get pathname from hashbang uri
	 * @return { String } pathname
	 */
	Wednesday.Util.Uri.getHashBangPathName = function()
	{

		var hash = window.location.hash;
		return hash.replace( hashBangPrefix, '' );

	};


} )( this.jQuery, this );