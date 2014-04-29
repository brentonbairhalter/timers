/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/list"],function(e){var t=e.List.prototype,n=t._changes,r=t.setup;e.extend(t,{comparator:undefined,sortIndexes:[],sortedIndex:function(e){var t=e.attr(this.comparator),n=0;for(var r=0,i=this.length;r<i;r++){if(e===this[r]){n=-1;continue}if(t<=this[r].attr(this.comparator))return r+n}return r+n},sort:function(t,n){var r=this.comparator,i=r?[function(e,t){return e=typeof e[r]=="function"?e[r]():e[r],t=typeof t[r]=="function"?t[r]():t[r],e===t?0:e<t?-1:1}]:[t];return n||e.trigger(this,"reset"),Array.prototype.sort.apply(this,i)}});var i=function(t){return t[0]&&e.isArray(t[0])?t[0]:e.makeArray(t)};return e.each({push:"length",unshift:0},function(t,n){var r=e.List.prototype,s=r[n];r[n]=function(){var n=i(arguments),r=t?this.length:0,o=s.apply(this,arguments);return this.comparator&&n.length&&(this.sort(null,!0),e.batch.trigger(this,"reset",[n]),this._triggerChange(""+r,"add",n,undefined)),o}}),t._changes=function(t,r,i,s,o){if(this.comparator&&/^\d+./.test(r)){var u=+/^\d+/.exec(r)[0],a=this[u];if(typeof a!="undefined"){var f=this.sortedIndex(a);if(f!==u){[].splice.call(this,u,1),[].splice.call(this,f,0,a),e.trigger(this,"move",[a,f,u]),e.trigger(this,"change",[r.replace(/^\d+/,f),i,s,o]);return}}}n.apply(this,arguments)},t.setup=function(e,t){r.apply(this,arguments),this.comparator&&this.sort()},e.Map});