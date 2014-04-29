/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library"],function(e){var t={tagToContentPropMap:{option:"textContent"in document.createElement("option")?"textContent":"innerText",textarea:"value"},attrMap:{"class":"className",value:"value",innerText:"innerText",textContent:"textContent",checked:!0,disabled:!0,readonly:!0,required:!0,src:function(e,t){t===null||t===""?e.removeAttribute("src"):e.setAttribute("src",t)}},attrReg:/([^\s=]+)[\s]*=[\s]*/,defaultValue:["input","textarea"],tagMap:{"":"span",table:"tbody",tr:"td",ol:"li",ul:"li",tbody:"tr",thead:"tr",tfoot:"tr",select:"option",optgroup:"option"},reverseTagMap:{tr:"tbody",option:"select",td:"tr",th:"tr",li:"ul"},getParentNode:function(e,t){return t&&e.parentNode.nodeType===11?t:e.parentNode},setAttr:function(n,r,i){var s=n.nodeName.toString().toLowerCase(),o=t.attrMap[r];typeof o=="function"?o(n,i):o===!0&&r==="checked"&&n.type==="radio"?(e.inArray(s,t.defaultValue)>=0&&(n.defaultChecked=!0),n[r]=!0):o===!0?n[r]=!0:o?(n[o]=i,o==="value"&&e.inArray(s,t.defaultValue)>=0&&(n.defaultValue=i)):n.setAttribute(r,i)},getAttr:function(e,n){return(t.attrMap[n]&&e[t.attrMap[n]]?e[t.attrMap[n]]:e.getAttribute(n))||""},removeAttr:function(e,n){var r=t.attrMap[n];r===!0?e[n]=!1:typeof r=="string"?e[r]="":e.removeAttribute(n)},contentText:function(e){return typeof e=="string"?e:!e&&e!==0?"":""+e},after:function(t,n){var r=t[t.length-1];r.nextSibling?e.insertBefore(r.parentNode,n,r.nextSibling):e.appendChild(r.parentNode,n)},replace:function(n,r){t.after(n,r),e.remove(e.$(n))}};return function(){var e=document.createElement("div");e.setAttribute("style","width: 5px"),e.setAttribute("style","width: 10px"),t.attrMap.style=function(e,t){e.style.cssText=t||""}}(),t});