var i=Object.defineProperty;var x=(t,r)=>i(t,"name",{value:r,configurable:!0});import{r as l}from"./index.4fb7675e.js";var s={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=l.exports,u=Symbol.for("react.element"),c=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,j=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(t,r,f){var e,o={},p=null,_=null;f!==void 0&&(p=""+f),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(_=r.ref);for(e in r)y.call(r,e)&&!d.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:u,type:t,key:p,ref:_,props:o,_owner:j.current}}x(a,"q");n.Fragment=c;n.jsx=a;n.jsxs=a;(function(t){t.exports=n})(s);const R=s.exports.Fragment,E=s.exports.jsx,k=s.exports.jsxs;export{R as F,k as a,E as j};
//# sourceMappingURL=jsx-runtime.37ef8b16.js.map
