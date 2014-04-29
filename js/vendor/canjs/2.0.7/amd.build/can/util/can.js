/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define([],function(){var e=window.can||{};if(typeof GLOBALCAN=="undefined"||GLOBALCAN!==!1)window.can=e;e.isDeferred=function(e){var t=this.isFunction;return e&&t(e.then)&&t(e.pipe)};var t=0;return e.cid=function(e,n){return e._cid||(t++,e._cid=(n||"")+t),e._cid},e.VERSION="2.0.7",e.simpleExtend=function(e,t){for(var n in t)e[n]=t[n];return e},e});