(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[799],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Introduction.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Introduction});var _g,colors_g,comments_g,direction_g,flow_g,plugin_g,repo_g,stackalt_g,react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let code_brackets=function SvgCodeBrackets(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},props),_g||(_g=react.createElement("g",{fill:"none",fillRule:"evenodd"},react.createElement("path",{fill:"#87E6E5",d:"M11.414 12c.347 0 .586.506.586 1.378v4.117l-5.565 5.889a1.65 1.65 0 0 0 0 2.232L12 31.505v4.117c0 .872-.24 1.378-.586 1.378-.141 0-.3-.084-.469-.262L.435 25.616a1.65 1.65 0 0 1 0-2.232l10.51-11.122c.168-.178.328-.262.469-.262m25.172 0c.141 0 .3.084.469.262l10.51 11.122c.58.614.58 1.618 0 2.232l-10.51 11.122c-.168.178-.328.262-.469.262-.347 0-.586-.506-.586-1.378v-4.117l5.565-5.889c.58-.614.58-1.618 0-2.232L36 17.495v-4.117c0-.872.24-1.378.586-1.378"}),react.createElement("rect",{width:35.57,height:4,x:5.009,y:22.662,fill:"#A0DB77",rx:2,transform:"rotate(-75 22.794 24.662)"}))))};function colors_extends(){return(colors_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let colors=function SvgColors(props){return react.createElement("svg",colors_extends({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},props),colors_g||(colors_g=react.createElement("g",{fill:"none",fillRule:"evenodd"},react.createElement("circle",{cx:23.763,cy:16.192,r:13.271,fill:"#FC521F",opacity:.6}),react.createElement("circle",{cx:15.468,cy:32.308,r:13.271,fill:"#66BF3C",opacity:.6}),react.createElement("path",{fill:"#FF5F95",d:"M15.468 19.036c6.075 0 11.197 4.082 12.772 9.653a13.2 13.2 0 0 1-4.477.775c-6.075 0-11.197-4.082-12.772-9.653a13.2 13.2 0 0 1 4.477-.775"}),react.createElement("circle",{cx:32.532,cy:32.308,r:13.271,fill:"#1EA7FD",opacity:.6}),react.createElement("path",{fill:"#87E6E5",d:"M24 22.142a13.24 13.24 0 0 1 4.74 10.166c0 4.08-1.842 7.731-4.74 10.166a13.24 13.24 0 0 1-4.74-10.166c0-4.026 1.793-7.634 4.624-10.068Z"}),react.createElement("path",{fill:"#FBD178",d:"M32.532 19.036c1.41 0 2.768.22 4.043.627-1.526 5.647-6.684 9.8-12.812 9.8-1.41 0-2.77-.22-4.044-.627 1.526-5.646 6.684-9.8 12.813-9.8"}),react.createElement("path",{fill:"#FFF",d:"m24 22.142.012.01q.245.205.477.421l-.1-.091q.117.105.23.214l-.13-.123q.12.112.237.225l-.106-.102q.106.102.21.205l-.104-.103q.129.127.255.256l-.15-.153.227.232q.384.402.735.835l-.07-.085q.114.137.223.278l-.153-.193q.105.13.205.26l-.052-.067.182.239-.13-.171q.102.133.2.268l-.07-.097q.116.156.227.315l-.156-.218q.104.142.203.286l-.047-.068q.087.124.172.252l-.125-.184q.098.144.194.29.21.323.403.659l-.058-.1q.084.144.165.292L27 25.732q.083.144.162.292.163.303.31.615a13 13 0 0 1 .396.926l-.063-.161q.053.13.102.264l-.039-.103q.06.154.115.31l-.076-.207q.06.162.117.326l-.041-.118.095.279-.054-.16q.058.168.112.34l-.058-.18q.051.155.099.313l.065.221-.037.014.036-.014q-.433.155-.88.281h.001q-.437.123-.886.216l.064-.013q-.223.047-.448.087l.384-.074q-.207.045-.417.08l.033-.006a13 13 0 0 1-.465.074l.432-.068q-.234.041-.47.073l.038-.005q-.2.028-.4.05l.361-.045q-.231.032-.466.056l.105-.01a13 13 0 0 1-.509.045l.404-.035q-.232.024-.467.04l.063-.005q-.233.017-.47.025l.407-.02q-.216.013-.434.021h.027q-.24.008-.484.008l-.45-.008a13 13 0 0 1-.97-.067l.046.004a13 13 0 0 1-.424-.05l.379.046a13 13 0 0 1-.455-.057l.076.011a13 13 0 0 1-.485-.075l.409.064a13 13 0 0 1-.458-.073l.05.01q-.195-.035-.388-.074l.338.064a13 13 0 0 1-.458-.089l.12.025a13 13 0 0 1-.496-.111l.376.086a13 13 0 0 1-.44-.102l.064.016q-.206-.051-.41-.108l.346.092q-.21-.052-.416-.111l-.398-.12.07-.248q.042-.147.088-.292l-.029.093q.06-.199.129-.395l-.1.302q.052-.165.108-.326v-.001q.195-.564.44-1.105l-.08.179a13 13 0 0 1 .138-.31l-.059.13.113-.244-.054.115q.077-.166.158-.328l-.104.213q.075-.157.153-.312l-.05.1q.062-.124.126-.246a13 13 0 0 1 .88-1.448l-.117.17q.088-.13.18-.259l-.063.09q.08-.116.163-.23l-.1.14q.11-.156.226-.308l-.126.169q.095-.13.193-.257.475-.618 1.017-1.176l-.19.2q.112-.12.225-.235l-.035.035.196-.197-.161.162q.115-.118.235-.234l-.074.072q.1-.1.204-.197l-.13.125q.144-.14.294-.277l-.164.152q.108-.102.22-.202l-.056.05q.133-.122.27-.24l.117-.1z"}))))};function comments_extends(){return(comments_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let comments=function SvgComments(props){return react.createElement("svg",comments_extends({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},props),comments_g||(comments_g=react.createElement("g",{fill:"none",fillRule:"evenodd"},react.createElement("path",{fill:"#96D07C",d:"M2.527 17.92a.44.44 0 0 1-.234.08C2.12 18 2 17.844 2 17.575V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-.487-.03z"}),react.createElement("path",{fill:"#73E1E0",d:"M7.51 44.97 2.528 47.92a.44.44 0 0 1-.234.08C2.12 48 2 47.844 2 47.575V35a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-.49-.03"}),react.createElement("path",{fill:"#FFD476",d:"M46 19.5v13.575c0 .269-.12.425-.293.425a.44.44 0 0 1-.234-.08l-4.984-3.95q-.24.03-.489.03H18a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4"}))))};function direction_extends(){return(direction_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let direction=function SvgDirection(props){return react.createElement("svg",direction_extends({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},props),direction_g||(direction_g=react.createElement("g",{fill:"none",fillRule:"evenodd"},react.createElement("path",{fill:"#FFD476",d:"m23.492 33.603-20.554-2.17a1 1 0 0 1-.567-1.735L34.261.72a1 1 0 0 1 1.612 1.082L24.536 32.951a1 1 0 0 1-1.044.652"}),react.createElement("path",{fill:"#FFC445",d:"M24.316 33.288a1 1 0 0 1-.247-1.063L35.092 1.94a1 1 0 0 1 1.937.269l3.215 43.952a1 1 0 0 1-1.69.794z"}))))};function flow_extends(){return(flow_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let flow=function SvgFlow(props){return react.createElement("svg",flow_extends({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},props),flow_g||(flow_g=react.createElement("g",{fill:"none",fillRule:"nonzero"},react.createElement("path",{fill:"#79C9FC",d:"M30 29a5 5 0 0 0 5-5c0-9.389-7.611-17-17-17S1 14.611 1 24s7.611 17 17 17c1.333 0 2.645-.153 3.915-.453q-3.61-1.822-5.87-4.416c-1.939-2.228-3.276-5.058-4.016-8.475A7 7 0 1 1 25 24c.001 2.125 2.705 5 5.001 5"}),react.createElement("path",{fill:"#FFC445",d:"M18 19a5 5 0 0 0-5 5c0 9.389 7.611 17 17 17s17-7.611 17-17S39.389 7 30 7c-1.333 0-2.645.153-3.915.453 2.405 1.215 4.51 2.569 5.87 4.416C33.937 14.563 37 20.813 37 24a7 7 0 0 1-14 0c-.023-2.344-2.704-5-5-5"}))))};function plugin_extends(){return(plugin_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let assets_plugin=function SvgPlugin(props){return react.createElement("svg",plugin_extends({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},props),plugin_g||(plugin_g=react.createElement("g",{fill:"none",fillRule:"evenodd"},react.createElement("path",{fill:"#79C9FC",d:"M26 15.4v6.069a2.5 2.5 0 0 1-.413.044.26.26 0 0 1-.21-.092l-.11-.139-.135-.116a4.93 4.93 0 0 0-3.236-1.203c-2.692 0-4.896 2.145-4.896 4.817s2.204 4.818 4.896 4.818c1.301 0 2.419-.31 3.227-1.237.331-.38.445-.454.464-.454.095 0 .248.017.413.045V33a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V15a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4z"}),react.createElement("path",{fill:"#87E6E5",d:"M28 32.571c0 .79.657 1.429 1.468 1.429h17.064c.81 0 1.468-.64 1.468-1.429V15.43c0-.79-.658-1.429-1.468-1.429H29.468c-.81 0-1.468.64-1.468 1.429v6.407c-.067.43-.143.81-.254.972-.321.476-1.506.705-2.159.705a2.26 2.26 0 0 1-1.766-.836 2.93 2.93 0 0 0-1.925-.714c-1.6 0-2.896 1.262-2.896 2.817s1.296 2.818 2.896 2.818c.644 0 1.344-.12 1.72-.551.524-.6 1.12-1.14 1.971-1.14.653 0 2.004.27 2.236.705.059.111.117.31.177.544z"}))))};function repo_extends(){return(repo_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let repo=function SvgRepo(props){return react.createElement("svg",repo_extends({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},props),repo_g||(repo_g=react.createElement("g",{fill:"none",fillRule:"evenodd"},react.createElement("path",{fill:"#B7F0EF",d:"m27.222 9.045 14-2.777A4 4 0 0 1 46 10.192v22.39a4 4 0 0 1-3.222 3.923l-14 2.777A4 4 0 0 1 24 35.358v-22.39a4 4 0 0 1 3.222-3.923",opacity:.7}),react.createElement("path",{fill:"#87E6E5",d:"m6.778 6.268 14 2.777A4 4 0 0 1 24 12.97v22.39a4 4 0 0 1-4.778 3.923l-14-2.777A4 4 0 0 1 2 32.58v-22.39a4 4 0 0 1 4.778-3.923"}),react.createElement("path",{fill:"#61C1FD",d:"M22 10q1.75.344 2.554 1.188.804.843 1.446 3.374V39.22q0 2.547 1.272 6.125l-2.718-3.469-1.572 3.469Q22 42.125 22 39.437z"}))))};function stackalt_extends(){return(stackalt_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let stackalt=function SvgStackalt(props){return react.createElement("svg",stackalt_extends({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},props),stackalt_g||(stackalt_g=react.createElement("g",{fill:"none",fillRule:"evenodd"},react.createElement("path",{fill:"#FFAE00",d:"M23.863 0v48L3.323 36.25l-.001-24.3zm.004 0 20.541 11.95-.001 24.3L23.867 48z",opacity:.196}),react.createElement("path",{fill:"#66BF3C",d:"m8.99 28.72 7.969-4.637a14 14 0 0 1 14.082 0l7.969 4.637a4 4 0 0 1 .056 6.881l-7.828 4.728a14 14 0 0 1-14.476 0l-7.828-4.728a4 4 0 0 1 .056-6.881",opacity:.5}),react.createElement("path",{fill:"#FFAE00",d:"m8.99 20.826 7.969-4.637a14 14 0 0 1 14.082 0l7.969 4.637a4 4 0 0 1 .056 6.881l-7.828 4.728a14 14 0 0 1-14.476 0l-7.828-4.728a4 4 0 0 1 .056-6.881",opacity:.5}),react.createElement("path",{fill:"#FC521F",d:"m8.99 12.932 7.969-4.637a14 14 0 0 1 14.082 0l7.969 4.637a4 4 0 0 1 .056 6.881l-7.828 4.728a14 14 0 0 1-14.476 0l-7.828-4.728a4 4 0 0 1 .056-6.88",opacity:.5}))))};function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Example/Introduction"}),"\n",(0,jsx_runtime.jsx)("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 700;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span,
    .link-item p {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"welcome-to-storybook",children:"Welcome to Storybook"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",(0,jsx_runtime.jsx)(_components.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Browse example stories now by navigating to them in the sidebar.\nView their code in the ",(0,jsx_runtime.jsx)(_components.code,{children:"stories"})," directory to learn how they work.\nWe recommend building UIs with a ",(0,jsx_runtime.jsx)(_components.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,jsx_runtime.jsx)(_components.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Configure"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"link-list",children:[(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:assets_plugin,alt:"plugin"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Presets for popular tools"}),"\nEasy setup for TypeScript, SCSS and more."]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:stackalt,alt:"Build"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Build configuration"}),"\nHow to customize webpack and Babel"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:colors,alt:"colors"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Styling"}),"\nHow to load and configure CSS libraries"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:flow,alt:"flow"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Data"}),"\nProviders and mocking for data libraries"]})})]})]}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Learn"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"link-list",children:[(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:repo,alt:"repo"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Storybook documentation"}),"\nConfigure, customize, and extend"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:direction,alt:"direction"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"In-depth guides"}),"\nBest practices from leading teams"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:code_brackets,alt:"code"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"GitHub project"}),"\nView the source and add issues"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:comments,alt:"comments"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Discord chat"}),"\nChat with maintainers and the community"]})})]})]}),"\n",(0,jsx_runtime.jsx)("div",{className:"tip-wrapper",children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ","\n",(0,jsx_runtime.jsx)("code",{children:"stories/Introduction.stories.mdx"})]})})]})}let Introduction=function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=stories-Introduction-mdx.60b33bbf.iframe.bundle.js.map