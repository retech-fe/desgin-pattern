"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={title:"\u6865\u63a5\u6a21\u5f0f",description:"\u4f7f\u7528\u7ec4\u5408\u5173\u7cfb\u4ee3\u66ff\u7ee7\u627f\u5173\u7cfb\uff0c\u964d\u4f4e\u62bd\u8c61\u548c\u5b9e\u73b0\u4e24\u4e2a\u53ef\u53d8\u7ef4\u5ea6\u7684\u8026\u5408\u5ea6",last_update:{date:"11/09/2022",author:"your name"}},o=void 0,i={unversionedId:"structural-pattern/bridge",id:"structural-pattern/bridge",title:"\u6865\u63a5\u6a21\u5f0f",description:"\u4f7f\u7528\u7ec4\u5408\u5173\u7cfb\u4ee3\u66ff\u7ee7\u627f\u5173\u7cfb\uff0c\u964d\u4f4e\u62bd\u8c61\u548c\u5b9e\u73b0\u4e24\u4e2a\u53ef\u53d8\u7ef4\u5ea6\u7684\u8026\u5408\u5ea6",source:"@site/docs/04-structural-pattern/07-bridge.md",sourceDirName:"04-structural-pattern",slug:"/structural-pattern/bridge",permalink:"/design-pattern/docs/structural-pattern/bridge",draft:!1,editUrl:"https://github.com/retech-fe/design-pattern/blob/main/docs/04-structural-pattern/07-bridge.md",tags:[],version:"current",lastUpdatedBy:"your name",lastUpdatedAt:1667952e3,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:7,frontMatter:{title:"\u6865\u63a5\u6a21\u5f0f",description:"\u4f7f\u7528\u7ec4\u5408\u5173\u7cfb\u4ee3\u66ff\u7ee7\u627f\u5173\u7cfb\uff0c\u964d\u4f4e\u62bd\u8c61\u548c\u5b9e\u73b0\u4e24\u4e2a\u53ef\u53d8\u7ef4\u5ea6\u7684\u8026\u5408\u5ea6",last_update:{date:"11/09/2022",author:"your name"}},sidebar:"tutorialSidebar",previous:{title:"\u7ec4\u5408\u6a21\u5f0f",permalink:"/design-pattern/docs/structural-pattern/composite"},next:{title:"\u884c\u4e3a\u578b\u6a21\u5f0f",permalink:"/design-pattern/docs/category/\u884c\u4e3a\u578b\u6a21\u5f0f"}},s={},p=[{value:"1. \u4ecb\u7ecd",id:"1-\u4ecb\u7ecd",level:2},{value:"2. \u62bd\u8c61\u4e0e\u5b9e\u73b0\u5206\u79bb\u89e3\u8026",id:"2-\u62bd\u8c61\u4e0e\u5b9e\u73b0\u5206\u79bb\u89e3\u8026",level:2},{value:"3. \u5206\u79bb\u591a\u7ef4\u5ea6\u53d8\u5316",id:"3-\u5206\u79bb\u591a\u7ef4\u5ea6\u53d8\u5316",level:2},{value:"4. \u6865\u63a5\u6a21\u5f0f\u7684\u539f\u7406",id:"4-\u6865\u63a5\u6a21\u5f0f\u7684\u539f\u7406",level:2},{value:"5. \u5e94\u7528\u573a\u666f",id:"5-\u5e94\u7528\u573a\u666f",level:2},{value:"6. \u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",id:"6-\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",level:2},{value:"7. \u6865\u63a5\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9",id:"7-\u6865\u63a5\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9",level:2},{value:"8. \u6865\u63a5\u6a21\u5f0f\u7684\u9002\u7528\u573a\u666f",id:"8-\u6865\u63a5\u6a21\u5f0f\u7684\u9002\u7528\u573a\u666f",level:2},{value:"9. \u5176\u4ed6\u76f8\u5173\u6a21\u5f0f",id:"9-\u5176\u4ed6\u76f8\u5173\u6a21\u5f0f",level:2},{value:"\u6865\u63a5\u6a21\u5f0f\u548c\u7b56\u7565\u6a21\u5f0f",id:"\u6865\u63a5\u6a21\u5f0f\u548c\u7b56\u7565\u6a21\u5f0f",level:3},{value:"\u6865\u63a5\u6a21\u5f0f\u4e0e\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",id:"\u6865\u63a5\u6a21\u5f0f\u4e0e\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",level:3},{value:"\u6865\u63a5\u6a21\u5f0f\u4e0e\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f",id:"\u6865\u63a5\u6a21\u5f0f\u4e0e\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u4ecb\u7ecd"},"1. \u4ecb\u7ecd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6865\u63a5\u6a21\u5f0f\uff08Bridge Pattern\uff09\u53c8\u79f0\u6865\u6881\u6a21\u5f0f\uff0c\u5c06\u62bd\u8c61\u90e8\u5206\u4e0e\u5b83\u7684\u5b9e\u73b0\u90e8\u5206\u5206\u79bb\uff0c\u4f7f\u5b83\u4eec\u90fd\u53ef\u4ee5\u72ec\u7acb\u5730\u53d8\u5316\u3002\u4f7f\u7528\u7ec4\u5408\u5173\u7cfb\u4ee3\u66ff\u7ee7\u627f\u5173\u7cfb\uff0c\u964d\u4f4e\u62bd\u8c61\u548c\u5b9e\u73b0\u4e24\u4e2a\u53ef\u53d8\u7ef4\u5ea6\u7684\u8026\u5408\u5ea6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u90e8\u5206\u548c\u5b9e\u73b0\u90e8\u5206\u53ef\u80fd\u4e0d\u592a\u597d\u7406\u89e3\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u9999\u8549\u3001\u82f9\u679c\u3001\u897f\u74dc\uff0c\u5b83\u4eec\u5171\u540c\u7684\u62bd\u8c61\u90e8\u5206\u5c31\u662f\u6c34\u679c\uff0c\u53ef\u4ee5\u5403\uff0c\u5b9e\u73b0\u90e8\u5206\u5c31\u662f\u4e0d\u540c\u7684\u6c34\u679c\u5b9e\u4f53\u3002\u518d\u6bd4\u5982\u9ed1\u8272\u624b\u63d0\u5305\u3001\u7ea2\u8272\u94b1\u5305\u3001\u84dd\u8272\u516c\u6587\u5305\uff0c\u5b83\u4eec\u5171\u540c\u7684\u62bd\u8c61\u90e8\u5206\u662f\u5305\u548c\u989c\u8272\uff0c\u8fd9\u90e8\u5206\u7684\u5171\u6027\u5c31\u53ef\u4ee5\u88ab\u4f5c\u4e3a\u62bd\u8c61\u63d0\u53d6\u51fa\u6765\u3002")),(0,l.kt)("h2",{id:"2-\u62bd\u8c61\u4e0e\u5b9e\u73b0\u5206\u79bb\u89e3\u8026"},"2. \u62bd\u8c61\u4e0e\u5b9e\u73b0\u5206\u79bb\u89e3\u8026"),(0,l.kt)("p",null,"\u628a\u4e00\u4e9b\u5e38\u7528\u7684\u64cd\u4f5c\u62bd\u8c61\u63d0\u53d6\u51fa\u6765\u5f53\u6210\u4e00\u4e2a\u5de5\u5177\u51fd\u6570\uff0c\u518d\u901a\u8fc7\u4f20\u53c2\u7684\u533a\u522b\u53d1\u6325\u4e0d\u540c\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u5c01\u88c5axios\u8bf7\u6c42\u65b9\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// tool.js\nexport let sendRequest {\n    get(url,params) {\n        // \u5bf9get\u8bf7\u6c42\u7684\u53c2\u6570\u505a\u5904\u7406\n        return promise = axios({\n            method:\xa0'get',\n            url,\n            params:params\n         }).then(() => {\n            // \u5bf9get\u8bf7\u6c42\u7684\u8fd4\u56de\u505a\u5904\u7406\n        })\n    },\n    post(url,params) {\n        // \u5bf9post\u8bf7\u6c42\u7684\u53c2\u6570\u505a\u5904\u7406\n        return promise = axios({\n            method:\xa0'post',\n            url,\n            data:params\n         }).then(() => {\n            // \u5bf9post\u8bf7\u6c42\u7684\u8fd4\u56de\u505a\u5904\u7406\n        })\n    },\n    put() {},\n    delete() {},\n    option() {},   // \u4ee5\u540e\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684\u8bf7\u6c42\u65b9\u6cd5\u505a\u6269\u5c55\n}\n\n\n//api.js\nexport let api = {\n    api1: '/test/api1',\n    api2: '/test/api2',\n    // \u4ee5\u540e\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684api\u505a\u6269\u5c55\n}\n\n\n// \u5177\u4f53\u4e1a\u52a1\u7684\u9875\u9762\nthis.sendRequest.get(api1,{a:1}).then(() => { //\u5177\u4f53\u7684\u4e1a\u52a1})\nthis.sendRequest.post(api2,{b:2}).then(() => { //\u5177\u4f53\u7684\u4e1a\u52a1})\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\u505a\u5f97\u6bd4\u8f83\u597d\u7684\u5730\u65b9\u662f\u628a\u8bf7\u6c42\u7684\u65b9\u6cd5\u62bd\u8c61\u5e76\u4e14\u5c01\u88c5\u4e86\u8d77\u6765\uff0c\u628a\u8bf7\u6c42\u65b9\u6cd5\u548c\u8def\u5f84\u5355\u72ec\u5206\u4e86\u51fa\u6765\u4f5c\u4e3a\u53c2\u6570\uff0c\u65b9\u4fbf\u65e5\u540e\u7684\u6269\u5c55\uff1b\u4f46\u662f\u8fd9\u4e2a\u4f8b\u5b50\u8fd8\u4e0d\u591f\u7684\u5730\u65b9\u662f\u8bf7\u6c42\u65b9\u6cd5\u548c\u8bf7\u6c42\u8def\u5f84\u8fd9\u4e24\u4e2a\u7ef4\u5ea6\u7684\u5bf9\u7167\u5173\u7cfb\u5f80\u5f80\u662f\u552f\u4e00\u7684\uff0c\u5c31\u662f\u8bf4\u901a\u5e38\u5bf9api1\u5c31\u662fget\uff0c\u5bf9api2\u5c31\u662fpost\uff0c\uff08api1-post,api2-get\u7684\u5173\u7cfb\u5e76\u4e0d\u9700\u8981\uff09\u6ca1\u6709\u4f53\u73b0\u51fa\u6865\u63a5\u6a21\u5f0f\u7684\u7b2c\u4e8c\u4e2a\u7279\u70b9\u3002"),(0,l.kt)("h2",{id:"3-\u5206\u79bb\u591a\u7ef4\u5ea6\u53d8\u5316"},"3. \u5206\u79bb\u591a\u7ef4\u5ea6\u53d8\u5316"),(0,l.kt)("p",null,"\u6bd4\u5982\u5305\u5305\uff0c\u5305\u7684\u79cd\u7c7b\u662f\u4e00\u4e2a\u7ef4\u5ea6\uff08\u94b1\u5305\u3001\u4e66\u5305\u3001\u624b\u63d0\u5305\uff09\uff0c\u5305\u7684\u5c3a\u5bf8\u662f\u4e00\u4e2a\u7ef4\u5ea6\uff08\u5c0f\u53f7\u3001\u4e2d\u53f7\u3001\u5927\u53f7\uff09\uff0c\u5305\u7684\u989c\u8272\u53c8\u662f\u4e00\u4e2a\u7ef4\u5ea6\u3002\u6bcf\u4e2a\u7ef4\u5ea6\u53ef\u4ee5\u81ea\u7531\u53d8\u5316\u540e\u7ec4\u5408\u5728\u4e00\u8d77\u5f62\u6210\u4e00\u4e2a\u5305\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u5728\u7cfb\u7edf\u8bbe\u8ba1\u65f6\uff0c\u5982\u679c\u7ed9\u6bcf\u4e2a\u79cd\u7c7b\u5bf9\u5e94\u7684\u6bcf\u4e2a\u5c3a\u5bf8\u548c\u989c\u8272\u90fd\u8bbe\u7f6e\u4e00\u4e2a\u7c7b\uff0c\u90a3\u4e48\u7cfb\u7edf\u4e2d\u7684\u7c7b\u5c31\u4f1a\u5f88\u591a\u3002\u5982\u679c\u6839\u636e\u5b9e\u9645\u9700\u8981\u5bf9\u79cd\u7c7b\u3001\u5c3a\u5bf8\u3001\u989c\u8272\u8fd9\u4e9b\u7ef4\u5ea6\u8fdb\u884c\u7ec4\u5408\uff0c\u90a3\u4e48\u5c06\u5927\u5927\u51cf\u5c11\u7cfb\u7edf\u4e2d\u7c7b\u7684\u4e2a\u6570\u3002"),(0,l.kt)("p",null,"\u5c06\u62bd\u8c61\u548c\u5b9e\u73b0\u5206\u79bb\uff0c\u4e92\u76f8\u72ec\u7acb\u4e92\u4e0d\u5f71\u54cd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u88c5\u9970\u4e0d\u5f71\u54cd\u539f\u6709\u7684\u529f\u80fd\uff0c\u539f\u6709\u529f\u80fd\u53ef\u4ee5\u7167\u5e38\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u6709\u591a\u4e2a\u7ef4\u5ea6\uff0c\u6bcf\u4e2a\u7ef4\u5ea6\u90fd\u53ef\u4ee5\u72ec\u7acb\u53d8\u5316\uff08\u5b9e\u4f8b\u5316\u8fc7\u7a0b\uff09\uff0c\u5305\u5305\u8fd9\u4e2a\u4f8b\u5b50\u7684\u7ef4\u5ea6\u5c31\u662f\u79cd\u7c7b\u3001\u5c3a\u5bf8\u3001\u989c\u8272\uff0c\u8fd9\u51e0\u4e2a\u7ef4\u5ea6\u53ef\u4ee5\u72ec\u7acb\u5730\u8fdb\u884c\u53d8\u5316\uff0c\u4ece\u800c\u7ec4\u88c5\u6210\u4e0d\u540c\u7684\u5305\u5305\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/* \u5305\u5305 */\nclass Bag {\n  constructor(type, size, color) {\n    this.type = type;\n    this.size = size;\n    this.color = color;\n  }\n\n  /* \u5c55\u793a */\n  show() {\n    console.log(\n      this.color.show() + this.size.show() + this.type.show()\n    )\n  }\n}\n\n/* \u76ae\u5305\u7c7b\u578b */\nclass BagType {\n  constructor(type) {\n    this.type = type;\n  }\n\n  show() {\n    return this.type;\n  }\n}\n\n/* \u76ae\u5305\u5c3a\u5bf8 */\nclass BagSize {\n  constructor(size) {\n    this.size = size;\n  }\n\n  show() {\n    return this.size;\n  }\n}\n\n/* \u76ae\u5305\u989c\u8272 */\nclass BagColor {\n  constructor(color) {\n    this.color = color;\n  }\n\n  show() {\n    return this.color;\n  }\n}\n\n\n/* \u62bd\u8c61\u5b9e\u4f8b\u5316 */\nconst walletType = new BagType('\u94b1\u5305');\nconst briefcaseType = new BagType('\u624b\u63d0\u5305');\nconst smallSize = new BagSize('\u5c0f\u53f7');\nconst mediumSize = new BagSize('\u4e2d\u53f7');\nconst redColor = new BagColor('\u7ea2\u8272');\nconst yellowColor = new BagColor('\u9ec4\u8272');\n\n\nconst bagA = new Bag(walletType, smallSize, redColor);\nbagA.show()\n// \u8f93\u51fa\uff1a\u7ea2\u8272\u5c0f\u53f7\u94b1\u5305\n\nconst bagB = new Bag(briefcaseType, mediumSize, yellowColor);\nbagB.show()\n// \u8f93\u51fa\uff1a\u9ec4\u8272\u4e2d\u53f7\u624b\u63d0\u5305\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u7531\u4e8e\u5305\u5305\u7684\u7ed3\u6784\u88ab\u5206\u522b\u62bd\u8c61\u4e3a\u51e0\u4e2a\u90e8\u4ef6\u7684\u7ec4\u5408\uff0c\u90e8\u4ef6\u7684\u5b9e\u4f8b\u5316\u662f\u5728\u90e8\u4ef6\u7c7b\u5404\u81ea\u7684\u6784\u9020\u51fd\u6570\u4e2d\u5b8c\u6210\uff0c\u56e0\u6b64\u90e8\u4ef6\u4e4b\u95f4\u7684\u5b9e\u4f8b\u5316\u4e0d\u4f1a\u76f8\u4e92\u5f71\u54cd"),(0,l.kt)("p",null,"\u4f7f\u7528\u4e86\u6865\u63a5\u6a21\u5f0f\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4efb\u610f\u7ec4\u5408\u5305\u5305\u7c7b\u578b\u3001\u5305\u5305\u5927\u5c0f\u3001\u5305\u5305\u989c\u8272\uff0c\u4e3a\u540e\u7eed\u4ee3\u7801\u63d0\u4f9b\u4e86\u5f88\u597d\u7684\u62d3\u5c55\u6027\uff1b\u56e0\u6b64\u65b0\u4ea7\u54c1\u7684\u521b\u5efa\u4e5f\u53d8\u5f97\u5bb9\u6613\uff0c\u8fd9\u5c31\u662f\u6865\u63a5\u6a21\u5f0f\u7684\u597d\u5904\u3002"),(0,l.kt)("h2",{id:"4-\u6865\u63a5\u6a21\u5f0f\u7684\u539f\u7406"},"4. \u6865\u63a5\u6a21\u5f0f\u7684\u539f\u7406"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u63d0\u70bc\u4e00\u4e0b\u6865\u63a5\u6a21\u5f0f\uff0c\u5305\u5305\u662f\u4ea7\u54c1\uff08Product\uff09\uff0c\u79cd\u7c7b\u3001\u5c3a\u5bf8\u3001\u989c\u8272\u5c5e\u4e8e\u62bd\u8c61\u51fa\u6765\u7684\u90e8\u4ef6\u79cd\u7c7b\uff08Components\uff09\uff0c\u4e5f\u5c5e\u4e8e\u72ec\u7acb\u7684\u7ef4\u5ea6\uff0c\u800c\u5177\u4f53\u7684\u90e8\u4ef6\u94b1\u5305\u3001\u5c0f\u53f7\u3001\u7ea2\u8272\u7b49\u5c5e\u4e8e\u90e8\u4ef6\u5b9e\u4f8b\uff08Instances\uff09\uff0c\u8fd9\u4e9b\u5b9e\u4f8b\u53ef\u4ee5\u6cbf\u7740\u5404\u81ea\u7ef4\u5ea6\u53d8\u5316\uff0c\u5171\u540c\u7ec4\u6210\u5bf9\u5e94\u4ea7\u54c1\u3002\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u4e2a\u6982\u5ff5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Product\uff1a\u4ea7\u54c1\uff0c\u7531\u591a\u4e2a\u72ec\u7acb\u90e8\u4ef6\u7ec4\u6210\u7684\u4ea7\u54c1"),(0,l.kt)("li",{parentName:"ul"},"Component\uff1a\u90e8\u4ef6\uff0c\u7ec4\u6210\u4ea7\u54c1\u7684\u90e8\u4ef6\u7c7b"),(0,l.kt)("li",{parentName:"ul"},"Instance\uff1a\u90e8\u4ef6\u7c7b\u7684\u5b9e\u4f8b")),(0,l.kt)("p",null,"\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/retech-fe/image-hosting/main/img/2022/12/06/23-11-11-e79a738666bda1ad1a5461027a5a0c43-20221206231110-6f2599.png",alt:null})),(0,l.kt)("h2",{id:"5-\u5e94\u7528\u573a\u666f"},"5. \u5e94\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u5728\u67d0\u4e00\u4e2a\u5f00\u53d1\u573a\u666f\uff0c\u4ea7\u54c1\u7ecf\u7406\u63d0\u51fa\u9700\u6c42\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u6309\u94ae\u7684\u524d\u666f\u8272\u9ed8\u8ba4\u4e3a\u9ed1\u8272\u3001\u80cc\u666f\u8272\u4e3a\u6d45\u7070\u8272\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u5149\u6807 ",(0,l.kt)("inlineCode",{parentName:"li"},"mouseover")," \u7684\u65f6\u5019\u6539\u53d8\u524d\u666f\u8272\u4e3a\u84dd\u8272\u3001\u80cc\u666f\u8272\u4e3a\u7eff\u8272\u3001\u5c3a\u5bf8\u53d8\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"1.5")," \u500d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u5149\u6807 ",(0,l.kt)("inlineCode",{parentName:"li"},"mouseleave")," \u7684\u65f6\u5019\u8fd8\u539f\u524d\u666f\u8272\u3001\u80cc\u666f\u8272\u3001\u5c3a\u5bf8\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u9f20\u6807\u6309\u4e0b\u7684\u65f6\u5019\u524d\u666f\u8272\u53d8\u4e3a\u7ea2\u8272\u3001\u80cc\u666f\u8272\u53d8\u4e3a\u7d2b\u8272\u3001\u5c3a\u5bf8\u53d8\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"0.5")," \u500d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u62ac\u8d77\u540e\u6062\u590d\u539f\u72b6\u3002")),(0,l.kt)("p",null,"\u6211\u4eec\u8981\u5982\u4f55\u53bb\u5b9e\u73b0\u5462\uff1f\u6309\u7167\u901a\u5e38\u7684\u601d\u7ef4\u65b9\u5f0f\u5f00\u59cb\u7801\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var btn = document.getElementById('btn')\n\n// \u8bbe\u7f6e\u76d1\u542c\u4e8b\u4ef6\nbtn.addEventListener('mouseover', function() {\n  btn.style.setProperty('color', 'blue');\n  btn.style.setProperty('background-color', 'green');\n  btn.style.setProperty('transform', 'scale(1.5)');\n})\n\nbtn.addEventListener('mouseleave', function() {\n  btn.style.setProperty('color', 'black');\n  btn.style.setProperty('background-color', 'lightgray');\n  btn.style.setProperty('transform', 'scale(1)');\n})\n\nbtn.addEventListener('mousedown', function() {\n  btn.style.setProperty('color', 'red');\n  btn.style.setProperty('background-color', 'purple');\n  btn.style.setProperty('transform', 'scale(.5)');\n})\n\nbtn.addEventListener('mouseup', function() {\n  btn.style.setProperty('color', 'black');\n  btn.style.setProperty('background-color', 'lightgray');\n  btn.style.setProperty('transform', 'scale(1)');\n})\n")),(0,l.kt)("p",null,"\u7ecf\u7406\uff01\u6211\u641e\u5b9a\u4e86\uff01"),(0,l.kt)("p",null,"\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6865\u63a5\u6a21\u5f0f\u6765\u6539\u9020\u4e00\u4e0b\uff1a\u628a DOM \u5bf9\u8c61\u7684\u524d\u666f\u8272\u3001\u80cc\u666f\u8272\u4f5c\u4e3a\u5176\u5916\u89c2\u90e8\u4ef6\uff0c\u5c3a\u5bf8\u5c5e\u6027\u662f\u53e6\u4e00\u4e2a\u5c3a\u5bf8\u90e8\u4ef6\uff0c\u8fd9\u6837\u7684\u8bdd\u5bf9\u5404\u81ea\u90e8\u4ef6\u7684\u64cd\u4f5c\u53ef\u4ee5\u4f5c\u4e3a\u62bd\u8c61\u88ab\u63d0\u53d6\u51fa\u6765\uff0c\u4f7f\u5f97\u5bf9\u5404\u81ea\u90e8\u4ef6\u53ef\u4ee5\u72ec\u7acb\u4e14\u65b9\u4fbf\u5730\u64cd\u4f5c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var btn = document.getElementById('btn');\n\n/* \u8bbe\u7f6e\u524d\u666f\u8272\u548c\u80cc\u666f\u8272 */\nfunction setColor(element, color='black', bgc='lightgray') {\n  element.style.setProperty('color', color);\n  element.style.setProperty('background-color', bgc);\n}\n\n/* \u8bbe\u7f6e\u5c3a\u5bf8 */\nfunction setSize(element, size='1') {\n  element.style.setProperty('transform', `scale(${ size })`);\n}\n\n// \u8bbe\u7f6e\u76d1\u542c\u4e8b\u4ef6\nbtn.addEventListener('mouseover', function() {\n  setColor(btn, 'blue', 'green');\n  setSize(btn, '1.5');\n})\n\nbtn.addEventListener('mouseleave', function() {\n  setColor(btn);\n  setSize(btn);\n})\n\nbtn.addEventListener('mousedown', function() {\n  setColor(btn, 'red', 'purple');\n  setSize(btn, '.5');\n})\n\nbtn.addEventListener('mouseup', function() {\n  setColor(btn);\n  setSize(btn);\n})\n")),(0,l.kt)("p",null,"\u662f\u4e0d\u662f\u770b\u8d77\u6765\u6e05\u6670\u591a\u4e86\uff0c\u8fd9\u91cc\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"setColor"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"setSize")," \u5c31\u662f\u6865\u63a5\u51fd\u6570\uff0c\u662f\u5c06 DOM \uff08\u4ea7\u54c1\uff09\u53ca\u5176\u5c5e\u6027\uff08\u90e8\u4ef6\uff09\u8fde\u63a5\u5728\u4e00\u8d77\u7684\u6865\u6881\uff0c\u7528\u6237\u53ea\u8981\u7ed9\u6865\u63a5\u51fd\u6570\u4f20\u9012\u53c2\u6570\u5373\u53ef\uff0c\u5341\u5206\u4fbf\u6377\u3002\u5176\u4ed6 DOM \u8981\u6709\u7c7b\u4f3c\u7684\u5bf9\u5916\u89c2\u90e8\u4ef6\u548c\u5c3a\u5bf8\u90e8\u4ef6\u7684\u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u65b9\u4fbf\u5730\u8fdb\u884c\u590d\u7528\u3002"),(0,l.kt)("h2",{id:"6-\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"},"6. \u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u548c\u5b9e\u73b0\u5206\u79bb\uff0c\u89e3\u8026"),(0,l.kt)("li",{parentName:"ul"},"\u7b26\u5408\u5f00\u653e\u5c01\u95ed\u539f\u5219")),(0,l.kt)("h2",{id:"7-\u6865\u63a5\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9"},"7. \u6865\u63a5\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9"),(0,l.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5206\u79bb\u4e86\u62bd\u8c61\u548c\u5b9e\u73b0\u90e8\u5206\uff0c\u5c06\u5b9e\u73b0\u5c42\uff08DOM \u5143\u7d20\u4e8b\u4ef6\u89e6\u53d1\u5e76\u6267\u884c\u5177\u4f53\u4fee\u6539\u903b\u8f91\uff09\u548c\u62bd\u8c61\u5c42\uff08 \u5143\u7d20\u5916\u89c2\u3001\u5c3a\u5bf8\u90e8\u5206\u7684\u4fee\u6539\u51fd\u6570\uff09\u89e3\u8026\uff0c",(0,l.kt)("strong",{parentName:"li"},"\u6709\u5229\u4e8e\u5206\u5c42"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u4e86",(0,l.kt)("strong",{parentName:"li"},"\u53ef\u6269\u5c55\u6027"),"\uff0c\u591a\u4e2a\u7ef4\u5ea6\u7684\u90e8\u4ef6\u81ea\u7531\u7ec4\u5408\uff0c\u907f\u514d\u4e86\u7c7b\u7ee7\u627f\u5e26\u6765\u7684\u5f3a\u8026\u5408\u5173\u7cfb\uff0c\u4e5f\u51cf\u5c11\u4e86\u90e8\u4ef6\u7c7b\u7684\u6570\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8005",(0,l.kt)("strong",{parentName:"li"},"\u4e0d\u7528\u5173\u5fc3\u7ec6\u8282\u7684\u5b9e\u73b0"),"\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5feb\u6377\u5730\u8fdb\u884c\u4f7f\u7528\u3002")),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6865\u63a5\u6a21\u5f0f\u8981\u6c42\u4e24\u4e2a\u90e8\u4ef6\u6ca1\u6709\u8026\u5408\u5173\u7cfb\uff0c\u5426\u5219\u65e0\u6cd5\u72ec\u7acb\u5730\u53d8\u5316\uff0c\u56e0\u6b64\u8981\u6c42\u6b63\u786e\u7684\u5bf9\u7cfb\u7edf\u53d8\u5316\u7684\u7ef4\u5ea6\u8fdb\u884c\u8bc6\u522b\uff0c\u4f7f\u7528\u8303\u56f4\u5b58\u5728\u5c40\u9650\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6865\u63a5\u6a21\u5f0f\u7684\u5f15\u5165\u589e\u52a0\u4e86\u7cfb\u7edf\u590d\u6742\u5ea6\u3002")),(0,l.kt)("h2",{id:"8-\u6865\u63a5\u6a21\u5f0f\u7684\u9002\u7528\u573a\u666f"},"8. \u6865\u63a5\u6a21\u5f0f\u7684\u9002\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4ea7\u54c1\u7684\u90e8\u4ef6\u6709\u72ec\u7acb\u7684\u53d8\u5316\u7ef4\u5ea6\uff0c\u53ef\u4ee5\u8003\u8651\u6865\u63a5\u6a21\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5e0c\u671b\u4f7f\u7528\u7ee7\u627f\uff0c\u6216\u56e0\u4e3a\u591a\u5c42\u6b21\u7ee7\u627f\u5bfc\u81f4\u7cfb\u7edf\u7c7b\u7684\u4e2a\u6570\u6025\u5267\u589e\u52a0\u7684\u7cfb\u7edf\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u90e8\u4ef6\u7684\u7c92\u5ea6\u8d8a\u7ec6\uff0c\u90e8\u4ef6\u590d\u7528\u7684\u5fc5\u8981\u6027\u8d8a\u5927\uff0c\u53ef\u4ee5\u8003\u8651\u6865\u63a5\u6a21\u5f0f\u3002")),(0,l.kt)("h2",{id:"9-\u5176\u4ed6\u76f8\u5173\u6a21\u5f0f"},"9. \u5176\u4ed6\u76f8\u5173\u6a21\u5f0f"),(0,l.kt)("h3",{id:"\u6865\u63a5\u6a21\u5f0f\u548c\u7b56\u7565\u6a21\u5f0f"},"\u6865\u63a5\u6a21\u5f0f\u548c\u7b56\u7565\u6a21\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6865\u63a5\u6a21\u5f0f"),"\uff1a\u590d\u7528\u90e8\u4ef6\u7c7b\uff0c\u4e0d\u540c\u90e8\u4ef6\u7684\u5b9e\u4f8b\u76f8\u4e92\u4e4b\u95f4\u65e0\u6cd5\u66ff\u6362\uff0c\u4f46\u662f\u76f8\u540c\u90e8\u4ef6\u7684\u5b9e\u4f8b\u4e00\u822c\u53ef\u4ee5\u66ff\u6362\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7b56\u7565\u6a21\u5f0f"),"\uff1a\u590d\u7528\u7b56\u7565\u7c7b\uff0c\u4e0d\u540c\u7b56\u7565\u4e4b\u95f4\u5730\u4f4d\u5e73\u7b49\uff0c\u53ef\u4ee5\u76f8\u4e92\u66ff\u6362\u3002")),(0,l.kt)("h3",{id:"\u6865\u63a5\u6a21\u5f0f\u4e0e\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f"},"\u6865\u63a5\u6a21\u5f0f\u4e0e\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6865\u63a5\u6a21\u5f0f"),"\uff1a\u5c06\u7ec4\u6210\u4ea7\u54c1\u7684\u90e8\u4ef6\u5b9e\u4f8b\u7684\u521b\u5efa\uff0c\u5ef6\u8fdf\u5230\u5b9e\u4f8b\u7684\u5177\u4f53\u521b\u5efa\u8fc7\u7a0b\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6a21\u7248\u65b9\u6cd5\u6a21\u5f0f"),"\uff1a\u5c06\u521b\u5efa\u4ea7\u54c1\u7684\u67d0\u4e00\u6b65\u9aa4\uff0c\u5ef6\u8fdf\u5230\u5b50\u7c7b\u4e2d\u5b9e\u73b0\u3002")),(0,l.kt)("h3",{id:"\u6865\u63a5\u6a21\u5f0f\u4e0e\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f"},"\u6865\u63a5\u6a21\u5f0f\u4e0e\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f"),(0,l.kt)("p",null,"\u8fd9\u4e24\u4e2a\u6a21\u5f0f\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\uff0c\u6bd4\u5982\u90e8\u4ef6\u7c7b\u5b9e\u4f8b\u7684\u521b\u5efa\u53ef\u4ee5\u7ed3\u5408\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\uff0c\u56e0\u4e3a\u90e8\u4ef6\u7c7b\u5b9e\u4f8b\u4e5f\u5c5e\u4e8e\u4e00\u4e2a\u4ea7\u54c1\u7c7b\u7c07\uff0c\u660e\u663e\u5c5e\u4e8e\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\u7684\u9002\u7528\u8303\u56f4\uff0c\u5982\u679c\u521b\u5efa\u7684\u90e8\u4ef6\u7c7b\u4e0d\u591a\uff0c\u6216\u8005\u6bd4\u8f83\u7b80\u5355\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7b80\u5355\u5de5\u5382\u6a21\u5f0f\u3002"))}c.isMDXComponent=!0}}]);