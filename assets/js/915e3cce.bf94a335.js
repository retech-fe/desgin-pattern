"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[819],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="\u5efa\u9020\u8005\u6a21\u5f0f",c={unversionedId:"creational-pattern/04Builder",id:"creational-pattern/04Builder",title:"\u5efa\u9020\u8005\u6a21\u5f0f",description:"\u5efa\u9020\u8005\u6a21\u5f0f\uff08Builder Pattern\uff09\u53c8\u79f0\u751f\u6210\u5668\u6a21\u5f0f\uff0c\u5206\u6b65\u6784\u5efa\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\uff0c\u5e76\u5141\u8bb8\u6309\u6b65\u9aa4\u6784\u9020\u3002\u540c\u6837\u7684\u6784\u5efa\u8fc7\u7a0b\u53ef\u4ee5\u91c7\u7528\u4e0d\u540c\u7684\u8868\u793a\uff0c\u5c06\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\u7684\u6784\u5efa\u5c42\u4e0e\u5176\u8868\u793a\u5c42\u5206\u79bb\u3002",source:"@site/docs/03-creational-pattern/04Builder.md",sourceDirName:"03-creational-pattern",slug:"/creational-pattern/04Builder",permalink:"/design-pattern/docs/creational-pattern/04Builder",draft:!1,editUrl:"https://github.com/retech-fe/design-pattern/blob/main/docs/03-creational-pattern/04Builder.md",tags:[],version:"current",lastUpdatedBy:"hongxiang.gao",lastUpdatedAt:1668046831,formattedLastUpdatedAt:"Nov 10, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f",permalink:"/design-pattern/docs/creational-pattern/03Abstract"},next:{title:"\u7ed3\u6784\u578b\u6a21\u5f0f",permalink:"/design-pattern/docs/category/\u7ed3\u6784\u578b\u6a21\u5f0f"}},l={},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5efa\u9020\u8005\u6a21\u5f0f"},"\u5efa\u9020\u8005\u6a21\u5f0f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5efa\u9020\u8005\u6a21\u5f0f\uff08Builder Pattern\uff09\u53c8\u79f0\u751f\u6210\u5668\u6a21\u5f0f\uff0c\u5206\u6b65\u6784\u5efa\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\uff0c\u5e76\u5141\u8bb8\u6309\u6b65\u9aa4\u6784\u9020\u3002\u540c\u6837\u7684\u6784\u5efa\u8fc7\u7a0b\u53ef\u4ee5\u91c7\u7528\u4e0d\u540c\u7684\u8868\u793a\uff0c\u5c06\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\u7684\u6784\u5efa\u5c42\u4e0e\u5176\u8868\u793a\u5c42\u5206\u79bb\u3002")))}s.isMDXComponent=!0}}]);