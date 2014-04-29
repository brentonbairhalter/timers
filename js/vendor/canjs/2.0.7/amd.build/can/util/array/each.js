/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/can"],function(e){return e.each=function(t,n,r){var i=0,s;if(t)if(typeof t.length=="number"&&t.pop){t.attr&&t.attr("length");for(s=t.length;i<s;i++)if(n.call(r||t[i],t[i],i,t)===!1)break}else if(t.hasOwnProperty){e.Map&&t instanceof e.Map&&(e.__reading&&e.__reading(t,"__keys"),t=t.__get());for(s in t)if(t.hasOwnProperty(s)&&n.call(r||t[s],t[s],s,t)===!1)break}return t},e});