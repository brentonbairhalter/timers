/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/can"],function(e){var t=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},n=function(e){if(!(this instanceof n))return new n;this._doneFuncs=[],this._failFuncs=[],this._resultArgs=null,this._status="",e&&e.call(this,this)};e.Deferred=n,e.when=n.when=function(){var t=e.makeArray(arguments);if(t.length<2){var r=t[0];return r&&e.isFunction(r.isResolved)&&e.isFunction(r.isRejected)?r:n().resolve(r)}var i=n(),s=0,o=[];return e.each(t,function(e,n){e.done(function(){o[n]=arguments.length<2?arguments[0]:arguments,++s===t.length&&i.resolve.apply(i,o)}).fail(function(){i.reject(arguments.length===1?arguments[0]:arguments)})}),i};var r=function(e,t){return function(n){var r=this._resultArgs=arguments.length>1?arguments[1]:[];return this.exec(n,this[e],r,t)}},i=function s(t,n){return function(){var r=this;return e.each(Array.prototype.slice.call(arguments),function(e,i,o){if(!e)return;e.constructor===Array?s.apply(r,e):(r._status===n&&e.apply(r,r._resultArgs||[]),r[t].push(e))}),this}};return t(n.prototype,{pipe:function(t,n){var r=e.Deferred();return this.done(function(){r.resolve(t.apply(this,arguments))}),this.fail(function(){n?r.reject(n.apply(this,arguments)):r.reject.apply(r,arguments)}),r},resolveWith:r("_doneFuncs","rs"),rejectWith:r("_failFuncs","rj"),done:i("_doneFuncs","rs"),fail:i("_failFuncs","rj"),always:function(){var t=e.makeArray(arguments);return t.length&&t[0]&&this.done(t[0]).fail(t[0]),this},then:function(){var t=e.makeArray(arguments);return t.length>1&&t[1]&&this.fail(t[1]),t.length&&t[0]&&this.done(t[0]),this},state:function(){switch(this._status){case"rs":return"resolved";case"rj":return"rejected";default:return"pending"}},isResolved:function(){return this._status==="rs"},isRejected:function(){return this._status==="rj"},reject:function(){return this.rejectWith(this,arguments)},resolve:function(){return this.resolveWith(this,arguments)},exec:function(t,n,r,i){return this._status!==""?this:(this._status=i,e.each(n,function(e){typeof e.apply=="function"&&e.apply(t,r)}),this)}}),e});