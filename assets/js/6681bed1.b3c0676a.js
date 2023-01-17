"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[76],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>i,MDXProvider:()=>s,mdx:()=>N,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,l({},t,{components:n}))}},u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),s=a,c=p["".concat(d,".").concat(s)]||p[s]||x[s]||l;return n?r.createElement(c,m(m({ref:t},i),{},{components:n})):r.createElement(c,m({ref:t},i))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,d=new Array(l);d[0]=c;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:a,d[1]=m;for(var i=2;i<l;i++)d[i]=n[i];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>x,frontMatter:()=>m,metadata:()=>i,toc:()=>u});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),d=["components"],m={id:"cli",title:"Metro CLI Options"},o=void 0,i={unversionedId:"cli",id:"cli",title:"Metro CLI Options",description:"The metro command line runner has a number of useful options. You can run `metro",source:"@site/../docs/CLI.md",sourceDirName:".",slug:"/cli",permalink:"/metro/docs/cli",draft:!1,editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/CLI.md",tags:[],version:"current",lastUpdatedAt:1673951509,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"cli",title:"Metro CLI Options"},sidebar:"docs",previous:{title:"Configuring Metro",permalink:"/metro/docs/configuration"},next:{title:"Troubleshooting",permalink:"/metro/docs/troubleshooting"}},p={},u=[{value:"<code>build &lt;entry&gt;</code>",id:"build-entry",level:2},{value:"Options",id:"options",level:3},{value:"<code>serve</code>",id:"serve",level:2},{value:"<code>get-dependencies</code>",id:"get-dependencies",level:2},{value:"Options",id:"options-1",level:3}],s={toc:u};function x(e){var t=e.components,n=(0,a.Z)(e,d);return(0,l.mdx)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"metro")," command line runner has a number of useful options. You can run ",(0,l.mdx)("inlineCode",{parentName:"p"},"metro\n--help")," to view all available options. Here is a brief overview:"),(0,l.mdx)("h2",{id:"build-entry"},(0,l.mdx)("inlineCode",{parentName:"h2"},"build <entry>")),(0,l.mdx)("p",null,"Generates a JavaScript bundle containing the specified entrypoint and its descendants."),(0,l.mdx)("h3",{id:"options"},"Options"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Option"),(0,l.mdx)("th",{parentName:"tr",align:null},"Alias"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"out")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"O")),(0,l.mdx)("td",{parentName:"tr",align:null},"File name where to store the output"),(0,l.mdx)("td",{parentName:"tr",align:null},"String")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"platform")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"p")),(0,l.mdx)("td",{parentName:"tr",align:null},"Which platform to bundle for"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"web"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"android"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"ios"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"minify")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"z")),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether Metro should minify the bundle"),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"dev")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"g")),(0,l.mdx)("td",{parentName:"tr",align:null},"Create a development version of the build (",(0,l.mdx)("inlineCode",{parentName:"td"},"process.env.NODE_ENV = 'development'"),")"),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"config")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"c")),(0,l.mdx)("td",{parentName:"tr",align:null},"Location of the ",(0,l.mdx)("inlineCode",{parentName:"td"},"metro.config.js")," to use"),(0,l.mdx)("td",{parentName:"tr",align:null},"String")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"max-workers")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"j")),(0,l.mdx)("td",{parentName:"tr",align:null},"The number of workers Metro should parallelize the transformer on"),(0,l.mdx)("td",{parentName:"tr",align:null},"Number")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"project-roots")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"P")),(0,l.mdx)("td",{parentName:"tr",align:null},"The root folder of your project"),(0,l.mdx)("td",{parentName:"tr",align:null},"Array")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"source-map")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether Metro should generate source maps"),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"source-map-url")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"URL where the source map can be found"),(0,l.mdx)("td",{parentName:"tr",align:null},"String")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"legacy-bundler")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether Metro should use the legacy bundler"),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean")))),(0,l.mdx)("h2",{id:"serve"},(0,l.mdx)("inlineCode",{parentName:"h2"},"serve")),(0,l.mdx)("p",null,"Starts Metro on the given port, building bundles on the fly."),(0,l.mdx)("h2",{id:"get-dependencies"},(0,l.mdx)("inlineCode",{parentName:"h2"},"get-dependencies")),(0,l.mdx)("p",null,"Lists dependencies."),(0,l.mdx)("h3",{id:"options-1"},"Options"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Option"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"entry-file")),(0,l.mdx)("td",{parentName:"tr",align:null},"Absolute path to the root JS file")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"output")),(0,l.mdx)("td",{parentName:"tr",align:null},"File name where to store the output, ex. /tmp/dependencies.txt")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"platform")),(0,l.mdx)("td",{parentName:"tr",align:null},"The platform extension used for selecting modules")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"transformer")),(0,l.mdx)("td",{parentName:"tr",align:null},"Specify a custom transformer to be used")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"max-workers")),(0,l.mdx)("td",{parentName:"tr",align:null},"Specifies the maximum number of workers the worker-pool will spawn for transforming files. This defaults to the number of the cores available on your machine.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"dev")),(0,l.mdx)("td",{parentName:"tr",align:null},"If false, skip all dev-only code path")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"verbose")),(0,l.mdx)("td",{parentName:"tr",align:null},"Enables logging")))))}x.isMDXComponent=!0}}]);