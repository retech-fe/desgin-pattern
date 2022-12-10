"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[863],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var l=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,l,a=function(n,e){if(null==n)return{};var t,l,a={},r=Object.keys(n);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var o=l.createContext({}),p=function(n){var e=l.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=p(n.components);return l.createElement(o.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,o=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),s=p(t),f=a,m=s["".concat(o,".").concat(f)]||s[f]||d[f]||r;return t?l.createElement(m,i(i({ref:e},c),{},{components:t})):l.createElement(m,i({ref:e},c))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,i=new Array(r);i[0]=s;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=n,u.mdxType="string"==typeof n?n:a,i[1]=u;for(var p=2;p<r;p++)i[p]=t[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1385:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var l=t(7462),a=(t(7294),t(3905));const r={title:"\u8fea\u7c73\u7279\u6cd5\u5219"},i=void 0,u={unversionedId:"pre-knowledge/design-rule-lod",id:"pre-knowledge/design-rule-lod",title:"\u8fea\u7c73\u7279\u6cd5\u5219",description:"\u4e00. \u4ec0\u4e48\u662f\u8fea\u7c73\u7279\u6cd5\u5219",source:"@site/docs/02-pre-knowledge/design-rule-lod.md",sourceDirName:"02-pre-knowledge",slug:"/pre-knowledge/design-rule-lod",permalink:"/design-pattern/docs/pre-knowledge/design-rule-lod",draft:!1,editUrl:"https://github.com/retech-fe/design-pattern/blob/main/docs/02-pre-knowledge/design-rule-lod.md",tags:[],version:"current",lastUpdatedBy:"pengfei.zuo",lastUpdatedAt:1670644148,formattedLastUpdatedAt:"Dec 10, 2022",frontMatter:{title:"\u8fea\u7c73\u7279\u6cd5\u5219"},sidebar:"tutorialSidebar",previous:{title:"D \u4f9d\u8d56\u5012\u7f6e\u539f\u5219",permalink:"/design-pattern/docs/pre-knowledge/\u4e94\u5927\u8bbe\u8ba1\u539f\u5219/design-rule-dip"},next:{title:"\u521b\u5efa\u578b\u6a21\u5f0f",permalink:"/design-pattern/docs/category/\u521b\u5efa\u578b\u6a21\u5f0f"}},o={},p=[{value:"\u4e00. \u4ec0\u4e48\u662f\u8fea\u7c73\u7279\u6cd5\u5219",id:"\u4e00-\u4ec0\u4e48\u662f\u8fea\u7c73\u7279\u6cd5\u5219",level:2},{value:"\u4e8c. \u4e3a\u4ec0\u4e48\u8981\u9075\u5b88\u8fea\u7c73\u7279\u6cd5\u5219?",id:"\u4e8c-\u4e3a\u4ec0\u4e48\u8981\u9075\u5b88\u8fea\u7c73\u7279\u6cd5\u5219",level:2},{value:"\u4e09. \u8fea\u7c73\u7279\u6cd5\u5219\u7684\u5e7f\u72ed\u5b9a\u4e49",id:"\u4e09-\u8fea\u7c73\u7279\u6cd5\u5219\u7684\u5e7f\u72ed\u5b9a\u4e49",level:2},{value:"3.1. \u72ed\u4e49\u7684\u8fea\u7c73\u7279\u6cd5\u5219",id:"31-\u72ed\u4e49\u7684\u8fea\u7c73\u7279\u6cd5\u5219",level:3},{value:"3.2. \u5e7f\u4e49\u7684\u8fea\u7c73\u7279\u6cd5\u5219\u5728\u7c7b\u7684\u8bbe\u8ba1\u4e0a\u7684\u4f53\u73b0",id:"32-\u5e7f\u4e49\u7684\u8fea\u7c73\u7279\u6cd5\u5219\u5728\u7c7b\u7684\u8bbe\u8ba1\u4e0a\u7684\u4f53\u73b0",level:3},{value:"\u56db. \u8fea\u7c73\u7279\u6cd5\u5219\u5728\u8bbe\u8ba1\u6a21\u5f0f\u4e2d\u7684\u5e94\u7528",id:"\u56db-\u8fea\u7c73\u7279\u6cd5\u5219\u5728\u8bbe\u8ba1\u6a21\u5f0f\u4e2d\u7684\u5e94\u7528",level:2},{value:"\u4e94. \u8fea\u7c73\u7279\u6cd5\u5219\u5b9e\u8df5",id:"\u4e94-\u8fea\u7c73\u7279\u6cd5\u5219\u5b9e\u8df5",level:2},{value:"\u516d. \u6ce8\u610f\u4e8b\u9879",id:"\u516d-\u6ce8\u610f\u4e8b\u9879",level:2}],c={toc:p};function d(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,l.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00-\u4ec0\u4e48\u662f\u8fea\u7c73\u7279\u6cd5\u5219"},"\u4e00. \u4ec0\u4e48\u662f\u8fea\u7c73\u7279\u6cd5\u5219"),(0,a.kt)("p",null,"\u8fea\u7c73\u7279\u6cd5\u5219(Law of Demeter )\u53c8\u53eb\u505a\u6700\u5c11\u77e5\u8bc6\u539f\u5219\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e00\u4e2a\u5bf9\u8c61\u5e94\u5f53\u5bf9\u5176\u4ed6\u5bf9\u8c61\u5c3d\u53ef\u80fd\u5c11\u7684\u4e86\u89e3\u3002\u4e0d\u548c\u964c\u751f\u4eba\u8bf4\u8bdd\u3002\u82f1\u6587\u7b80\u5199\u4e3a: LoD\u3002"),(0,a.kt)("p",null,"\u8fea\u7c73\u7279\u6cd5\u5219\u7684\u76ee\u7684\u5728\u4e8e\u964d\u4f4e\u7c7b\u4e4b\u95f4\u7684\u8026\u5408\u3002\u7531\u4e8e\u6bcf\u4e2a\u7c7b\u5c3d\u91cf\u51cf\u5c11\u5bf9\u5176\u4ed6\u7c7b\u7684\u4f9d\u8d56\uff0c\u56e0\u6b64\uff0c\u5f88\u5bb9\u6613\u4f7f\u5f97\u7cfb\u7edf\u7684\u529f\u80fd\u6a21\u5757\u529f\u80fd\u72ec\u7acb\uff0c\u76f8\u4e92\u4e4b\u95f4\u4e0d\u5b58\u5728\uff08\u6216\u5f88\u5c11\u6709\uff09\u4f9d\u8d56\u5173\u7cfb\u3002"),(0,a.kt)("p",null,"\u8fea\u7c73\u7279\u6cd5\u5219\u4e0d\u5e0c\u671b\u7c7b\u4e4b\u95f4\u5efa\u7acb\u76f4\u63a5\u7684\u8054\u7cfb\u3002\u5982\u679c\u771f\u7684\u6709\u9700\u8981\u5efa\u7acb\u8054\u7cfb\uff0c\u4e5f\u5e0c\u671b\u80fd\u901a\u8fc7\u5b83\u7684\u53cb\u5143\u7c7b\u6765\u8f6c\u8fbe\u3002\u56e0\u6b64\uff0c\u5e94\u7528\u8fea\u7c73\u7279\u6cd5\u5219\u6709\u53ef\u80fd\u9020\u6210\u7684\u4e00\u4e2a\u540e\u679c\u5c31\u662f\uff1a\u7cfb\u7edf\u4e2d\u5b58\u5728\u5927\u91cf\u7684\u4e2d\u4ecb\u7c7b\uff0c\u8fd9\u4e9b\u7c7b\u4e4b\u6240\u4ee5\u5b58\u5728\u5b8c\u5168\u662f\u4e3a\u4e86\u4f20\u9012\u7c7b\u4e4b\u95f4\u7684\u76f8\u4e92\u8c03\u7528\u5173\u7cfb\u2014\u2014\u8fd9\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u589e\u52a0\u4e86\u7cfb\u7edf\u7684\u590d\u6742\u5ea6\u3002"),(0,a.kt)("h2",{id:"\u4e8c-\u4e3a\u4ec0\u4e48\u8981\u9075\u5b88\u8fea\u7c73\u7279\u6cd5\u5219"},"\u4e8c. \u4e3a\u4ec0\u4e48\u8981\u9075\u5b88\u8fea\u7c73\u7279\u6cd5\u5219?"),(0,a.kt)("p",null,"\u5728\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u4e2d\u6709\u4e00\u4e9b\u4f17\u6240\u5468\u77e5\u7684\u62bd\u8c61\u6982\u5ff5\uff0c\u6bd4\u5982\u5c01\u88c5\u3001\u5185\u805a\u548c\u8026\u5408\uff0c\u7406\u8bba\u4e0a\u53ef\u4ee5\u7528\u6765\u751f\u6210\u6e05\u6670\u7684\u8bbe\u8ba1\u548c\u826f\u597d\u7684\u4ee3\u7801\u3002\u867d\u7136\u8fd9\u4e9b\u90fd\u662f\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u4f46\u5b83\u4eec\u4e0d\u591f\u5b9e\u7528\uff0c\u4e0d\u80fd\u76f4\u63a5\u7528\u4e8e\u5f00\u53d1\u73af\u5883\uff0c\u8fd9\u4e9b\u6982\u5ff5\u662f\u6bd4\u8f83\u4e3b\u89c2\u7684\uff0c\u975e\u5e38\u4f9d\u8d56\u4e8e\u4f7f\u7528\u4eba\u7684\u7ecf\u9a8c\u548c\u77e5\u8bc6\u3002\u5bf9\u4e8e\u5176\u4ed6\u6982\u5ff5\uff0c\u5982\u5355\u4e00\u8d23\u4efb\u539f\u5219\u3001\u5f00\u95ed\u539f\u5219\u7b49\uff0c\u60c5\u51b5\u4e5f\u662f\u4e00\u6837\u7684\u3002\u8fea\u7c73\u7279\u6cd5\u5219\u7684\u72ec\u7279\u4e4b\u5904\u5728\u4e8e\u5b83\u7b80\u6d01\u800c\u51c6\u786e\u7684\u5b9a\u4e49\uff0c\u5b83\u5141\u8bb8\u5728\u7f16\u5199\u4ee3\u7801\u65f6\u76f4\u63a5\u5e94\u7528\uff0c\u51e0\u4e4e\u81ea\u52a8\u5730\u5e94\u7528\u4e86\u9002\u5f53\u7684\u5c01\u88c5\u3001\u4f4e\u5185\u805a\u548c\u677e\u8026\u5408\u3002"),(0,a.kt)("h2",{id:"\u4e09-\u8fea\u7c73\u7279\u6cd5\u5219\u7684\u5e7f\u72ed\u5b9a\u4e49"},"\u4e09. \u8fea\u7c73\u7279\u6cd5\u5219\u7684\u5e7f\u72ed\u5b9a\u4e49"),(0,a.kt)("h3",{id:"31-\u72ed\u4e49\u7684\u8fea\u7c73\u7279\u6cd5\u5219"},"3.1. \u72ed\u4e49\u7684\u8fea\u7c73\u7279\u6cd5\u5219"),(0,a.kt)("p",null,"\u5982\u679c\u4e24\u4e2a\u7c7b\u4e0d\u5fc5\u5f7c\u6b64\u76f4\u63a5\u901a\u4fe1\uff0c\u90a3\u4e48\u8fd9\u4e24\u4e2a\u7c7b\u5c31\u4e0d\u5e94\u5f53\u53d1\u751f\u76f4\u63a5\u7684\u76f8\u4e92\u4f5c\u7528\u3002\u5982\u679c\u5176\u4e2d\u7684\u4e00\u4e2a\u7c7b\u9700\u8981\u8c03\u7528\u53e6\u4e00\u4e2a\u7c7b\u7684\u67d0\u4e00\u4e2a\u65b9\u6cd5\u7684\u8bdd\uff0c\u53ef\u4ee5\u901a\u8fc7\u7b2c\u4e09\u8005\u8f6c\u53d1\u8fd9\u4e2a\u8c03\u7528\u3002"),(0,a.kt)("p",null,"\u670b\u53cb\u5708\u7684\u786e\u5b9a\u201c\u670b\u53cb\u201d\u6761\u4ef6\uff1a"),(0,a.kt)("p",null," 1\uff09\u5f53\u524d\u5bf9\u8c61\u672c\u8eab\uff08this\uff09"),(0,a.kt)("p",null," 2\uff09\u4ee5\u53c2\u6570\u5f62\u5f0f\u4f20\u5165\u5230\u5f53\u524d\u5bf9\u8c61\u65b9\u6cd5\u4e2d\u7684\u5bf9\u8c61"),(0,a.kt)("p",null," \u65b9\u6cd5\u5165\u53c2\u662f\u4e00\u4e2a\u5bf9\u8c61, \u8fd9\u662f\u8fd9\u4e2a\u5bf9\u8c61\u548c\u5f53\u524d\u7c7b\u662f\u670b\u53cb"),(0,a.kt)("p",null," 3\uff09\u5f53\u524d\u5bf9\u8c61\u7684\u5b9e\u4f8b\u53d8\u91cf\u76f4\u63a5\u5f15\u7528\u7684\u5bf9\u8c61"),(0,a.kt)("p",null," \u5b9a\u4e00\u4e2a\u4e00\u4e2a\u7c7b, \u91cc\u9762\u7684\u5c5e\u6027\u5f15\u7528\u4e86\u5176\u4ed6\u5bf9\u8c61, \u90a3\u4e48\u8fd9\u4e2a\u5bf9\u8c61\u7684\u5b9e\u4f8b\u548c\u5f53\u524d\u5b9e\u4f8b\u662f\u670b\u53cb"),(0,a.kt)("p",null," 4\uff09\u5f53\u524d\u5bf9\u8c61\u7684\u5b9e\u4f8b\u53d8\u91cf\u5982\u679c\u662f\u4e00\u4e2a\u805a\u96c6\uff0c\u90a3\u4e48\u805a\u96c6\u4e2d\u7684\u5143\u7d20\u4e5f\u90fd\u662f\u670b\u53cb"),(0,a.kt)("p",null," \u5982\u679c\u5c5e\u6027\u662f\u4e00\u4e2a\u5bf9\u8c61, \u90a3\u4e48\u5c5e\u6027\u548c\u5bf9\u8c61\u91cc\u7684\u5143\u7d20\u90fd\u662f\u670b\u53cb"),(0,a.kt)("p",null," 5\uff09\u5f53\u524d\u5bf9\u8c61\u6240\u521b\u5efa\u7684\u5bf9\u8c61"),(0,a.kt)("p",null,"\u4efb\u4f55\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5982\u679c\u6ee1\u8db3\u4e0a\u9762\u7684\u6761\u4ef6\u4e4b\u4e00\uff0c\u5c31\u662f\u5f53\u524d\u5bf9\u8c61\u7684\u201c\u670b\u53cb\u201d\uff1b\u5426\u5219\u5c31\u662f\u201c\u964c\u751f\u4eba\u201d"),(0,a.kt)("p",null,"\u72ed\u4e49\u7684\u8fea\u7c73\u7279\u6cd5\u5219\u7684\u7f3a\u70b9\uff1a"),(0,a.kt)("p",null,"\u5728\u7cfb\u7edf\u91cc\u9020\u51fa\u5927\u91cf\u7684\u5c0f\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u4ec5\u4ec5\u662f\u4f20\u9012\u95f4\u63a5\u7684\u8c03\u7528\uff0c\u4e0e\u7cfb\u7edf\u7684\u4e1a\u52a1\u903b\u8f91\u65e0\u5173\u3002\n\u9075\u5faa\u7c7b\u4e4b\u95f4\u7684\u8fea\u7c73\u7279\u6cd5\u5219\u4f1a\u662f\u4e00\u4e2a\u7cfb\u7edf\u7684\u5c40\u90e8\u8bbe\u8ba1\u7b80\u5316\uff0c\u56e0\u4e3a\u6bcf\u4e00\u4e2a\u5c40\u90e8\u90fd\u4e0d\u4f1a\u548c\u8fdc\u8ddd\u79bb\u7684\u5bf9\u8c61\u6709\u76f4\u63a5\u7684\u5173\u8054\u3002\u4f46\u662f\uff0c\u8fd9\u4e5f\u4f1a\u9020\u6210\u7cfb\u7edf\u7684\u4e0d\u540c\u6a21\u5757\u4e4b\u95f4\u7684\u901a\u4fe1\u6548\u7387\u964d\u4f4e\uff0c\u4e5f\u4f1a\u4f7f\u7cfb\u7edf\u7684\u4e0d\u540c\u6a21\u5757\u4e4b\u95f4\u4e0d\u5bb9\u6613\u534f\u8c03\u3002"),(0,a.kt)("h3",{id:"32-\u5e7f\u4e49\u7684\u8fea\u7c73\u7279\u6cd5\u5219\u5728\u7c7b\u7684\u8bbe\u8ba1\u4e0a\u7684\u4f53\u73b0"},"3.2. \u5e7f\u4e49\u7684\u8fea\u7c73\u7279\u6cd5\u5219\u5728\u7c7b\u7684\u8bbe\u8ba1\u4e0a\u7684\u4f53\u73b0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f18\u5148\u8003\u8651\u5c06\u4e00\u4e2a\u7c7b\u8bbe\u7f6e\u6210\u4e0d\u53d8\u7c7b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u964d\u4f4e\u4e00\u4e2a\u7c7b\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u964d\u4f4e\u6210\u5458\u7684\u8bbf\u95ee\u6743\u9650\u3002")),(0,a.kt)("h2",{id:"\u56db-\u8fea\u7c73\u7279\u6cd5\u5219\u5728\u8bbe\u8ba1\u6a21\u5f0f\u4e2d\u7684\u5e94\u7528"},"\u56db. \u8fea\u7c73\u7279\u6cd5\u5219\u5728\u8bbe\u8ba1\u6a21\u5f0f\u4e2d\u7684\u5e94\u7528"),(0,a.kt)("p",null,"\u8bbe\u8ba1\u6a21\u5f0f\u7684\u95e8\u9762\u6a21\u5f0f\uff08Facade\uff09\u548c\u4e2d\u4ecb\u6a21\u5f0f\uff08Mediator\uff09\uff0c\u90fd\u662f\u8fea\u7c73\u7279\u6cd5\u5219\u7684\u5e94\u7528"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5df2\u7ecf\u79df\u623f\u4e3a\u4f8b, \u6765\u7814\u7a76\u8fea\u7c73\u7279\u6cd5\u5219\u3002"),(0,a.kt)("p",null,"\u901a\u5e38 \u5ba2\u6237\u8981\u627e\u623f\u5b50\u4f4f, \u6211\u4eec\u5c31\u76f4\u63a5\u5efa\u4e00\u4e2a\u623f\u5b50\u7c7b, \u5efa\u4e00\u4e2a\u5ba2\u6237\u7c7b, \u5ba2\u6237\u627e\u623f\u5b50\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'public interface IHouse {\n    // \u4f4f\u623f\u5b50\n    public void Housing();\n}\n\npublic class House implements IHouse{\n\n    @Override\n    public void Housing() {\n        System.out.println("\u4f4f\u623f\u5b50");\n    }\n}\n\n\npublic class Customer {\n    public String name;\n\n    public void findHourse(IHouse house) {\n        house.Housing();\n    }\n}\n')),(0,a.kt)("p",null,"\u5ba2\u6237\u627e\u623f\u5b50\u4f4f, \u903b\u8f91\u5f88\u7b80\u5355, \u8fd9\u6837\u662fok\u7684\u3002\u867d\u7136\u8fdd\u80cc\u4e86\u8fea\u7c73\u7279\u6cd5\u5219, \u4f46\u7b26\u5408\u4e1a\u52a1\u903b\u8f91\u4e5f\u8bf4\u5f97\u901a\u3002"),(0,a.kt)("p",null,"\u4f46\u662f, \u901a\u5e38\u6211\u4eec\u627e\u623f\u5b50, \u4e0d\u662f\u4e00\u4e0b\u5b50\u5c31\u80fd\u627e\u5230\u7684, \u6211\u4eec\u8981\u627e\u5f88\u591a\u5bb6, \u8fd9\u5c31\u5f88\u8d39\u52b2, \u90a3\u4e0d\u5982\u4ea4\u7ed9\u4e2d\u4ecb\u3002"),(0,a.kt)("p",null,"\u4e2d\u4ecb\u6709\u5f88\u591a\u623f\u6e90, \u623f\u4e1c\u5427\u623f\u5b50\u7ed9\u4e86\u4e2d\u4ecb, \u4e0d\u9700\u8981\u5173\u5fc3\u79df\u6237\u662f\u8c01, \u79df\u6237\u5c06\u627e\u623f\u7684\u4e8b\u4ea4\u7ed9\u623f\u4e1c, \u4ed6\u4e5f\u4e0d\u7528\u7ba1\u623f\u4e1c\u662f\u8c01, \u800c\u4e14\u79df\u6237+\u623f\u4e1c\u90fd\u5f88\u7701\u4e8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/**\n * \u623f\u5b50\n */\npublic interface IHouse {\n    // \u4f4f\u623f\u5b50\n    public void Housing();\n}\n\npublic class House implements IHouse{\n\n    @Override\n    public void Housing() {\n        System.out.println("\u4f4f\u623f\u5b50");\n    }\n}\n\npublic interface ICustomer {\n\n    void findHourse(IHouse house) ;\n}\n\npublic class Customer implements ICustomer {\n\n    public void findHourse(IHouse house) {\n        house.Housing();\n    }\n}\n\n/**\n * \u4e2d\u4ecb\n */\npublic class Intermediary {\n    // \u627e\u623f\u5b50\n    public IHouse findHouse(ICustomer customer){\n        // \u5e2e\u79df\u6237\u627e\u623f\u5b50\n        return null;\n    }\n}\n')),(0,a.kt)("p",null,"\u623f\u5b50,\u5ba2\u6237\u662f\u76f8\u4e92\u72ec\u7acb\u7684, \u5f7c\u6b64\u4e4b\u95f4\u6ca1\u6709\u5f15\u7528\u3002\u4ed6\u4eec\u4e4b\u95f4\u5efa\u7acb\u5173\u7cfb\u662f\u901a\u8fc7\u4e2d\u4ecb\u3002 \u4e5f\u5c31\u662f, \u5ba2\u6237\u627e\u4e2d\u4ecb\u79df\u623f\u5b50, \u623f\u4e1c\u5427\u623f\u5b50\u4ea4\u7ed9\u79df\u6237, \u6700\u540e\u4e2d\u4ecb\u5c06\u627e\u597d\u7684\u623f\u5b50\u7ed9\u5230\u5ba2\u6237\u3002\u5ba2\u6237\u548c\u623f\u4e1c\u5f7c\u6b64\u9694\u79bb, \u7b26\u5408\u8fea\u7c73\u7279\u6cd5\u5219\u3002"),(0,a.kt)("h2",{id:"\u4e94-\u8fea\u7c73\u7279\u6cd5\u5219\u5b9e\u8df5"},"\u4e94. \u8fea\u7c73\u7279\u6cd5\u5219\u5b9e\u8df5"),(0,a.kt)("p",null,"\u90a3\u4e48\u5728\u5b9e\u8df5\u4e2d\u5982\u4f55\u505a\u5230\u4e00\u4e2a\u5bf9\u8c61\u5e94\u8be5\u5bf9\u5176\u4ed6\u5bf9\u8c61\u6709\u6700\u5c11\u7684\u4e86\u89e3\u5462\uff1f"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u628a\u4e00\u4e2a\u5bf9\u8c61\u770b\u4f5c\u662f\u4e00\u4e2a\u4eba\uff0c\u90a3\u4e48\u8981\u5b9e\u73b0\u201c\u4e00\u4e2a\u4eba\u5e94\u8be5\u5bf9\u5176\u4ed6\u4eba\u6709\u6700\u5c11\u7684\u4e86\u89e3\u201d\uff0c\u505a\u5230\u4e24\u70b9\u5c31\u8db3\u591f\u4e86\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53ea\u548c\u76f4\u63a5\u7684\u670b\u53cb\u4ea4\u6d41\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u51cf\u5c11\u5bf9\u670b\u53cb\u7684\u4e86\u89e3\u3002"),(0,a.kt)("p",{parentName:"li"},"\u4e0b\u9762\u5c31\u8be6\u7ec6\u8bf4\u8bf4\u5982\u4f55\u505a\u5230\u8fd9\u4e24\u70b9\u3002"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ea\u548c\u76f4\u63a5\u7684\u670b\u53cb\u4ea4\u6d41")),(0,a.kt)("p",null,"\u8fea\u7c73\u7279\u6cd5\u5219\u8fd8\u6709\u4e00\u4e2a\u82f1\u6587\u89e3\u91ca\u662f\uff1atalk only to your immediate friends\uff08\u53ea\u548c\u76f4\u63a5\u7684\u670b\u53cb\u4ea4\u6d41\uff09\u3002"),(0,a.kt)("p",null,"\u4ec0\u4e48\u662f\u670b\u53cb\u5462\uff1f"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u5fc5\u7136\u4f1a\u4e0e\u5176\u4ed6\u7684\u5bf9\u8c61\u6709\u8026\u5408\u5173\u7cfb\uff0c\u4e24\u4e2a\u5bf9\u8c61\u4e4b\u95f4\u7684\u8026\u5408\u5c31\u4f1a\u6210\u4e3a\u670b\u53cb\u5173\u7cfb\u3002\u90a3\u4e48\u4ec0\u4e48\u53c8\u662f\u76f4\u63a5\u7684\u670b\u53cb\u5462\uff1f\u51fa\u73b0\u5728\u6210\u5458\u53d8\u91cf\u3001\u65b9\u6cd5\u7684\u8f93\u5165\u8f93\u51fa\u53c2\u6570\u4e2d\u7684\u7c7b\u5c31\u662f\u76f4\u63a5\u7684\u670b\u53cb\u3002\u8fea\u7c73\u7279\u6cd5\u5219\u8981\u6c42\u53ea\u548c\u76f4\u63a5\u7684\u670b\u53cb\u901a\u4fe1\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ea\u51fa\u73b0\u5728\u65b9\u6cd5\u4f53\u5185\u90e8\u7684\u7c7b\u5c31\u4e0d\u662f\u76f4\u63a5\u7684\u670b\u53cb\uff0c\u5982\u679c\u4e00\u4e2a\u7c7b\u548c\u4e0d\u662f\u76f4\u63a5\u7684\u670b\u53cb\u8fdb\u884c\u4ea4\u6d41\uff0c\u5c31\u5c5e\u4e8e\u8fdd\u53cd\u8fea\u7c73\u7279\u6cd5\u5219\u3002")),(0,a.kt)("p",null,"\u6211\u4eec\u4e3e\u4e00\u4e2a\u4f8b\u5b50\u8bf4\u660e\u4ec0\u4e48\u662f\u670b\u53cb\uff0c\u4ec0\u4e48\u662f\u76f4\u63a5\u7684\u670b\u53cb\u3002\u5f88\u7b80\u5355\u7684\u4f8b\u5b50\uff1a\u8001\u5e08\u8ba9\u73ed\u957f\u6e05\u70b9\u5168\u73ed\u540c\u5b66\u7684\u4eba\u6570\u3002\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u603b\u5171\u6709\u4e09\u4e2a\u7c7b\uff1a\u8001\u5e08Teacher\u3001\u73ed\u957fGroupLeader\u548c\u5b66\u751fStudent\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'public interface ITeacher {\n   void command(IGroupLeader groupLeader);\n}\n\npublic class Teacher implements ITeacher{\n   @Override\n   public void command(IGroupLeader groupLeader) {\n       // \u5168\u73ed\u540c\u5b66\n       List<Student> allStudent = new ArrayList<>();\n       allStudent.add(new Student());\n       allStudent.add(new Student());\n       allStudent.add(new Student());\n       allStudent.add(new Student());\n       allStudent.add(new Student());\n       // \u73ed\u957f\u6e05\u70b9\u4eba\u6570\n       groupLeader.count(allStudent);\n\n   }\n}\n\n**\n* \u73ed\u957f\u7c7b\n*/\npublic interface IGroupLeader {\n\n   // \u73ed\u957f\u6e05\u70b9\u4eba\u6570\n   void count(List<Student> students);\n}\n\n/**\n* \u73ed\u957f\u7c7b\n*/\npublic class GroupLeader implements IGroupLeader{\n   /**\n    * \u73ed\u957f\u6e05\u70b9\u4eba\u6570\n    * @param students\n    */\n   @Override\n   public void count(List<Student> students) {\n       // \u73ed\u957f\u6e05\u70b9\u4eba\u6570\n       System.out.println("\u4e0a\u8bfe\u7684\u5b66\u751f\u4eba\u6570\u662f: " + students.size());\n   }\n}\n\n/**\n* \u5b66\u751f\u7c7b\n*/\npublic interface IStudent {\n}\n\n/**\n* \u5b66\u751f\u7c7b\n*/\npublic class Student implements IStudent {\n\n\n}\n\n/**\n* \u5ba2\u6237\u7aef\n*/\npublic class Client {\n   public static void main(String[] args) {\n       // \u8001\u5e08\u7c7b\n       ITeacher wangTeacher = new Teacher();\n\n       // \u73ed\u957f\n       IGroupLeader zhangBanzhang = new GroupLeader();\n       wangTeacher.command(zhangBanzhang);\n   }\n}\n')),(0,a.kt)("p",null," \u8fd0\u884c\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," \u4e0a\u8bfe\u7684\u5b66\u751f\u4eba\u6570\u662f: 5\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u7684Teacher\u6709\u51e0\u4e2a\u670b\u53cb\uff1f\u4e24\u4e2a\uff0c\u4e00\u4e2a\u662fGroupLeader\uff0c\u5b83\u662fTeacher\u7684command()\u65b9\u6cd5\u7684\u5165\u53c2\uff1b\u53e6\u4e00\u4e2a\u662fStudent\uff0c\u56e0\u4e3a\u5728Teacher\u7684command()\u65b9\u6cd5\u4f53\u4e2d\u4f7f\u7528\u4e86Student\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48Teacher\u6709\u51e0\u4e2a\u662f\u76f4\u63a5\u7684\u670b\u53cb\uff1f\u6309\u7167\u76f4\u63a5\u7684\u670b\u53cb\u7684\u5b9a\u4e49"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u51fa\u73b0\u5728\u6210\u5458\u53d8\u91cf\u3001\u65b9\u6cd5\u7684\u8f93\u5165\u8f93\u51fa\u53c2\u6570\u4e2d\u7684\u7c7b\u5c31\u662f\u76f4\u63a5\u7684\u670b\u53cb")),(0,a.kt)("p",null,"\u53ea\u6709GroupLeader\u662fTeacher\u7684\u76f4\u63a5\u7684\u670b\u53cb\u3002"),(0,a.kt)("p",null,"Teacher\u5728command()\u65b9\u6cd5\u4e2d\u521b\u5efa\u4e86Student\u7684\u6570\u7ec4\uff0c\u548c\u975e\u76f4\u63a5\u7684\u670b\u53cbStudent\u53d1\u751f\u4e86\u4ea4\u6d41\uff0c\u6240\u4ee5\uff0c\u4e0a\u8ff0\u4f8b\u5b50\u8fdd\u53cd\u4e86\u8fea\u7c73\u7279\u6cd5\u5219\u3002\u65b9\u6cd5\u662f\u7c7b\u7684\u4e00\u4e2a\u884c\u4e3a\uff0c\u7c7b\u7adf\u7136\u4e0d\u77e5\u9053\u81ea\u5df1\u7684\u884c\u4e3a\u4e0e\u5176\u4ed6\u7684\u7c7b\u4ea7\u751f\u4e86\u4f9d\u8d56\u5173\u7cfb\uff0c\u8fd9\u662f\u4e0d\u5141\u8bb8\u7684\uff0c\u4e25\u91cd\u8fdd\u53cd\u4e86\u8fea\u7c73\u7279\u6cd5\u5219\uff01"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4f7f\u4e0a\u8ff0\u4f8b\u5b50\u7b26\u5408\u8fea\u7c73\u7279\u6cd5\u5219\uff0c\u6211\u4eec\u53ef\u4ee5\u505a\u5982\u4e0b\u4fee\u6539\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'public interface ITeacher {\n    void command(IGroupLeader groupLeader);\n}\n\npublic class Teacher implements ITeacher {\n    @Override\n    public void command(IGroupLeader groupLeader) {\n        // \u73ed\u957f\u6e05\u70b9\u4eba\u6570\n        groupLeader.count();\n    }\n}\n\n/**\n * \u73ed\u957f\u7c7b\n */\npublic interface IGroupLeader {\n    // \u73ed\u957f\u6e05\u70b9\u4eba\u6570\n    void count();\n}\n\n/**\n * \u73ed\u957f\u7c7b\n */\npublic class GroupLeader implements IGroupLeader {\n\n    private List<Student> students;\n\n    public GroupLeader(List<Student> students) {\n        this.students = students;\n    }\n\n    /**\n     * \u73ed\u957f\u6e05\u70b9\u4eba\u6570\n     */\n    @Override\n    public void count() {\n        // \u73ed\u957f\u6e05\u70b9\u4eba\u6570\n        System.out.println("\u4e0a\u8bfe\u7684\u5b66\u751f\u4eba\u6570\u662f: " + students.size());\n    }\n}\n\n\n/**\n * \u5b66\u751f\u7c7b\n */\npublic interface IStudent {\n}\n\n/**\n * \u5b66\u751f\u7c7b\n */\npublic class Student implements IStudent {\n\n\n}\n\n\n/**\n * \u5ba2\u6237\u7aef\n */\npublic class Client {\n    public static void main(String[] args) {\n        // \u8001\u5e08\u7c7b\n        ITeacher wangTeacher = new Teacher();\n\n        List<Student> allStudent = new ArrayList(10);\n        allStudent.add(new Student());\n        allStudent.add(new Student());\n        allStudent.add(new Student());\n        allStudent.add(new Student());\n\n        // \u73ed\u957f\n        IGroupLeader zhangBanzhang = new GroupLeader(allStudent);\n        wangTeacher.command(zhangBanzhang);\n    }\n}\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," \u4e0a\u8bfe\u7684\u5b66\u751f\u4eba\u6570\u662f: 4\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u4fee\u6539\u540e\uff0c\u6bcf\u4e2a\u7c7b\u90fd\u53ea\u548c\u76f4\u63a5\u7684\u670b\u53cb\u4ea4\u6d41\uff0c\u6709\u6548\u51cf\u5c11\u4e86\u7c7b\u4e4b\u95f4\u7684\u8026\u5408"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u51cf\u5c11\u5bf9\u670b\u53cb\u7684\u4e86\u89e3")),(0,a.kt)("p",null,"\u5982\u4f55\u51cf\u5c11\u5bf9\u670b\u53cb\u7684\u4e86\u89e3\uff1f\u5982\u679c\u4f60\u7684\u670b\u53cb\u662f\u4e2a\u8bdd\u75e8\u52a0\u5927\u5587\u53ed\uff0c\u90a3\u5c31\u7b97\u4f60\u4e0d\u4e3b\u52a8\u53bb\u95ee\u4ed6\uff0c\u4ed6\u4e5f\u4f1a\u5728\u4f60\u9762\u524d\u8bf4\u4e2a\u4e0d\u505c\uff0c\u628a\u4ed6\u6240\u6709\u7684\u7ecf\u5386\u90fd\u8bb2\u7ed9\u4f60\u542c\u3002\u6240\u4ee5\uff0c\u8981\u51cf\u5c11\u5bf9\u670b\u53cb\u7684\u4e86\u89e3\uff0c\u8bf7\u6362\u4e00\u4e2a\u5185\u655b\u4e00\u70b9\u7684\u670b\u53cb\u5427\uff5e\u6362\u4f5c\u5728\u4e00\u4e2a\u7c7b\u4e2d\uff0c\u5c31\u662f\u5c3d\u91cf\u51cf\u5c11\u4e00\u4e2a\u7c7b\u5bf9\u5916\u66b4\u9732\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u4e3e\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u8bf4\u660e\u4e00\u4e2a\u7c7b\u66b4\u9732\u65b9\u6cd5\u8fc7\u591a\u7684\u60c5\u51b5\u3002\u4e00\u4e2a\u4eba\u7528\u5496\u5561\u673a\u716e\u5496\u5561\u7684\u8fc7\u7a0b\uff0c\u4f8b\u5b50\u4e2d\u53ea\u6709\u4e24\u4e2a\u7c7b\uff0c\u4e00\u4e2a\u662f\u4eba\uff0c\u4e00\u4e2a\u662f\u5496\u5561\u673a\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u662f\u5496\u5561\u673a\u7c7bCoffeeMachine\uff0c\u5496\u5561\u673a\u5236\u4f5c\u5496\u5561\u53ea\u9700\u8981\u4e09\u4e2a\u65b9\u6cd5\uff1a1.\u52a0\u5496\u5561\u8c46\uff1b2.\u52a0\u6c34\uff1b3.\u5236\u4f5c\u5496\u5561\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/**\n * \u5496\u5561\u673a\u62bd\u8c61\u63a5\u53e3\n */\npublic interface ICoffeeMachine {\n\n    //\u52a0\u5496\u5561\u8c46\n    void addCoffeeBean();\n\n    //\u52a0\u6c34\n    void addWater();\n\n    //\u5236\u4f5c\u5496\u5561\n    void makeCoffee();\n}\n\n\n/**\n * \u5496\u5561\u673a\u5b9e\u73b0\u7c7b\n */\npublic class CoffeeMachine implements ICoffeeMachine{\n\n    //\u52a0\u5496\u5561\u8c46\n    public void addCoffeeBean() {\n        System.out.println("\u653e\u5496\u5561\u8c46");\n    }\n\n    //\u52a0\u6c34\n    public void addWater() {\n        System.out.println("\u52a0\u6c34");\n    }\n\n    //\u5236\u4f5c\u5496\u5561\n    public void makeCoffee() {\n        System.out.println("\u5236\u4f5c\u5496\u5561");\n    }\n}\n\n\n/**\n * \u4eba, \u5236\u4f5c\u5496\u5561\n */\npublic interface IMan {\n    /**\n     * \u5236\u4f5c\u5496\u5561\n     */\n    void makeCoffee();\n}\n\n/**\n * \u4eba\u5236\u4f5c\u5496\u5561\n */\npublic class Man implements IMan {\n    private ICoffeeMachine coffeeMachine;\n\n    public Man(ICoffeeMachine coffeeMachine) {\n        this.coffeeMachine = coffeeMachine;\n    }\n\n    /**\n     * \u5236\u4f5c\u5496\u5561\n     */\n    public void makeCoffee() {\n        coffeeMachine.addWater();\n        coffeeMachine.addCoffeeBean();\n        coffeeMachine.makeCoffee();\n    }\n}\n\n/**\n * \u5ba2\u6237\u7aef\n */\npublic class Client {\n    public static void main(String[] args) {\n        ICoffeeMachine coffeeMachine = new CoffeeMachine();\n\n        IMan man = new Man(coffeeMachine);\n        man.makeCoffee();\n\n    }\n}\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n \u52a0\u6c34\n\n \u653e\u5496\u5561\u8c46\n\n \u5236\u4f5c\u5496\u5561\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0cCoffeeMachine\u662fMan\u7684\u76f4\u63a5\u597d\u53cb\uff0c\u4f46\u95ee\u9898\u662fMan\u5bf9CoffeeMachine\u4e86\u89e3\u7684\u592a\u591a\u4e86\uff0c\u5176\u5b9e\u4eba\u6839\u672c\u4e0d\u5173\u5fc3\u5496\u5561\u673a\u5177\u4f53\u5236\u4f5c\u5496\u5561\u7684\u8fc7\u7a0b\u3002\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u4f5c\u5982\u4e0b\u4f18\u5316\uff1a"),(0,a.kt)("p",null,"\u4f18\u5316\u540e\u7684\u5496\u5561\u673a\u7c7b\uff0c\u53ea\u66b4\u9732\u4e00\u4e2awork\u65b9\u6cd5\uff0c\u628a\u5236\u4f5c\u5496\u5561\u7684\u4e09\u4e2a\u5177\u4f53\u7684\u65b9\u6cd5addCoffeeBean\u3001addWater\u3001makeCoffee\u8bbe\u4e3a\u79c1\u6709:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/**\n * \u5496\u5561\u673a\u62bd\u8c61\u63a5\u53e3\n */\npublic interface ICoffeeMachine {\n\n    //\u5496\u5561\u673a\u5de5\u4f5c\n    void work();\n\n}\n\n/**\n * \u5496\u5561\u673a\u5b9e\u73b0\u7c7b\n */\npublic class CoffeeMachine implements ICoffeeMachine {\n\n    //\u52a0\u5496\u5561\u8c46\n    public void addCoffeeBean() {\n        System.out.println("\u653e\u5496\u5561\u8c46");\n    }\n\n    //\u52a0\u6c34\n    public void addWater() {\n        System.out.println("\u52a0\u6c34");\n    }\n\n    //\u5236\u4f5c\u5496\u5561\n    public void makeCoffee() {\n        System.out.println("\u5236\u4f5c\u5496\u5561");\n    }\n\n    @Override\n    public void work() {\n        addCoffeeBean();\n        addWater();\n        makeCoffee();\n    }\n}\n\n/**\n * \u4eba, \u5236\u4f5c\u5496\u5561\n */\npublic interface IMan {\n    /**\n     * \u5236\u4f5c\u5496\u5561\n     */\n    void makeCoffee();\n}\n\n\n/**\n * \u4eba\u5236\u4f5c\u5496\u5561\n */\npublic class Man implements IMan {\n    private ICoffeeMachine coffeeMachine;\n\n    public Man(ICoffeeMachine coffeeMachine) {\n        this.coffeeMachine = coffeeMachine;\n    }\n\n    /**\n     * \u5236\u4f5c\u5496\u5561\n     */\n    public void makeCoffee() {\n        coffeeMachine.work();\n    }\n}\n\n/**\n * \u5ba2\u6237\u7aef\n */\npublic class Client {\n    public static void main(String[] args) {\n        ICoffeeMachine coffeeMachine = new CoffeeMachine();\n\n        IMan man = new Man(coffeeMachine);\n        man.makeCoffee();\n\n    }\n}\n')),(0,a.kt)("p",null,"\u8fd9\u6837\u4fee\u6539\u540e\uff0c\u901a\u8fc7\u51cf\u5c11CoffeeMachine\u5bf9\u5916\u66b4\u9732\u7684\u65b9\u6cd5\uff0c\u51cf\u5c11Man\u5bf9CoffeeMachine\u7684\u4e86\u89e3\uff0c\u4ece\u800c\u964d\u4f4e\u4e86\u5b83\u4eec\u4e4b\u95f4\u7684\u8026\u5408\u3002"),(0,a.kt)("p",null,"\u5728\u5b9e\u8df5\u4e2d\uff0c\u53ea\u8981\u505a\u5230\u53ea\u548c\u76f4\u63a5\u7684\u670b\u53cb\u4ea4\u6d41\u548c\u51cf\u5c11\u5bf9\u670b\u53cb\u7684\u4e86\u89e3\uff0c\u5c31\u80fd\u6ee1\u8db3\u8fea\u7c73\u7279\u6cd5\u5219\u3002\u56e0\u6b64\u6211\u4eec\u4e0d\u96be\u60f3\u8c61\uff0c\u8fea\u7c73\u7279\u6cd5\u5219\u7684\u76ee\u7684\uff0c\u662f\u628a\u6211\u4eec\u7684\u7c7b\u53d8\u6210\u4e00\u4e2a\u4e2a\u201c\u80a5\u5b85\u201d\u3002\u201c\u80a5\u201d\u5728\u4e8e\u4e00\u4e2a\u7c7b\u5bf9\u5916\u66b4\u9732\u7684\u65b9\u6cd5\u53ef\u80fd\u5f88\u5c11\uff0c\u4f46\u662f\u5b83\u5185\u90e8\u7684\u5b9e\u73b0\u53ef\u80fd\u975e\u5e38\u590d\u6742\uff08\u8fd9\u4e2a\u89e3\u91ca\u6709\u70b9\u7275\u5f3a~\uff09\u3002\u201c\u5b85\u201d\u5728\u4e8e\u5b83\u53ea\u548c\u76f4\u63a5\u7684\u670b\u53cb\u4ea4\u6d41\u3002\u5728\u73b0\u5b9e\u751f\u6d3b\u4e2d\u201c\u80a5\u5b85\u201d\u662f\u4e2a\u8d2c\u4e49\u8bcd\uff0c\u5728\u65e5\u672c\u201c\u80a5\u5b85\u201d\u5df2\u7ecf\u6210\u4e3a\u793e\u4f1a\u95ee\u9898\u3002\u4f46\u662f\u5728\u7a0b\u5e8f\u4e2d\uff0c\u4e00\u4e2a\u201c\u80a5\u5b85\u201d\u7684\u7c7b\u5374\u662f\u4f18\u79c0\u7c7b\u7684\u5178\u8303"),(0,a.kt)("h2",{id:"\u516d-\u6ce8\u610f\u4e8b\u9879"},"\u516d. \u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\uff1a\u5728\u7c7b\u7684\u5212\u5206\u4e0a\uff0c\u5e94\u5f53\u521b\u5efa\u5f31\u8026\u5408\u7684\u7c7b\uff0c\u7c7b\u4e0e\u7c7b\u4e4b\u95f4\u7684\u8026\u5408\u8d8a\u5f31\uff0c\u5c31\u8d8a\u6709\u5229\u4e8e\u5b9e\u73b0\u53ef\u590d\u7528\u7684\u76ee\u6807\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\uff1a\u5728\u7c7b\u7684\u7ed3\u6784\u8bbe\u8ba1\u4e0a\uff0c\u6bcf\u4e2a\u7c7b\u90fd\u5e94\u8be5\u964d\u4f4e\u6210\u5458\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\uff1a\u5728\u7c7b\u7684\u8bbe\u8ba1\u4e0a\uff0c\u53ea\u8981\u6709\u53ef\u80fd\uff0c\u4e00\u4e2a\u7c7b\u5e94\u5f53\u8bbe\u8ba1\u6210\u4e0d\u53d8\u7684\u7c7b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u56db\uff1a\u5728\u5bf9\u5176\u4ed6\u7c7b\u7684\u5f15\u7528\u4e0a\uff0c\u4e00\u4e2a\u5bf9\u8c61\u5bf9\u5176\u4ed6\u7c7b\u7684\u5bf9\u8c61\u7684\u5f15\u7528\u5e94\u8be5\u964d\u5230\u6700\u4f4e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e94\uff1a\u5c3d\u91cf\u9650\u5236\u5c40\u90e8\u53d8\u91cf\u7684\u6709\u6548\u8303\u56f4\uff0c\u964d\u4f4e\u7c7b\u7684\u8bbf\u95ee\u6743\u9650\u3002")))}d.isMDXComponent=!0}}]);