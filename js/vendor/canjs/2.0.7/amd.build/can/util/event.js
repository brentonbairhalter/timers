/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/can"],function(e){return e.addEvent=function(e,t){var n=this.__bindEvents||(this.__bindEvents={}),r=n[e]||(n[e]=[]);return r.push({handler:t,name:e}),this},e.listenTo=function(t,n,r){var i=this.__listenToEvents;i||(i=this.__listenToEvents={});var s=e.cid(t),o=i[s];o||(o=i[s]={obj:t,events:{}});var u=o.events[n];u||(u=o.events[n]=[]),u.push(r),e.bind.call(t,n,r)},e.stopListening=function(t,n,r){var i=this.__listenToEvents,s=i,o=0;if(!i)return this;if(t){var u=e.cid(t);(s={})[u]=i[u];if(!i[u])return this}for(var a in s){var f=s[a],l;t=i[a].obj,n?(l={})[n]=f.events[n]:l=f.events;for(var c in l){var h=l[c]||[];o=0;while(o<h.length)r&&r===h[o]||!r?(e.unbind.call(t,c,h[o]),h.splice(o,1)):o++;h.length||delete f.events[c]}e.isEmptyObject(f.events)&&delete i[a]}return this},e.removeEvent=function(e,t){if(!this.__bindEvents)return this;var n=this.__bindEvents[e]||[],r=0,i,s=typeof t=="function";while(r<n.length)i=n[r],s&&i.handler===t||!s&&i.cid===t?n.splice(r,1):r++;return this},e.dispatch=function(e,t){if(!this.__bindEvents)return;typeof e=="string"&&(e={type:e});var n=e.type,r=(this.__bindEvents[n]||[]).slice(0),i;t=[e].concat(t||[]);for(var s=0,o=r.length;s<o;s++)i=r[s],i.handler.apply(this,t)},e});