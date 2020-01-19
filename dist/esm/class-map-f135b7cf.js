import{d as t,A as e,P as s}from"./lit-element-19997f04.js";
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
 */const n=new WeakMap,a=t(t=>a=>{if(!(a instanceof e)||a instanceof s||"class"!==a.committer.name||a.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:o}=a,{element:i}=o;n.has(a)||(i.className=o.strings.join(" "));const{classList:r}=i,c=n.get(a);for(const e in c)e in t||r.remove(e);for(const e in t){const s=t[e];if(!c||s!==c[e]){r[s?"add":"remove"](e)}}n.set(a,t)});export{a as c};
