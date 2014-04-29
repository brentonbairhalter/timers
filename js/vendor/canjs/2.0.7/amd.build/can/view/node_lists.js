/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/view/elements"],function(e){var t=!0;try{document.createTextNode("")._=0}catch(n){t=!1}var r={},i={},s="ejs_"+Math.random(),o=0,u=function(e){if(t||e.nodeType!==3)return e[s]?e[s]:(++o,e[s]=(e.nodeName?"element_":"obj_")+o);for(var n in i)if(i[n]===e)return n;return++o,i["text_"+o]=e,"text_"+o},a=[].splice,f={id:u,update:function(t,n){e.each(t.childNodeLists,function(e){f.unregister(e)}),t.childNodeLists=[],e.each(t,function(e){delete r[u(e)]}),n=e.makeArray(n),e.each(n,function(e){r[u(e)]=t});var i=t.length,s=t[0];a.apply(t,[0,i].concat(n));var o=t;while(o=o.parentNodeList)a.apply(o,[e.inArray(s,o),i].concat(n))},register:function(e,t,n){e.unregistered=t,e.childNodeLists=[];if(!n){if(e.length>1)throw"does not work";var i=u(e[0]);n=r[i]}return e.parentNodeList=n,n&&n.childNodeLists.push(e),e},unregister:function(t){t.isUnregistered||(t.isUnregistered=!0,delete t.parentNodeList,e.each(t,function(e){var t=u(e);delete r[t]}),t.unregistered&&t.unregistered(),e.each(t.childNodeLists,function(e){f.unregister(e)}))},nodeMap:r};return f});