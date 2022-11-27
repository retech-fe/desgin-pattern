"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),m=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return l.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,k=c["".concat(u,".").concat(d)]||c[d]||p[d]||r;return n?l.createElement(k,i(i({ref:t},s),{},{components:n})):l.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var l=n(7462),a=(n(7294),n(3905));const r={title:"\u7b56\u7565\u6a21\u5f0f",description:"\u5b9a\u4e49\u4e00\u7cfb\u5217\u7684\u7b97\u6cd5\uff0c\u628a\u5b83\u4eec\u4e00\u4e2a\u4e2a\u5c01\u88c5\u8d77\u6765\uff0c\u5e76\u4e14\u4f7f\u5b83\u4eec\u53ef\u4ee5\u4e92\u76f8\u66ff\u6362",last_update:{date:"11/09/2022",author:"\u9ad8\u7ea2\u7fd4"}},i=void 0,o={unversionedId:"behavioral-pattern/strategy",id:"behavioral-pattern/strategy",title:"\u7b56\u7565\u6a21\u5f0f",description:"\u5b9a\u4e49\u4e00\u7cfb\u5217\u7684\u7b97\u6cd5\uff0c\u628a\u5b83\u4eec\u4e00\u4e2a\u4e2a\u5c01\u88c5\u8d77\u6765\uff0c\u5e76\u4e14\u4f7f\u5b83\u4eec\u53ef\u4ee5\u4e92\u76f8\u66ff\u6362",source:"@site/docs/05-behavioral-pattern/04-strategy.md",sourceDirName:"05-behavioral-pattern",slug:"/behavioral-pattern/strategy",permalink:"/design-pattern/docs/behavioral-pattern/strategy",draft:!1,editUrl:"https://github.com/retech-fe/design-pattern/blob/main/docs/05-behavioral-pattern/04-strategy.md",tags:[],version:"current",lastUpdatedBy:"\u9ad8\u7ea2\u7fd4",lastUpdatedAt:1667952e3,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:4,frontMatter:{title:"\u7b56\u7565\u6a21\u5f0f",description:"\u5b9a\u4e49\u4e00\u7cfb\u5217\u7684\u7b97\u6cd5\uff0c\u628a\u5b83\u4eec\u4e00\u4e2a\u4e2a\u5c01\u88c5\u8d77\u6765\uff0c\u5e76\u4e14\u4f7f\u5b83\u4eec\u53ef\u4ee5\u4e92\u76f8\u66ff\u6362",last_update:{date:"11/09/2022",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"\u72b6\u6001\u6a21\u5f0f",permalink:"/design-pattern/docs/behavioral-pattern/state"},next:{title:"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f(\u524d\u7aef\u4e0d\u5e38\u7528)",permalink:"/design-pattern/docs/behavioral-pattern/template"}},u={},m=[{value:"1. \u5b9a\u4e49",id:"1-\u5b9a\u4e49",level:2},{value:"2. \u751f\u6d3b\u4e2d\u7684\u4f8b\u5b50",id:"2-\u751f\u6d3b\u4e2d\u7684\u4f8b\u5b50",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:3},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:3},{value:"3. \u901a\u7528\u5b9e\u73b0",id:"3-\u901a\u7528\u5b9e\u73b0",level:2},{value:"4. \u6848\u4f8b",id:"4-\u6848\u4f8b",level:2},{value:"4.1 \u7c7b\u56fe",id:"41-\u7c7b\u56fe",level:3},{value:"4.2 \u4ee3\u7801",id:"42-\u4ee3\u7801",level:3},{value:"4.2.1 \u5927\u591a\u6570\u4eba\u7684\u5199\u6cd5",id:"421-\u5927\u591a\u6570\u4eba\u7684\u5199\u6cd5",level:4},{value:"\u5229\u7528\u7b56\u7565\u6a21\u5f0f\u7684\u4f18\u5316",id:"\u5229\u7528\u7b56\u7565\u6a21\u5f0f\u7684\u4f18\u5316",level:4},{value:"5. \u5e94\u7528\u573a\u666f",id:"5-\u5e94\u7528\u573a\u666f",level:2},{value:"5.1 \u8868\u5355\u6821\u9a8c",id:"51-\u8868\u5355\u6821\u9a8c",level:3},{value:"5.1.1 \u539f\u751f\u8868\u5355\u9a8c\u8bc1",id:"511-\u539f\u751f\u8868\u5355\u9a8c\u8bc1",level:4},{value:"5.1.2 \u57fa\u4e8eElementUI\u7684Form\u8868\u5355\u9a8c\u8bc1",id:"512-\u57fa\u4e8eelementui\u7684form\u8868\u5355\u9a8c\u8bc1",level:4},{value:"5.2 \u8868\u683c formatter",id:"52-\u8868\u683c-formatter",level:3},{value:"6. \u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",id:"6-\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",level:2},{value:"7. \u4f18\u7f3a\u70b9",id:"7-\u4f18\u7f3a\u70b9",level:2},{value:"8. \u5176\u4ed6\u76f8\u5173\u6a21\u5f0f\u7684\u5bf9\u6bd4",id:"8-\u5176\u4ed6\u76f8\u5173\u6a21\u5f0f\u7684\u5bf9\u6bd4",level:2},{value:"8.1 \u72b6\u6001\u6a21\u5f0f\u548c\u7b56\u7565\u6a21\u5f0f\u5f02\u540c",id:"81-\u72b6\u6001\u6a21\u5f0f\u548c\u7b56\u7565\u6a21\u5f0f\u5f02\u540c",level:3},{value:"\u76f8\u540c\u70b9",id:"\u76f8\u540c\u70b9",level:4},{value:"\u4e0d\u540c\u70b9",id:"\u4e0d\u540c\u70b9",level:4},{value:"8.2 \u7b56\u7565\u6a21\u5f0f\u548c\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",id:"82-\u7b56\u7565\u6a21\u5f0f\u548c\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",level:3}],s={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u5b9a\u4e49"},"1. \u5b9a\u4e49"),(0,a.kt)("p",null,"\u7b56\u7565\u6a21\u5f0f \uff08Strategy Pattern\uff09\u53c8\u79f0\u653f\u7b56\u6a21\u5f0f\uff0c\u5176\u5b9a\u4e49\u4e00\u7cfb\u5217\u7684\u7b97\u6cd5\uff0c\u628a\u5b83\u4eec\u4e00\u4e2a\u4e2a\u5c01\u88c5\u8d77\u6765\uff0c\u5e76\u4e14\u4f7f\u5b83\u4eec\u53ef\u4ee5\u4e92\u76f8\u66ff\u6362\u3002\u5c01\u88c5\u7684\u7b56\u7565\u7b97\u6cd5\u4e00\u822c\u662f\u72ec\u7acb\u7684\uff0c\u7b56\u7565\u6a21\u5f0f\u6839\u636e\u8f93\u5165\u6765\u8c03\u6574\u91c7\u7528\u54ea\u4e2a\u7b97\u6cd5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5173\u952e\u662f\u7b56\u7565\u7684\u5b9e\u73b0\u548c\u4f7f\u7528\u5206\u79bb"),(0,a.kt)("li",{parentName:"ul"},"\u907f\u514d\u5927\u91cf\u7684if else \u6216 swith case")),(0,a.kt)("h2",{id:"2-\u751f\u6d3b\u4e2d\u7684\u4f8b\u5b50"},"2. \u751f\u6d3b\u4e2d\u7684\u4f8b\u5b50"),(0,a.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u73b0\u5728\u7535\u5b50\u4ea7\u54c1\u79cd\u7c7b\u7e41\u591a\uff0c\u5c3a\u5bf8\u591a\u79cd\u591a\u6837\uff0c\u6709\u65f6\u5019\u4f60\u4f1a\u5fcd\u4e0d\u4f4f\u60f3\u62c6\u5f00\u770b\u770b\u91cc\u9762\u5565\u6837\uff08\u60f3\u60f3\u5c0f\u65f6\u5019\u62c6\u7684\u73a9\u5177\u8f66\u8fd8\u6709\u9065\u63a7\u5668\uff09\uff0c\u4f46\u662f\u87ba\u4e1d\u89c4\u683c\u5f88\u591a\uff0c\u87ba\u4e1d\u5200\u5c3a\u5bf8\u4e5f\u4e0d\u5c11\uff0c\u5982\u679c\u6bcf\u78b0\u5230\u4e00\u79cd\u89c4\u683c\u5c31\u4e70\u4e00\u4e2a\u87ba\u4e1d\u5200\uff0c\u5bb6\u91cc\u5c31\u5f97\u5806\u6ee1\u87ba\u4e1d\u5200\u4e86\u3002\u6240\u4ee5\u73b0\u5728\u4eba\u4eec\u90fd\u7528\u591a\u529f\u80fd\u7684\u87ba\u4e1d\u5200\u5957\u88c5\uff0c\u87ba\u4e1d\u5200\u628a\u53ea\u9700\u8981\u4e00\u4e2a\uff0c\u78b0\u5230\u4e0d\u540c\u89c4\u683c\u7684\u87ba\u4e1d\u53ea\u8981\u6362\u87ba\u4e1d\u5200\u5934\u5c31\u884c\u4e86\uff0c\u5f88\u65b9\u4fbf\uff0c\u4f53\u79ef\u4e5f\u53d8\u5c0f\u5f88\u591a\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e00\u8f86\u8f66\u7684\u8f6e\u80ce\u6709\u5f88\u591a\u89c4\u683c\uff0c\u5728\u6ce5\u6cde\u8def\u6bb5\u5f00\u7684\u591a\u7684\u65f6\u5019\u53ef\u4ee5\u7528\u6ce5\u5730\u80ce\uff0c\u5728\u96ea\u5730\u5f00\u5f97\u591a\u53ef\u4ee5\u7528\u96ea\u5730\u80ce\uff0c\u9ad8\u901f\u516c\u8def\u4e0a\u5f00\u7684\u591a\u7684\u65f6\u5019\u4f7f\u7528\u9ad8\u6027\u80fd\u8f6e\u80ce\uff0c\u9488\u5bf9\u4e0d\u540c\u4f7f\u7528\u573a\u666f\u66f4\u6362\u4e0d\u540c\u7684\u8f6e\u80ce\u5373\u53ef\uff0c\u4e0d\u9700\u66f4\u6362\u6574\u4e2a\u8f66\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f8b\u5982\u7535\u5546\u7f51\u7ad9\u5728\u53cc\u5341\u4e00\u4e3e\u529e\u6d3b\u52a8\uff0c\u6709\u7684\u5546\u54c1\u6ee1 100 \u51cf 30\uff0c\u6709\u7684\u5546\u54c1\u6ee1 200 \u51cf 80\uff0c\u6709\u7684\u5546\u54c1\u76f4\u63a5 8 \u6298\u51fa\u552e\uff0c\u4e0d\u540c\u5546\u54c1\u7684\u4f18\u60e0\u7b56\u7565\u4e0d\u4e00\u6837\u3002"))),(0,a.kt)("h3",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u87ba\u4e1d\u5200\u5934/\u8f6e\u80ce\uff08\u7b56\u7565\uff09\u4e4b\u95f4\u76f8\u4e92\u72ec\u7acb\uff0c\u4f46\u53c8\u53ef\u4ee5\u76f8\u4e92\u66ff\u6362\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u87ba\u4e1d\u5200/\u8f66\uff08\u5c01\u88c5\u4e0a\u4e0b\u6587\uff09\u53ef\u4ee5\u6839\u636e\u9700\u8981\u7684\u4e0d\u540c\u9009\u7528\u4e0d\u540c\u7684\u7b56\u7565\uff1b")),(0,a.kt)("h2",{id:"3-\u901a\u7528\u5b9e\u73b0"},"3. \u901a\u7528\u5b9e\u73b0"),(0,a.kt)("p",null,"\u4f7f\u7528\u7b56\u7565\u6a21\u5f0f\u6765\u5199\u7684\u8bdd\uff0c\u4e0a\u9762\u63d0\u5230\u7684\u6298\u6263\u8ba1\u7b97\u65b9\u5f0f\u4f5c\u4e3a\u7b56\u7565\uff0c\u5177\u4f53\u6298\u6263\u7684\u8ba1\u7b97\u8fc7\u7a0b\u4f5c\u4e3a\u5c01\u88c5\u4e0a\u4e0b\u6587\uff0c\u4e3b\u8981\u6709\u4e0b\u9762\u51e0\u4e2a\u6982\u5ff5\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/retech-fe/image-hosting/main/img/2022/11/27/09-03-07-6fc6c7acb5cdc02c35e590df4ab84f20-20221127090307-8278c6.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Context\uff1a\u5c01\u88c5\u4e0a\u4e0b\u6587\uff0c\u6839\u636e\u9700\u8981\u8c03\u7528\u9700\u8981\u7684\u7b56\u7565\uff0c\u5c4f\u853d\u5916\u754c\u5bf9\u7b56\u7565\u7684\u76f4\u63a5\u8c03\u7528\uff0c\u53ea\u5bf9\u5916\u63d0\u4f9b\u4e00\u4e2a\u63a5\u53e3\uff0c\u6839\u636e\u9700\u8981\u8c03\u7528\u5bf9\u5e94\u7684\u7b56\u7565\u3002"),(0,a.kt)("li",{parentName:"ul"},"Strategy\uff1a\u7b56\u7565\uff0c\u542b\u6709\u5177\u4f53\u7684\u7b97\u6cd5\uff0c\u5176\u65b9\u6cd5\u7684\u5916\u89c2\u76f8\u540c\uff0c\u56e0\u6b64\u53ef\u4ee5\u4e92\u76f8\u4ee3\u66ff\u3002"),(0,a.kt)("li",{parentName:"ul"},"StrategyMap\uff1a\u6240\u6709\u7b56\u7565\u7684\u5408\u96c6\uff0c\u4f9b\u5c01\u88c5\u4e0a\u4e0b\u6587\u8c03\u7528\u3002")),(0,a.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b58\u50a8\u6240\u6709\u7b56\u7565\nconst StrategyMap = {}\n\n// \u5c01\u88c5\u4e0a\u4e0b\u6587\nfunction context(type, ...rest) {\n  return StrategyMap[type] && StrategyMap[type](...rest)\n}\n\n// \u589e\u52a0\u7b56\u7565\nStrategyMap.minus100_30 = function(price) {\n  return price - Math.floor(price / 100) * 30\n}\n// \u8c03\u7528\u7b56\u7565\ncontext('minus100_30', 270) // \u8f93\u51fa: 210\n")),(0,a.kt)("h2",{id:"4-\u6848\u4f8b"},"4. \u6848\u4f8b"),(0,a.kt)("p",null,"\u573a\u666f\u662f\u8fd9\u6837\u7684\uff0c\u67d0\u4e2a\u7535\u5546\u7f51\u7ad9\u5e0c\u671b\u4e3e\u529e\u4e00\u4e2a\u6d3b\u52a8\uff0c\u901a\u8fc7\u6253\u6298\u4fc3\u9500\u6765\u9500\u552e\u5e93\u5b58\u7269\u54c1\uff0c\u666e\u901a\u4e0d\u6253\u6298\uff0c\u666e\u901a\u4f1a\u5458\u62539\u6298\uff0cvip\u4f1a\u5458\u62538\u6298"),(0,a.kt)("h3",{id:"41-\u7c7b\u56fe"},"4.1 \u7c7b\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/retech-fe/image-hosting/main/img/2022/10/27/09-54-25-e297aa4b1e21a484e2f66c6e8cf081c7-20221027095425-e080b2.png",alt:null})),(0,a.kt)("h3",{id:"42-\u4ee3\u7801"},"4.2 \u4ee3\u7801"),(0,a.kt)("h4",{id:"421-\u5927\u591a\u6570\u4eba\u7684\u5199\u6cd5"},"4.2.1 \u5927\u591a\u6570\u4eba\u7684\u5199\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TCustomerType = \'normal\' | \'member\' | \'vip\'\nclass Customer {\n  constructor(private type: TCustomerType) {\n    this.type = type\n  }\n  public pay(amount: number) {\n    if (this.type == "member") {\n      return amount * 0.9\n    } else if (this.type == "vip") {\n      return amount * 0.8\n    } else {\n      return amount\n    }\n  }\n}\nlet c = new Customer("normal")\nconsole.log(c.pay(100))\nlet c2 = new Customer("member")\nconsole.log(c2.pay(100))\nlet c3 = new Customer("vip")\nconsole.log(c2.pay(100))\n\n')),(0,a.kt)("p",null,"\u7f3a\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pay \u51fd\u6570\u968f\u7740\u4f1a\u5458\u7c7b\u578b\u548c\u6298\u6263\u65b9\u5f0f\u7684\u589e\u591a\uff0cif-else \u5224\u65ad\u8bed\u53e5\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u81c3\u80bf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u589e\u52a0\u4e86\u65b0\u7684\u6298\u6263\u7c7b\u578b\u6216\u8005\u6298\u6263\u7c7b\u578b\u7684\u7b97\u6cd5\u6709\u6240\u6539\u53d8\uff0c\u90a3\u4e48\u9700\u8981\u66f4\u6539 pay \u51fd\u6570\u7684\u5b9e\u73b0\uff0c\u8fd9\u662f\u8fdd\u53cd\u5f00\u653e-\u5c01\u95ed\u539f\u5219\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u590d\u7528\u6027\u5dee\uff0c\u5982\u679c\u5728\u5176\u4ed6\u7684\u5730\u65b9\u4e5f\u6709\u7c7b\u4f3c\u8fd9\u6837\u7684\u7b97\u6cd5\uff0c\u4f46\u89c4\u5219\u4e0d\u4e00\u6837\uff0c\u4e0a\u8ff0\u4ee3\u7801\u4e0d\u80fd\u590d\u7528\u3002")),(0,a.kt)("h4",{id:"\u5229\u7528\u7b56\u7565\u6a21\u5f0f\u7684\u4f18\u5316"},"\u5229\u7528\u7b56\u7565\u6a21\u5f0f\u7684\u4f18\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Customer {\n  constructor(public kind: Kind) {\n  }\n  public cost(amount: number) {\n    return this.kind.discount(amount)\n  }\n}\nabstract class Kind {\n  abstract discount(amounr: number): number\n}\nclass Normal extends Kind {\n  discount(amount: number) {\n    return amount\n  }\n}\nclass Member extends Kind {\n  discount(amount: number) {\n    return amount * 0.9\n  }\n}\nclass VIP extends Kind {\n  discount(amount: number) {\n    return amount * 0.8\n  }\n}\nlet c1 = new Customer(new Normal())\nconsole.log(c1.cost(100))\nc1.kind = new Member()\nconsole.log(c1.cost(100))\nc1.kind = new VIP()\nconsole.log(c1.cost(100))\n\n")),(0,a.kt)("p",null,"\u5728\u524d\u7aef\u4e5f\u628a\u7b97\u6cd5\u5c01\u88c5\u5728\u7b56\u7565\u5bf9\u8c61\u4e2d\uff0c\u6307\u5b9a\u7b97\u6cd5\u8c03\u7528\u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'class Customer {\n  constructor() {\n    this.kinds = {\n      normal: function (price) {\n        return price\n      },\n      member: function (price) {\n        return price * 0.9\n      },\n      vip: function (price) {\n        return price * 0.8\n      },\n    }\n  }\n  cost(kind, amount) {\n    return this.kinds[kind](amount)\n  }\n}\nlet c = new Customer()\nconsole.log(c.cost("normal", 100))\nconsole.log(c.cost("member", 100))\nconsole.log(c.cost("vip", 100))\n')),(0,a.kt)("h2",{id:"5-\u5e94\u7528\u573a\u666f"},"5. \u5e94\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u90a3\u4e48\u5e94\u8be5\u5728\u4ec0\u4e48\u573a\u666f\u4e0b\u4f7f\u7528\u7b56\u7565\u6a21\u5f0f\u5462\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u7b97\u6cd5\u53ea\u5728",(0,a.kt)("strong",{parentName:"li"},"\u884c\u4e3a\u4e0a\u7a0d\u6709\u4e0d\u540c"),"\u7684\u573a\u666f\uff0c\u8fd9\u65f6\u53ef\u4ee5\u4f7f\u7528\u7b56\u7565\u6a21\u5f0f\u6765\u52a8\u6001\u9009\u62e9\u7b97\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b97\u6cd5\u9700\u8981",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u7531\u5207\u6362"),"\u7684\u573a\u666f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u65f6\u9700\u8981",(0,a.kt)("strong",{parentName:"li"},"\u591a\u91cd\u6761\u4ef6\u5224\u65ad"),"\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u7b56\u7565\u6a21\u5f0f\u6765\u89c4\u907f\u591a\u91cd\u6761\u4ef6\u5224\u65ad\u7684\u60c5\u51b5\u3002")),(0,a.kt)("h3",{id:"51-\u8868\u5355\u6821\u9a8c"},"5.1 \u8868\u5355\u6821\u9a8c"),(0,a.kt)("h4",{id:"511-\u539f\u751f\u8868\u5355\u9a8c\u8bc1"},"5.1.1 \u539f\u751f\u8868\u5355\u9a8c\u8bc1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n</head>\n\n<body>\n\n  <form id=\"userForm\">\n    \u7528\u6237\u540d <input type=\"text\" name=\"username\"><br />\n    \u5bc6\u7801 <input type=\"text\" name=\"password\"><br />\n    \u624b\u673a\u53f7 <input type=\"text\" name=\"mobile\"><br />\n    \u90ae\u7bb1 <input type=\"text\" name=\"email\"><br />\n    <input type=\"submit\" value=\"\u63d0\u4ea4\">\n  </form>\n  <script>\n    let form = document.getElementById('userForm');\n    let validator = (function () {\n      //\u8fd9\u662f\u4e00\u4e2a\u89c4\u5219\u7684\u6570\u7ec4\n      let rules = {\n        notEmpty(val, msg) {\n          if (val === '') {\n            return msg;\n          }\n        },\n        minLength(val, min, msg) {\n          if (val === '' || val.length < min) {\n            return msg;\n          }\n        },\n        maxLength(val, max, msg) {\n          if (val === '' || val.length > max) {\n            return msg;\n          }\n        },\n        isMobile(val, msg) {\n          if (!/1\\d{10}/.test(val)) {\n            return msg;\n          }\n        }\n      }\n      function addRule(name, rule) {\n        rules[name] = rule;\n      }\n      let checks = [];\n      //\u589e\u52a0\u6821\u9a8c\u7684\u9879\u76ee\n      function add(element, rule) {\n        checks.push(function () {\n          let val = element.value;\n          let name = rule.shift();\n          rule.unshift(val);//['value','\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a']\n          return rules[name] && rules[name].apply(element, rule);\n        });\n      }\n      function start() {\n        for (let i = 0; i < checks.length; i++) {\n          let check = checks[i];\n          let msg = check();\n          if (msg) {\n            return msg;\n          }\n        }\n      }\n      return {\n        addRule,\n        add,\n        start\n      }\n    })();\n    \n    validator.addRule('isEmail', function (val, msg) {\n      if (!/.*@.*/.test(val)) {\n        return msg;\n      }\n    });\n    form.onsubmit = function () {\n      validator.add(form.username, ['notEmpty', '\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a']);\n      validator.add(form.password, ['minLength', 6, '\u5bc6\u7801\u957f\u5ea6\u4e0d\u80fd\u5c11\u4e8e6\u4f4d']);\n      validator.add(form.password, ['maxLength', 8, '\u5bc6\u7801\u957f\u5ea6\u4e0d\u80fd\u5927\u4e8e8\u4f4d']);\n      validator.add(form.mobile, ['isMobile', '\u5fc5\u987b\u8f93\u5165\u5408\u6cd5\u7684\u624b\u673a\u53f7']);\n      validator.add(form.email, ['isEmail', '\u5fc5\u987b\u8f93\u5165\u5408\u6cd5\u90ae\u7bb1']);\n      let msg = validator.start();\n      if (msg) {\n        alert(msg);\n        return false;\n      }\n      return true;\n    }\n  <\/script>\n\n</body>\n\n</html>\n\n")),(0,a.kt)("h4",{id:"512-\u57fa\u4e8eelementui\u7684form\u8868\u5355\u9a8c\u8bc1"},"5.1.2 \u57fa\u4e8eElementUI\u7684Form\u8868\u5355\u9a8c\u8bc1"),(0,a.kt)("p",null,"ElementUI \u7684 Form \u8868\u5355 \u5177\u6709\u8868\u5355\u9a8c\u8bc1\u529f\u80fd\uff0c\u7528\u6765\u6821\u9a8c\u7528\u6237\u8f93\u5165\u7684\u8868\u5355\u5185\u5bb9\u3002\u5b9e\u9645\u9700\u6c42\u4e2d\u8868\u5355\u9a8c\u8bc1\u9879\u4e00\u822c\u4f1a\u6bd4\u8f83\u590d\u6742\uff0c\u6240\u4ee5\u9700\u8981\u7ed9\u6bcf\u4e2a\u8868\u5355\u9879\u589e\u52a0 validator \u81ea\u5b9a\u4e49\u6821\u9a8c\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u50cf\u5b98\u7f51\u793a\u4f8b\u4e00\u6837\u628a\u8868\u5355\u9a8c\u8bc1\u90fd\u5199\u5728\u7ec4\u4ef6\u7684\u72b6\u6001 data \u51fd\u6570\u4e2d\uff0c\u4f46\u662f\u8fd9\u6837\u5c31\u4e0d\u597d\u590d\u7528\u4f7f\u7528\u9891\u7387\u6bd4\u8f83\u9ad8\u7684\u8868\u5355\u9a8c\u8bc1\u65b9\u6cd5\u4e86\uff0c\u8fd9\u65f6\u6211\u4eec\u53ef\u4ee5\u7ed3\u5408\u7b56\u7565\u6a21\u5f0f\u548c\u51fd\u6570\u67ef\u91cc\u5316\u7684\u77e5\u8bc6\u6765\u91cd\u6784\u4e00\u4e0b\u3002\u9996\u5148\u6211\u4eec\u5728\u9879\u76ee\u7684\u5de5\u5177\u6a21\u5757\uff08\u4e00\u822c\u662f utils \u6587\u4ef6\u5939\uff09\u5b9e\u73b0\u901a\u7528\u7684\u8868\u5355\u9a8c\u8bc1\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// src/utils/validates.js\n\n/* \u59d3\u540d\u6821\u9a8c \u75312-10\u4f4d\u6c49\u5b57\u7ec4\u6210 */\nexport function validateUsername(str) {\n  const reg = /^[\\u4e00-\\u9fa5]{2,10}$/\n  return reg.test(str)\n}\n\n/* \u624b\u673a\u53f7\u6821\u9a8c \u7531\u4ee51\u5f00\u5934\u768411\u4f4d\u6570\u5b57\u7ec4\u6210  */\nexport function validateMobile(str) {\n  const reg = /^1\\d{10}$/\n  return reg.test(str)\n}\n\n/* \u90ae\u7bb1\u6821\u9a8c */\nexport function validateEmail(str) {\n  const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$/\n  return reg.test(str)\n}\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728 utils/index.js \u4e2d\u589e\u52a0\u4e00\u4e2a\u67ef\u91cc\u5316\u65b9\u6cd5\uff0c\u7528\u6765\u751f\u6210\u8868\u5355\u9a8c\u8bc1\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// src/utils/index.js\n\nimport * as Validates from './validates.js'\n\n/* \u751f\u6210\u8868\u683c\u81ea\u5b9a\u4e49\u6821\u9a8c\u51fd\u6570 */\nexport const formValidateGene = (key, msg) => (rule, value, cb) => {\n  if (Validates[key](value)) {\n    cb()\n  } else {\n    cb(new Error(msg))\n  }\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684 formValidateGene \u51fd\u6570\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u662f\u9a8c\u8bc1\u89c4\u5219\uff0c\u4e5f\u5c31\u662f src/utils/validates.js \u6587\u4ef6\u4e2d\u63d0\u53d6\u51fa\u6765\u7684\u901a\u7528\u9a8c\u8bc1\u89c4\u5219\u7684\u65b9\u6cd5\u540d\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u62a5\u9519\u7684\u8bdd\u8868\u5355\u9a8c\u8bc1\u7684\u63d0\u793a\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<template>\n  <el-form ref=\"ruleForm\"\n           label-width=\"100px\"\n           class=\"demo-ruleForm\"\n           :rules=\"rules\"\n           :model=\"ruleForm\">\n        \n    <el-form-item label=\"\u7528\u6237\u540d\" prop=\"username\">\n      <el-input v-model=\"ruleForm.username\"></el-input>\n    </el-form-item>\n        \n    <el-form-item label=\"\u624b\u673a\u53f7\" prop=\"mobile\">\n      <el-input v-model=\"ruleForm.mobile\"></el-input>\n    </el-form-item>\n        \n    <el-form-item label=\"\u90ae\u7bb1\" prop=\"email\">\n      <el-input v-model=\"ruleForm.email\"></el-input>\n    </el-form-item>\n  </el-form>\n</template>\n\n<script type='text/javascript'>\nimport * as Utils from '../utils'\n    \nexport default {\n  name: 'ElTableDemo',\n  data() {\n    return {\n      ruleForm: { pass: '', checkPass: '', age: '' },\n      rules: {\n        username: [{\n          validator: Utils.formValidateGene('validateUsername', '\u59d3\u540d\u75312-10\u4f4d\u6c49\u5b57\u7ec4\u6210'),\n          trigger: 'blur'\n        }],\n        mobile: [{\n          validator: Utils.formValidateGene('validateMobile', '\u624b\u673a\u53f7\u7531\u4ee51\u5f00\u5934\u768411\u4f4d\u6570\u5b57\u7ec4\u6210'),\n          trigger: 'blur'\n        }],\n        email: [{\n          validator: Utils.formValidateGene('validateEmail', '\u4e0d\u662f\u6b63\u786e\u7684\u90ae\u7bb1\u683c\u5f0f'),\n          trigger: 'blur'\n        }]\n      }\n    }\n  }\n}\n<\/script>\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u89c1\u5728\u4f7f\u7528\u7684\u65f6\u5019\u975e\u5e38\u65b9\u4fbf\uff0c\u628a\u8868\u5355\u9a8c\u8bc1\u65b9\u6cd5\u63d0\u53d6\u51fa\u6765\u4f5c\u4e3a\u7b56\u7565\uff0c\u4f7f\u7528\u67ef\u91cc\u5316\u65b9\u6cd5\u52a8\u6001\u9009\u62e9\u8868\u5355\u9a8c\u8bc1\u65b9\u6cd5\uff0c\u4ece\u800c\u5bf9\u7b56\u7565\u7075\u6d3b\u8fd0\u7528\uff0c\u5927\u5927\u52a0\u5feb\u5f00\u53d1\u6548\u7387\u3002"),(0,a.kt)("h3",{id:"52-\u8868\u683c-formatter"},"5.2 \u8868\u683c formatter"),(0,a.kt)("p",null,"\u8fd9\u91cc\u4e3e\u4e00\u4e2a Vue + ElementUI \u9879\u76ee\u4e2d\u7528\u5230\u7684\u4f8b\u5b50\u3002"),(0,a.kt)("p",null,"Element \u7684\u8868\u683c\u63a7\u4ef6\u7684 Column \u63a5\u53d7\u4e00\u4e2a formatter \u53c2\u6570\uff0c\u7528\u6765\u683c\u5f0f\u5316\u5185\u5bb9\uff0c\u5176\u7c7b\u578b\u4e3a\u51fd\u6570\uff0c\u5e76\u4e14\u8fd8\u53ef\u4ee5\u63a5\u53d7\u51e0\u4e2a\u7279\u5b9a\u53c2\u6570\uff0c\u50cf\u8fd9\u6837\uff1aFunction(row, column, cellValue, index)\u3002"),(0,a.kt)("p",null,"\u4ee5\u6587\u4ef6\u7684\u5927\u5c0f\u8f6c\u5316\u4e3a\u4f8b\uff0c\u540e\u7aef\u7ecf\u5e38\u4f1a\u76f4\u63a5\u4f20 bit \u5355\u4f4d\u7684\u6587\u4ef6\u5927\u5c0f\uff0c\u90a3\u4e48\u524d\u7aef\u9700\u8981\u6839\u636e\u540e\u7aef\u7684\u6570\u636e\uff0c\u6839\u636e\u9700\u6c42\u8f6c\u5316\u4e3a\u81ea\u5df1\u9700\u8981\u7684\u5355\u4f4d\u7684\u6587\u4ef6\u5927\u5c0f\uff0c\u6bd4\u5982 KB/MB\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u5b9e\u73b0\u6587\u4ef6\u5927\u5c0f\u7684\u8ba1\u7b97\u7b97\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const StrategyMap = {\n  /* Strategy 1: \u5c06\u6587\u4ef6\u5927\u5c0f\uff08bit\uff09\u8f6c\u5316\u4e3a KB */\n  bitToKB: val => {\n    const num = Number(val)\n    return isNaN(num) ? val : (num / 1024).toFixed(0) + 'KB'\n  },\n  /* Strategy 2: \u5c06\u6587\u4ef6\u5927\u5c0f\uff08bit\uff09\u8f6c\u5316\u4e3a MB */\n  bitToMB: val => {\n    const num = Number(val)\n    return isNaN(num) ? val : (num / 1024 / 1024).toFixed(1) + 'MB'\n  }\n}\n\n/* Context: \u751f\u6210el\u8868\u5355 formatter */\nconst strategyContext = function(type, rowKey){\n  return function(row, column, cellValue, index){\n    return StrategyMap[type](row[rowKey])\n  }\n}\n\nexport default strategyContext\n")),(0,a.kt)("p",null,"\u90a3\u4e48\u5728\u7ec4\u4ef6\u4e2d\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<template>\n  <el-table :data="tableData">\n    <el-table-column prop="date" label="\u65e5\u671f"></el-table-column>\n    <el-table-column prop="name" label="\u6587\u4ef6\u540d"></el-table-column>\n    \x3c!-- \u76f4\u63a5\u8c03\u7528 strategyContext --\x3e\n    <el-table-column prop="sizeKb" label="\u6587\u4ef6\u5927\u5c0f(KB)"\n                     :formatter=\'strategyContext("bitToKB", "sizeKb")\'>\n    </el-table-column>\n    <el-table-column prop="sizeMb" label="\u9644\u4ef6\u5927\u5c0f(MB)"\n                     :formatter=\'strategyContext("bitToMB", "sizeMb")\'>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script type=\'text/javascript\'>\nimport strategyContext from \'./strategyContext.js\'\n    \nexport default {\n  name: \'ElTableDemo\',\n  data() {\n    return {\n      strategyContext,\n      tableData: [\n        { date: \'2022-03-27\', name: \'\u6587\u4ef61\', sizeKb: 1234, sizeMb: 1234426 },\n        { date: \'2022-03-29\', name: \'\u6587\u4ef62\', sizeKb: 4213, sizeMb: 8636152 }\n      ]\n    }\n  }\n}\n<\/script>\n\n<style scoped></style>\n')),(0,a.kt)("h2",{id:"6-\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"},"6. \u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7b56\u7565\uff0c\u5206\u5f00\u5904\u7406\uff0c\u800c\u4e0d\u662f\u6df7\u5408\u5728\u4e00\u8d77"),(0,a.kt)("li",{parentName:"ul"},"\u7b26\u5408\u5f00\u653e\u5c01\u95ed\u539f\u5219")),(0,a.kt)("h2",{id:"7-\u4f18\u7f3a\u70b9"},"7. \u4f18\u7f3a\u70b9"),(0,a.kt)("p",null,"\u7b56\u7565\u6a21\u5f0f\u5c06\u7b97\u6cd5\u7684\u5b9e\u73b0\u548c\u4f7f\u7528\u62c6\u5206\uff0c\u8fd9\u4e2a\u7279\u70b9\u5e26\u6765\u4e86\u5f88\u591a\u4f18\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b56\u7565\u4e4b\u95f4\u76f8\u4e92\u72ec\u7acb\uff0c\u4f46\u7b56\u7565\u53ef\u4ee5\u81ea\u7531\u5207\u6362\uff0c\u8fd9\u4e2a\u7b56\u7565\u6a21\u5f0f\u7684\u7279\u70b9\u7ed9\u7b56\u7565\u6a21\u5f0f\u5e26\u6765\u5f88\u591a\u7075\u6d3b\u6027\uff0c\u4e5f\u63d0\u9ad8\u4e86\u7b56\u7565\u7684\u590d\u7528\u7387\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u91c7\u7528\u7b56\u7565\u6a21\u5f0f\uff0c\u90a3\u4e48\u5728\u9009\u7b56\u7565\u65f6\u4e00\u822c\u4f1a\u91c7\u7528\u591a\u91cd\u7684\u6761\u4ef6\u5224\u65ad\uff0c\u91c7\u7528\u7b56\u7565\u6a21\u5f0f\u53ef\u4ee5\u907f\u514d\u591a\u91cd\u6761\u4ef6\u5224\u65ad\uff0c\u589e\u52a0\u53ef\u7ef4\u62a4\u6027\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u6269\u5c55\u6027\u597d\uff0c\u7b56\u7565\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u8fdb\u884c\u6269\u5c55\uff1b")),(0,a.kt)("p",null,"\u7b56\u7565\u6a21\u5f0f\u7684\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b56\u7565\u76f8\u4e92\u72ec\u7acb\uff0c\u56e0\u6b64\u4e00\u4e9b\u590d\u6742\u7684\u7b97\u6cd5\u903b\u8f91\u65e0\u6cd5\u5171\u4eab\uff0c\u9020\u6210\u4e00\u4e9b\u8d44\u6e90\u6d6a\u8d39\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u7528\u6237\u60f3\u91c7\u7528\u4ec0\u4e48\u7b56\u7565\uff0c\u5fc5\u987b\u4e86\u89e3\u7b56\u7565\u7684\u5b9e\u73b0\uff0c\u56e0\u6b64\u6240\u6709\u7b56\u7565\u90fd\u9700\u5411\u5916\u66b4\u9732\uff0c\u8fd9\u662f\u8fdd\u80cc\u8fea\u7c73\u7279\u6cd5\u5219/\u6700\u5c11\u77e5\u8bc6\u539f\u5219\u7684\uff0c\u4e5f\u589e\u52a0\u4e86\u7528\u6237\u5bf9\u7b56\u7565\u5bf9\u8c61\u7684\u4f7f\u7528\u6210\u672c\u3002")),(0,a.kt)("h2",{id:"8-\u5176\u4ed6\u76f8\u5173\u6a21\u5f0f\u7684\u5bf9\u6bd4"},"8. \u5176\u4ed6\u76f8\u5173\u6a21\u5f0f\u7684\u5bf9\u6bd4"),(0,a.kt)("h3",{id:"81-\u72b6\u6001\u6a21\u5f0f\u548c\u7b56\u7565\u6a21\u5f0f\u5f02\u540c"},"8.1 \u72b6\u6001\u6a21\u5f0f\u548c\u7b56\u7565\u6a21\u5f0f\u5f02\u540c"),(0,a.kt)("h4",{id:"\u76f8\u540c\u70b9"},"\u76f8\u540c\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b56\u7565\u6a21\u5f0f\u548c\u72b6\u6001\u6a21\u5f0f\u90fd\u6709\u4e0a\u4e0b\u6587\uff0c\u6709\u7b56\u7565\u6216\u8005\u72b6\u6001\u7c7b\uff0c\u4e0a\u4e0b\u6587\u628a\u8fd9\u4e9b\u8bf7\u6c42\u59d4\u6258\u7ed9\u8fd9\u4e9b\u7c7b\u6765\u6267\u884c")),(0,a.kt)("h4",{id:"\u4e0d\u540c\u70b9"},"\u4e0d\u540c\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u72b6\u6001\u6a21\u5f0f\uff1a \u91cd\u5728\u5f3a\u8c03\u5bf9\u8c61\u5185\u90e8\u72b6\u6001\u7684\u53d8\u5316\u6539\u53d8\u5bf9\u8c61\u7684\u884c\u4e3a\uff0c\u72b6\u6001\u7c7b\u4e4b\u95f4\u662f\u5e73\u884c\u7684\uff0c\u65e0\u6cd5\u76f8\u4e92\u66ff\u6362\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u7b56\u7565\u6a21\u5f0f\uff1a \u7b56\u7565\u7684\u9009\u62e9\u7531\u5916\u90e8\u6761\u4ef6\u51b3\u5b9a\uff0c\u7b56\u7565\u53ef\u4ee5\u52a8\u6001\u7684\u5207\u6362\uff0c\u7b56\u7565\u4e4b\u95f4\u662f\u5e73\u7b49\u7684\uff0c\u53ef\u4ee5\u76f8\u4e92\u66ff\u6362\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u72b6\u6001\u6a21\u5f0f\u7684\u72b6\u6001\u7c7b\u662f\u5e73\u884c\u7684\uff0c\u610f\u601d\u662f\u5404\u4e2a\u72b6\u6001\u7c7b\u5c01\u88c5\u7684\u72b6\u6001\u548c\u5bf9\u5e94\u7684\u884c\u4e3a\u662f\u76f8\u4e92\u72ec\u7acb\u3001\u6ca1\u6709\u5173\u8054\u7684\uff0c\u5c01\u88c5\u7684\u4e1a\u52a1\u903b\u8f91\u53ef\u80fd\u5dee\u522b\u5f88\u5927\u6beb\u65e0\u5173\u8054\uff0c\u76f8\u4e92\u4e4b\u95f4\u4e0d\u53ef\u66ff\u6362\u3002\u4f46\u662f\u7b56\u7565\u6a21\u5f0f\u4e2d\u7684\u7b56\u7565\u662f\u5e73\u7b49\u7684\uff0c\u662f\u540c\u4e00\u884c\u4e3a\u7684\u4e0d\u540c\u63cf\u8ff0\u6216\u8005\u5b9e\u73b0\uff0c\u5728\u540c\u4e00\u4e2a\u884c\u4e3a\u53d1\u751f\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u6839\u636e\u5916\u90e8\u6761\u4ef6\u6311\u9009\u4efb\u610f\u4e00\u4e2a\u5b9e\u73b0\u6765\u8fdb\u884c\u5904\u7406\u3002")),(0,a.kt)("h3",{id:"82-\u7b56\u7565\u6a21\u5f0f\u548c\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f"},"8.2 \u7b56\u7565\u6a21\u5f0f\u548c\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f"),(0,a.kt)("p",null,"\u7b56\u7565\u6a21\u5f0f\u548c\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f\u7684\u4f5c\u7528\u6bd4\u8f83\u7c7b\u4f3c\uff0c\u4f46\u662f\u7ed3\u6784\u548c\u5b9e\u73b0\u65b9\u5f0f\u6709\u70b9\u4e0d\u4e00\u6837\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b56\u7565\u6a21\u5f0f \u8ba9\u6211\u4eec\u5728\u7a0b\u5e8f\u8fd0\u884c\u7684\u65f6\u5019\u52a8\u6001\u5730\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u7b97\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f \u662f\u5728\u5b50\u7c7b\u5b9a\u4e49\u7684\u65f6\u5019\u5c31\u5df2\u7ecf\u786e\u5b9a\u4e86\u4f7f\u7528\u7684\u7b97\u6cd5\u3002")))}p.isMDXComponent=!0}}]);