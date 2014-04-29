/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library"],function(e){return e.bindAndSetup=function(){return e.addEvent.apply(this,arguments),this._init||(this._bindings?this._bindings++:(this._bindings=1,this._bindsetup&&this._bindsetup())),this},e.unbindAndTeardown=function(t,n){return e.removeEvent.apply(this,arguments),this._bindings===null?this._bindings=0:this._bindings--,!this._bindings&&this._bindteardown&&this._bindteardown(),this},e});