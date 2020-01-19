import{_ as t,a as e,b as i,p as r,q as n,h as a,c as l,e as o}from"./lit-element-19997f04.js";import{M as d}from"./foundation-0388ced5.js";import{c as s}from"./class-map-f135b7cf.js";import{o as c,B as f,f as m}from"./base-element-4666bd1d.js";import{F as p}from"./form-element-198fd104.js";
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var g={ROOT:"mdc-form-field"},u={LABEL_SELECTOR:".mdc-form-field > label"},h=function(i){function r(t){var n=i.call(this,e({},r.defaultAdapter,t))||this;return n.clickHandler_=function(){return n.handleClick_()},n}return t(r,i),Object.defineProperty(r,"cssClasses",{get:function(){return g},enumerable:!0,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),r.prototype.init=function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)},r.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)},r.prototype.handleClick_=function(){var t=this;this.adapter_.activateInputRipple(),requestAnimationFrame((function(){return t.adapter_.deactivateInputRipple()}))},r}(d);class b extends f{constructor(){super(...arguments),this.alignEnd=!1,this.label="",this.mdcFoundationClass=h}createAdapter(){return{registerInteractionHandler:(t,e)=>{this.labelEl.addEventListener(t,e)},deregisterInteractionHandler:(t,e)=>{this.labelEl.removeEventListener(t,e)},activateInputRipple:()=>{const t=this.input;t instanceof p&&t.ripple&&t.ripple.activate()},deactivateInputRipple:()=>{const t=this.input;t instanceof p&&t.ripple&&t.ripple.deactivate()}}}get input(){return m(this.slotEl,"*")}render(){return a`
      <div class="mdc-form-field ${s({"mdc-form-field--align-end":this.alignEnd})}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`}_labelClick(){const t=this.input;t&&(t.focus(),t.click())}}i([r({type:Boolean})],b.prototype,"alignEnd",void 0),i([r({type:String}),c((async function(t){const e=this.input;e&&("input"===e.localName?e.setAttribute("aria-label",t):e instanceof p&&(await e.updateComplete,e.setAriaLabel(t)))}))],b.prototype,"label",void 0),i([n(".mdc-form-field")],b.prototype,"mdcRoot",void 0),i([n("slot")],b.prototype,"slotEl",void 0),i([n("label")],b.prototype,"labelEl",void 0);
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
const v=l`.mdc-form-field{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field{align-items:center}::slotted(*){font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch)[dir=rtl]{margin-left:10px}`;let y=class extends b{};y.styles=v,y=i([o("mwc-formfield")],y);export{y as Formfield};
