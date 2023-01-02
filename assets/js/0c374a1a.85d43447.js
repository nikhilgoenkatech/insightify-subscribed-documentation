"use strict";(self.webpackChunkdt_adoptionoverview_extension=self.webpackChunkdt_adoptionoverview_extension||[]).push([[335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},i="Quick Links",s={unversionedId:"Quick-Links",id:"Quick-Links",title:"Quick Links",description:"License and bill of materials",source:"@site/docs/Quick-Links.md",sourceDirName:".",slug:"/Quick-Links",permalink:"/insightify-documentation-subscribed/docs/Quick-Links",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Quick-Links.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/insightify-documentation-subscribed/docs/Guides"},next:{title:"Troubleshooting guide",permalink:"/insightify-documentation-subscribed/docs/Troubleshooting"}},l={},u=[{value:"License and bill of materials",id:"license-and-bill-of-materials",level:3},{value:"How long does it take for data to reflect?",id:"how-long-does-it-take-for-data-to-reflect",level:3},{value:"License consumption",id:"license-consumption",level:4},{value:"Environment Flags",id:"environment-flags",level:4},{value:"Problem Data and Application Data",id:"problem-data-and-application-data",level:4},{value:"Consumption Data per management zone",id:"consumption-data-per-management-zone",level:4},{value:"Consumption Data per host group",id:"consumption-data-per-host-group",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-links"},"Quick Links"),(0,a.kt)("h3",{id:"license-and-bill-of-materials"},"License and bill of materials"),(0,a.kt)("p",null,"Extension would lead to DDU consumption. A fully configured endpoint would consume ",(0,a.kt)("strong",{parentName:"p"},"350 DDUs")," a month for about ",(0,a.kt)("strong",{parentName:"p"},"15 management zones and 10 host-group"),". For more details on DDU consumption, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://www.dynatrace.com/support/help/shortlink/metric-cost-calculation"},"help link"),"."),(0,a.kt)("h3",{id:"how-long-does-it-take-for-data-to-reflect"},"How long does it take for data to reflect?"),(0,a.kt)("p",null,"Extension has different set of metrics which are consumed at different time interval considering/assuming the criticality of a specific group of metrics."),(0,a.kt)("h4",{id:"license-consumption"},"License consumption"),(0,a.kt)("p",null,"The license consumption is updated every hour including the consumption per management zone, host group."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: The consumption metrics are pulled using API, so if the extension is not running the data would be lost during that time. So, this consumption data should be considered as a guideline and more accurate consumption refer to ",(0,a.kt)("a",{parentName:"p",href:"https://myaccount.dynatrace.com"},"https://myaccount.dynatrace.com")," (SaaS) or CMC.  ")),(0,a.kt)("h4",{id:"environment-flags"},"Environment Flags"),(0,a.kt)("p",null,"The environment/key feature flags will be pulled once the ",(0,a.kt)("strong",{parentName:"p"},"Capture adoption flags")," is set to ",(0,a.kt)("strong",{parentName:"p"},"Yes"),". These flags are unlikely to be changed frequently for a matured environment, so, these are pulled and updated every 7 days. The first set of environment flag would be available only after 7-days. Lastly, the dashboard considers last 7 days while showing the trend for these metrics."),(0,a.kt)("h4",{id:"problem-data-and-application-data"},"Problem Data and Application Data"),(0,a.kt)("p",null,"The key feature flags will be pulled once the ",(0,a.kt)("strong",{parentName:"p"},"Capture problem data")," is set to ",(0,a.kt)("strong",{parentName:"p"},"Yes"),". The problem related metrics are pulled and updated every day once every 24-hours. The first set of problem data and application data would be available after 24-hours. Lastly, the dashboard considers the dashboard considers last 24-hours while showing the trend for these metrics."),(0,a.kt)("h4",{id:"consumption-data-per-management-zone"},"Consumption Data per management zone"),(0,a.kt)("p",null,"The consumption metrics (consumption.hostUnits, consumption.demUnits, consumption.ddus) is pulled and pushed every hour."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: If there are hosts appearing in multiple management zone, the consumption will be calculated multiple times. So, we recommend to use consumption data per management zones only for reference and not billing.  ")),(0,a.kt)("h4",{id:"consumption-data-per-host-group"},"Consumption Data per host group"),(0,a.kt)("p",null,"The consumption metrics per host group(consumption.hostUnits) is pulled and pushed every hour."))}p.isMDXComponent=!0}}]);