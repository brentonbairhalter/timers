/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/can","dojo","can/util/event","can/util/fragment","can/util/array/each","can/util/object/isplain","can/util/deferred","can/util/hashchange","can/util/inserted"],function(e){function a(e,t){var n=e[u],r=n&&s[n];return t===undefined?r||f(e):r&&r[t]}function f(e,t,n){var r=e[u]||(e[u]=++o),i=s[r]||(s[r]={});return t!==undefined&&(i[t]=n),i}define("plugd/trigger",["dojo"],function(e){var t=e,n=t.isFunction,r=/mouse(enter|leave)/,i=function(e,t){return"mouse"+(t==="enter"?"over":"out")},s=t._mixin,o;return t.doc.createEvent?o=function(e,n,o){var u=t.doc.createEvent("HTMLEvents");n=n.replace(r,i),u.initEvent(n,n==="removed"||n==="inserted"?!1:!0,!0),o&&s(u,o),e.dispatchEvent(u)}:o=function(e,r,i){var o="on"+r,u=!1;try{var a=document.createEventObject();if(r==="inserted"||r==="removed")a.cancelBubble=!0;s(a,i),e.fireEvent(o,a)}catch(f){var l=s({type:r,target:e,faux:!0,_stopper:function(){u=this.cancelBubble}},i);n(e[o])&&e[o](l);if(r==="inserted"||r==="removed")return;while(!u&&e!==t.doc&&e.parentNode)e=e.parentNode,n(e[o])&&e[o](l)}},t._trigger=function(e,n,r){typeof n!="string"&&(r=n,n=r.type,delete r.type);var i=t.byId(e),s=n&&n.slice(0,2)==="on"?n.slice(2):n;o(i,s,r)},t.trigger=function(e,r,i){return n(e)||n(r)||n(e[r])?t.hitch.apply(t,arguments)():t._trigger.apply(t,arguments)},t.NodeList.prototype.trigger=t.NodeList._adaptAsForEach(t._trigger),t._Node&&!t._Node.prototype.trigger&&t.extend(t._Node,{trigger:function(e,n){return t._trigger(this,e,n),this}}),t.trigger}),require(["dojo","dojo/query","plugd/trigger","dojo/NodeList-dom"]),e.trim=function(e){return e&&dojo.trim(e)},e.makeArray=function(e){var t=[];return dojo.forEach(e,function(e){t.push(e)}),t},e.isArray=dojo.isArray,e.inArray=function(e,t,n){return dojo.indexOf(t,e,n)},e.map=function(t,n){return dojo.map(e.makeArray(t||[]),n)},e.extend=function(t){if(t===!0){var n=e.makeArray(arguments);return n.shift(),dojo.mixin.apply(dojo,n)}return dojo.mixin.apply(dojo,arguments)},e.isEmptyObject=function(e){var t;for(t in e)break;return t===undefined},e.param=function(t){var n=[],r=function(e,t){n.push(encodeURIComponent(e)+"="+encodeURIComponent(t))};for(var i in t)e.buildParam(i,t[i],r);return n.join("&").replace(/%20/g,"+")},e.buildParam=function(t,n,r){if(e.isArray(n))for(var i=0,s=n.length;i<s;++i)r(t+"[]",n[i]);else if(dojo.isObject(n))for(var o in n)e.buildParam(t+"["+o+"]",n[o],r);else r(t,n)},e.proxy=function(e,t){return dojo.hitch(t,e)},e.isFunction=function(e){return dojo.isFunction(e)};var t=0,n=function(n,r,i){n.forEach(function(n){n=new dojo.NodeList(n.nodeName==="SELECT"?[n]:n);var s=e.data(n,"events");s||e.data(n,"events",s={}),s[r]||(s[r]={}),i.__bindingsIds===undefined&&(i.__bindingsIds=t++),s[r][i.__bindingsIds]=n.on(r,i)[0]})},r=function(t,n,r){t.forEach(function(t){var i=new dojo.NodeList(t),s=e.data(i,"events");if(!s)return;var o=s[n];if(!o)return;var u=o[r.__bindingsIds];dojo.disconnect(u),delete o[r.__bindingsIds],e.isEmptyObject(o)&&delete s[n]})};e.bind=function(t,r){return this.bind&&this.bind!==e.bind?this.bind(t,r):this.on||this.nodeType?n(new dojo.NodeList(this.nodeName==="SELECT"?[this]:this),t,r):this.addEvent?this.addEvent(t,r):e.addEvent.call(this,t,r),this},e.unbind=function(t,n){return this.unbind&&this.unbind!==e.unbind?this.unbind(t,n):this.on||this.nodeType?r(new dojo.NodeList(this),t,n):e.removeEvent.call(this,t,n),this},e.on=e.bind,e.off=e.unbind,e.trigger=function(t,n,r,i){!(t instanceof dojo.NodeList)&&(t.nodeName||t===window)&&(t=e.$(t));if(t.trigger)if(i===!1){if(!t[0]||t[0].nodeType===3)return;var s=t.on(n,function(e){e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e._stopper&&e._stopper(),dojo.disconnect(s)});t.trigger(n,r)}else t.trigger(n,r);else typeof n=="string"&&(n={type:n}),n.target=n.target||t,e.dispatch.call(t,n,r)},e.delegate=function(e,t,r){return this.on||this.nodeType?n(new dojo.NodeList(this),e+":"+t,r):this.delegate&&this.delegate(e,t,r),this},e.undelegate=function(e,t,n){return this.on||this.nodeType?r(new dojo.NodeList(this),e+":"+t,n):this.undelegate&&this.undelegate(e,t,n),this};var i=function(e,t){for(var n in e)typeof t[n]=="function"?t[n]=function(){e[n].apply(e,arguments)}:t[n]=n[e]};e.ajax=function(t){var n=e.capitalize((t.type||"get").toLowerCase()),r=dojo["xhr"+n],s=t.success,o=t.error,u=new e.Deferred,a=r({url:t.url,handleAs:t.dataType,sync:!t.async,headers:t.headers,content:t.data});a.then(function(e,t){i(f,u),u.resolve(e,"success",f),s&&s(e,"success",f)},function(e,t){i(f,u),u.reject(f,"error"),o(f,"error")});var f=a.ioArgs.xhr;return i(f,u),u},e.$=function(e){return e===window?window:typeof e=="string"?dojo.query(e):new dojo.NodeList(e)},e.append=function(e,t){return e.forEach(function(e){dojo.place(t,e)})};var s={},o=e.uuid=+(new Date),u=e.expando="can"+o,l=function(t){var n=[];for(var r=0,i=t.length;r<i;r++)t[r].nodeType===1&&n.push(t[r]);e.trigger(new dojo.NodeList(n),"removed",[],!1),r=0;for(var o;(o=t[r])!==undefined;r++){var a=o[u];delete s[a]}};e.data=function(e,t,n){return n===undefined?e.length===0?undefined:a(e[0],t):e.forEach(function(e){f(e,t,n)})},dojo.empty=function(e){for(var t;t=e.lastChild;)dojo.destroy(t)};var c=dojo.destroy;dojo.destroy=function(t){t=dojo.byId(t);var n=[t];return t.getElementsByTagName&&n.concat(e.makeArray(t.getElementsByTagName("*"))),l(n),c.apply(dojo,arguments)};var h=dojo.place;return dojo.place=function(t,n,r){typeof t=="string"&&/^\s*</.test(t)&&(t=e.buildFragment(t));var i;t.nodeType===11?i=e.makeArray(t.childNodes):i=[t];var s=h.call(this,t,n,r);return e.inserted(i),s},e.addClass=function(e,t){return e.addClass(t)},e.remove=function(t){var n=[];return t.forEach(function(t){n.push(t),t.getElementsByTagName&&n.push.apply(n,e.makeArray(t.getElementsByTagName("*")))}),l(n),t.forEach(c),t},e.get=function(e,t){return e[t]},e.has=function(e,t){return dojo.isDescendant(t,e[0])?e:[]},e.extend(dojo.Deferred.prototype,{pipe:function(e,t){var n=new dojo.Deferred;return this.addCallback(function(){n.resolve(e.apply(this,arguments))}),this.addErrback(function(){t?n.reject(t.apply(this,arguments)):n.reject.apply(n,arguments)}),n}}),e});