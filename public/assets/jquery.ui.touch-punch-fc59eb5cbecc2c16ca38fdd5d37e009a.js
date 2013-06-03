/*!
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(o){function t(o,t){if(!(o.originalEvent.touches.length>1)){o.preventDefault();var e=o.originalEvent.changedTouches[0],n=document.createEvent("MouseEvents");n.initMouseEvent(t,!0,!0,window,1,e.screenX,e.screenY,e.clientX,e.clientY,!1,!1,!1,!1,0,null),o.target.dispatchEvent(n)}}if(o.support.touch="ontouchend"in document,o.support.touch){var e,n=o.ui.mouse.prototype,u=n._mouseInit;n._touchStart=function(o){var n=this;!e&&n._mouseCapture(o.originalEvent.changedTouches[0])&&(e=!0,n._touchMoved=!1,t(o,"mouseover"),t(o,"mousemove"),t(o,"mousedown"))},n._touchMove=function(o){e&&(this._touchMoved=!0,t(o,"mousemove"))},n._touchEnd=function(o){e&&(t(o,"mouseup"),t(o,"mouseout"),this._touchMoved||t(o,"click"),e=!1)},n._mouseInit=function(){var t=this;t.element.bind("touchstart",o.proxy(t,"_touchStart")).bind("touchmove",o.proxy(t,"_touchMove")).bind("touchend",o.proxy(t,"_touchEnd")),u.call(t)}}}(jQuery);