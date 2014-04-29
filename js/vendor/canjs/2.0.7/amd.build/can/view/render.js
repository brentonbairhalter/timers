/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/view","can/view/elements","can/view/live","can/util/string"],function(e,t,n){var r=[],i=function(e){var n=t.tagMap[e]||"span";return n==="span"?"@@!!@@":"<"+n+">"+i(n)+"</"+n+">"},s=function(t,n){if(typeof t=="string")return t;if(!t&&t!==0)return"";var i=t.hookup&&function(e,n){t.hookup.call(t,e,n)}||typeof t=="function"&&t;if(i)return n?"<"+n+" "+e.view.hook(i)+"></"+n+">":(r.push(i),"");return""+t},o=function(t,n){return typeof t=="string"||typeof t=="number"?e.esc(t):s(t,n)},u=!1,a=function(){},f;return e.extend(e.view,{live:n,setupLists:function(){var t=e.view.lists,n;return e.view.lists=function(e,t){return n={list:e,renderer:t},Math.random()},function(){return e.view.lists=t,n}},pending:function(t){var n=e.view.getHooks();return e.view.hook(function(r){e.each(n,function(e){e(r)}),e.view.Scanner.hookupAttributes(t,r)})},getHooks:function(){var e=r.slice(0);return f=e,r=[],e},onlytxt:function(e,t){return o(t.call(e))},txt:function(l,c,h,p,d){var v=t.tagMap[c]||"span",m=!1,g,y,b,w,E;if(u)y=d.call(p);else{if(typeof h=="string"||h===1)u=!0;var S=e.view.setupLists();b=function(){g.unbind("change",a)},g=e.compute(d,p,!1),g.bind("change",a),w=S(),y=g(),u=!1,m=g.hasDependencies}if(w)return b&&b(),"<"+v+e.view.hook(function(e,t){n.list(e,w.list,w.renderer,p,t)})+"></"+v+">";if(!m||typeof y=="function")return b&&b(),(u||l===2||!l?s:o)(y,h===0&&v);var x=t.tagToContentPropMap[c];return h===0&&!x?"<"+v+e.view.hook(l&&typeof y!="object"?function(e,t){n.text(e,g,t),b()}:function(e,t){n.html(e,g,t),b()})+">"+i(v)+"</"+v+">":h===1?(r.push(function(e){n.attributes(e,g,g()),b()}),g()):l===2?(E=h,r.push(function(e){n.specialAttribute(e,E,g),b()}),g()):(E=h===0?x:h,(h===0?f:r).push(function(e){n.attribute(e,E,g),b()}),n.attributePlaceholder)}}),e});