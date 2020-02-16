import{L as t}from"./lit-element-e8bb647f.js";import{m as e}from"./foundation-0388ced5.js";const s=t=>(e,s)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach((t,s)=>e.constructor._observers.set(s,t))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach((t,e)=>{const s=this.constructor._observers.get(e);void 0!==s&&s.call(this,this[e],t)})}}e.constructor._observers.set(s,t)}
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
*/,o=t=>t.nodeType===Node.ELEMENT_NODE;function n(t,s){for(const n of t.assignedNodes({flatten:!0}))if(o(n)){const t=n;if(e(t,s))return t}return null}function r(t){return{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)}}let c=!1;const a=()=>{},d={get passive(){return c=!0,!1}};document.addEventListener("x",a,d),document.removeEventListener("x",a);const i=c,u=(t=window.document)=>{let e=t.activeElement;const s=[];if(!e)return s;for(;e&&(s.push(e),e.shadowRoot);)e=e.shadowRoot.activeElement;return s},f=t=>{const e=u();if(!e.length)return!1;const s=e[e.length-1],o=new Event("check-if-focused",{bubbles:!0,composed:!0});let n=[];const r=t=>{n=t.composedPath()};return document.body.addEventListener("check-if-focused",r),s.dispatchEvent(o),document.body.removeEventListener("check-if-focused",r),-1!==n.indexOf(t)};
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
class l extends t{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}firstUpdated(){this.createFoundation()}}export{l as B,r as a,f as b,u as d,n as f,o as i,s as o,i as s};
