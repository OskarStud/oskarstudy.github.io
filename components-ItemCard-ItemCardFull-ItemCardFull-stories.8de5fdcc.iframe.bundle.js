(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[464],{"./src/components/ItemCard/ItemCardFull/ItemCardFull.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={title:"ItemCardFull",component:__webpack_require__("./src/components/ItemCard/ItemCardFull/ItemCardFull.tsx").B};var Default={args:{imgSrc:["1","2","3"],label:"Default label of item",rate:"4.6/5.0",reviews:"200 отзывов",sold:"12 продано",price:"12400",description:"Description of this item",badges:["bestseller","Выбор покупателей"]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    imgSrc: ['1', '2', '3'],\n    label: 'Default label of item',\n    rate: '4.6/5.0',\n    reviews: '200 отзывов',\n    sold: '12 продано',\n    price: '12400',\n    description: 'Description of this item',\n    badges: ['bestseller', 'Выбор покупателей']\n  }\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[17].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Badge/Badge.module.scss":module=>{module.exports={badge:"badge__Sxq73"}},"./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[17].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Buttons/ButtonIntoCart/ButtonIntoCart.module.scss":module=>{module.exports={buttonIntoCart:"buttonIntoCart__wlxvK",buy:"buy__JxGLw",count:"count__RVb_a",disabled:"disabled__rrUoZ"}},"./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[17].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Buttons/SimpleButton/SimpleButton.module.scss":module=>{module.exports={simpleButton:"simpleButton__BP4Ka"}},"./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[17].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/ItemCard/ItemCardFull/ItemCardFull.module.scss":module=>{module.exports={itemCardFull:"itemCardFull__hZ4xG",selected:"selected__fmBs1",content:"content__bUF_n",images:"images__pb3eW",mainImage:"mainImage__h_iLx",imageList:"imageList__IvDaa",itemCardDetail:"itemCardDetail__WNNXR",itemInformation:"itemInformation__KJh43",badgeList:"badgeList__ommwb",reviewSold:"reviewSold__TvVRX"}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier:identifier,updater:updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);return api.update(obj),function updater(newObj){newObj?(newObj.css!==obj.css||newObj.media!==obj.media||newObj.sourceMap!==obj.sourceMap||newObj.supports!==obj.supports||newObj.layer!==obj.layer)&&api.update(obj=newObj):api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}function insertBySelector(insert,style){var target=getTarget(insert);if(!target)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}module.exports=insertBySelector},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}module.exports=insertStyleElement},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}module.exports=setAttributesWithoutAttributes},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){apply(styleElement,options,obj)},remove:function remove(){removeStyleElement(styleElement)}}}module.exports=domAPI},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}module.exports=styleTagTransform},"./src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>Badge1});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Badge_module=__webpack_require__("./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[17].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Badge/Badge.module.scss"),Badge_module_default=__webpack_require__.n(Badge_module),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Badge_module_default(),options),Badge_module_default()&&Badge_module_default().locals&&Badge_module_default().locals;var Badge1=function(param){var _param_text=param.text,_param_bgColor=param.bgColor,_param_color=param.color;return react.createElement("div",{className:Badge_module.badge,style:{backgroundColor:void 0===_param_bgColor?"var(--blaze-orange-50)":_param_bgColor,color:void 0===_param_color?"var(--primary-800)":_param_color}},void 0===_param_text?"Badge":_param_text)};try{Badge1.displayName="Badge",Badge1.__docgenInfo={description:"",displayName:"Badge",props:{text:{defaultValue:{value:"Badge"},description:"",name:"text",required:!1,type:{name:"string"}},bgColor:{defaultValue:{value:"var(--blaze-orange-50)"},description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:{value:"var(--primary-800)"},description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge1.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Badge/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>_Badge__WEBPACK_IMPORTED_MODULE_0__.C});var _Badge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Badge/Badge.tsx");try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{text:{defaultValue:{value:"Badge"},description:"",name:"text",required:!1,type:{name:"string"}},bgColor:{defaultValue:{value:"var(--blaze-orange-50)"},description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:{value:"var(--primary-800)"},description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Buttons/ButtonIntoCart/ButtonIntoCart.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>ButtonIntoCart});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ButtonIntoCart_module=__webpack_require__("./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[17].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Buttons/ButtonIntoCart/ButtonIntoCart.module.scss"),ButtonIntoCart_module_default=__webpack_require__.n(ButtonIntoCart_module),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(ButtonIntoCart_module_default(),options),ButtonIntoCart_module_default()&&ButtonIntoCart_module_default().locals&&ButtonIntoCart_module_default().locals;var ButtonIntoCart=function(param){var _param_count=param.count,count=void 0===_param_count?0:_param_count;return param.disabled,react.createElement("div",{className:ButtonIntoCart_module.disabled?"disabled":""},0==count?react.createElement("div",{className:[ButtonIntoCart_module.buttonIntoCart,ButtonIntoCart_module.buy].join(" ")},react.createElement("span",null,"В корзину")):react.createElement("div",{className:[ButtonIntoCart_module.buttonIntoCart,ButtonIntoCart_module.count].join(" ")},react.createElement("span",null,"Количество ",react.createElement("button",null,"+")," ",count," ",react.createElement("button",null,"-"))))};try{ButtonIntoCart.displayName="ButtonIntoCart",ButtonIntoCart.__docgenInfo={description:"",displayName:"ButtonIntoCart",props:{count:{defaultValue:{value:"0"},description:"",name:"count",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Buttons/ButtonIntoCart/ButtonIntoCart.tsx#ButtonIntoCart"]={docgenInfo:ButtonIntoCart.__docgenInfo,name:"ButtonIntoCart",path:"src/components/Buttons/ButtonIntoCart/ButtonIntoCart.tsx#ButtonIntoCart"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Buttons/ButtonIntoCart/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>_ButtonIntoCart__WEBPACK_IMPORTED_MODULE_0__.J});var _ButtonIntoCart__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Buttons/ButtonIntoCart/ButtonIntoCart.tsx")},"./src/components/Buttons/SimpleButton/SimpleButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>SimpleButton});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),SimpleButton_module=__webpack_require__("./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[17].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Buttons/SimpleButton/SimpleButton.module.scss"),SimpleButton_module_default=__webpack_require__.n(SimpleButton_module),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(SimpleButton_module_default(),options),SimpleButton_module_default()&&SimpleButton_module_default().locals&&SimpleButton_module_default().locals;var SimpleButton=function(param){var _param_text=param.text;return react.createElement("div",{className:SimpleButton_module.simpleButton},void 0===_param_text?"Simple Button":_param_text)};try{SimpleButton.displayName="SimpleButton",SimpleButton.__docgenInfo={description:"",displayName:"SimpleButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Buttons/SimpleButton/SimpleButton.tsx#SimpleButton"]={docgenInfo:SimpleButton.__docgenInfo,name:"SimpleButton",path:"src/components/Buttons/SimpleButton/SimpleButton.tsx#SimpleButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Buttons/SimpleButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>_SimpleButton__WEBPACK_IMPORTED_MODULE_0__.r});var _SimpleButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Buttons/SimpleButton/SimpleButton.tsx")},"./src/components/ItemCard/ItemCardFull/ItemCardFull.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>ItemCardFull});var react=__webpack_require__("./node_modules/react/index.js"),Badge1=__webpack_require__("./src/components/Badge/index.tsx"),ButtonIntoCart=__webpack_require__("./src/components/Buttons/ButtonIntoCart/index.ts");__webpack_require__("./src/components/Buttons/SimpleButton/index.ts");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ItemCardFull_module=__webpack_require__("./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[17].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/ItemCard/ItemCardFull/ItemCardFull.module.scss"),ItemCardFull_module_default=__webpack_require__.n(ItemCardFull_module),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(ItemCardFull_module_default(),options),ItemCardFull_module_default()&&ItemCardFull_module_default().locals&&ItemCardFull_module_default().locals;var ItemCardFull=function(param){var _param_label=param.label,_param_reviews=param.reviews,_param_rate=param.rate,_param_sold=param.sold,_param_price=param.price,_param_description=param.description;return react.createElement("div",{className:ItemCardFull_module.itemCardFull},react.createElement("div",{className:ItemCardFull_module.content},react.createElement("div",{className:ItemCardFull_module.images},react.createElement("div",{className:ItemCardFull_module.mainImage},react.createElement("img",{src:__webpack_require__("./src/img/mouseMainFull.png")})),react.createElement("div",{className:ItemCardFull_module.imageList},react.createElement("img",{className:ItemCardFull_module.selected,src:__webpack_require__("./src/img/mouse1.png")}),react.createElement("img",{src:__webpack_require__("./src/img/mouse2.png")}),react.createElement("img",{src:__webpack_require__("./src/img/mouse3.png")})))),react.createElement("div",{className:ItemCardFull_module.itemCardDetail},react.createElement("div",{className:ItemCardFull_module.itemInformation},react.createElement("div",{className:ItemCardFull_module.labelBadge},react.createElement("div",{className:ItemCardFull_module.labelReviewSold},react.createElement("div",{className:ItemCardFull_module.label},react.createElement("h4",null,void 0===_param_label?"Rexus X Pro 5":_param_label)),react.createElement("div",{className:ItemCardFull_module.reviewSold},react.createElement("p",null,void 0===_param_rate?"5.0/5.0":_param_rate),react.createElement("span",{className:ItemCardFull_module.vr}),react.createElement("p",null,void 0===_param_reviews?"200 отзывов":_param_reviews),react.createElement("span",{className:ItemCardFull_module.vr}),react.createElement("p",null,void 0===_param_sold?"20 продано":_param_sold))),react.createElement("div",{className:ItemCardFull_module.badgeList},react.createElement(Badge1.C,{text:"Mouse"}),react.createElement(Badge1.C,{text:"Best Seller",color:"var(--violet-800)",bgColor:"var(--violet-50)"}))),react.createElement("div",{className:ItemCardFull_module.price},void 0===_param_price?"2 500 руб.":_param_price),react.createElement("div",{className:ItemCardFull_module.description},void 0===_param_description?"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti dolore dolorum eaque expedita fugiat id molestias nostrum numquam odio odit pariatur, quibusdam quidem reiciendis similique totam vel vero vitae!":_param_description),react.createElement(ButtonIntoCart.J,{disabled:!0}))))};try{ItemCardFull.displayName="ItemCardFull",ItemCardFull.__docgenInfo={description:"",displayName:"ItemCardFull",props:{imgSrc:{defaultValue:null,description:"",name:"imgSrc",required:!1,type:{name:"string[]"}},label:{defaultValue:{value:"Rexus X Pro 5"},description:"",name:"label",required:!1,type:{name:"string"}},rate:{defaultValue:{value:"5.0/5.0"},description:"",name:"rate",required:!1,type:{name:"string"}},reviews:{defaultValue:{value:"200 отзывов"},description:"",name:"reviews",required:!1,type:{name:"string"}},sold:{defaultValue:{value:"20 продано"},description:"",name:"sold",required:!1,type:{name:"string"}},price:{defaultValue:{value:"2 500 руб."},description:"",name:"price",required:!1,type:{name:"string"}},description:{defaultValue:{value:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti dolore dolorum eaque expedita fugiat id molestias nostrum numquam odio odit pariatur, quibusdam quidem reiciendis similique totam vel vero vitae!"},description:"",name:"description",required:!1,type:{name:"string"}},badges:{defaultValue:null,description:"",name:"badges",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ItemCard/ItemCardFull/ItemCardFull.tsx#ItemCardFull"]={docgenInfo:ItemCardFull.__docgenInfo,name:"ItemCardFull",path:"src/components/ItemCard/ItemCardFull/ItemCardFull.tsx#ItemCardFull"})}catch(__react_docgen_typescript_loader_error){}},"./src/img/mouse1.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/mouse1.fad881be.png"},"./src/img/mouse2.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/mouse2.a1fec608.png"},"./src/img/mouse3.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/mouse3.5103cc67.png"},"./src/img/mouseMainFull.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/mouseMainFull.e22fa249.png"}}]);