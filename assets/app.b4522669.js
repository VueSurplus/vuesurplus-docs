import{b as _,a2 as C,w,a3 as v,h as b,l as T,m as U,d as c,a4 as g,a5 as j,o as d,c as m,G as x,z as s,t as h,F as V,a as P,K as D,a6 as $,a7 as O,a8 as F,a9 as N,aa as B,ab as I,ac as L,ad as G,ae as M,af as z,ag as H,u as K,p as q,k as J,ah as Q,ai as W,aj as X,ak as Y}from"./chunks/framework.9549a0f3.js";import{t as Z}from"./chunks/theme.06e2b0dc.js";function A(t){return{"[object Number]":"number","[object Boolean]":"boolean","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Object]":"object","[object Null]":"null","[object Undefined]":"undefined","[object Date]":"date","[object RegExp]":"regexp","[Object Symbol]":"symbol"}[Object.prototype.toString.call(t)]}function k(t,...e){if(!e.length)return t;const n=[{data:t,mergeData:null}];return e.forEach(a=>{for(;n.length;){const{data:o,mergeData:u=a}=n.pop();Object.keys(o).forEach(l=>{const p=A(o[l]),r=A(u[l]);p==="object"&&r==="object"?n.push({data:o[l],mergeData:u[l]}):p==="array"&&r==="array"?n.push({data:o[l],mergeData:u[l]}):o[l]=u[l]})}}),t}function ee(t){const e={},n=[{data:t,cloned:e}];for(;n.length;){let{cloned:a,data:o}=n.pop();for(let u in o)A(o[u])==="object"||A(o[u])==="array"?(a[u]=Array.isArray(o[u])?[]:{},n.push({data:o[u],cloned:a[u]})):a[u]=o[u]}return e}function S(t,e){return e!=null&&e.deep?ee(t):{...t}}function R(t,e){let n=_(t);return C(t)&&(n=S(t,e)),e!=null&&e.manual&&w(t,()=>{const a=R(t,{deep:e.deep,manual:!1});k(n,a)},{...e,deep:!0}),n}function te(t,e){if(e!=null&&e.deep&&window.structuredClone)return window.structuredClone(t)}function ne(t,e={}){let n=!1,a,o=!1,u=!1;return typeof e=="boolean"?n=e:{deep:n=!1,clone:a,manual:o=!1,structed:u=!1}=e,v(t)||C(t)?a||(a=R):u&&(a||(a=te)),a||(a=S),a(t,{deep:n,manual:o})}function E(t="modelValue",e={}){typeof t=="object"&&(e=t,t="modelValue");const{passive:n=!1,defaultValue:a}=e||{},o=U(),u=o==null?void 0:o.emit,l=o==null?void 0:o.props;if(t||(t="modelValue"),l[t]===null&&a==null)return null;const p=`update:${t.toString()}`;if(n)return{change:r=>{u(p,r)}};if(typeof(l[t]||a)=="object"){const r=b(ne(l[t]||a,!0));return w(()=>l[t],f=>{f!==r.value&&(r.value=f)}),w(r,f=>{f!==l[t]&&u(p,f)},{deep:!0}),r}return T({get(){return l[t]==null?a:l[t]},set(r){u(p,r)}})}const ae=c({__name:"vmodel",props:{modelValue:{}},setup(t){const e=E();return(n,a)=>g((d(),m("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>v(e)?e.value=o:null)},null,512)),[[j,_(e)]])}}),oe=c({__name:"index",setup(t){const e=b(0);return(n,a)=>(d(),m(V,null,[x(ae,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o)},null,8,["modelValue"]),s("div",null," count: "+h(e.value),1)],64))}}),ue=c({__name:"props",props:{count:{}},setup(t){const e=E("count");return(n,a)=>g((d(),m("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>v(e)?e.value=o:null)},null,512)),[[j,_(e)]])}}),le=c({__name:"demo",setup(t){const e=b(0);return(n,a)=>(d(),m(V,null,[x(ue,{count:e.value,"onUpdate:count":a[0]||(a[0]=o=>e.value=o)},null,8,["count"]),s("div",null,"count:"+h(e.value),1)],64))}});function re(t,e){if(!Array.isArray(t))return;const n={};return t.forEach(a=>{n[a]=E(a,e)}),n}const se=c({__name:"demo",props:{count:{},name:{}},setup(t){const{count:e,name:n}=re(["count","name"]);return(a,o)=>(d(),m(V,null,[s("div",null,[P(" count: "),g(s("input",{"onUpdate:modelValue":o[0]||(o[0]=u=>v(e)?e.value=u:null)},null,512),[[j,_(e)]])]),s("div",null,[P(" name: "),g(s("input",{"onUpdate:modelValue":o[1]||(o[1]=u=>v(n)?n.value=u:null)},null,512),[[j,_(n)]])])],64))}}),ce=c({__name:"index",setup(t){const e=b(0),n=b("");return(a,o)=>(d(),m(V,null,[x(se,{count:e.value,"onUpdate:count":o[0]||(o[0]=u=>e.value=u),name:n.value,"onUpdate:name":o[1]||(o[1]=u=>n.value=u)},null,8,["count","name"]),s("p",null,"count: "+h(e.value),1),s("p",null,"name: "+h(n.value),1)],64))}}),pe={...Z,enhanceApp(t){t.app.component("demoVmodel",oe),t.app.component("demoProps",le),t.app.component("demoEmitProps",ce)}};function y(t){if(t.extends){const e=y(t.extends);return{...e,...t,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),t.enhanceApp&&await t.enhanceApp(n)}}}return t}const i=y(pe),ie=c({name:"VitePressApp",setup(){const{site:t}=K();return q(()=>{J(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),Q(),W(),X(),i.setup&&i.setup(),()=>Y(i.Layout)}});async function de(){const t=fe(),e=me();e.provide(O,t);const n=F(t.route);return e.provide(N,n),e.component("Content",B),e.component("ClientOnly",I),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),i.enhanceApp&&await i.enhanceApp({app:e,router:t,siteData:L}),{app:e,router:t,data:n}}function me(){return G(ie)}function fe(){let t=D,e;return M(n=>{let a=z(n);return t&&(e=a),(t||e===a)&&(a=a.replace(/\.js$/,".lean.js")),D&&(t=!1),H(()=>import(a),[])},i.NotFound)}D&&de().then(({app:t,router:e,data:n})=>{e.go().then(()=>{$(e.route,n.site),t.mount("#app")})});export{de as createApp};
