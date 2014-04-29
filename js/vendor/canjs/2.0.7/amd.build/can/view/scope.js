/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/construct","can/map","can/list","can/view","can/compute"],function(e){var t=/(\\)?\./g,n=/\\\./g,r=function(e){var r=[],i=0;return e.replace(t,function(t,s,o){s||(r.push(e.slice(i,o).replace(n,".")),i=o+t.length)}),r.push(e.slice(i).replace(n,".")),r},i=e.Construct.extend({read:e.compute.read},{init:function(e,t){this._context=e,this._parent=t},attr:function(t){var n=e.__clearReading&&e.__clearReading(),r=this.read(t,{isArgument:!0,returnObserveMethods:!0,proxyMethods:!1}).value;return e.__setReading&&e.__setReading(n),r},add:function(e){return e!==this._context?new this.constructor(e,this):this},computeData:function(t,n){n=n||{args:[]};var r=this,s,o,u={compute:e.compute(function(e){if(!arguments.length){if(s)return i.read(s,o,n).value;var f=r.read(t,n);return s=f.rootObserve,o=f.reads,u.scope=f.scope,u.initialValue=f.value,f.value}if(s.isComputed&&!o.length)s(e);else{var a=o.length-1;i.read(s,o.slice(0,a)).value.attr(o[a],e)}})};return u},read:function(t,n){if(t.substr(0,3)==="../")return this._parent.read(t.substr(3),n);if(t==="..")return{value:this._parent._context};if(t==="."||t==="this")return{value:this._context};var s=t.indexOf("\\.")===-1?t.split("."):r(t),o,u=this,a,f=[],l=-1,c,h,p,d;while(u){o=u._context;if(o!==null){var v=i.read(o,s,e.simpleExtend({foundObservable:function(e,t){p=e,d=s.slice(t)},earlyExit:function(t,n){n>l&&(a=p,f=d,l=n,h=u,c=e.__clearReading&&e.__clearReading())}},n));if(v.value!==undefined)return{scope:u,rootObserve:p,value:v.value,reads:d}}e.__clearReading&&e.__clearReading(),u=u._parent}return a?(e.__setReading&&e.__setReading(c),{scope:h,rootObserve:a,reads:f,value:undefined}):{names:s,value:undefined}}});return e.view.Scope=i,i});