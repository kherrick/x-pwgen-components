import{_ as t,f as e,a as i,b as n,q as o,p as s,h as r,c as a,e as c}from"./lit-element-e8bb647f.js";import{M as d}from"./foundation-0388ced5.js";import{c as h}from"./class-map-f61bcc55.js";import{o as u,B as l,a as m,b as p,d as f}from"./base-element-991ab497.js";import{b as _}from"./mwc-list-d88553c5.js";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var T,y,g={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},E={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},O={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(T||(T={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(y||(y={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var I,A=function(n){function o(t){var e=n.call(this,i({},o.defaultAdapter,t))||this;return e.isOpen_=!1,e.isQuickOpen_=!1,e.isHoistedElement_=!1,e.isFixedPosition_=!1,e.openAnimationEndTimerId_=0,e.closeAnimationEndTimerId_=0,e.animationRequestId_=0,e.anchorCorner_=y.TOP_START,e.anchorMargin_={top:0,right:0,bottom:0,left:0},e.position_={x:0,y:0},e}return t(o,n),Object.defineProperty(o,"cssClasses",{get:function(){return g},enumerable:!0,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return E},enumerable:!0,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return O},enumerable:!0,configurable:!0}),Object.defineProperty(o,"Corner",{get:function(){return y},enumerable:!0,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),o.prototype.init=function(){var t=o.cssClasses,e=t.ROOT,i=t.OPEN;if(!this.adapter_.hasClass(e))throw new Error(e+" class required in root element.");this.adapter_.hasClass(i)&&(this.isOpen_=!0)},o.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)},o.prototype.setAnchorCorner=function(t){this.anchorCorner_=t},o.prototype.setAnchorMargin=function(t){this.anchorMargin_.top=t.top||0,this.anchorMargin_.right=t.right||0,this.anchorMargin_.bottom=t.bottom||0,this.anchorMargin_.left=t.left||0},o.prototype.setIsHoisted=function(t){this.isHoistedElement_=t},o.prototype.setFixedPosition=function(t){this.isFixedPosition_=t},o.prototype.setAbsolutePosition=function(t,e){this.position_.x=this.isFinite_(t)?t:0,this.position_.y=this.isFinite_(e)?e:0},o.prototype.setQuickOpen=function(t){this.isQuickOpen_=t},o.prototype.isOpen=function(){return this.isOpen_},o.prototype.open=function(){var t=this;this.adapter_.saveFocus(),this.isQuickOpen_||this.adapter_.addClass(o.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame((function(){t.adapter_.addClass(o.cssClasses.OPEN),t.dimensions_=t.adapter_.getInnerDimensions(),t.autoPosition_(),t.isQuickOpen_?t.adapter_.notifyOpen():t.openAnimationEndTimerId_=setTimeout((function(){t.openAnimationEndTimerId_=0,t.adapter_.removeClass(o.cssClasses.ANIMATING_OPEN),t.adapter_.notifyOpen()}),O.TRANSITION_OPEN_DURATION)})),this.isOpen_=!0},o.prototype.close=function(t){var e=this;void 0===t&&(t=!1),this.isQuickOpen_||this.adapter_.addClass(o.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){e.adapter_.removeClass(o.cssClasses.OPEN),e.isQuickOpen_?e.adapter_.notifyClose():e.closeAnimationEndTimerId_=setTimeout((function(){e.closeAnimationEndTimerId_=0,e.adapter_.removeClass(o.cssClasses.ANIMATING_CLOSED),e.adapter_.notifyClose()}),O.TRANSITION_CLOSE_DURATION)})),this.isOpen_=!1,t||this.maybeRestoreFocus_()},o.prototype.handleBodyClick=function(t){var e=t.target;this.adapter_.isElementInContainer(e)||this.close()},o.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},o.prototype.autoPosition_=function(){var t;this.measurements_=this.getAutoLayoutMeasurements_();var e=this.getOriginCorner_(),i=this.getMenuSurfaceMaxHeight_(e),n=this.hasBit_(e,T.BOTTOM)?"bottom":"top",o=this.hasBit_(e,T.RIGHT)?"right":"left",s=this.getHorizontalOriginOffset_(e),r=this.getVerticalOriginOffset_(e),a=this.measurements_,c=a.anchorSize,d=a.surfaceSize,h=((t={})[o]=s,t[n]=r,t);c.width/d.width>O.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement_||this.isFixedPosition_)&&this.adjustPositionForHoistedElement_(h),this.adapter_.setTransformOrigin(o+" "+n),this.adapter_.setPosition(h),this.adapter_.setMaxHeight(i?i+"px":"")},o.prototype.getAutoLayoutMeasurements_=function(){var t=this.adapter_.getAnchorDimensions(),e=this.adapter_.getBodyDimensions(),i=this.adapter_.getWindowDimensions(),n=this.adapter_.getWindowScroll();return t||(t={top:this.position_.y,right:this.position_.x,bottom:this.position_.y,left:this.position_.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions_,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:n}},o.prototype.getOriginCorner_=function(){var t=y.TOP_LEFT,e=this.measurements_,i=e.viewportDistance,n=e.anchorSize,o=e.surfaceSize,s=this.hasBit_(this.anchorCorner_,T.BOTTOM),r=s?i.top+n.height+this.anchorMargin_.bottom:i.top+this.anchorMargin_.top,a=s?i.bottom-this.anchorMargin_.bottom:i.bottom+n.height-this.anchorMargin_.top,c=o.height-r,d=o.height-a;d>0&&c<d&&(t=this.setBit_(t,T.BOTTOM));var h=this.adapter_.isRtl(),u=this.hasBit_(this.anchorCorner_,T.FLIP_RTL),l=this.hasBit_(this.anchorCorner_,T.RIGHT),m=l&&!h||!l&&u&&h,p=m?i.left+n.width+this.anchorMargin_.right:i.left+this.anchorMargin_.left,f=m?i.right-this.anchorMargin_.right:i.right+n.width-this.anchorMargin_.left,_=o.width-p,g=o.width-f;return(_<0&&m&&h||l&&!m&&_<0||g>0&&_<g)&&(t=this.setBit_(t,T.RIGHT)),t},o.prototype.getMenuSurfaceMaxHeight_=function(t){var e=this.measurements_.viewportDistance,i=0,n=this.hasBit_(t,T.BOTTOM),s=this.hasBit_(this.anchorCorner_,T.BOTTOM),r=o.numbers.MARGIN_TO_EDGE;return n?(i=e.top+this.anchorMargin_.top-r,s||(i+=this.measurements_.anchorSize.height)):(i=e.bottom-this.anchorMargin_.bottom+this.measurements_.anchorSize.height-r,s&&(i-=this.measurements_.anchorSize.height)),i},o.prototype.getHorizontalOriginOffset_=function(t){var e=this.measurements_.anchorSize,i=this.hasBit_(t,T.RIGHT),n=this.hasBit_(this.anchorCorner_,T.RIGHT);if(i){var o=n?e.width-this.anchorMargin_.left:this.anchorMargin_.right;return this.isHoistedElement_||this.isFixedPosition_?o-(this.measurements_.viewportSize.width-this.measurements_.bodySize.width):o}return n?e.width-this.anchorMargin_.right:this.anchorMargin_.left},o.prototype.getVerticalOriginOffset_=function(t){var e=this.measurements_.anchorSize,i=this.hasBit_(t,T.BOTTOM),n=this.hasBit_(this.anchorCorner_,T.BOTTOM);return i?n?e.height-this.anchorMargin_.top:-this.anchorMargin_.bottom:n?e.height+this.anchorMargin_.bottom:this.anchorMargin_.top},o.prototype.adjustPositionForHoistedElement_=function(t){var i,n,o=this.measurements_,s=o.windowScroll,r=o.viewportDistance,a=Object.keys(t);try{for(var c=e(a),d=c.next();!d.done;d=c.next()){var h=d.value,u=t[h]||0;u+=r[h],this.isFixedPosition_||("top"===h?u+=s.y:"bottom"===h?u-=s.y:"left"===h?u+=s.x:u-=s.x),t[h]=u}}catch(t){i={error:t}}finally{try{d&&!d.done&&(n=c.return)&&n.call(c)}finally{if(i)throw i.error}}},o.prototype.maybeRestoreFocus_=function(){var t=this.adapter_.isFocused(),e=document.activeElement&&this.adapter_.isElementInContainer(document.activeElement);(t||e)&&this.adapter_.restoreFocus()},o.prototype.hasBit_=function(t,e){return Boolean(t&e)},o.prototype.setBit_=function(t,e){return t|e},o.prototype.isFinite_=function(t){return"number"==typeof t&&isFinite(t)},o}(d);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class b extends l{constructor(){super(...arguments),this.mdcFoundationClass=A,this.absolute=!1,this.fullwidth=!1,this.anchor=null,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.corner="TOP_START",this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){const t={"mdc-menu-surface--fixed":this.fixed,fullwidth:this.fullwidth};return r`
      <div
          class="mdc-menu-surface ${h(t)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},m(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const t=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(t)},notifyOpen:()=>{const t=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(t)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:t=>{const e=this.mdcRoot;if(!e)return;const i=`${function(t,e){if(void 0===e&&(e=!1),void 0===I||e){var i=t.document.createElement("div");I="transform"in i.style?"transform":"webkitTransform"}return I}(window)}-origin`;e.style.setProperty(i,t)},isFocused:()=>p(this),saveFocus:()=>{const t=f(),e=t.length;e||(this.previouslyFocused=null),this.previouslyFocused=t[e-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const t=this.mdcRoot;return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const t=this.anchor;return t?t.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{const e=this.mdcRoot;e&&(e.style.left="left"in t?`${t.left}px`:"",e.style.right="right"in t?`${t.right}px`:"",e.style.top="top"in t?`${t.top}px`:"",e.style.bottom="bottom"in t?`${t.bottom}px`:"")},setMaxHeight:t=>{const e=this.mdcRoot;e&&(e.style.maxHeight=t)}})}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onBodyClick(t){-1===t.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound)}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound)}saveOrRestoreAnchor(t){t&&(this.previousAnchor=this.anchor,this.anchor=null),t||this.anchor||!this.previousAnchor||(this.anchor=this.previousAnchor)}close(){this.open=!1}show(){this.open=!0}}n([o(".mdc-menu-surface")],b.prototype,"mdcRoot",void 0),n([o("slot")],b.prototype,"slotElement",void 0),n([s({type:Boolean}),u((function(t){this.mdcFoundation&&!this.fixed&&(this.mdcFoundation.setIsHoisted(t),this.saveOrRestoreAnchor(t))}))],b.prototype,"absolute",void 0),n([s({type:Boolean})],b.prototype,"fullwidth",void 0),n([s({type:Object}),u((function(t,e){e&&(e.style.position=""),t&&(t.style.position="relative")}))],b.prototype,"anchor",void 0),n([s({type:Boolean}),u((function(t){this.mdcFoundation&&!this.absolute&&(this.mdcFoundation.setIsHoisted(t),this.saveOrRestoreAnchor(t))}))],b.prototype,"fixed",void 0),n([s({type:Number}),u((function(t){this.mdcFoundation&&null!==this.y&&null!==t&&(this.mdcFoundation.setAbsolutePosition(t,this.y),this.mdcFoundation.setAnchorMargin({left:t,top:this.y}))}))],b.prototype,"x",void 0),n([s({type:Number}),u((function(t){this.mdcFoundation&&null!==this.x&&null!==t&&(this.mdcFoundation.setAbsolutePosition(this.x,t),this.mdcFoundation.setAnchorMargin({left:this.x,top:t}))}))],b.prototype,"y",void 0),n([s({type:Boolean}),u((function(t){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(t)}))],b.prototype,"quick",void 0),n([s({type:Boolean,reflect:!0}),u((function(t){this.mdcFoundation&&(t?this.mdcFoundation.open():this.mdcFoundation.close())}))],b.prototype,"open",void 0),n([s({type:String}),u((function(t){this.mdcFoundation&&(t?this.mdcFoundation.setAnchorCorner(y[t]):this.mdcFoundation.setAnchorCorner(y.TOP_START))}))],b.prototype,"corner",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const v=a`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}:host(:not([open])){display:none}.fullwidth{width:100%}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let x=class extends b{};x.styles=v,x=n([c("mwc-menu-surface")],x);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var C,S={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},w={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"},R={FOCUS_ROOT_INDEX:-1};!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(C||(C={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var F=function(e){function n(t){var o=e.call(this,i({},n.defaultAdapter,t))||this;return o.closeAnimationEndTimerId_=0,o.defaultFocusState_=C.LIST_ROOT,o}return t(n,e),Object.defineProperty(n,"cssClasses",{get:function(){return S},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return w},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return R},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),n.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()},n.prototype.handleKeydown=function(t){var e=t.key,i=t.keyCode;("Tab"===e||9===i)&&this.adapter_.closeSurface(!0)},n.prototype.handleItemAction=function(t){var e=this,i=this.adapter_.getElementIndex(t);i<0||(this.adapter_.notifySelected({index:i}),this.adapter_.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var i=e.adapter_.getElementIndex(t);e.adapter_.isSelectableItemAtIndex(i)&&e.setSelectedIndex(i)}),A.numbers.TRANSITION_CLOSE_DURATION))},n.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case C.FIRST_ITEM:this.adapter_.focusItemAtIndex(0);break;case C.LAST_ITEM:this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount()-1);break;case C.NONE:break;default:this.adapter_.focusListRoot()}},n.prototype.setDefaultFocusState=function(t){this.defaultFocusState_=t},n.prototype.setSelectedIndex=function(t){if(this.validatedIndex_(t),!this.adapter_.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter_.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter_.removeAttributeFromElementAtIndex(e,w.ARIA_CHECKED_ATTR),this.adapter_.removeClassFromElementAtIndex(e,S.MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(t,S.MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(t,w.ARIA_CHECKED_ATTR,"true")},n.prototype.setEnabled=function(t,e){this.validatedIndex_(t),e?(this.adapter_.removeClassFromElementAtIndex(t,_.LIST_ITEM_DISABLED_CLASS),this.adapter_.addAttributeToElementAtIndex(t,w.ARIA_DISABLED_ATTR,"false")):(this.adapter_.addClassToElementAtIndex(t,_.LIST_ITEM_DISABLED_CLASS),this.adapter_.addAttributeToElementAtIndex(t,w.ARIA_DISABLED_ATTR,"true"))},n.prototype.validatedIndex_=function(t){var e=this.adapter_.getMenuItemCount();if(!(t>=0&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},n}(d);class M extends l{constructor(){super(...arguments),this.mdcFoundationClass=F,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.defaultFocus="LIST_ROOT"}get listElement(){return this.listElement_?this.listElement_:(this.listElement_=this.renderRoot.querySelector("mwc-list"),this.listElement_)}get items(){const t=this.listElement;return t?t.items:[]}get index(){const t=this.listElement;return t?t.index:-1}get selected(){const t=this.listElement;return t?t.selected:null}render(){const t="menu"===this.innerRole?"menuitem":"option";return r`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
          <mwc-list
            rootTabbable
            .innerRole=${this.innerRole}
            .multi=${this.multi}
            class="mdc-list"
            .itemRoles=${t}
            .wrapFocus=${this.wrapFocus}
            .activatable=${this.activatable}
            @action=${this.onAction}>
          <slot></slot>
        </mwc-list>
      </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const n=i.items[t];n&&("mdc-menu-item--selected"===e?this.forceGroupSelection&&!n.selected&&i.toggle(t,!0):n.classList.add(e))},removeClassFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const n=i.items[t];n&&("mdc-menu-item--selected"===e?n.selected&&i.toggle(t,!1):n.classList.remove(e))},addAttributeToElementAtIndex:(t,e,i)=>{const n=this.listElement;if(!n)return;const o=n.items[t];o&&o.setAttribute(e,i)},removeAttributeFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const n=i.items[t];n&&n.removeAttribute(e)},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:()=>{this.open=!1},getElementIndex:t=>{const e=this.listElement;return e?e.items.indexOf(t):-1},notifySelected:()=>{},getMenuItemCount:()=>{const t=this.listElement;return t?t.items.length:0},focusItemAtIndex:t=>{const e=this.listElement;if(!e)return;const i=e.items[t];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:t=>{const e=this.listElement;if(!e)return-1;const i=e.items[t];if(!i||!i.group)return-1;for(let n=0;n<e.items.length;n++){if(n===t)continue;const o=e.items[n];if(o.selected&&o.group===i.group)return n}return-1},isSelectableItemAtIndex:t=>{const e=this.listElement;if(!e)return!1;const i=e.items[t];return!!i&&i.hasAttribute("group")}}}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onAction(t){const e=this.listElement;if(this.mdcFoundation&&e){const i=t.detail.index,n=e.items[i];n&&this.mdcFoundation.handleItemAction(n)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}select(t){const e=this.listElement;e&&e.select(t)}close(){this.open=!1}show(){this.open=!0}layout(t=!0){const e=this.listElement;e&&e.layout(t)}}n([o(".mdc-menu")],M.prototype,"mdcRoot",void 0),n([o("slot")],M.prototype,"slotElement",void 0),n([s({type:Object})],M.prototype,"anchor",void 0),n([s({type:Boolean,reflect:!0})],M.prototype,"open",void 0),n([s({type:Boolean})],M.prototype,"quick",void 0),n([s({type:Boolean})],M.prototype,"wrapFocus",void 0),n([s({type:String})],M.prototype,"innerRole",void 0),n([s({type:String})],M.prototype,"corner",void 0),n([s({type:Number})],M.prototype,"x",void 0),n([s({type:Number})],M.prototype,"y",void 0),n([s({type:Boolean})],M.prototype,"absolute",void 0),n([s({type:Boolean})],M.prototype,"multi",void 0),n([s({type:Boolean})],M.prototype,"activatable",void 0),n([s({type:Boolean})],M.prototype,"fixed",void 0),n([s({type:Boolean})],M.prototype,"forceGroupSelection",void 0),n([s({type:Boolean})],M.prototype,"fullwidth",void 0),n([s({type:String}),u((function(t){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(C[t])}))],M.prototype,"defaultFocus",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const B=a`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}mwc-list{max-width:var(--mdc-menu-max-width, auto);min-width:var(--mdc-menu-min-width, auto)}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let N=class extends M{};N.styles=B,N=n([c("mwc-menu")],N);export{y as C,C as D,N as M};
