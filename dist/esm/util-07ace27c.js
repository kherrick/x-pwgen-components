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
var n={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},t={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function i(n){return Boolean(n.document)&&"function"==typeof n.document.createElement}function a(t,a){if(i(t)&&a in n){var r=t.document.createElement("div"),e=n[a],o=e.standard,d=e.prefixed;return o in r.style?o:d}return a}function r(n,a){if(i(n)&&a in t){var r=n.document.createElement("div"),e=t[a],o=e.standard,d=e.prefixed;return e.cssProperty in r.style?o:d}return a}export{r as a,a as g};
