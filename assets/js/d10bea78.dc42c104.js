"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,b=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="\u7b56\u7565\u6a21\u5f0f",p={unversionedId:"behavioral-pattern/02Strategy",id:"behavioral-pattern/02Strategy",title:"\u7b56\u7565\u6a21\u5f0f",description:"\u7565\u6a21\u5f0f \uff08Strategy Pattern\uff09\u53c8\u79f0\u653f\u7b56\u6a21\u5f0f\uff0c\u5176\u5b9a\u4e49\u4e00\u7cfb\u5217\u7684\u7b97\u6cd5\uff0c\u628a\u5b83\u4eec\u4e00\u4e2a\u4e2a\u5c01\u88c5\u8d77\u6765\uff0c\u5e76\u4e14\u4f7f\u5b83\u4eec\u53ef\u4ee5\u4e92\u76f8\u66ff\u6362\u3002\u5c01\u88c5\u7684\u7b56\u7565\u7b97\u6cd5\u4e00\u822c\u662f\u72ec\u7acb\u7684\uff0c\u7b56\u7565\u6a21\u5f0f\u6839\u636e\u8f93\u5165\u6765\u8c03\u6574\u91c7\u7528\u54ea\u4e2a\u7b97\u6cd5\u3002\u5173\u952e\u662f\u7b56\u7565\u7684\u5b9e\u73b0\u548c\u4f7f\u7528\u5206\u79bb",source:"@site/docs/05-behavioral-pattern/02Strategy.md",sourceDirName:"05-behavioral-pattern",slug:"/behavioral-pattern/02Strategy",permalink:"/design-pattern/docs/behavioral-pattern/02Strategy",draft:!1,editUrl:"https://github.com/retech-fe/design-pattern/blob/main/docs/05-behavioral-pattern/02Strategy.md",tags:[],version:"current",lastUpdatedBy:"hongxiang.gao",lastUpdatedAt:1668046831,formattedLastUpdatedAt:"Nov 10, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u5e03-\u8ba2\u9605\u6a21\u5f0f\uff08\u89c2\u5bdf\u8005\u6a21\u5f0f\uff09",permalink:"/design-pattern/docs/behavioral-pattern/01observe"},next:{title:"\u72b6\u6001\u6a21\u5f0f",permalink:"/design-pattern/docs/behavioral-pattern/03state"}},c={},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b56\u7565\u6a21\u5f0f"},"\u7b56\u7565\u6a21\u5f0f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7565\u6a21\u5f0f \uff08Strategy Pattern\uff09\u53c8\u79f0\u653f\u7b56\u6a21\u5f0f\uff0c\u5176\u5b9a\u4e49\u4e00\u7cfb\u5217\u7684\u7b97\u6cd5\uff0c\u628a\u5b83\u4eec\u4e00\u4e2a\u4e2a\u5c01\u88c5\u8d77\u6765\uff0c\u5e76\u4e14\u4f7f\u5b83\u4eec\u53ef\u4ee5\u4e92\u76f8\u66ff\u6362\u3002\u5c01\u88c5\u7684\u7b56\u7565\u7b97\u6cd5\u4e00\u822c\u662f\u72ec\u7acb\u7684\uff0c\u7b56\u7565\u6a21\u5f0f\u6839\u636e\u8f93\u5165\u6765\u8c03\u6574\u91c7\u7528\u54ea\u4e2a\u7b97\u6cd5\u3002\u5173\u952e\u662f\u7b56\u7565\u7684\u5b9e\u73b0\u548c\u4f7f\u7528\u5206\u79bb")))}u.isMDXComponent=!0}}]);