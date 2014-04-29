/*!
 * CanJS - 2.0.7
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Wed, 26 Mar 2014 16:12:27 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/view/mustache","can/control"],function(e){var t=function(e,t){return e.hasAttribute?e.hasAttribute(t):e.getAttribute(t)!==null};e.view.Scanner.attribute("can-value",function(n,s){var o=s.getAttribute("can-value"),u=n.scope.computeData(o,{args:[]}).compute;if(s.nodeName.toLowerCase()==="input"){var a,f;s.type==="checkbox"&&(t(s,"can-true-value")?a=n.scope.compute(s.getAttribute("can-true-value")):a=e.compute(!0),t(s,"can-false-value")?f=n.scope.compute(s.getAttribute("can-false-value")):f=e.compute(!1));if(s.type==="checkbox"||s.type==="radio"){new i(s,{value:u,trueValue:a,falseValue:f});return}}new r(s,{value:u})});var n={enter:function(e,t,n){return{event:"keyup",handler:function(e){if(e.keyCode===13)return n.call(this,e)}}}};e.view.Scanner.attribute(/can-[\w\.]+/,function(t,r){var i=t.attr,s=t.attr.substr("can-".length),o=function(n){var s=r.getAttribute(i),o=t.scope.read(s,{returnObserveMethods:!0,isArgument:!0});return o.value.call(o.parent,t.scope._context,e.$(this),n)};if(n[s]){var u=n[s](t,r,o);o=u.handler,s=u.event}e.bind.call(r,s,o)});var r=e.Control.extend({init:function(){this.element[0].nodeName.toUpperCase()==="SELECT"?setTimeout(e.proxy(this.set,this),1):this.set()},"{value} change":"set",set:function(){if(!this.element)return;var e=this.options.value();this.element[0].value=typeof e=="undefined"?"":e},change:function(){if(!this.element)return;this.options.value(this.element[0].value)}}),i=e.Control.extend({init:function(){this.isCheckebox=this.element[0].type.toLowerCase()==="checkbox",this.check()},"{value} change":"check","{trueValue} change":"check","{falseValue} change":"check",check:function(){if(this.isCheckebox){var t=this.options.value(),n=this.options.trueValue()||!0;this.element[0].checked=t===n}else{var r=this.options.value()===this.element[0].value?"setAttr":"removeAttr";e.view.elements[r](this.element[0],"checked",!0)}},change:function(){this.isCheckebox?this.options.value(this.element[0].checked?this.options.trueValue():this.options.falseValue()):this.element[0].checked&&this.options.value(this.element[0].value)}})});