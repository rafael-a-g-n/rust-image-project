"use strict";(self.webpackChunkrust_image_project=self.webpackChunkrust_image_project||[]).push([[235],{235:(e,n,t)=>{t.a(e,(async(e,r)=>{try{t.r(n),t.d(n,{__wbg_set_wasm:()=>c.oT,__wbindgen_throw:()=>c.Or,grayscale:()=>c.se});var o=t(530),c=t(838),i=e([o]);o=(i.then?(await i)():i)[0],(0,c.oT)(o),r()}catch(e){r(e)}}))},838:(e,n,t)=>{let r;function o(e){r=e}t.d(n,{Or:()=>w,oT:()=>o,se:()=>g}),e=t.hmd(e);let c=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let i=null;function u(){return null!==i&&0!==i.byteLength||(i=new Uint8Array(r.memory.buffer)),i}function d(e,n){return e>>>=0,c.decode(u().subarray(e,e+n))}let a=0,l=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const _="function"==typeof l.encodeInto?function(e,n){return l.encodeInto(e,n)}:function(e,n){const t=l.encode(e);return n.set(t),{read:e.length,written:t.length}};let s=null;function f(){return null!==s&&0!==s.byteLength||(s=new Int32Array(r.memory.buffer)),s}function g(e){let n,t;try{const i=r.__wbindgen_add_to_stack_pointer(-16),s=function(e,n,t){if(void 0===t){const t=l.encode(e),r=n(t.length,1)>>>0;return u().subarray(r,r+t.length).set(t),a=t.length,r}let r=e.length,o=n(r,1)>>>0;const c=u();let i=0;for(;i<r;i++){const n=e.charCodeAt(i);if(n>127)break;c[o+i]=n}if(i!==r){0!==i&&(e=e.slice(i)),o=t(o,r,r=i+3*e.length,1)>>>0;const n=u().subarray(o+i,o+r);i+=_(e,n).written}return a=i,o}(e,r.__wbindgen_malloc,r.__wbindgen_realloc),g=a;r.grayscale(i,s,g);var o=f()[i/4+0],c=f()[i/4+1];return n=o,t=c,d(o,c)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(n,t,1)}}function w(e,n){throw new Error(d(e,n))}},530:(e,n,t)=>{var r=t(838);e.exports=t.v(n,e.id,"893837a6619d3d5e8043",{"./index_bg.js":{__wbindgen_throw:r.Or}})}}]);