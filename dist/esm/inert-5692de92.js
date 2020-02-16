/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(()=>{var e,t,n;const o=Symbol(),s=Symbol(),i=Symbol(),r=Symbol(),d=Symbol(),a=Symbol(),h=Symbol(),l=Symbol(),c=Symbol(),u=Symbol(),_=Symbol(),b=Symbol(),m=Symbol();document.$blockingElements=new class{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[c](this[i]);this[o]=null,this[i]=null,this[s]=null}get top(){const e=this[o];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[a](e),this[o].push(e))}remove(e){const t=this[o].indexOf(e);return-1!==t&&(this[o].splice(t,1),t===this[o].length&&this[a](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[o].indexOf(e)}[(e=o,t=i,n=s,a)](e){const t=this[s],n=this[i];if(!e)return this[c](n),t.clear(),void(this[i]=[]);const o=this[u](e);if(o[o.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[i]=o;const r=this[_](e);if(!n.length)return void this[l](o,r,t);let d=n.length-1,a=o.length-1;for(;d>0&&a>0&&n[d]===o[a];)d--,a--;n[d]!==o[a]&&this[h](n[d],o[a]),d>0&&this[c](n.slice(0,d)),a>0&&this[l](o.slice(0,a),r,null)}[h](e,t){const n=e[r];this[b](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[d]=e[d],t[r]=n,e[d]=void 0,e[r]=void 0}[c](e){for(const t of e){t[d].disconnect(),t[d]=void 0;const e=t[r];for(const t of e)t.inert=!1;t[r]=void 0}}[l](e,t,n){for(const o of e){const e=o.parentNode,s=e.children,i=new Set;for(let e=0;e<s.length;e++){const r=s[e];r===o||!this[b](r)||t&&t.has(r)||(n&&r.inert?n.add(r):(r.inert=!0,i.add(r)))}o[r]=i;const a=new MutationObserver(this[m].bind(this));o[d]=a;let h=e;const l=h;l.__shady&&l.host&&(h=l.host),a.observe(h,{childList:!0})}}[m](e){const t=this[i],n=this[s];for(const o of e){const e=o.target.host||o.target,s=e===document.body?t.length:t.indexOf(e),i=t[s-1],d=i[r];for(let e=0;e<o.removedNodes.length;e++){const t=o.removedNodes[e];if(t===i)return console.info("Detected removal of the top Blocking Element."),void this.pop();d.has(t)&&(t.inert=!1,d.delete(t))}for(let e=0;e<o.addedNodes.length;e++){const t=o.addedNodes[e];this[b](t)&&(n&&t.inert?n.add(t):(t.inert=!0,d.add(t)))}}}[b](e){return!1===/^(style|template|script)$/.test(e.localName)}[u](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[_](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let o,s,i;const r=t.querySelectorAll("slot");if(r.length&&r[0].assignedNodes)for(o=0;o<r.length;o++)for(i=r[o].assignedNodes({flatten:!0}),s=0;s<i.length;s++)i[s].nodeType===Node.ELEMENT_NODE&&n.add(i[s]);return n}}})();const e=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,n=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(",");class o{constructor(e,t){this._inertManager=t,this._rootElement=e,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}destructor(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(e){this._unmanageNode(e.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}get managedNodes(){return new Set(this._managedNodes)}get hasSavedAriaHidden(){return null!==this._savedAriaHidden}set savedAriaHidden(e){this._savedAriaHidden=e}get savedAriaHidden(){return this._savedAriaHidden}_makeSubtreeUnfocusable(e){i(e,e=>this._visitNode(e));let t=document.activeElement;if(!document.body.contains(e)){let n=e,o=void 0;for(;n;){if(n.nodeType===Node.DOCUMENT_FRAGMENT_NODE){o=n;break}n=n.parentNode}o&&(t=o.activeElement)}e.contains(t)&&(t.blur(),t===document.activeElement&&document.body.focus())}_visitNode(e){if(e.nodeType!==Node.ELEMENT_NODE)return;const o=e;o!==this._rootElement&&o.hasAttribute("inert")&&this._adoptInertRoot(o),(t.call(o,n)||o.hasAttribute("tabindex"))&&this._manageNode(o)}_manageNode(e){const t=this._inertManager.register(e,this);this._managedNodes.add(t)}_unmanageNode(e){const t=this._inertManager.deregister(e,this);t&&this._managedNodes.delete(t)}_unmanageSubtree(e){i(e,e=>this._unmanageNode(e))}_adoptInertRoot(e){let t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e)),t.managedNodes.forEach((function(e){this._manageNode(e.node)}),this)}_onMutation(t,n){t.forEach((function(t){const n=t.target;if("childList"===t.type)e.call(t.addedNodes).forEach((function(e){this._makeSubtreeUnfocusable(e)}),this),e.call(t.removedNodes).forEach((function(e){this._unmanageSubtree(e)}),this);else if("attributes"===t.type)if("tabindex"===t.attributeName)this._manageNode(n);else if(n!==this._rootElement&&"inert"===t.attributeName&&n.hasAttribute("inert")){this._adoptInertRoot(n);const e=this._inertManager.getInertRoot(n);this._managedNodes.forEach((function(t){n.contains(t.node)&&e._manageNode(t.node)}))}}),this)}}class s{constructor(e,t){this._node=e,this._overrodeFocusMethod=!1,this._inertRoots=new Set([t]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}destructor(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){const e=this._node;null!==this._savedTabIndex?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}get destroyed(){return this._destroyed}_throwIfDestroyed(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}get hasSavedTabIndex(){return null!==this._savedTabIndex}get node(){return this._throwIfDestroyed(),this._node}set savedTabIndex(e){this._throwIfDestroyed(),this._savedTabIndex=e}get savedTabIndex(){return this._throwIfDestroyed(),this._savedTabIndex}ensureUntabbable(){if(this.node.nodeType!==Node.ELEMENT_NODE)return;const e=this.node;if(t.call(e,n)){if(-1===e.tabIndex&&this.hasSavedTabIndex)return;e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)}else e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex"))}addInertRoot(e){this._throwIfDestroyed(),this._inertRoots.add(e)}removeInertRoot(e){this._throwIfDestroyed(),this._inertRoots.delete(e),0===this._inertRoots.size&&this.destructor()}}function i(e,t,n){if(e.nodeType==Node.ELEMENT_NODE){const n=e;t&&t(n);const o=n.shadowRoot;if(o)return void i(o,t);if("content"==n.localName){const e=n,o=e.getDistributedNodes?e.getDistributedNodes():[];for(let e=0;e<o.length;e++)i(o[e],t);return}if("slot"==n.localName){const e=n,o=e.assignedNodes?e.assignedNodes({flatten:!0}):[];for(let e=0;e<o.length;e++)i(o[e],t);return}}let o=e.firstChild;for(;null!=o;)i(o,t),o=o.nextSibling}function r(e){if(e.querySelector("style#inert-style"))return;const t=document.createElement("style");t.setAttribute("id","inert-style"),t.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n",e.appendChild(t)}const d=new class{constructor(e){if(!e)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=e,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),r(e.head||e.body||e.documentElement),"loading"===e.readyState?e.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}setInert(e,t){if(t){if(this._inertRoots.has(e))return;const t=new o(e,this);if(e.setAttribute("inert",""),this._inertRoots.set(e,t),!this._document.body.contains(e)){let t=e.parentNode;for(;t;)11===t.nodeType&&r(t),t=t.parentNode}}else{if(!this._inertRoots.has(e))return;this._inertRoots.get(e).destructor(),this._inertRoots.delete(e),e.removeAttribute("inert")}}getInertRoot(e){return this._inertRoots.get(e)}register(e,t){let n=this._managedNodes.get(e);return void 0!==n?n.addInertRoot(t):n=new s(e,t),this._managedNodes.set(e,n),n}deregister(e,t){const n=this._managedNodes.get(e);return n?(n.removeInertRoot(t),n.destroyed&&this._managedNodes.delete(e),n):null}_onDocumentLoaded(){e.call(this._document.querySelectorAll("[inert]")).forEach((function(e){this.setInert(e,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}_watchForInert(n,o){const s=this;n.forEach((function(n){switch(n.type){case"childList":e.call(n.addedNodes).forEach((function(n){if(n.nodeType!==Node.ELEMENT_NODE)return;const o=e.call(n.querySelectorAll("[inert]"));t.call(n,"[inert]")&&o.unshift(n),o.forEach((function(e){this.setInert(e,!0)}),s)}),s);break;case"attributes":if("inert"!==n.attributeName)return;const o=n.target,i=o.hasAttribute("inert");s.setInert(o,i)}}),this)}}(document);Element.prototype.hasOwnProperty("inert")||Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){d.setInert(this,e)}});