import{_ as s,b as e,e as t}from"./lit-element-19997f04.js";import"./foundation-0388ced5.js";import"./class-map-f135b7cf.js";import"./base-element-4666bd1d.js";import{c as r,M as a,T as l,p as o,s as i}from"./mwc-top-app-bar-base-f17defb1.js";
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
 */var n=function(e){function t(){var s=null!==e&&e.apply(this,arguments)||this;return s.wasScrolled_=!1,s}return s(t,e),t.prototype.handleTargetScroll=function(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(r.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(r.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},t}(a);
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
*/class c extends l{constructor(){super(...arguments),this.mdcFoundationClass=n}barClasses(){return Object.assign(Object.assign({},super.barClasses()),{"mdc-top-app-bar--fixed":!0})}registerListeners(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,o)}unregisterListeners(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}}let d=class extends c{};d.styles=i,d=e([t("mwc-top-app-bar-fixed")],d);export{d as TopAppBarFixed};
