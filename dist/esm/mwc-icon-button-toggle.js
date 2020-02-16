import{_ as t,a as o,b as e,q as n,p as s,h as i,e as a}from"./lit-element-e8bb647f.js";import"./events-ef82cec7.js";import{M as c}from"./foundation-0388ced5.js";import{a as r}from"./ripple-directive-935444f9.js";import{o as l,B as d,a as u}from"./base-element-991ab497.js";import{s as p}from"./mwc-icon-button-css-bb28244c.js";
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
 */var f={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},h={ARIA_PRESSED:"aria-pressed",CHANGE_EVENT:"MDCIconButtonToggle:change"},b=function(e){function n(t){return e.call(this,o({},n.defaultAdapter,t))||this}return t(n,e),Object.defineProperty(n,"cssClasses",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return h},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},setAttr:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){this.adapter_.setAttr(h.ARIA_PRESSED,""+this.isOn())},n.prototype.handleClick=function(){this.toggle(),this.adapter_.notifyChange({isOn:this.isOn()})},n.prototype.isOn=function(){return this.adapter_.hasClass(f.ICON_BUTTON_ON)},n.prototype.toggle=function(t){void 0===t&&(t=!this.isOn()),t?this.adapter_.addClass(f.ICON_BUTTON_ON):this.adapter_.removeClass(f.ICON_BUTTON_ON),this.adapter_.setAttr(h.ARIA_PRESSED,""+t)},n}(c);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

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
class m extends d{constructor(){super(...arguments),this.mdcFoundationClass=b,this.label="",this.disabled=!1,this.onIcon="",this.offIcon="",this.on=!1}createAdapter(){return Object.assign(Object.assign({},u(this.mdcRoot)),{setAttr:(t,o)=>{this.mdcRoot.setAttribute(t,o)},notifyChange:t=>{this.dispatchEvent(new CustomEvent("MDCIconButtonToggle:change",{detail:t,bubbles:!0}))}})}handleClick(){this.on=!this.on,this.mdcFoundation.handleClick()}focus(){this.mdcRoot.focus()}render(){return i`
      <button
        .ripple="${r()}"
        class="mdc-icon-button"
        @click="${this.handleClick}"
        aria-hidden="true"
        aria-label="${this.label}"
        ?disabled="${this.disabled}">
        <span class="mdc-icon-button__icon">
          <slot name="offIcon">
            <i class="material-icons">${this.offIcon}</i>
          </slot>
        </span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on">
          <slot name="onIcon">
            <i class="material-icons">${this.onIcon}</i>
          </slot>
        </span>
      </button>`}}e([n(".mdc-icon-button")],m.prototype,"mdcRoot",void 0),e([s({type:String})],m.prototype,"label",void 0),e([s({type:Boolean,reflect:!0})],m.prototype,"disabled",void 0),e([s({type:String})],m.prototype,"onIcon",void 0),e([s({type:String})],m.prototype,"offIcon",void 0),e([s({type:Boolean,reflect:!0}),l((function(t){this.mdcFoundation.toggle(t)}))],m.prototype,"on",void 0);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

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
let g=class extends m{};g.styles=p,g=e([a("mwc-icon-button-toggle")],g);export{g as IconButtonToggle};
