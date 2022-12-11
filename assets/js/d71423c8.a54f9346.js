"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[558],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),s=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),h=s(n),d=a,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(m,l(l({ref:e},c),{},{components:n})):r.createElement(m,l({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=h;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8829:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"\u5efa\u9020\u8005\u6a21\u5f0f",description:"\u5206\u6b65\u6784\u5efa\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\uff0c\u5e76\u5141\u8bb8\u6309\u6b65\u9aa4\u6784\u9020",last_update:{date:"11/09/2022",author:"your name"}},l=void 0,p={unversionedId:"creational-pattern/builder",id:"creational-pattern/builder",title:"\u5efa\u9020\u8005\u6a21\u5f0f",description:"\u5206\u6b65\u6784\u5efa\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\uff0c\u5e76\u5141\u8bb8\u6309\u6b65\u9aa4\u6784\u9020",source:"@site/docs/03-creational-pattern/03-builder.md",sourceDirName:"03-creational-pattern",slug:"/creational-pattern/builder",permalink:"/design-pattern/docs/creational-pattern/builder",draft:!1,editUrl:"https://github.com/retech-fe/design-pattern/blob/main/docs/03-creational-pattern/03-builder.md",tags:[],version:"current",lastUpdatedBy:"your name",lastUpdatedAt:1667952e3,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:3,frontMatter:{title:"\u5efa\u9020\u8005\u6a21\u5f0f",description:"\u5206\u6b65\u6784\u5efa\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\uff0c\u5e76\u5141\u8bb8\u6309\u6b65\u9aa4\u6784\u9020",last_update:{date:"11/09/2022",author:"your name"}},sidebar:"tutorialSidebar",previous:{title:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f",permalink:"/design-pattern/docs/creational-pattern/abstract-factory"},next:{title:"\u5355\u4f8b\u6a21\u5f0f",permalink:"/design-pattern/docs/creational-pattern/singleton"}},o={},s=[{value:"1. \u4ecb\u7ecd",id:"1-\u4ecb\u7ecd",level:2},{value:"2. \u901a\u4fd7\u7684\u793a\u4f8b",id:"2-\u901a\u4fd7\u7684\u793a\u4f8b",level:2},{value:"3. \u5efa\u9020\u8005\u6a21\u5f0f\u7684\u901a\u7528\u5b9e\u73b0",id:"3-\u5efa\u9020\u8005\u6a21\u5f0f\u7684\u901a\u7528\u5b9e\u73b0",level:2},{value:"4. \u5efa\u9020\u8005\u6a21\u5f0f\u7684\u5b9e\u9645\u5e94\u7528",id:"4-\u5efa\u9020\u8005\u6a21\u5f0f\u7684\u5b9e\u9645\u5e94\u7528",level:2},{value:"4.1 \u91cd\u6784\u4e00\u4e2a\u5177\u6709\u5f88\u591a\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570",id:"41-\u91cd\u6784\u4e00\u4e2a\u5177\u6709\u5f88\u591a\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570",level:3},{value:"4.2 \u91cd\u6784 React \u7684\u4e66\u5199\u5f62\u5f0f",id:"42-\u91cd\u6784-react-\u7684\u4e66\u5199\u5f62\u5f0f",level:3},{value:"5. \u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",id:"5-\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",level:2},{value:"6. \u5efa\u9020\u8005\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9",id:"6-\u5efa\u9020\u8005\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9",level:2},{value:"7. \u5efa\u9020\u8005\u6a21\u5f0f\u7684\u9002\u7528\u573a\u666f",id:"7-\u5efa\u9020\u8005\u6a21\u5f0f\u7684\u9002\u7528\u573a\u666f",level:2},{value:"8. \u5176\u4ed6\u76f8\u5173\u6a21\u5f0f",id:"8-\u5176\u4ed6\u76f8\u5173\u6a21\u5f0f",level:2},{value:"\u5efa\u9020\u8005\u6a21\u5f0f\u4e0e\u5de5\u5382\u6a21\u5f0f",id:"\u5efa\u9020\u8005\u6a21\u5f0f\u4e0e\u5de5\u5382\u6a21\u5f0f",level:3},{value:"\u5efa\u9020\u8005\u6a21\u5f0f\u4e0e\u6a21\u7248\u65b9\u6cd5\u6a21\u5f0f",id:"\u5efa\u9020\u8005\u6a21\u5f0f\u4e0e\u6a21\u7248\u65b9\u6cd5\u6a21\u5f0f",level:3}],c={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u4ecb\u7ecd"},"1. \u4ecb\u7ecd"),(0,a.kt)("p",null,"\u5efa\u9020\u8005\u6a21\u5f0f\uff08Builder Pattern\uff09\u53c8\u79f0\u751f\u6210\u5668\u6a21\u5f0f\uff0c\u5206\u6b65\u6784\u5efa\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\uff0c\u5e76\u5141\u8bb8\u6309\u6b65\u9aa4\u6784\u9020\u3002\u540c\u6837\u7684\u6784\u5efa\u8fc7\u7a0b\u53ef\u4ee5\u91c7\u7528\u4e0d\u540c\u7684\u8868\u793a\uff0c\u5c06\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6784\u5efa\u5c42\u4e0e\u5176\u8868\u793a\u5c42\u5206\u79bb"),"\u3002"),(0,a.kt)("p",null,"\u5728\u5de5\u5382\u6a21\u5f0f\u4e2d\uff0c\u521b\u5efa\u7684\u7ed3\u679c\u90fd\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u4e2a\u4f53\uff0c\u6211\u4eec\u5bf9\u521b\u5efa\u7684\u8fc7\u7a0b\u5e76\u4e0d\u5173\u5fc3\uff0c\u53ea\u9700\u4e86\u89e3\u521b\u5efa\u7684\u7ed3\u679c\u3002\u800c\u5728\u5efa\u9020\u8005\u6a21\u5f0f\u4e2d\uff0c\u6211\u4eec\u5173\u5fc3\u7684\u662f\u5bf9\u8c61\u7684\u521b\u5efa\u8fc7\u7a0b\uff0c\u56e0\u6b64\u6211\u4eec\u901a\u5e38\u5c06\u521b\u5efa\u7684\u590d\u6742\u5bf9\u8c61\u7684\u6a21\u5757\u5316\uff0c\u4f7f\u5f97\u88ab\u521b\u5efa\u7684\u5bf9\u8c61\u7684\u6bcf\u4e00\u4e2a\u5b50\u6a21\u5757\u90fd\u53ef\u4ee5\u5f97\u5230\u9ad8\u8d28\u91cf\u7684\u590d\u7528\uff0c\u5f53\u7136\u5728\u7075\u6d3b\u7684 JavaScript \u4e2d\u6211\u4eec\u53ef\u4ee5\u6709\u66f4\u7075\u6d3b\u7684\u5b9e\u73b0\u3002"),(0,a.kt)("h2",{id:"2-\u901a\u4fd7\u7684\u793a\u4f8b"},"2. \u901a\u4fd7\u7684\u793a\u4f8b"),(0,a.kt)("p",null,"\u5047\u5b9a\u6211\u4eec\u9700\u8981\u5efa\u9020\u4e00\u4e2a\u8f66\uff0c\u8f66\u8fd9\u4e2a\u4ea7\u54c1\u662f\u7531\u591a\u4e2a\u90e8\u4ef6\u7ec4\u6210\uff0c\u8f66\u8eab\u3001\u5f15\u64ce\u3001\u8f6e\u80ce\u3002\u6c7d\u8f66\u5236\u9020\u5382\u4e00\u822c\u4e0d\u4f1a\u81ea\u5df1\u5b8c\u6210\u6bcf\u4e2a\u90e8\u4ef6\u7684\u5236\u9020\uff0c\u800c\u662f\u628a\u90e8\u4ef6\u7684\u5236\u9020\u4ea4\u7ed9\u5bf9\u5e94\u7684\u6c7d\u8f66\u96f6\u90e8\u4ef6\u5236\u9020\u5546\uff0c\u81ea\u5df1\u53ea\u8fdb\u884c\u88c5\u914d\uff0c\u6700\u540e\u751f\u4ea7\u51fa\u6574\u8f66\u3002\u6574\u8f66\u7684\u6bcf\u4e2a\u90e8\u4ef6\u90fd\u662f\u4e00\u4e2a\u76f8\u5bf9\u72ec\u7acb\u7684\u4e2a\u4f53\uff0c\u90fd\u5177\u6709\u81ea\u5df1\u7684\u751f\u4ea7\u8fc7\u7a0b\uff0c\u591a\u4e2a\u90e8\u4ef6\u7ecf\u8fc7\u4e00\u7cfb\u5217\u7684\u7ec4\u88c5\u5171\u540c\u7ec4\u6210\u4e86\u4e00\u4e2a\u5b8c\u6574\u7684\u8f66\u3002"),(0,a.kt)("p",null,"\u7c7b\u4f3c\u7684\u573a\u666f\u8fd8\u6709\u5f88\u591a\uff0c\u6bd4\u5982\u751f\u4ea7\u4e00\u4e2a\u7b14\u8bb0\u672c\u7535\u8111\uff0c\u7531\u4e3b\u677f\u3001\u663e\u793a\u5668\u3001\u58f3\u5b50\u7ec4\u6210\uff0c\u6bcf\u4e2a\u90e8\u4ef6\u90fd\u6709\u81ea\u5df1\u72ec\u7acb\u7684\u884c\u4e3a\u548c\u529f\u80fd\uff0c\u4ed6\u4eec\u5171\u540c\u7ec4\u6210\u4e86\u4e00\u4e2a\u7b14\u8bb0\u672c\u7535\u8111\u3002\u7b14\u8bb0\u672c\u7535\u8111\u5382\u4ece\u90e8\u4ef6\u5236\u9020\u5546\u5904\u83b7\u5f97\u5236\u9020\u5b8c\u6210\u7684\u90e8\u4ef6\uff0c\u518d\u7531\u81ea\u5df1\u5b8c\u6210\u7ec4\u88c5\uff0c\u5f97\u5230\u7b14\u8bb0\u672c\u7535\u8111\u8fd9\u4e2a\u5b8c\u6574\u7684\u4ea7\u54c1\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u4e9b\u573a\u666f\u4e2d\uff0c\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6574\u8f66\u5236\u9020\u5382\uff08\u6307\u6325\u8005\uff09\u65e0\u9700\u77e5\u9053\u96f6\u90e8\u4ef6\u7684\u751f\u4ea7\u8fc7\u7a0b\uff0c\u96f6\u90e8\u4ef6\u7684\u751f\u4ea7\u8fc7\u7a0b\u4e00\u822c\u7531\u96f6\u90e8\u4ef6\u5382\u5546\uff08\u5efa\u9020\u8005\uff09\u6765\u5b8c\u6210\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6574\u8f66\u5236\u9020\u5382\uff08\u6307\u6325\u8005\uff09\u51b3\u5b9a\u4ee5\u600e\u6837\u7684\u88c5\u914d\u65b9\u5f0f\u6765\u7ec4\u88c5\u96f6\u90e8\u4ef6\uff0c\u4ee5\u5f97\u5230\u6700\u7ec8\u7684\u4ea7\u54c1\u3002")),(0,a.kt)("h2",{id:"3-\u5efa\u9020\u8005\u6a21\u5f0f\u7684\u901a\u7528\u5b9e\u73b0"},"3. \u5efa\u9020\u8005\u6a21\u5f0f\u7684\u901a\u7528\u5b9e\u73b0"),(0,a.kt)("p",null,"\u6211\u4eec\u63d0\u70bc\u4e00\u4e0b\u5efa\u9020\u8005\u6a21\u5f0f\uff0c\u8fd9\u91cc\u7684\u751f\u4ea7\u6c7d\u8f66\u7684\u5954\u9a70\u5382\u5bb6\u5c31\u76f8\u5f53\u4e8e\u6307\u6325\u8005\uff08Director\uff09\uff0c\u5382\u5bb6\u8d1f\u8d23\u5c06\u4e0d\u540c\u7684\u90e8\u4ef6\u7ec4\u88c5\u6210\u6700\u540e\u7684\u4ea7\u54c1\uff08Product\uff09\uff0c\u800c\u90e8\u4ef6\u7684\u751f\u4ea7\u8005\u662f\u90e8\u4ef6\u5382\u5bb6\u76f8\u5f53\u4e8e\u5efa\u9020\u8005\uff08Builder\uff09\uff0c\u6211\u4eec\u901a\u8fc7\u6307\u6325\u8005\u5c31\u53ef\u4ee5\u83b7\u5f97\u5e0c\u671b\u7684\u590d\u6742\u7684\u4ea7\u54c1\u5bf9\u8c61\uff0c\u518d\u901a\u8fc7\u8bbf\u95ee\u4e0d\u540c\u6307\u6325\u8005\u83b7\u5f97\u88c5\u914d\u65b9\u5f0f\u4e0d\u540c\u7684\u4ea7\u54c1\u3002\u4e3b\u8981\u6709\u4e0b\u9762\u51e0\u4e2a\u6982\u5ff5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Director"),"\uff1a\u6307\u6325\u8005\uff0c\u8c03\u7528\u5efa\u9020\u8005\u4e2d\u7684\u90e8\u4ef6\u5177\u4f53\u5b9e\u73b0\u8fdb\u884c\u90e8\u4ef6\u88c5\u914d\uff0c\u76f8\u5f53\u4e8e\u6574\u8f66\u7ec4\u88c5\u5382\uff0c\u6700\u7ec8\u8fd4\u56de\u88c5\u914d\u5b8c\u6bd5\u7684\u4ea7\u54c1\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Builder"),"\uff1a\u5efa\u9020\u8005\uff0c\u542b\u6709\u4e0d\u540c\u90e8\u4ef6\u7684\u751f\u4ea7\u65b9\u5f0f\u7ed9\u6307\u6325\u8005\u8c03\u7528\uff0c\u662f\u90e8\u4ef6\u771f\u6b63\u7684\u751f\u4ea7\u8005\uff0c\u4f46\u6ca1\u6709\u90e8\u4ef6\u7684\u88c5\u914d\u6d41\u7a0b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Product"),"\uff1a\u4ea7\u54c1\uff0c\u8981\u8fd4\u56de\u7ed9\u8bbf\u95ee\u8005\u7684\u590d\u6742\u5bf9\u8c61\u3002")),(0,a.kt)("p",null,"\u5efa\u9020\u8005\u6a21\u5f0f\u7684\u4e3b\u8981\u529f\u80fd\u662f\u6784\u5efa\u590d\u6742\u7684\u4ea7\u54c1\uff0c\u5e76\u4e14\u662f\u590d\u6742\u7684\u3001\u9700\u8981\u5206\u6b65\u9aa4\u6784\u5efa\u7684\u4ea7\u54c1\uff0c\u5176\u6784\u5efa\u7684\u7b97\u6cd5\u662f\u7edf\u4e00\u7684\uff0c\u6784\u5efa\u7684\u8fc7\u7a0b\u7531\u6307\u6325\u8005\u51b3\u5b9a\uff0c\u53ea\u8981\u914d\u7f6e\u4e0d\u540c\u7684\u6307\u6325\u8005\uff0c\u5c31\u53ef\u4ee5\u6784\u5efa\u51fa\u4e0d\u540c\u7684\u590d\u6742\u4ea7\u54c1\u6765\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5efa\u9020\u8005\u6a21\u5f0f",(0,a.kt)("strong",{parentName:"p"},"\u5c06\u4ea7\u54c1\u88c5\u914d\u7684\u7b97\u6cd5\u548c\u5177\u4f53\u90e8\u4ef6\u7684\u5b9e\u73b0\u5206\u79bb"),"\uff0c\u8fd9\u6837\u6784\u5efa\u7684\u7b97\u6cd5\u53ef\u4ee5\u6269\u5c55\u548c\u590d\u7528\uff0c\u90e8\u4ef6\u7684\u5177\u4f53\u5b9e\u73b0\u4e5f\u53ef\u4ee5\u65b9\u4fbf\u5730\u6269\u5c55\u548c\u590d\u7528\uff0c\u4ece\u800c\u53ef\u4ee5\u7075\u6d3b\u5730\u901a\u8fc7\u7ec4\u5408\u6765\u6784\u5efa\u51fa\u4e0d\u540c\u7684\u4ea7\u54c1\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/retech-fe/image-hosting/main/img/2022/12/11/10-37-42-6fb525d559f28c867c6850633888c4c2-20221211103742-cf9644.png",alt:null})),(0,a.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5efa\u9020\u8005\uff0c\u90e8\u4ef6\u751f\u4ea7\nclass ProductBuilder {\n  constructor(param) {\n    this.param = param\n  }\n\n  /* \u751f\u4ea7\u90e8\u4ef6\uff0cpart1 */\n  buildPart1() {\n    // ... Part1 \u751f\u4ea7\u8fc7\u7a0b\n    this.part1 = 'part1'\n\n  }\n\n  /* \u751f\u4ea7\u90e8\u4ef6\uff0cpart2 */\n  buildPart2() {\n    // ... Part2 \u751f\u4ea7\u8fc7\u7a0b\n    this.part2 = 'part2'\n  }\n}\n\n/* \u6307\u6325\u8005\uff0c\u8d1f\u8d23\u6700\u7ec8\u4ea7\u54c1\u7684\u88c5\u914d */\nclass Director {\n  constructor(param) {\n    const _product = new ProductBuilder(param)\n    _product.buildPart1()\n    _product.buildPart2()\n    return _product\n  }\n}\n\n// \u83b7\u5f97\u4ea7\u54c1\u5b9e\u4f8b\nconst product = new Director('param')\n")),(0,a.kt)("p",null,"\u7ed3\u5408\u94fe\u6a21\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5efa\u9020\u8005\uff0c\u6c7d\u8f66\u90e8\u4ef6\u5382\u5bb6\nclass CarBuilder {\n  constructor(param) {\n    this.param = param\n  }\n\n  /* \u751f\u4ea7\u90e8\u4ef6\uff0cpart1 */\n  buildPart1() {\n    this.part1 = 'part1'\n    return this\n  }\n\n  /* \u751f\u4ea7\u90e8\u4ef6\uff0cpart2 */\n  buildPart2() {\n    this.part2 = 'part2'\n    return this\n  }\n}\n\n// \u6c7d\u8f66\u88c5\u914d\uff0c\u83b7\u5f97\u4ea7\u54c1\u5b9e\u4f8b\nconst benchi1 = new CarBuilder('param')\n  .buildPart1()\n  .buildPart2()\n")),(0,a.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u6269\u5c55\u5b9e\u4f8b\u7684\u529f\u80fd\uff0c\u90a3\u4e48\u53ea\u9700\u8981\u5728\u5efa\u9020\u8005\u7c7b\u7684\u539f\u578b\u4e0a\u589e\u52a0\u4e00\u4e2a\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u518d\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," \u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u7ed3\u5408\u94fe\u6a21\u5f0f\u7684\u5efa\u9020\u8005\u6a21\u5f0f\u4e2d\uff0c\u88c5\u914d\u590d\u6742\u5bf9\u8c61\u7684\u94fe\u5f0f\u88c5\u914d\u8fc7\u7a0b\u5c31\u662f\u6307\u6325\u8005 Director \u89d2\u8272\uff0c\u53ea\u4e0d\u8fc7\u5728\u94fe\u5f0f\u88c5\u914d\u8fc7\u7a0b\u4e2d\u4e0d\u518d\u5c01\u88c5\u5728\u5177\u4f53\u6307\u6325\u8005\u4e2d\uff0c\u800c\u662f\u7531\u4f7f\u7528\u8005\u81ea\u5df1\u786e\u5b9a\u88c5\u914d\u8fc7\u7a0b\u3002"),(0,a.kt)("h2",{id:"4-\u5efa\u9020\u8005\u6a21\u5f0f\u7684\u5b9e\u9645\u5e94\u7528"},"4. \u5efa\u9020\u8005\u6a21\u5f0f\u7684\u5b9e\u9645\u5e94\u7528"),(0,a.kt)("h3",{id:"41-\u91cd\u6784\u4e00\u4e2a\u5177\u6709\u5f88\u591a\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570"},"4.1 \u91cd\u6784\u4e00\u4e2a\u5177\u6709\u5f88\u591a\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u4f1a\u9047\u5230\u4e00\u4e2a\u53c2\u6570\u5f88\u591a\u7684\u6784\u9020\u51fd\u6570\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u6c7d\u8f66\u5efa\u9020\u8005\nclass CarBuilder {\n  constructor(engine, weight, height, color, tyre, name, type) {\n    this.engine = engine\n    this.weight = weight\n    this.height = height\n    this.color = color\n    this.tyre = tyre\n    this.name = name\n    this.type = type\n  }\n}\n\nconst benchi = new CarBuilder('\u5927\u9a6c\u529b\u53d1\u52a8\u673a', '2ton', 'white', '\u5927\u53f7\u8f6e\u80ce', '\u5954\u9a70', 'AMG')\n")),(0,a.kt)("p",null,"\u5982\u679c\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\u591a\u4e8e 3 \u4e2a\uff0c\u5728\u4f7f\u7528\u7684\u65f6\u5019\u5c31\u5f88\u5bb9\u6613\u5f04\u4e0d\u6e05\u54ea\u4e2a\u53c2\u6570\u5bf9\u5e94\u7684\u662f\u4ec0\u4e48\u542b\u4e49\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5bf9\u8c61\u89e3\u6784\u8d4b\u503c\u7684\u65b9\u5f0f\u6765\u63d0\u9ad8\u53ef\u8bfb\u6027\u548c\u4f7f\u7528\u4fbf\u5229\u6027\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5efa\u9020\u8005\u6a21\u5f0f\u7684\u601d\u60f3\u6765\u8fdb\u884c\u5c5e\u6027\u8d4b\u503c\uff0c\u8fd9\u662f\u53e6\u4e00\u4e2a\u601d\u8def\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u6c7d\u8f66\u5efa\u9020\u8005\nclass CarBuilder {\n  constructor(engine, weight, height, color, tyre, name, type) {\n    this.engine = engine\n    this.weight = weight\n    this.height = height\n    this.color = color\n    this.tyre = tyre\n    this.name = name\n    this.type = type\n  }\n\n  setCarProperty(key, value) {\n    if (Object.getOwnPropertyNames(this).includes(key)) {\n      this[key] = value\n      return this\n    }\n    throw new Error(`Key error : ${ key } \u4e0d\u662f\u672c\u5b9e\u4f8b\u4e0a\u7684\u5c5e\u6027`)\n  }\n}\n\nconst benchi = new CarBuilder()\n  .setCarProperty('engine', '\u5927\u9a6c\u529b\u53d1\u52a8\u673a')\n  .setCarProperty('weight', '2ton')\n  .setCarProperty('height', '2000mm')\n  .setCarProperty('color', 'white')\n  .setCarProperty('tyre', '\u5927\u53f7\u8f6e\u80ce')\n  .setCarProperty('name', '\u5954\u9a70')\n  .setCarProperty('type', 'AMG')\n")),(0,a.kt)("p",null,"\u6bcf\u4e2a\u952e\u90fd\u662f\u7528\u4e00\u4e2a\u540c\u6837\u7684\u65b9\u6cd5\u6765\u8bbe\u7f6e\uff0c\u6216\u8bb8\u4f60\u89c9\u5f97\u4e0d\u592a\u76f4\u89c2\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8bbe\u7f6e\u6bcf\u4e2a\u5c5e\u6027\u7684\u64cd\u4f5c\u90fd\u5355\u72ec\u5217\u4e3a\u4e00\u4e2a\u65b9\u6cd5\uff0c\u8fd9\u6837\u53ef\u8bfb\u6027\u5c31\u66f4\u9ad8\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u6c7d\u8f66\u5efa\u9020\u8005\nclass CarBuilder {\n  constructor(engine, weight, height, color, tyre, name, type) {\n    this.engine = engine\n    this.weight = weight\n    this.height = height\n    this.color = color\n    this.tyre = tyre\n    this.name = name\n    this.type = type\n  }\n\n  setPropertyFuncChain() {\n    Object.getOwnPropertyNames(this)\n      .forEach(key => {\n        const funcName = 'set' + key.replace(/^\\w/g, str => str.toUpperCase())\n        this[funcName] = value => {\n          this[key] = value\n          return this\n        }\n      })\n    return this\n  }\n}\n\nconst benchi = new CarBuilder().setPropertyFuncChain()\n  .setEngine('\u5927\u9a6c\u529b\u53d1\u52a8\u673a')\n  .setWeight('2ton')\n  .setHeight('2000mm')\n  .setColor('white')\n  .setTyre('\u5927\u53f7\u8f6e\u80ce')\n  .setName('\u5954\u9a70')\n  .setType('AMG')\n")),(0,a.kt)("p",null,"PS\uff1a\u8fd9\u91cc\u7528\u5230\u4e86\u70b9\u6b63\u5219\u7684\u77e5\u8bc6\u3002"),(0,a.kt)("h3",{id:"42-\u91cd\u6784-react-\u7684\u4e66\u5199\u5f62\u5f0f"},"4.2 \u91cd\u6784 React \u7684\u4e66\u5199\u5f62\u5f0f"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u65b9\u5f0f\u4e0d\u4e00\u5b9a\u63a8\u8350\uff0c\u53ea\u662f\u7528\u6765\u5f00\u9614\u89c6\u91ce\u3002")),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u5199\u4e00\u4e2a React \u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u4e00\u822c\u7ed3\u6784\u5f62\u5f0f\u5982\u4e0b\uff1b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class ContainerComponent extends Component {\n  componentDidMount() {\n    this.props.fetchThings()\n  }\n  render() {\n    return <PresentationalComponent {...this.props}/>\n  }\n}\n\nContainerComponent.propTypes = {\n  fetchThings: PropTypes.func.isRequired\n}\n\nconst mapStateToProps = state => ({\n  things: state.things\n})\nconst mapDispatchToProps = dispatch => ({\n  fetchThings: () => dispatch(fetchThings()),\n  selectThing: id => dispatch(selectThing(id)),\n  blowShitUp: () => dispatch(blowShitUp())\n})\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(ContainerComponent)\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u5efa\u9020\u8005\u6a21\u5f0f\u91cd\u6784\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u7ec4\u4ef6\u5f62\u5f0f\u5199\u6210\u5982\u4e0b\u65b9\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export default ComponentBuilder('ContainerComponent')\n  .render(props => <PresentationalComponent {...props}/>)\n  .componentDidMount(props => props.fetchThings())\n  .propTypes({\n    fetchThings: PropTypes.func.isRequired\n  })\n  .mapStateToProps(state => ({\n    things: state.things\n  }))\n  .mapDispatchToProps(dispatch => ({\n    fetchThings: () => dispatch(fetchThings()),\n    selectThing: id => dispatch(selectThing(id)),\n    blowShitUp: () => dispatch(blowShitUp())\n  }))\n  .build()\n")),(0,a.kt)("h2",{id:"5-\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"},"5. \u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u4ea7\u54c1\u7684\u521b\u5efa\u7b97\u6cd5\u548c\u4ea7\u54c1\u7ec4\u6210\u7684\u5b9e\u73b0\u9694\u79bb"),(0,a.kt)("li",{parentName:"ul"},"\u7b26\u5408\u5f00\u653e\u5c01\u95ed\u539f\u5219")),(0,a.kt)("h2",{id:"6-\u5efa\u9020\u8005\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9"},"6. \u5efa\u9020\u8005\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9"),(0,a.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5efa\u9020\u8005\u6a21\u5f0f\u53ef\u4ee5",(0,a.kt)("strong",{parentName:"li"},"\u4f7f\u4ea7\u54c1\u7684\u6784\u5efa\u6d41\u7a0b\u548c\u4ea7\u54c1\u7684\u8868\u73b0\u5206\u79bb"),"\uff0c\u4e5f\u5c31\u662f\u5c06\u4ea7\u54c1\u7684\u521b\u5efa\u7b97\u6cd5\u548c\u4ea7\u54c1\u7ec4\u6210\u7684\u5b9e\u73b0\u9694\u79bb\uff0c\u8bbf\u95ee\u8005\u4e0d\u5fc5\u77e5\u9053\u4ea7\u54c1\u90e8\u4ef6\u5b9e\u73b0\u7684\u7ec6\u8282\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6269\u5c55\u65b9\u4fbf"),"\uff0c\u5982\u679c\u5e0c\u671b\u751f\u4ea7\u4e00\u4e2a\u88c5\u914d\u987a\u5e8f\u6216\u65b9\u5f0f\u4e0d\u540c\u7684\u65b0\u4ea7\u54c1\uff0c\u90a3\u4e48\u76f4\u63a5\u65b0\u5efa\u4e00\u4e2a\u6307\u6325\u8005\u5373\u53ef\uff0c\u4e0d\u7528\u4fee\u6539\u65e2\u6709\u4ee3\u7801\uff0c\u7b26\u5408\u5f00\u95ed\u539f\u5219\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u66f4\u597d\u7684\u590d\u7528\u6027"),"\uff0c\u5efa\u9020\u8005\u6a21\u5f0f\u5c06\u4ea7\u54c1\u7684\u521b\u5efa\u7b97\u6cd5\u548c\u4ea7\u54c1\u7ec4\u6210\u7684\u5b9e\u73b0\u5206\u79bb\uff0c\u6240\u4ee5\u4ea7\u54c1\u521b\u5efa\u7684\u7b97\u6cd5\u53ef\u4ee5\u590d\u7528\uff0c\u4ea7\u54c1\u90e8\u4ef6\u7684\u5b9e\u73b0\u4e5f\u53ef\u4ee5\u590d\u7528\uff0c\u5e26\u6765\u5f88\u5927\u7684\u7075\u6d3b\u6027")),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5efa\u9020\u8005\u6a21\u5f0f\u4e00\u822c\u9002\u7528\u4e8e\u4ea7\u54c1\u4e4b\u95f4\u7ec4\u6210\u90e8\u4ef6\u7c7b\u4f3c\u7684\u60c5\u51b5\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u5982\u679c\u4ea7\u54c1\u4e4b\u95f4\u5dee\u5f02\u6027\u5f88\u5927\u3001\u590d\u7528\u6027\u4e0d\u9ad8"),"\uff0c\u90a3\u4e48\u4e0d\u8981\u4f7f\u7528\u5efa\u9020\u8005\u6a21\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u7684\u521b\u5efa\u589e\u52a0\u4e86\u8bb8\u591a\u989d\u5916\u7684\u7ed3\u6784\uff0c\u65e0\u7591\u589e\u52a0\u4e86\u8bb8\u591a\u590d\u6742\u5ea6\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u5982\u679c\u5bf9\u8c61\u7c92\u5ea6\u4e0d\u5927"),"\uff0c\u90a3\u4e48\u6211\u4eec\u6700\u597d\u76f4\u63a5\u521b\u5efa\u5bf9\u8c61\u3002")),(0,a.kt)("h2",{id:"7-\u5efa\u9020\u8005\u6a21\u5f0f\u7684\u9002\u7528\u573a\u666f"},"7. \u5efa\u9020\u8005\u6a21\u5f0f\u7684\u9002\u7528\u573a\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76f8\u540c\u7684\u65b9\u6cd5\uff0c\u4e0d\u540c\u7684\u6267\u884c\u987a\u5e8f\uff0c\u4ea7\u751f\u4e0d\u4e00\u6837\u7684\u4ea7\u54c1\u65f6\uff0c\u53ef\u4ee5\u91c7\u7528\u5efa\u9020\u8005\u6a21\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u7684\u7ec4\u6210\u90e8\u4ef6\u7c7b\u4f3c\uff0c\u901a\u8fc7\u7ec4\u88c5\u4e0d\u540c\u7684\u7ec4\u4ef6\u83b7\u5f97\u4e0d\u540c\u4ea7\u54c1\u65f6\uff0c\u53ef\u4ee5\u91c7\u7528\u5efa\u9020\u8005\u6a21\u5f0f\u3002")),(0,a.kt)("h2",{id:"8-\u5176\u4ed6\u76f8\u5173\u6a21\u5f0f"},"8. \u5176\u4ed6\u76f8\u5173\u6a21\u5f0f"),(0,a.kt)("h3",{id:"\u5efa\u9020\u8005\u6a21\u5f0f\u4e0e\u5de5\u5382\u6a21\u5f0f"},"\u5efa\u9020\u8005\u6a21\u5f0f\u4e0e\u5de5\u5382\u6a21\u5f0f"),(0,a.kt)("p",null,"\u5efa\u9020\u8005\u6a21\u5f0f\u548c\u5de5\u5382\u6a21\u5f0f\u6700\u7ec8\u90fd\u662f\u521b\u5efa\u4e00\u4e2a\u5b8c\u6574\u7684\u4ea7\u54c1\uff0c\u4f46\u662f\u5728\u5efa\u9020\u8005\u6a21\u5f0f\u4e2d\u6211\u4eec\u66f4\u5173\u5fc3\u5bf9\u8c61\u521b\u5efa\u7684\u8fc7\u7a0b\uff0c\u5c06\u521b\u5efa\u5bf9\u8c61\u7684\u65b9\u6cd5\u6a21\u5757\u5316\uff0c\u4ece\u800c\u66f4\u597d\u5730\u590d\u7528\u8fd9\u4e9b\u6a21\u5757\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\u5efa\u9020\u8005\u6a21\u5f0f\u4e0e\u5de5\u5382\u6a21\u5f0f\u4e5f\u662f\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\u7684\uff0c\u6bd4\u5982\u5efa\u9020\u8005\u4e2d\u4e00\u822c\u4f1a\u63d0\u4f9b\u4e0d\u540c\u7684\u90e8\u4ef6\u5b9e\u73b0\uff0c\u90a3\u4e48\u8fd9\u91cc\u5c31\u53ef\u4ee5\u4f7f\u7528\u5de5\u5382\u6a21\u5f0f\u6765\u63d0\u4f9b\u5177\u4f53\u7684\u90e8\u4ef6\u5bf9\u8c61\uff0c\u518d\u901a\u8fc7\u6307\u6325\u8005\u6765\u8fdb\u884c\u88c5\u914d\u3002"),(0,a.kt)("h3",{id:"\u5efa\u9020\u8005\u6a21\u5f0f\u4e0e\u6a21\u7248\u65b9\u6cd5\u6a21\u5f0f"},"\u5efa\u9020\u8005\u6a21\u5f0f\u4e0e\u6a21\u7248\u65b9\u6cd5\u6a21\u5f0f"),(0,a.kt)("p",null,"\u6307\u6325\u8005\u7684\u5b9e\u73b0\u53ef\u4ee5\u548c\u6a21\u7248\u65b9\u6cd5\u6a21\u5f0f\u76f8\u7ed3\u5408\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6307\u6325\u8005\u4e2d\u90e8\u4ef6\u7684\u88c5\u914d\u8fc7\u7a0b\uff0c\u53ef\u4ee5\u4f7f\u7528\u6a21\u7248\u65b9\u6cd5\u6a21\u5f0f\u6765\u56fa\u5b9a\u88c5\u914d\u7b97\u6cd5\uff0c\u628a\u90e8\u4ef6\u5b9e\u73b0\u65b9\u6cd5\u5206\u4e3a\u6a21\u677f\u65b9\u6cd5\u548c\u57fa\u672c\u65b9\u6cd5\uff0c\u8fdb\u4e00\u6b65\u63d0\u53d6\u516c\u5171\u4ee3\u7801\uff0c\u6269\u5c55\u53ef\u53d8\u90e8\u5206\u3002"),(0,a.kt)("p",null,"\u662f\u5426\u91c7\u7528\u6a21\u7248\u65b9\u6cd5\u6a21\u5f0f\u770b\u5177\u4f53\u573a\u666f\uff0c\u5982\u679c\u4ea7\u54c1\u7684\u90e8\u4ef6\u88c5\u914d\u987a\u5e8f\u5f88\u660e\u786e\uff0c\u4f46\u662f\u5177\u4f53\u7684\u5b9e\u73b0\u662f\u672a\u77e5\u7684\u3001\u7075\u6d3b\u7684\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u9002\u5f53\u8003\u8651\u662f\u5426\u5e94\u8be5\u5c06\u7b97\u6cd5\u9aa8\u67b6\u63d0\u53d6\u51fa\u6765\u3002"))}u.isMDXComponent=!0}}]);