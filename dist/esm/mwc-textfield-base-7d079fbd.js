import{_ as t,a as e,b as i,q as n,p as o,h as a,c as r,e as s,d as l,A as d,f as h}from"./lit-element-19997f04.js";import{M as c}from"./foundation-0388ced5.js";import{c as u}from"./class-map-f135b7cf.js";import{B as p,a as m}from"./base-element-4666bd1d.js";import{F as f}from"./form-element-198fd104.js";
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
 */var g={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},_={NOTCH_ELEMENT_PADDING:8},v={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},b=function(i){function n(t){return i.call(this,e({},n.defaultAdapter,t))||this}return t(n,i),Object.defineProperty(n,"strings",{get:function(){return g},enumerable:!0,configurable:!0}),Object.defineProperty(n,"cssClasses",{get:function(){return v},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return _},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),n.prototype.notch=function(t){var e=n.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=_.NOTCH_ELEMENT_PADDING),this.adapter_.setNotchWidthProperty(t),this.adapter_.addClass(e)},n.prototype.closeNotch=function(){var t=n.cssClasses.OUTLINE_NOTCHED;this.adapter_.removeClass(t),this.adapter_.removeNotchWidthProperty()},n}(c);class y extends p{constructor(){super(...arguments),this.mdcFoundationClass=b,this.width=0,this.open=!1,this.lastOpen=this.open}createAdapter(){return{addClass:t=>this.mdcRoot.classList.add(t),removeClass:t=>this.mdcRoot.classList.remove(t),setNotchWidthProperty:t=>this.notchElement.style.setProperty("width",`${t}px`),removeNotchWidthProperty:()=>this.notchElement.style.removeProperty("width")}}openOrClose(t,e){this.mdcFoundation&&(t&&void 0!==e?this.mdcFoundation.notch(e):this.mdcFoundation.closeNotch())}render(){return this.openOrClose(this.open,this.width),a`
      <div class="mdc-notched-outline">
        <div class="mdc-notched-outline__leading"></div>
        <div class="mdc-notched-outline__notch">
          <slot></slot>
        </div>
        <div class="mdc-notched-outline__trailing"></div>
      </div>`}}i([n(".mdc-notched-outline")],y.prototype,"mdcRoot",void 0),i([o({type:Number})],y.prototype,"width",void 0),i([o({type:Boolean,reflect:!0})],y.prototype,"open",void 0),i([n(".mdc-notched-outline__notch")],y.prototype,"notchElement",void 0);
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
const E=r`.mdc-notched-outline{display:flex;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / .75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host[dir=rtl]{text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / .75)}.mdc-notched-outline__leading{width:12px;width:var(--mdc-notched-outline-leading-width, 12px);border-radius:4px 0 0 4px;border-radius:var(--mdc-notched-outline-leading-border-radius, 4px 0 0 4px)}.mdc-notched-outline__trailing{border-radius:0 4px 4px 0;border-radius:var(--mdc-notched-outline-trailing-border-radius, 0 4px 4px 0)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}`;let C=class extends y{};C.styles=E,C=i([s("mwc-notched-outline")],C);
/**
 * @license
 * Copyright 2016 Google Inc.
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
var I={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},L=function(i){function n(t){var o=i.call(this,e({},n.defaultAdapter,t))||this;return o.shakeAnimationEndHandler_=function(){return o.handleShakeAnimationEnd_()},o}return t(n,i),Object.defineProperty(n,"cssClasses",{get:function(){return I},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},n.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},n.prototype.getWidth=function(){return this.adapter_.getWidth()},n.prototype.shake=function(t){var e=n.cssClasses.LABEL_SHAKE;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},n.prototype.float=function(t){var e=n.cssClasses,i=e.LABEL_FLOAT_ABOVE,o=e.LABEL_SHAKE;t?this.adapter_.addClass(i):(this.adapter_.removeClass(i),this.adapter_.removeClass(o))},n.prototype.handleShakeAnimationEnd_=function(){var t=n.cssClasses.LABEL_SHAKE;this.adapter_.removeClass(t)},n}(c);
/**
 * @license
 * Copyright 2016 Google Inc.
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
 */const x=new WeakMap,O=l(t=>e=>{const i=x.get(e);if(i){if(i.label!==t){const t=e.committer.element,i=new Event("labelchange");t.dispatchEvent(i)}}else{const i=e.committer.element;i.classList.add("mdc-floating-label");const n=(t=>({addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),getWidth:()=>t.scrollWidth,registerInteractionHandler:(e,i)=>{t.addEventListener(e,i)},deregisterInteractionHandler:(e,i)=>{t.removeEventListener(e,i)}}))(i),o=new L(n);o.init(),e.setValue(o),x.set(e,{label:t,foundation:o})}});
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
var A={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},T=function(i){function n(t){var o=i.call(this,e({},n.defaultAdapter,t))||this;return o.transitionEndHandler_=function(t){return o.handleTransitionEnd(t)},o}return t(n,i),Object.defineProperty(n,"cssClasses",{get:function(){return A},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)},n.prototype.destroy=function(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)},n.prototype.activate=function(){this.adapter_.removeClass(A.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(A.LINE_RIPPLE_ACTIVE)},n.prototype.setRippleCenter=function(t){this.adapter_.setStyle("transform-origin",t+"px center")},n.prototype.deactivate=function(){this.adapter_.addClass(A.LINE_RIPPLE_DEACTIVATING)},n.prototype.handleTransitionEnd=function(t){var e=this.adapter_.hasClass(A.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter_.removeClass(A.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(A.LINE_RIPPLE_DEACTIVATING))},n}(c);
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
 */const N=new WeakMap,F=l(()=>t=>{if(!N.get(t)){const e=t.committer.element;e.classList.add("mdc-line-ripple");const i=(t=>({addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),hasClass:e=>t.classList.contains(e),setStyle:(e,i)=>t.style.setProperty(e,i),registerEventHandler:(e,i)=>{t.addEventListener(e,i)},deregisterEventHandler:(e,i)=>{t.removeEventListener(e,i)}}))(e),n=new T(i);n.init(),t.setValue(n),N.set(t,n)}});
/**
 * @license
 * Copyright 2016 Google Inc.
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
var V={ARIA_CONTROLS:"aria-controls",ICON_SELECTOR:".mdc-text-field__icon",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline"},H={DENSE:"mdc-text-field--dense",DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",FULLWIDTH:"mdc-text-field--fullwidth",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon"},w={DENSE_LABEL_SCALE:.923,LABEL_SCALE:.75},R=["pattern","min","max","required","step","minlength","maxlength"],P=["color","date","datetime-local","month","range","time","week"],S=["mousedown","touchstart"],B=["click","keydown"],D=function(i){function n(t,o){void 0===o&&(o={});var a=i.call(this,e({},n.defaultAdapter,t))||this;return a.isFocused_=!1,a.receivedUserInput_=!1,a.isValid_=!0,a.useNativeValidation_=!0,a.helperText_=o.helperText,a.characterCounter_=o.characterCounter,a.leadingIcon_=o.leadingIcon,a.trailingIcon_=o.trailingIcon,a.inputFocusHandler_=function(){return a.activateFocus()},a.inputBlurHandler_=function(){return a.deactivateFocus()},a.inputInputHandler_=function(){return a.handleInput()},a.setPointerXOffset_=function(t){return a.setTransformOrigin(t)},a.textFieldInteractionHandler_=function(){return a.handleTextFieldInteraction()},a.validationAttributeChangeHandler_=function(t){return a.handleValidationAttributeChange(t)},a}return t(n,i),Object.defineProperty(n,"cssClasses",{get:function(){return H},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return V},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return w},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"shouldAlwaysFloat_",{get:function(){var t=this.getNativeInput_().type;return P.indexOf(t)>=0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat_||this.isFocused_||!!this.getValue()||this.isBadInput_()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"shouldShake",{get:function(){return!this.isFocused_&&!this.isValid()&&!!this.getValue()},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){var t=this;this.adapter_.isFocused()?this.inputFocusHandler_():this.adapter_.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter_.floatLabel(!0)),this.adapter_.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.registerInputInteractionHandler("input",this.inputInputHandler_),S.forEach((function(e){t.adapter_.registerInputInteractionHandler(e,t.setPointerXOffset_)})),B.forEach((function(e){t.adapter_.registerTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)})),this.validationObserver_=this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_),this.setCharacterCounter_(this.getValue().length)},n.prototype.destroy=function(){var t=this;this.adapter_.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.deregisterInputInteractionHandler("input",this.inputInputHandler_),S.forEach((function(e){t.adapter_.deregisterInputInteractionHandler(e,t.setPointerXOffset_)})),B.forEach((function(e){t.adapter_.deregisterTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)})),this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)},n.prototype.handleTextFieldInteraction=function(){var t=this.adapter_.getNativeInput();t&&t.disabled||(this.receivedUserInput_=!0)},n.prototype.handleValidationAttributeChange=function(t){var e=this;t.some((function(t){return R.indexOf(t)>-1&&(e.styleValidity_(!0),!0)})),t.indexOf("maxlength")>-1&&this.setCharacterCounter_(this.getValue().length)},n.prototype.notchOutline=function(t){if(this.adapter_.hasOutline())if(t){var e=this.adapter_.hasClass(H.DENSE)?w.DENSE_LABEL_SCALE:w.LABEL_SCALE,i=this.adapter_.getLabelWidth()*e;this.adapter_.notchOutline(i)}else this.adapter_.closeOutline()},n.prototype.activateFocus=function(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter_.activateLineRipple(),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.helperText_&&this.helperText_.showToScreenReader()},n.prototype.setTransformOrigin=function(t){var e=t.touches,i=e?e[0]:t,n=i.target.getBoundingClientRect(),o=i.clientX-n.left;this.adapter_.setLineRippleTransformOrigin(o)},n.prototype.handleInput=function(){this.autoCompleteFocus(),this.setCharacterCounter_(this.getValue().length)},n.prototype.autoCompleteFocus=function(){this.receivedUserInput_||this.activateFocus()},n.prototype.deactivateFocus=function(){this.isFocused_=!1,this.adapter_.deactivateLineRipple();var t=this.isValid();this.styleValidity_(t),this.styleFocused_(this.isFocused_),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)},n.prototype.getValue=function(){return this.getNativeInput_().value},n.prototype.setValue=function(t){this.getValue()!==t&&(this.getNativeInput_().value=t),this.setCharacterCounter_(t.length);var e=this.isValid();this.styleValidity_(e),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake))},n.prototype.isValid=function(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_},n.prototype.setValid=function(t){this.isValid_=t,this.styleValidity_(t);var e=!t&&!this.isFocused_&&!!this.getValue();this.adapter_.hasLabel()&&this.adapter_.shakeLabel(e)},n.prototype.setUseNativeValidation=function(t){this.useNativeValidation_=t},n.prototype.isDisabled=function(){return this.getNativeInput_().disabled},n.prototype.setDisabled=function(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)},n.prototype.setHelperTextContent=function(t){this.helperText_&&this.helperText_.setContent(t)},n.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(t)},n.prototype.setLeadingIconContent=function(t){this.leadingIcon_&&this.leadingIcon_.setContent(t)},n.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon_&&this.trailingIcon_.setAriaLabel(t)},n.prototype.setTrailingIconContent=function(t){this.trailingIcon_&&this.trailingIcon_.setContent(t)},n.prototype.setCharacterCounter_=function(t){if(this.characterCounter_){var e=this.getNativeInput_().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter_.setCounterValue(t,e)}},n.prototype.isBadInput_=function(){return this.getNativeInput_().validity.badInput||!1},n.prototype.isNativeInputValid_=function(){return this.getNativeInput_().validity.valid},n.prototype.styleValidity_=function(t){var e=n.cssClasses.INVALID;t?this.adapter_.removeClass(e):this.adapter_.addClass(e),this.helperText_&&this.helperText_.setValidity(t)},n.prototype.styleFocused_=function(t){var e=n.cssClasses.FOCUSED;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},n.prototype.styleDisabled_=function(t){var e=n.cssClasses,i=e.DISABLED,o=e.INVALID;t?(this.adapter_.addClass(i),this.adapter_.removeClass(o)):this.adapter_.removeClass(i),this.leadingIcon_&&this.leadingIcon_.setDisabled(t),this.trailingIcon_&&this.trailingIcon_.setDisabled(t)},n.prototype.getNativeInput_=function(){return(this.adapter_?this.adapter_.getNativeInput():null)||{disabled:!1,maxLength:-1,type:"input",validity:{badInput:!1,valid:!0},value:""}},n}(c);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const $=l(t=>e=>{if(void 0===t&&e instanceof d){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});
/**
 * @license
 * Copyright 2019 Google Inc.
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
 */var k={ROOT:"mdc-text-field-character-counter"},j={ROOT_SELECTOR:"."+k.ROOT},M=function(i){function n(t){return i.call(this,e({},n.defaultAdapter,t))||this}return t(n,i),Object.defineProperty(n,"cssClasses",{get:function(){return k},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return j},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!0,configurable:!0}),n.prototype.setCounterValue=function(t,e){t=Math.min(t,e),this.adapter_.setContent(t+" / "+e)},n}(c);const U=new WeakMap,W=l(()=>t=>{if(!U.get(t)){const e=t.committer.element;e.classList.add("mdc-text-field-character-counter");const i=(t=>({setContent:e=>t.textContent=e}))(e),n=new M(i);n.init(),t.setValue(n),U.set(t,n)}}),G=["touchstart","touchmove","scroll","mousewheel"],q=(t={})=>{const e={};for(const i in t)e[i]=t[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},e)};class X extends f{constructor(){super(...arguments),this.mdcFoundationClass=D,this.value="",this.type="text",this.placeholder="",this.label="",this.icon="",this.iconTrailing="",this.disabled=!1,this.required=!1,this.maxLength=-1,this.outlined=!1,this.fullWidth=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.pattern="",this.min="",this.max="",this.step=null,this.helperPersistent=!1,this.charCounter=!1,this.outlineOpen=!1,this.outlineWidth=0,this.isUiValid=!0,this._validity=q(),this._outlineUpdateComplete=null,this.validityTransform=null}get validity(){return this._checkValidity(this.value),this._validity}get willValidate(){return this.formElement.willValidate}get selectionStart(){return this.formElement.selectionStart}get selectionEnd(){return this.formElement.selectionEnd}get shouldRenderHelperText(){return!!this.helper||!!this.validationMessage||this.charCounterVisible}get charCounterVisible(){return this.charCounter&&-1!==this.maxLength}focus(){const t=new CustomEvent("focus");this.formElement.dispatchEvent(t),this.formElement.focus()}blur(){const t=new CustomEvent("blur");this.formElement.dispatchEvent(t),this.formElement.blur()}select(){this.formElement.select()}setSelectionRange(t,e,i){this.formElement.setSelectionRange(t,e,i)}render(){const t={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--outlined":this.outlined,"mdc-text-field--fullwidth":this.fullWidth,"mdc-text-field--with-leading-icon":this.icon,"mdc-text-field--with-trailing-icon":this.iconTrailing};return a`
      <div class="mdc-text-field ${u(t)}">
        ${this.icon?this.renderIcon(this.icon):""}
        ${this.renderInput()}
        ${this.iconTrailing?this.renderIcon(this.iconTrailing):""}
        ${this.outlined?this.renderOutlined():this.renderLabelText()}
      </div>
      ${this.renderHelperText(this.renderCharCounter())}
    `}updated(t){const e=t.get("maxLength"),i=-1===e&&-1!==this.maxLength,n=void 0!==e&&-1!==e&&-1===this.maxLength;(i||n)&&this.createFoundation(),t.has("value")&&void 0!==t.get("value")&&this.mdcFoundation.setValue(this.value)}renderInput(){const t=-1===this.maxLength?void 0:this.maxLength;return a`
      <input
          id="text-field"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          maxlength="${$(t)}"
          pattern="${$(this.pattern?this.pattern:void 0)}"
          min="${$(""===this.min?void 0:this.min)}"
          max="${$(""===this.max?void 0:this.max)}"
          step="${$(null===this.step?void 0:this.step)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">`}renderIcon(t){return a`<i class="material-icons mdc-text-field__icon">${t}</i>`}renderOutlined(){let t="";return this.label&&(t=a`
        <label
            .floatingLabelFoundation=${O(this.label)}
            @labelchange=${this.onLabelChange}
            for="text-field">
          ${this.label}
        </label>
      `),a`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${t}
      </mwc-notched-outline>`}renderLabelText(){let t="";return this.label&&!this.fullWidth&&(t=a`
      <label
          .floatingLabelFoundation=${O(this.label)}
          for="text-field">
        ${this.label}
      </label>`),a`
      ${t}
      <div .lineRippleFoundation=${F()}></div>
    `}renderHelperText(t){const e=this.validationMessage&&!this.isUiValid,i={"mdc-text-field-helper-text--persistent":this.helperPersistent,"mdc-text-field-helper-text--validation-msg":e},n={hidden:!this.shouldRenderHelperText};return a`
      <div class="mdc-text-field-helper-line ${u(n)}">
        <div class="mdc-text-field-helper-text ${u(i)}">
          ${e?this.validationMessage:this.helper}
        </div>
        ${t}
      </div>
    `}renderCharCounter(){const t={hidden:!this.charCounterVisible};return a`
      <div
          class="${u(t)}"
          .charCounterFoundation=${W()}>
      </div>`}onInputBlur(){this.reportValidity()}checkValidity(){const t=this._checkValidity(this.value);if(!t){const t=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(t)}return t}reportValidity(){const t=this.checkValidity();return this.mdcFoundation.setValid(t),this.isUiValid=t,t}_checkValidity(t){const e=this.formElement.validity;let i=q(e);if(this.validityTransform){const e=this.validityTransform(t,i);i=Object.assign(Object.assign({},i),e),this.mdcFoundation.setUseNativeValidation(!1)}else this.mdcFoundation.setUseNativeValidation(!0);return this._validity=i,this._validity.valid}setCustomValidity(t){this.validationMessage=t,this.formElement.setCustomValidity(t)}handleInputChange(){this.value=this.formElement.value}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter(),{characterCounter:-1!==this.maxLength?this.charCounterElement.charCounterFoundation:void 0}),this.mdcFoundation.init()}createAdapter(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods())}getRootAdapterMethods(){return Object.assign({registerTextFieldInteractionHandler:(t,e)=>this.addEventListener(t,e),deregisterTextFieldInteractionHandler:(t,e)=>this.removeEventListener(t,e),registerValidationAttributeChangeHandler:()=>{const t=new MutationObserver(t=>{-1!==(t=>t.map(t=>t.attributeName).filter(t=>t))(t).indexOf("maxlength")&&-1!==this.maxLength&&this.charCounterElement.charCounterFoundation.setCounterValue(this.value.length,this.maxLength)});return t.observe(this.formElement,{attributes:!0}),t},deregisterValidationAttributeChangeHandler:t=>t.disconnect()},m(this.mdcRoot))}getInputAdapterMethods(){return{getNativeInput:()=>this.formElement,isFocused:()=>!!this.shadowRoot&&this.shadowRoot.activeElement===this.formElement,registerInputInteractionHandler:(t,e)=>this.formElement.addEventListener(t,e,{passive:t in G}),deregisterInputInteractionHandler:(t,e)=>this.formElement.removeEventListener(t,e)}}getLabelAdapterMethods(){return{floatLabel:t=>this.labelElement&&this.labelElement.floatingLabelFoundation.float(t),getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,hasLabel:()=>Boolean(this.labelElement),shakeLabel:t=>this.labelElement&&this.labelElement.floatingLabelFoundation.shake(t)}}getLineRippleAdapterMethods(){return{activateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},setLineRippleTransformOrigin:t=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.setRippleCenter(t)}}}async _getUpdateComplete(){await super._getUpdateComplete(),await this._outlineUpdateComplete}async firstUpdated(){const t=this.outlineElement;t&&(this._outlineUpdateComplete=t.updateComplete,await this._outlineUpdateComplete),super.firstUpdated(),this.validateOnInitialRender&&this.reportValidity()}getOutlineAdapterMethods(){return{closeOutline:()=>this.outlineElement&&(this.outlineOpen=!1),hasOutline:()=>Boolean(this.outlineElement),notchOutline:t=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=t,this.outlineOpen=!0)}}}async onLabelChange(){this.label&&await this.layout()}async layout(){if(await this.updateComplete,this.labelElement&&this.outlineElement){const t=this.labelElement.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=t)}}}i([n(".mdc-text-field")],X.prototype,"mdcRoot",void 0),i([n("input")],X.prototype,"formElement",void 0),i([n(".mdc-floating-label")],X.prototype,"labelElement",void 0),i([n(".mdc-line-ripple")],X.prototype,"lineRippleElement",void 0),i([n("mwc-notched-outline")],X.prototype,"outlineElement",void 0),i([n(".mdc-notched-outline__notch")],X.prototype,"notchElement",void 0),i([n(".mdc-text-field-character-counter")],X.prototype,"charCounterElement",void 0),i([o({type:String})],X.prototype,"value",void 0),i([o({type:String})],X.prototype,"type",void 0),i([o({type:String})],X.prototype,"placeholder",void 0),i([o({type:String})],X.prototype,"label",void 0),i([o({type:String})],X.prototype,"icon",void 0),i([o({type:String})],X.prototype,"iconTrailing",void 0),i([o({type:Boolean,reflect:!0})],X.prototype,"disabled",void 0),i([o({type:Boolean})],X.prototype,"required",void 0),i([o({type:Number})],X.prototype,"maxLength",void 0),i([o({type:Boolean,reflect:!0})],X.prototype,"outlined",void 0),i([o({type:Boolean,reflect:!0})],X.prototype,"fullWidth",void 0),i([o({type:String})],X.prototype,"helper",void 0),i([o({type:Boolean})],X.prototype,"validateOnInitialRender",void 0),i([o({type:String})],X.prototype,"validationMessage",void 0),i([o({type:String})],X.prototype,"pattern",void 0),i([o({type:Number})],X.prototype,"min",void 0),i([o({type:Number})],X.prototype,"max",void 0),i([o({type:Number})],X.prototype,"step",void 0),i([o({type:Boolean})],X.prototype,"helperPersistent",void 0),i([o({type:Boolean})],X.prototype,"charCounter",void 0),i([o({type:Boolean})],X.prototype,"outlineOpen",void 0),i([o({type:Number})],X.prototype,"outlineWidth",void 0),i([o({type:Boolean})],X.prototype,"isUiValid",void 0),i([h({passive:!0})],X.prototype,"handleInputChange",null);export{X as T,$ as i};
