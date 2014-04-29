/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/can"],function(e){var t=Object.prototype.hasOwnProperty,n=function(e){return e!==null&&e==e.window},r=function(e){if(!e||typeof e!="object"||e.nodeType||n(e))return!1;try{if(e.constructor&&!t.call(e,"constructor")&&!t.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}var i;for(i in e);return i===undefined||t.call(e,i)};return e.isPlainObject=r,e});