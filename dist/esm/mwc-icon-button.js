import{b as t,p as s,L as e,h as i,e as o}from"./lit-element-19997f04.js";import"./events-f75eae9d.js";import"./foundation-0388ced5.js";import{r as a}from"./ripple-directive-86a29aa3.js";import{s as r}from"./mwc-icon-button-css-563e3777.js";class l extends e{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.label=""}render(){return i`<button
    .ripple="${a()}"
    class="mdc-icon-button"
    aria-label="${this.label||this.icon}"
    ?disabled="${this.disabled}">
    <i class="material-icons">${this.icon}</i>
    <slot></slot>
  </button>`}}t([s({type:Boolean,reflect:!0})],l.prototype,"disabled",void 0),t([s({type:String})],l.prototype,"icon",void 0),t([s({type:String})],l.prototype,"label",void 0);
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
let n=class extends l{};n.styles=r,n=t([o("mwc-icon-button")],n);export{n as IconButton};
