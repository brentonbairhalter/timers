/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/route"],function(e){if(window.history&&history.pushState){e.route.bindings.pushstate={root:"/",paramsMatcher:/^\?(?:[^=]+=[^&]*&)*[^=]+=[^&]*/,querySeparator:"?",bind:function(){e.delegate.call(e.$(document.documentElement),"a","click",t),e.each(["pushState","replaceState"],function(t){r[t]=window.history[t],window.history[t]=function(n,i,s){var o=s.indexOf("http")===0,u=window.location.search+window.location.hash;if(!o&&s!==window.location.pathname+u||o&&s!==window.location.href+u)r[t].apply(window.history,arguments),e.route.setState()}}),e.bind.call(window,"popstate",e.route.setState)},unbind:function(){e.undelegate.call(e.$(document.documentElement),"click","a",t),e.each(["pushState","replaceState"],function(e){window.history[e]=r[e]}),e.unbind.call(window,"popstate",e.route.setState)},matchingPartOfURL:function(){var e=n(),t=location.pathname+location.search,r=t.indexOf(e);return t.substr(r+e.length)},setURL:function(t){i&&t.indexOf("#")===-1&&window.location.hash&&(t+=window.location.hash),window.history.pushState(null,null,e.route._call("root")+t)}};var t=function(t){if(t.isDefaultPrevented?!t.isDefaultPrevented():t.defaultPrevented!==!0){var n=this._node||this,r=n.host||window.location.host;if(window.location.host===r){var s=e.route._call("root");if(n.pathname.indexOf(s)===0){var o=(n.pathname+n.search).substr(s.length),u=e.route.deparam(o);u.hasOwnProperty("route")&&(i=!0,window.history.pushState(null,null,n.href),t.preventDefault&&t.preventDefault())}}}},n=function(){var t=location.protocol+"//"+location.host,n=e.route._call("root"),r=n.indexOf(t);return r===0?e.route.root.substr(t.length):n},r={},i=!1;e.route.defaultBinding="pushstate"}return e});