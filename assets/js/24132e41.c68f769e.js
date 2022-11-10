"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[260],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(r),f=a,y=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(y,i(i({ref:e},u),{},{components:r})):n.createElement(y,i({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9299:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="\u4eab\u5143\u6a21\u5f0f",l={unversionedId:"structural-pattern/02Flyweight",id:"structural-pattern/02Flyweight",title:"\u4eab\u5143\u6a21\u5f0f",description:"- \u4eab\u5143\u6a21\u5f0f \uff08Flyweight Pattern\uff09\u8fd0\u7528\u5171\u4eab\u6280\u672f\u6765\u6709\u6548\u5730\u652f\u6301\u5927\u91cf\u7ec6\u7c92\u5ea6\u5bf9\u8c61\u7684\u590d\u7528\uff0c\u4ee5\u51cf\u5c11\u521b\u5efa\u7684\u5bf9\u8c61\u7684\u6570\u91cf\u3002",source:"@site/docs/04-structural-pattern/02Flyweight.md",sourceDirName:"04-structural-pattern",slug:"/structural-pattern/02Flyweight",permalink:"/design-pattern/docs/structural-pattern/02Flyweight",draft:!1,editUrl:"https://github.com/retech-fe/design-pattern/blob/main/docs/04-structural-pattern/02Flyweight.md",tags:[],version:"current",lastUpdatedBy:"hongxiang.gao",lastUpdatedAt:1668046831,formattedLastUpdatedAt:"Nov 10, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4ee3\u7406\u6a21\u5f0f",permalink:"/design-pattern/docs/structural-pattern/01Proxy"},next:{title:"\u9002\u914d\u5668\u6a21\u5f0f",permalink:"/design-pattern/docs/structural-pattern/03Adapter"}},c={},p=[],u={toc:p};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4eab\u5143\u6a21\u5f0f"},"\u4eab\u5143\u6a21\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4eab\u5143\u6a21\u5f0f \uff08Flyweight Pattern\uff09\u8fd0\u7528\u5171\u4eab\u6280\u672f\u6765\u6709\u6548\u5730\u652f\u6301\u5927\u91cf\u7ec6\u7c92\u5ea6\u5bf9\u8c61\u7684\u590d\u7528\uff0c\u4ee5\u51cf\u5c11\u521b\u5efa\u7684\u5bf9\u8c61\u7684\u6570\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4eab\u5143\u6a21\u5f0f\u7684\u4e3b\u8981\u601d\u60f3\u662f\u5171\u4eab\u7ec6\u7c92\u5ea6\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u8bf4\u5982\u679c\u7cfb\u7edf\u4e2d\u5b58\u5728\u591a\u4e2a\u76f8\u540c\u7684\u5bf9\u8c61\uff0c\u90a3\u4e48\u53ea\u9700\u5171\u4eab\u4e00\u4efd\u5c31\u53ef\u4ee5\u4e86\uff0c\u4e0d\u5fc5\u6bcf\u4e2a\u90fd\u53bb\u5b9e\u4f8b\u5316\u6bcf\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8fd9\u6837\u6765\u7cbe\u7b80\u5185\u5b58\u8d44\u6e90\uff0c\u63d0\u5347\u6027\u80fd\u548c\u6548\u7387\u3002")))}s.isMDXComponent=!0}}]);