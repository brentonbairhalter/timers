/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/can"],function(e){var t=1,n=0,r=[],i=[];e.batch={start:function(e){n++,e&&i.push(e)},stop:function(s,o){s?n=0:n--;if(n===0){var u=r.slice(0),a=i.slice(0);r=[],i=[],t++,o&&e.batch.start(),e.each(u,function(t){e.trigger.apply(e,t)}),e.each(a,function(e){e()})}},trigger:function(i,s,o){if(!i._init){if(n===0)return e.trigger(i,s,o);s=typeof s=="string"?{type:s}:s,s.batchNum=t,r.push([i,s,o])}}}});