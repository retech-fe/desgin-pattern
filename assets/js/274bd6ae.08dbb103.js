"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[990],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),d=c(t),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(k,l(l({ref:e},u),{},{components:t})):r.createElement(k,l({ref:e},u))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i.mdxType="string"==typeof n?n:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9845:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={title:"\u5355\u4f8b\u6a21\u5f0f",description:"\u4fdd\u8bc1\u4e00\u4e2a\u7c7b\u53ea\u6709\u4e00\u4e2a\u5b9e\u4f8b",last_update:{date:"11/10/2022",author:"hongxiang.gao"}},l="\u5355\u4f8b\u6a21\u5f0f",i={unversionedId:"creational-pattern/singleton",id:"creational-pattern/singleton",title:"\u5355\u4f8b\u6a21\u5f0f",description:"\u4fdd\u8bc1\u4e00\u4e2a\u7c7b\u53ea\u6709\u4e00\u4e2a\u5b9e\u4f8b",source:"@site/docs/03-creational-pattern/04-singleton.md",sourceDirName:"03-creational-pattern",slug:"/creational-pattern/singleton",permalink:"/design-pattern/docs/creational-pattern/singleton",draft:!1,editUrl:"https://github.com/retech-fe/design-pattern/blob/main/docs/03-creational-pattern/04-singleton.md",tags:[],version:"current",lastUpdatedBy:"hongxiang.gao",lastUpdatedAt:1668038400,formattedLastUpdatedAt:"Nov 10, 2022",sidebarPosition:4,frontMatter:{title:"\u5355\u4f8b\u6a21\u5f0f",description:"\u4fdd\u8bc1\u4e00\u4e2a\u7c7b\u53ea\u6709\u4e00\u4e2a\u5b9e\u4f8b",last_update:{date:"11/10/2022",author:"hongxiang.gao"}},sidebar:"tutorialSidebar",previous:{title:"\u5efa\u9020\u8005\u6a21\u5f0f",permalink:"/design-pattern/docs/creational-pattern/builder"},next:{title:"\u539f\u578b\u6a21\u5f0f(\u524d\u7aef\u4e0d\u5e38\u7528)",permalink:"/design-pattern/docs/creational-pattern/prototype"}},s={},c=[{value:"<strong>1. \u4f60\u66fe\u7ecf\u9047\u89c1\u8fc7\u7684\u5355\u4f8b\u6a21\u5f0f</strong>",id:"1-\u4f60\u66fe\u7ecf\u9047\u89c1\u8fc7\u7684\u5355\u4f8b\u6a21\u5f0f",level:2},{value:"<strong>2. \u5b9e\u4f8b\u7684\u4ee3\u7801\u5b9e\u73b0</strong>",id:"2-\u5b9e\u4f8b\u7684\u4ee3\u7801\u5b9e\u73b0",level:2},{value:"<strong>2.1 \u4ee3\u7801\u5b9e\u73b0</strong>",id:"21-\u4ee3\u7801\u5b9e\u73b0",level:3},{value:"<strong>2.2 \u521d\u6b65\u4f18\u5316\u2014\u2014\u900f\u660e\u5355\u4f8b</strong>",id:"22-\u521d\u6b65\u4f18\u5316\u900f\u660e\u5355\u4f8b",level:3},{value:"<strong>2.3 \u5355\u4f8b\u4e0e\u6784\u5efa\u8fc7\u7a0b\u7684\u5206\u79bb</strong>",id:"23-\u5355\u4f8b\u4e0e\u6784\u5efa\u8fc7\u7a0b\u7684\u5206\u79bb",level:3},{value:"<strong>2.4 \u5c01\u88c5\u53d8\u5316</strong>",id:"24-\u5c01\u88c5\u53d8\u5316",level:3},{value:"<strong>2.5 \u60f0\u6027\u5355\u4f8b\u3001\u61d2\u6c49\u5f0f-\u997f\u6c49\u5f0f</strong>",id:"25-\u60f0\u6027\u5355\u4f8b\u61d2\u6c49\u5f0f-\u997f\u6c49\u5f0f",level:3},{value:"<strong>3. \u5355\u4f8b\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9</strong>",id:"3-\u5355\u4f8b\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9",level:2},{value:"<strong>4.\u5355\u4f8b\u6a21\u5f0f\u7684\u4f7f\u7528\u573a\u666f</strong>",id:"4\u5355\u4f8b\u6a21\u5f0f\u7684\u4f7f\u7528\u573a\u666f",level:2},{value:"<strong>4.1 commonjs\u6a21\u5757\u52a0\u8f7d\u673a\u5236</strong>",id:"41-commonjs\u6a21\u5757\u52a0\u8f7d\u673a\u5236",level:3},{value:"<strong>4.2 jQuery</strong>",id:"42-jquery",level:3},{value:"<strong>4.3 \u6a21\u6001\u7a97\u53e3</strong>",id:"43-\u6a21\u6001\u7a97\u53e3",level:3},{value:"<strong>4.3 store\u72b6\u6001\u7ba1\u7406</strong>",id:"43-store\u72b6\u6001\u7ba1\u7406",level:3},{value:"<strong>4.3 \u7f13\u5b58</strong>",id:"43-\u7f13\u5b58",level:3}],u={toc:c};function p(n){let{components:e,...o}=n;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5355\u4f8b\u6a21\u5f0f"},"\u5355\u4f8b\u6a21\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u4f8b\u6a21\u5f0f\u53ef\u80fd\u662f\u8bbe\u8ba1\u6a21\u5f0f\u91cc\u9762\u6700\u7b80\u5355\u7684\u6a21\u5f0f\u4e86\uff0c\u867d\u7136\u7b80\u5355\uff0c\u4f46\u5728\u6211\u4eec\u65e5\u5e38\u751f\u6d3b\u548c\u7f16\u7a0b\u4e2d\u5374\u7ecf\u5e38\u63a5\u89e6\u5230\uff0c\u672c\u8282\u6211\u4eec\u4e00\u8d77\u6765\u5b66\u4e60\u4e00\u4e0b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5355\u4f8b\u6a21\u5f0f \uff08Singleton Pattern\uff09\u53c8\u79f0\u4e3a\u5355\u4f53\u6a21\u5f0f\uff0c\u4fdd\u8bc1\u4e00\u4e2a\u7c7b\u53ea\u6709\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u8bbf\u95ee\u5b83\u7684\u5168\u5c40\u8bbf\u95ee\u70b9\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u7b2c\u4e8c\u6b21\u4f7f\u7528\u540c\u4e00\u4e2a\u7c7b\u521b\u5efa\u65b0\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u5e94\u8be5\u5f97\u5230\u4e0e\u7b2c\u4e00\u6b21\u521b\u5efa\u7684\u5bf9\u8c61\u5b8c\u5168\u76f8\u540c\u7684\u5bf9\u8c61\u3002")),(0,a.kt)("h2",{id:"1-\u4f60\u66fe\u7ecf\u9047\u89c1\u8fc7\u7684\u5355\u4f8b\u6a21\u5f0f"},(0,a.kt)("strong",{parentName:"h2"},"1. \u4f60\u66fe\u7ecf\u9047\u89c1\u8fc7\u7684\u5355\u4f8b\u6a21\u5f0f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u5728\u7535\u8111\u4e0a\u73a9\u7ecf\u8425\u7c7b\u7684\u6e38\u620f\uff0c\u7ecf\u8fc7\u4e00\u756a\u773c\u82b1\u7f2d\u4e71\u7684\u9a9a\u64cd\u4f5c\u597d\u4e0d\u5bb9\u6613\u8d70\u4e0a\u6b63\u8f68\uff0c\u591c\u6df1\u4e86\u6211\u4eec\u53bb\u4f11\u606f\uff0c\u7b2c\u4e8c\u5929\u6253\u5f00\u7535\u8111\uff0c\u53d1\u73b0\u8981\u4ece\u5934\u73a9\uff0c\u7acb\u9a6c\u5c31\u628a\u7535\u8111\u6254\u7a97\u5916\u4e86\uff0c\u6240\u4ee5\u4e00\u822c\u5e0c\u671b\u4ece\u524d\u4e00\u5929\u7684\u8fdb\u5ea6\u63a5\u7740\u6253\uff0c\u8fd9\u91cc\u5c31\u7528\u5230\u4e86\u5b58\u6863\u3002\u6bcf\u6b21\u73a9\u8fd9\u6e38\u620f\u7684\u65f6\u5019\uff0c\u6211\u4eec\u90fd\u5e0c\u671b\u62ff\u5230\u540c\u4e00\u4e2a\u5b58\u6863\u63a5\u7740\u73a9\uff0c\u8fd9\u5c31\u662f\u5c5e\u4e8e\u5355\u4f8b\u6a21\u5f0f\u7684\u4e00\u4e2a\u5b9e\u4f8b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7f16\u7a0b\u4e2d\u4e5f\u6709\u5f88\u591a\u5bf9\u8c61\u6211\u4eec\u53ea\u9700\u8981\u552f\u4e00\u4e00\u4e2a\uff0c\u6bd4\u5982\u6570\u636e\u5e93\u8fde\u63a5\u3001\u7ebf\u7a0b\u6c60\u3001\u914d\u7f6e\u6587\u4ef6\u7f13\u5b58\u3001\u6d4f\u89c8\u5668\u4e2d\u7684 window/document \u7b49\uff0c\u5982\u679c\u521b\u5efa\u591a\u4e2a\u5b9e\u4f8b\uff0c\u4f1a\u5e26\u6765\u8d44\u6e90\u8017\u8d39\u4e25\u91cd\uff0c\u6216\u8bbf\u95ee\u884c\u4e3a\u4e0d\u4e00\u81f4\u7b49\u60c5\u51b5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u6570\u636e\u5e93\u8fde\u63a5\u5b9e\u4f8b\uff0c\u6211\u4eec\u53ef\u80fd\u9891\u7e41\u4f7f\u7528\uff0c\u4f46\u662f\u521b\u5efa\u5b83\u6240\u9700\u8981\u7684\u5f00\u9500\u53c8\u6bd4\u8f83\u5927\uff0c\u8fd9\u65f6\u53ea\u4f7f\u7528\u4e00\u4e2a\u6570\u636e\u5e93\u8fde\u63a5\u5c31\u53ef\u4ee5\u8282\u7ea6\u5f88\u591a\u5f00\u9500\u3002\u4e00\u4e9b\u6587\u4ef6\u7684\u8bfb\u53d6\u573a\u666f\u4e5f\u7c7b\u4f3c\uff0c\u5982\u679c\u6587\u4ef6\u6bd4\u8f83\u5927\uff0c\u90a3\u4e48\u6587\u4ef6\u8bfb\u53d6\u5c31\u662f\u4e00\u4e2a\u6bd4\u8f83\u91cd\u7684\u64cd\u4f5c\u3002\u6bd4\u5982\u8fd9\u4e2a\u6587\u4ef6\u662f\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u90a3\u4e48\u5b8c\u5168\u53ef\u4ee5\u5c06\u8bfb\u53d6\u5230\u7684\u6587\u4ef6\u5185\u5bb9\u7f13\u5b58\u4e00\u4efd\uff0c\u6bcf\u6b21\u6765\u8bfb\u53d6\u7684\u65f6\u5019\u8bbf\u95ee\u7f13\u5b58\u5373\u53ef\uff0c\u8fd9\u6837\u4e5f\u53ef\u4ee5\u8fbe\u5230\u8282\u7ea6\u5f00\u9500\u7684\u76ee\u7684\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5728\u7c7b\u4f3c\u573a\u666f\u4e2d\uff0c\u8fd9\u4e9b\u4f8b\u5b50\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u8bbf\u95ee\u8005\u6765\u8bbf\u95ee\uff0c\u8fd4\u56de\u7684\u90fd\u662f\u540c\u4e00\u4e2a\u5b9e\u4f8b\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u5f00\u59cb\u5b9e\u4f8b\u6ca1\u6709\u521b\u5efa\uff0c\u90a3\u4e48\u8fd9\u4e2a\u7279\u5b9a\u7c7b\u9700\u8981\u81ea\u884c\u521b\u5efa\u8fd9\u4e2a\u5b9e\u4f8b\uff1b")),(0,a.kt)("h2",{id:"2-\u5b9e\u4f8b\u7684\u4ee3\u7801\u5b9e\u73b0"},(0,a.kt)("strong",{parentName:"h2"},"2. \u5b9e\u4f8b\u7684\u4ee3\u7801\u5b9e\u73b0")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7c7b\u56fe")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221109181007228",src:t(2166).Z,width:"307",height:"201"})),(0,a.kt)("h3",{id:"21-\u4ee3\u7801\u5b9e\u73b0"},(0,a.kt)("strong",{parentName:"h3"},"2.1 \u4ee3\u7801\u5b9e\u73b0")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 JavaScript \u6765\u5c06\u6d4f\u89c8\u5668\u7684 Window \u5355\u4f8b\u5b9e\u73b0\u4e00\u4e0b\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9996\u5148\u662f ES6 \u65b9\u5f0f\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Window {\n  // \u5b58\u50a8\u5355\u4f8b\n  // private\u4fee\u9970\u7b26\u4fdd\u8bc1\u5728\u7c7b\u5916\u9762\u4e0d\u80fd\u8bbf\u95ee\n  private static instance: Window\n\n  // \u9759\u6001\u65b9\u6cd5\u4fdd\u8bc1\u901a\u8fc7\u7c7b\u540d\u80fd\u76f4\u63a5\u8bbf\u95ee\u5230\u8be5\u65b9\u6cd5\uff0c\u4e0d\u7528new\n  public static getInstance() {\n    // \u5224\u65ad\u662f\u5426\u5df2\u7ecf\u6709\u5355\u4f8b\u4e86\n    if (!Window.instance) {\n      Window.instance = new Window()\n    }\n    //\u8fd4\u56de\u5b9e\u4f8b\n    return Window.instance\n  }\n}\n//\u628aWindow\u505a\u6210\u5355\u4f8b\nlet w1 = Window.getInstance()\nlet w2 = Window.getInstance()\nconsole.log(w1 === w2) //true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ES5 \u65b9\u5f0f\u540c\u7406")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function Window() {}\nWindow.prototype.hello = function () {\n  console.log("hello")\n}\n\n// \u7acb\u5373\u6267\u884c\u51fd\u6570\uff1b\u5c5e\u6027\u65b9\u6cd5\uff0c\u4e0d\u662f\u539f\u578b\u65b9\u6cd5\uff0c\u4e0d\u7528new\nWindow.getInstance = (function () {\n  // \u4e0a\u5c42\u4f5c\u7528\u57df\u7f13\u5b58\u5355\u4f8b\u5b9e\u4f8b\n  let window: Window\n   // \u95ed\u5305\u8bbf\u95ee\u5916\u90e8\u4f5c\u7528\u57df\u4e2d\u7684\u5b9e\u4f8b\u53d8\u91cf\n  return function () {\n    // \u5224\u65ad\u662f\u5426\u5df2\u7ecf\u6709\u5355\u4f8b\u4e86\n    if (!window) {\n      window = new (Window as any)()\n    }\n    return window\n  }\n})()\n// \u7f3a\u70b9\uff1a\u5fc5\u987b\u8981\u544a\u8bc9\u4f7f\u7528\u8005\u901a\u8fc7getInstance\u65b9\u6cd5\u5f97\u5230\u5355\u4f8b\nlet w1 = Window.getInstance()\nlet w2 = Window.getInstance()\nconsole.log(w1 === w2) //true\n')),(0,a.kt)("h3",{id:"22-\u521d\u6b65\u4f18\u5316\u900f\u660e\u5355\u4f8b"},(0,a.kt)("strong",{parentName:"h3"},"2.2 \u521d\u6b65\u4f18\u5316\u2014\u2014\u900f\u660e\u5355\u4f8b")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u5b9e\u73b0\u6ca1\u6709\u95ee\u9898\uff0c\u4e5f\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\uff0c\u4f46\u662f\u8fd9\u79cd\u4f7f\u7528\u65b9\u5f0f\u6709\u7f3a\u70b9\uff0c\u5c31\u662f\u8bf4\u5fc5\u987b\u8981\u544a\u8bc9\u4f7f\u7528\u8005\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"getInstance"),"\u65b9\u6cd5\u5f97\u5230\u5355\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7279\u70b9")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u6216\u8005\u8bf4\u4f7f\u7528\u8005\u5e76\u4e0d\u9700\u8981\u77e5\u9053\u8981\u6309\u5355\u4f8b\u4f7f\u7528")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let Window = (function () {\n  let window\n  let WindowInstance = function () {\n    if (window) {\n      return window\n    } else {\n      //\u5982\u679c\u8bf4\u6784\u9020\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u7684\u8bdd,this\u5c31\u662f\u521b\u5efa\u7684\u5bf9\u8c61\n      return (window = this)\n    }\n  }\n  return WindowInstance\n})()\nlet w1 = new Window()\nlet w2 = new Window()\nconsole.log(w1 === w2) //ture\n")),(0,a.kt)("h3",{id:"23-\u5355\u4f8b\u4e0e\u6784\u5efa\u8fc7\u7a0b\u7684\u5206\u79bb"},(0,a.kt)("strong",{parentName:"h3"},"2.3 \u5355\u4f8b\u4e0e\u6784\u5efa\u8fc7\u7a0b\u7684\u5206\u79bb")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'interface Window {\n  hello: any\n}\nfunction Window() {}\nWindow.prototype.hello = function () {\n  console.log("hello")\n}\n//\u4e13\u95e8\u7528\u6765\u521b\u5efaWindow\u5355\u4f8b\nlet createInstance = (function () {\n  let instance: Window\n  return function () {\n    if (!instance) {\n      instance = new (Window as any)()\n    }\n    return instance\n  }\n})()\n\nlet window1 = createInstance()\nlet window2 = createInstance()\nwindow1.hello()\nconsole.log(window1 === window2)\n')),(0,a.kt)("h3",{id:"24-\u5c01\u88c5\u53d8\u5316"},(0,a.kt)("strong",{parentName:"h3"},"2.4 \u5c01\u88c5\u53d8\u5316")),(0,a.kt)("p",null,"\u4e0a\u8ff0",(0,a.kt)("inlineCode",{parentName:"p"},"2.3"),"\u7684\u4ee3\u7801\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"createInstance"),"\u53ea\u662f\u7528\u80fd\u521b\u5efa Window \u5b9e\u4f8b\uff0c\u6211\u4eec\u5e0c\u671b\u8fd9\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"createInstance"),"\u53ef\u4ee5\u521b\u5efa\u4efb\u4f55\u7c7b\u578b\u7684\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'interface Window {\n  hello: any\n}\nfunction Window() {}\nWindow.prototype.hello = function () {\n  console.log("hello")\n}\n//\u5e0c\u671b\u8fd9\u4e2acreateInstance\u53ef\u4ee5\u521b\u5efa\u4efb\u4f55\u7c7b\u578b\u7684\u5b9e\u4f8b\nlet createInstance = function (Constructor: any) {\n  let instance: any\n  return function AnyConstructor(this: any) {\n    if (!instance) {\n      //\u6b63\u5e38\u6765\u8bf4 this.__proto__=AnyConstructor.prototype\n      Constructor.apply(this, arguments)\n      //this.__proto__= Constructor.prototype\n      Object.setPrototypeOf(this, Constructor.prototype)\n      instance = this\n    }\n    return instance\n  }\n}\nlet createWindow = createInstance(Window)\nlet w1 = new (createWindow as any)()\nlet w2 = new (createWindow as any)()\nconsole.log(w1 === w2) //true\n')),(0,a.kt)("h3",{id:"25-\u60f0\u6027\u5355\u4f8b\u61d2\u6c49\u5f0f-\u997f\u6c49\u5f0f"},(0,a.kt)("strong",{parentName:"h3"},"2.5 \u60f0\u6027\u5355\u4f8b\u3001\u61d2\u6c49\u5f0f-\u997f\u6c49\u5f0f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6709\u65f6\u5019\u4e00\u4e2a\u5b9e\u4f8b\u5316\u8fc7\u7a0b\u6bd4\u8f83\u8017\u8d39\u6027\u80fd\u7684\u7c7b\uff0c\u4f46\u662f\u5374\u4e00\u76f4\u7528\u4e0d\u5230\uff0c\u5982\u679c\u4e00\u5f00\u59cb\u5c31\u5bf9\u8fd9\u4e2a\u7c7b\u8fdb\u884c\u5b9e\u4f8b\u5316\u5c31\u663e\u5f97\u6709\u4e9b\u6d6a\u8d39\uff0c\u90a3\u4e48\u8fd9\u65f6\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u60f0\u6027\u521b\u5efa\uff0c\u5373\u5ef6\u8fdf\u521b\u5efa\u8be5\u7c7b\u7684\u5355\u4f8b\u3002\u4e4b\u524d\u7684\u4f8b\u5b50\u90fd\u5c5e\u4e8e\u60f0\u6027\u5355\u4f8b\uff0c\u5b9e\u4f8b\u7684\u521b\u5efa\u90fd\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"new")," \u7684\u65f6\u5019\u624d\u8fdb\u884c\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u60f0\u6027\u5355\u4f8b\u53c8\u88ab\u6210\u4e3a\u61d2\u6c49\u5f0f\uff0c\u76f8\u5bf9\u5e94\u7684\u6982\u5ff5\u662f\u997f\u6c49\u5f0f\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u61d2\u6c49\u5f0f\u5355\u4f8b\u662f\u5728\u4f7f\u7528\u65f6\u624d\u5b9e\u4f8b\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u997f\u6c49\u5f0f\u662f\u5f53\u7a0b\u5e8f\u542f\u52a8\u65f6\u6216\u5355\u4f8b\u6a21\u5f0f\u7c7b\u4e00\u52a0\u8f7d\u7684\u65f6\u5019\u5c31\u88ab\u521b\u5efa\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6211\u4eec\u53ef\u4ee5\u4e3e\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u6bd4\u8f83\u4e00\u4e0b\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u997f\u6c49\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Window {\n  //\u76f4\u63a5\u8fdb\u884c\u521b\u5efa\n  private static instance: Window = new Window()\n  public static getInstance() {\n    return Window.instance\n  }\n}\n//\u628aWindow\u505a\u6210\u5355\u4f8b\nlet w1 = Window.getInstance()\nlet w2 = Window.getInstance()\nconsole.log(w1 === w2)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u61d2\u6c49\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Window {\n  // \u5b58\u50a8\u5355\u4f8b\n  private static instance: Window\n\n  public static getInstance() {\n    // \u5224\u65ad\u662f\u5426\u5df2\u7ecf\u6709\u5355\u4f8b\u4e86\n    if (!Window.instance) {\n      Window.instance = new Window()\n    }\n    //\u8fd4\u56de\u5b9e\u4f8b\n    return Window.instance\n  }\n}\n//\u628aWindow\u505a\u6210\u5355\u4f8b\nlet w1 = Window.getInstance()\nlet w2 = Window.getInstance()\nconsole.log(w1 === w2) //true\n")),(0,a.kt)("p",null,"\u60f0\u6027\u521b\u5efa\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u4f7f\u7528\u5f88\u666e\u904d\uff0c\u4e86\u89e3\u4e00\u4e0b\u5bf9\u4ee5\u540e\u7684\u5f00\u53d1\u5de5\u4f5c\u5f88\u6709\u5e2e\u52a9\u3002"),(0,a.kt)("h2",{id:"3-\u5355\u4f8b\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9"},(0,a.kt)("strong",{parentName:"h2"},"3. \u5355\u4f8b\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9")),(0,a.kt)("p",null,"\u5355\u4f8b\u6a21\u5f0f\u4e3b\u8981\u89e3\u51b3\u7684\u95ee\u9898\u5c31\u662f\u8282\u7ea6\u8d44\u6e90\uff0c\u4fdd\u6301\u8bbf\u95ee\u4e00\u81f4\u6027\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b80\u5355\u5206\u6790\u4e00\u4e0b\u5b83\u7684\u4f18\u70b9\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u4f8b\u6a21\u5f0f\u5728\u521b\u5efa\u540e\u5728\u5185\u5b58\u4e2d\u53ea\u5b58\u5728\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u8282\u7ea6\u4e86\u5185\u5b58\u5f00\u652f\u548c\u5b9e\u4f8b\u5316\u65f6\u7684\u6027\u80fd\u5f00\u652f\uff0c\u7279\u522b\u662f\u9700\u8981\u91cd\u590d\u4f7f\u7528\u4e00\u4e2a\u521b\u5efa\u5f00\u9500\u6bd4\u8f83\u5927\u7684\u7c7b\u65f6\uff0c\u6bd4\u8d77\u5b9e\u4f8b\u4e0d\u65ad\u5730\u9500\u6bc1\u548c\u91cd\u65b0\u5b9e\u4f8b\u5316\uff0c\u5355\u4f8b\u80fd\u8282\u7ea6\u66f4\u591a\u8d44\u6e90\uff0c\u6bd4\u5982\u6570\u636e\u5e93\u8fde\u63a5\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5355\u4f8b\u6a21\u5f0f\u53ef\u4ee5\u89e3\u51b3\u5bf9\u8d44\u6e90\u7684\u591a\u91cd\u5360\u7528\uff0c\u6bd4\u5982\u5199\u6587\u4ef6\u64cd\u4f5c\u65f6\uff0c\u56e0\u4e3a\u53ea\u6709\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u907f\u514d\u5bf9\u4e00\u4e2a\u6587\u4ef6\u8fdb\u884c\u540c\u65f6\u64cd\u4f5c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u4f7f\u7528\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u4e5f\u53ef\u4ee5\u51cf\u5c0f\u5783\u573e\u56de\u6536\u673a\u5236 ",(0,a.kt)("inlineCode",{parentName:"li"},"GC\uff08Garbage Collecation\uff09")," \u7684\u538b\u529b\uff0c\u8868\u73b0\u5728\u6d4f\u89c8\u5668\u4e2d\u5c31\u662f\u7cfb\u7edf\u5361\u987f\u51cf\u5c11\uff0c\u64cd\u4f5c\u66f4\u6d41\u7545\uff0cCPU \u8d44\u6e90\u5360\u7528\u66f4\u5c11\uff1b")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5355\u4f8b\u6a21\u5f0f\u4e5f\u662f\u6709\u7f3a\u70b9\u7684")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u4f8b\u6a21\u5f0f\u5bf9\u6269\u5c55\u4e0d\u53cb\u597d\uff0c\u4e00\u822c\u4e0d\u5bb9\u6613\u6269\u5c55\uff0c\u56e0\u4e3a\u5355\u4f8b\u6a21\u5f0f\u4e00\u822c\u81ea\u884c\u5b9e\u4f8b\u5316\uff0c\u6ca1\u6709\u63a5\u53e3\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u4e0e\u5355\u4e00\u804c\u8d23\u539f\u5219\u51b2\u7a81\uff0c\u4e00\u4e2a\u7c7b\u5e94\u8be5\u53ea\u5173\u5fc3\u5185\u90e8\u903b\u8f91\uff0c\u800c\u4e0d\u5173\u5fc3\u5916\u9762\u600e\u4e48\u6837\u6765\u5b9e\u4f8b\u5316\uff1b")),(0,a.kt)("h2",{id:"4\u5355\u4f8b\u6a21\u5f0f\u7684\u4f7f\u7528\u573a\u666f"},(0,a.kt)("strong",{parentName:"h2"},"4.\u5355\u4f8b\u6a21\u5f0f\u7684\u4f7f\u7528\u573a\u666f")),(0,a.kt)("p",null,"\u90a3\u6211\u4eec\u5e94\u8be5\u5728\u4ec0\u4e48\u573a\u666f\u4e0b\u4f7f\u7528\u5355\u4f8b\u6a21\u5f0f\u5462\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u4e00\u4e2a\u7c7b\u7684\u5b9e\u4f8b\u5316\u8fc7\u7a0b\u6d88\u8017\u7684\u8d44\u6e90\u8fc7\u591a\uff0c\u53ef\u4ee5\u4f7f\u7528\u5355\u4f8b\u6a21\u5f0f\u6765\u907f\u514d\u6027\u80fd\u6d6a\u8d39\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u9879\u76ee\u4e2d\u9700\u8981\u4e00\u4e2a\u516c\u5171\u7684\u72b6\u6001\uff0c\u90a3\u4e48\u9700\u8981\u4f7f\u7528\u5355\u4f8b\u6a21\u5f0f\u6765\u4fdd\u8bc1\u8bbf\u95ee\u4e00\u81f4\u6027\uff1b")),(0,a.kt)("h3",{id:"41-commonjs\u6a21\u5757\u52a0\u8f7d\u673a\u5236"},(0,a.kt)("strong",{parentName:"h3"},"4.1 commonjs\u6a21\u5757\u52a0\u8f7d\u673a\u5236")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/blob/8070bcd333cd1d07ce13fe5e91530c80779d51c6/lib/hmr/HotModuleReplacement.runtime.js#L55"},"HotModuleReplacement")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"(function(modules) {\n  // webpack\u7684\u542f\u52a8\u51fd\u6570\n  //\u6a21\u5757\u7684\u7f13\u5b58\n  var installedModules = {};\n  //\u5b9a\u4e49\u5728\u6d4f\u89c8\u5668\u4e2d\u4f7f\u7528\u7684require\u65b9\u6cd5\n  function __webpack_require__(moduleId) {\n    //\u68c0\u67e5\u6a21\u5757\u662f\u5426\u5728\u7f13\u5b58\u4e2d\n    if (installedModules[moduleId]) {\n      return installedModules[moduleId].exports;\n    }\n    //\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6a21\u5757\u5e76\u4e14\u653e\u5230\u6a21\u5757\u7684\u7f13\u5b58\u4e2d\n    var module = (installedModules[moduleId] = {\n      i: moduleId,\n      l: false,\n      exports: {}\n    });\n\n    //\u6267\u884c\u6a21\u5757\u51fd\u6570\n    modules[moduleId].call(\n      module.exports,\n      module,\n      module.exports,\n      __webpack_require__\n    );\n\n    //\u628a\u6a21\u5757\u8bbe\u7f6e\u4e3a\u5df2\u7ecf\u52a0\u8f7d\n    module.l = true;\n\n    //\u8fd4\u56de\u6a21\u5757\u7684\u5bfc\u51fa\u5bf9\u8c61\n    return module.exports;\n  }\n}\n")),(0,a.kt)("h3",{id:"42-jquery"},(0,a.kt)("strong",{parentName:"h3"},"4.2 jQuery")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://code.jquery.com/jquery-3.4.1.js"},"jquery")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if(window.jQuery!=null){\n  return window.jQuery;\n}else{\n    //init~~~~~~~\n}\n")),(0,a.kt)("h3",{id:"43-\u6a21\u6001\u7a97\u53e3"},(0,a.kt)("strong",{parentName:"h3"},"4.3 \u6a21\u6001\u7a97\u53e3")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/twbs/bootstrap/blob/main/js/src/modal.js"},"bootstrap modal.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n</head>\n\n<body>\n    <button id="show-button">\u663e\u793a\u6a21\u6001\u7a97\u53e3</button>\n    <button id="hide-button">\u9690\u85cf\u6a21\u6001\u7a97\u53e3</button>\n    <script>\n        class Login {\n            constructor() {\n                this.element = document.createElement(\'div\');\n                this.element.innerHTML = (\n                    `\n                      \u7528\u6237\u540d <input type="text"/>\n                      <button>\u767b\u5f55</button>\n                    `\n                );\n                this.element.style.cssText = \'width: 100px; height: 100px; position: absolute; left: 50%; top: 50%; display: block;\';\n                document.body.appendChild(this.element);\n            }\n            show() {\n                this.element.style.display = \'block\';\n            }\n            hide() {\n                this.element.style.display = \'none\';\n            }\n        }\n        // \u6a21\u6001\u7a97\u53e3\u663e\u793a\u548c\u9690\u85cf\u6ca1\u5fc5\u987b\u6bcf\u6b21\u90fd\u91cd\u65b0\u521b\u5efa\uff0c\u521b\u5efa\u7684\u5f00\u9500\u5f88\u5927\n        Login.getInstance = (function () {\n            let instance;\n            return function () {\n                if (!instance) {\n                    instance = new Login();\n                }\n                return instance;\n            }\n        })();\n\n        document.getElementById(\'show-button\').addEventListener(\'click\', function (event) {\n            Login.getInstance().show();\n        });\n        document.getElementById(\'hide-button\').addEventListener(\'click\', function (event) {\n            Login.getInstance().hide();\n        });\n    <\/script>\n</body>\n\n</html>\n')),(0,a.kt)("h3",{id:"43-store\u72b6\u6001\u7ba1\u7406"},(0,a.kt)("strong",{parentName:"h3"},"4.3 store\u72b6\u6001\u7ba1\u7406")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/blob/master/src/createStore.ts"},"createStore")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// redux\u5e94\u7528\u91cc\uff0c\u53ea\u4f1a\u6709\u4e00\u4e2a\u4ed3\u5e93\uff0c\u4ed6\u662f\u5355\u4f8b\u7684\n// \u4e3a\u4e86\u5b9e\u73b0\u7ec4\u4ef6\u53ef\u4ee5\u901a\u4fe1\uff0c\u4ed3\u5e93\u5fc5\u987b\u662f\u5355\u4f8b\u7684\uff0c\u53ea\u6709\u4e00\u4e2a\nfunction createStore(reducer: any) {\n    let state: any;\n    let listeners: any[] = [];\n    function getState() {\n        return state;\n    }\n    function dispatch(action: any) {\n        state = reducer(state, action);\n        listeners.forEach(l => l());\n    }\n    function subscribe(listener: any) {\n        listeners.push(listener);\n        return () => {\n            listeners = listeners.filter(item => item != listener);\n            console.log(listeners);\n        }\n    }\n    dispatch({});\n    return {\n        getState,\n        dispatch,\n        subscribe\n    }\n}\nlet store = createStore((state: any, action: any) => state);\n")),(0,a.kt)("h3",{id:"43-\u7f13\u5b58"},(0,a.kt)("strong",{parentName:"h3"},"4.3 \u7f13\u5b58")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let express = require('express');\nlet fs = require('fs');\nlet cache: Record<any, any> = {};\nlet app = express();\napp.get('/user/:id', function (req: any, res: any) {\n    let id = req.params.id;\n    let user = cache.get(id);\n    if (user) {\n        res.json(user);\n    } else {\n        fs.readFile(`./users/${id}.json`, 'utf8', function (err: any, data: any) {\n            let user = JSON.parse(data);\n            cache.put(id, user);\n            res.json(user);\n        });\n    }\n});\napp.listen(3000);\n")))}p.isMDXComponent=!0},2166:(n,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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"}}]);