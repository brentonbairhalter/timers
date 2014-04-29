/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/can"],function(e){var t=/^\s*<(\w+)[^>]*>/,n=function(n,r){r===undefined&&(r=t.test(n)&&RegExp.$1),n&&e.isFunction(n.replace)&&(n=n.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,"<$1></$2>"));var i=document.createElement("div"),s=document.createElement("div");r==="tbody"||r==="tfoot"||r==="thead"?(s.innerHTML="<table>"+n+"</table>",i=s.firstChild.nodeType===3?s.lastChild:s.firstChild):r==="tr"?(s.innerHTML="<table><tbody>"+n+"</tbody></table>",i=s.firstChild.nodeType===3?s.lastChild:s.firstChild.firstChild):r==="td"||r==="th"?(s.innerHTML="<table><tbody><tr>"+n+"</tr></tbody></table>",i=s.firstChild.nodeType===3?s.lastChild:s.firstChild.firstChild.firstChild):r==="option"?(s.innerHTML="<select>"+n+"</select>",i=s.firstChild.nodeType===3?s.lastChild:s.firstChild):i.innerHTML=""+n;var o={},u=i.childNodes;o.length=u.length;for(var a=0;a<u.length;a++)o[a]=u[a];return[].slice.call(o)};return e.buildFragment=function(t,r){var i=n(t),s=document.createDocumentFragment();return e.each(i,function(e){s.appendChild(e)}),s},e});