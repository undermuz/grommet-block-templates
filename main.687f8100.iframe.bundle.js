(self.webpackChunk_undermuz_grommet_block_templates=self.webpackChunk_undermuz_grommet_block_templates||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/stories/AllBlocks.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExamplePageBuilder:()=>ExamplePageBuilder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AllBlocks_stories});__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/grommet/es6/components/Box/Box.js"),Grommet=__webpack_require__("./node_modules/grommet/es6/components/Grommet/Grommet.js"),Heading=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/grommet/es6/components/Heading/Heading.js")),Paragraph=__webpack_require__("./node_modules/grommet/es6/components/Paragraph/Paragraph.js"),Button=__webpack_require__("./node_modules/grommet/es6/components/Button/Button.js");const defaults={title:"Мы лучшие в мире!",subtitle:"Закажите сейчас и получите скидку 50%",button_text:"Заказать",show_button:!0,show_adv:!0,image:null,advantage:[{id:1,title:"С нами проще",image:""},{id:2,title:"Выгода при первой покупке",image:""},{id:3,title:"Рост на 146%",image:""}]};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),exampleButtonClick=function exampleButtonClick(){alert("click")},Offer=function Offer(props){var _props$value=props.value,value=void 0===_props$value?defaults:_props$value,_props$onButtonClick=props.onButtonClick,onButtonClick=void 0===_props$onButtonClick?exampleButtonClick:_props$onButtonClick,_value$title=value.title,title=void 0===_value$title?defaults.title:_value$title,_value$subtitle=value.subtitle,subtitle=void 0===_value$subtitle?defaults.subtitle:_value$subtitle,_value$show_button=value.show_button,show_button=void 0===_value$show_button?defaults.show_button:_value$show_button,_value$button_text=value.button_text,button_text=void 0===_value$button_text?defaults.button_text:_value$button_text,_value$show_adv=value.show_adv,show_adv=void 0===_value$show_adv?defaults.show_adv:_value$show_adv,_value$advantage=value.advantage,advantage=void 0===_value$advantage?defaults.advantage:_value$advantage;return(0,jsx_runtime.jsxs)(Box.x,{background:{color:"neutral-2",opacity:!0},children:[(0,jsx_runtime.jsxs)(Box.x,{pad:"xlarge",align:"center",children:[(0,jsx_runtime.jsx)(Heading.X,{children:title}),(0,jsx_runtime.jsx)(Paragraph.n,{children:subtitle}),show_button&&(0,jsx_runtime.jsx)(Box.x,{children:(0,jsx_runtime.jsx)(Button.z,{primary:!0,size:"large",onClick:onButtonClick,label:button_text})})]}),show_adv&&advantage.length>0&&(0,jsx_runtime.jsx)(Box.x,{pad:"large",background:{color:"neutral-2"},children:(0,jsx_runtime.jsx)(Box.x,{direction:"row",justify:"around",children:advantage.map((function(item,index){return(0,jsx_runtime.jsxs)(Box.x,{children:[(0,jsx_runtime.jsx)("img",{src:item.image,alt:""}),(0,jsx_runtime.jsx)("span",{children:item.title})]},index)}))})})]})};Offer.displayName="Offer";const _1_view=Offer;try{view.displayName="view",view.__docgenInfo={description:"",displayName:"view",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"IOfferBlockValue"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"(MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/offer/1/view.tsx#view"]={docgenInfo:view.__docgenInfo,name:"view",path:"src/offer/1/view.tsx#view"})}catch(__react_docgen_typescript_loader_error){}var ResponsiveContext=__webpack_require__("./node_modules/grommet/es6/contexts/ResponsiveContext/ResponsiveContext.js"),Grid=__webpack_require__("./node_modules/grommet/es6/components/Grid/Grid.js");const _1_defaults={title:"Приемущества",list:[{title:"Надежность",subtitle:"ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва"},{title:"Скорость",subtitle:"ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва"},{title:"Эффективность",subtitle:"ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва"},{title:"Цена",subtitle:"ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва"},{title:"Гарантия",subtitle:"ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва"},{title:"Справедливость",subtitle:"ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва"}]};var GridText=function GridText(props){props.id;var _props$value=props.value,value=void 0===_props$value?_1_defaults:_props$value,_value$title=value.title,title=void 0===_value$title?"":_value$title,_value$list=value.list,list=void 0===_value$list?[]:_value$list,size=(0,react.useContext)(ResponsiveContext.b);return(0,jsx_runtime.jsxs)(Box.x,{pad:"large",children:[(0,jsx_runtime.jsx)(Box.x,{align:"center",pad:"large",children:(0,jsx_runtime.jsx)("h2",{children:title})}),(0,jsx_runtime.jsx)(Box.x,{pad:"large",children:(0,jsx_runtime.jsx)(Grid.r,{columns:"small"!==size?"small":"100%",gap:"small",children:list.map((function(item,index){return(0,jsx_runtime.jsxs)(Box.x,{pad:"medium",background:{color:"light-2"},round:"small",children:[(0,jsx_runtime.jsx)(Heading.X,{level:4,children:item.title}),(0,jsx_runtime.jsx)(Paragraph.n,{size:"small",children:item.subtitle})]},index)}))})})]})};GridText.displayName="GridText";const grid_text_1_view=GridText;try{view.displayName="view",view.__docgenInfo={description:"",displayName:"view",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"IGridTextValue"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/grid-text/1/view.tsx#view"]={docgenInfo:view.__docgenInfo,name:"view",path:"src/grid-text/1/view.tsx#view"})}catch(__react_docgen_typescript_loader_error){}var Text=__webpack_require__("./node_modules/grommet/es6/components/Text/Text.js"),List=__webpack_require__("./node_modules/grommet/es6/components/List/List.js");const prices_1_defaults={title:"Мы лучшие в мирdddе!",subtitle:"Закажите сейчас и получите скидку 50%",button_text:"Купить",prices:[{id:1,price:5e3,title:"Simple plan",is_active:!1,list:[{id:1,title:"1Lorem ipsum dolor"},{id:2,title:"Sit amet consectetur adipiscing"},{id:3,title:"Elit sed do eiusmod tempor"},{id:4,title:"Incididunt ut labore"},{id:5,title:"Et dolore magna aliqua incididunt"}]},{id:2,price:7e3,title:"Professional plan",is_active:!0,list:[{id:1,title:"Lorem ipsum dolor"},{id:2,title:"Sit amet consectetur adipiscing"},{id:3,title:"Elit sed do eiusmod tempor"},{id:4,title:"Incididunt ut labore"},{id:5,title:"Et dolore magna aliqua incididunt"}]},{id:3,price:12e3,title:"Enterprise plan",is_active:!1,list:[{id:1,title:"Lorem ipsum dolor"},{id:2,title:"Sit amet consectetur adipiscing"},{id:3,title:"Elit sed do eiusmod tempor"},{id:4,title:"Incididunt ut labore"},{id:5,title:"Et dolore magna aliqua incididunt"}]}]};var view_exampleButtonClick=function exampleButtonClick(){alert("click")},PriceItem=function PriceItem(_ref){var data=_ref.data,button_text=_ref.button_text,_ref$onButtonClick=_ref.onButtonClick,onButtonClick=void 0===_ref$onButtonClick?view_exampleButtonClick:_ref$onButtonClick,title=data.title,price=data.price,list=data.list,is_active=data.is_active,color=is_active?"accent-1":"light-1";return(0,jsx_runtime.jsxs)(Box.x,{pad:"medium",basis:"1/3",justify:"center",align:"center",hoverIndicator:{background:{color:"accent-1"}},background:{color,opacity:"strong"},round:"small",children:[(0,jsx_runtime.jsx)(Heading.X,{level:3,size:"small",textAlign:"center",margin:{top:"none",bottom:"small"},children:title}),(0,jsx_runtime.jsxs)(Text.x,{size:"xlarge",textAlign:"center",weight:"bolder",children:[price," ₽"]}),(0,jsx_runtime.jsx)(Text.x,{as:"div",size:"small",textAlign:"center",margin:{top:"small"},children:(0,jsx_runtime.jsx)(List.a,{alignSelf:"center",data:list,border:!1,pad:{vertical:"xxsmall"},children:function children(listItem){return(0,jsx_runtime.jsx)(Text.x,{children:listItem.title},listItem.id)}})}),(0,jsx_runtime.jsx)(Button.z,{margin:{top:"medium"},size:"medium",primary:is_active,onClick:onButtonClick,label:button_text})]})};PriceItem.displayName="PriceItem";var Price1=function Price1(props){props.id;var _props$value=props.value,value=void 0===_props$value?prices_1_defaults:_props$value,_value$title=(props.onButtonClick,value.title),title=void 0===_value$title?prices_1_defaults.title:_value$title,_value$subtitle=value.subtitle,subtitle=void 0===_value$subtitle?prices_1_defaults.subtitle:_value$subtitle,_value$button_text=value.button_text,button_text=void 0===_value$button_text?prices_1_defaults.button_text:_value$button_text,_value$prices=value.prices,prices=void 0===_value$prices?prices_1_defaults.prices:_value$prices;return(0,jsx_runtime.jsx)(Box.x,{background:{color:"light-3"},align:"center",children:(0,jsx_runtime.jsxs)(Box.x,{width:"xxlarge",children:[(0,jsx_runtime.jsxs)(Box.x,{pad:"medium",direction:"column",align:"center",children:[(0,jsx_runtime.jsx)(Box.x,{align:"center",children:(0,jsx_runtime.jsx)(Heading.X,{level:2,children:title})}),(0,jsx_runtime.jsx)(Box.x,{align:"center",children:(0,jsx_runtime.jsx)(Paragraph.n,{children:subtitle})})]}),prices.length>0&&(0,jsx_runtime.jsx)(Box.x,{direction:"row-responsive",justify:"center",align:"start",pad:"small",background:"light-3",gap:"medium",basis:"full",width:"100%",children:prices.map((function(item,index){return(0,jsx_runtime.jsx)(PriceItem,{data:item,button_text},item.id)}))})]})})};Price1.displayName="Price1";const prices_1_view=Price1;try{view.displayName="view",view.__docgenInfo={description:"",displayName:"view",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"IPrice1Value"}},onButtonClick:{defaultValue:{value:'() => {\r\n    alert("click")\r\n}'},description:"",name:"onButtonClick",required:!1,type:{name:"(MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/prices/1/view.tsx#view"]={docgenInfo:view.__docgenInfo,name:"view",path:"src/prices/1/view.tsx#view"})}catch(__react_docgen_typescript_loader_error){}var StatusGood=__webpack_require__("./node_modules/grommet-icons/es6/icons/StatusGood.js");const _2_defaults={title:"Мы лучшие в мирdddе!",subtitle:"Закажите сейчас и получите скидку 50%",button_text:"Купить",prices:[{id:1,price:5e3,title:"Simple plan",is_active:!1,list:[{id:1,title:"Lorem ipsum dolor"},{id:2,title:"Sit amet consectetur adipiscing"},{id:3,title:"Elit sed do eiusmod tempor"},{id:4,title:"Incididunt ut labore"},{id:5,title:"Et dolore magna aliqua incididunt"},{id:6,title:"Elit sed do eiusmod tempor"}]},{id:2,price:7e3,title:"Professional plan",is_active:!0,list:[{id:1,title:"Lorem ipsum dolor"},{id:2,title:"Sit amet consectetur adipiscing"},{id:3,title:"Elit sed do eiusmod tempor"},{id:4,title:"Incididunt ut labore"},{id:5,title:"Et dolore magna aliqua incididunt"},{id:6,title:"Elit sed do eiusmod tempor"}]},{id:3,price:12e3,title:"Enterprise plan",is_active:!1,list:[{id:1,title:"Lorem ipsum dolor"},{id:2,title:"Sit amet consectetur adipiscing"},{id:3,title:"Elit sed do eiusmod tempor"},{id:4,title:"Incididunt ut labore"},{id:5,title:"Et dolore magna aliqua incididunt"},{id:6,title:"Elit sed do eiusmod tempor"}]}]};var _2_view_exampleButtonClick=function exampleButtonClick(){alert("click")},view_PriceItem=function PriceItem(_ref){var data=_ref.data,button_text=_ref.button_text,_ref$onButtonClick=_ref.onButtonClick,onButtonClick=void 0===_ref$onButtonClick?_2_view_exampleButtonClick:_ref$onButtonClick,title=data.title,price=data.price,list=data.list,is_active=data.is_active,color=is_active?"accent-2":"light-1";return(0,jsx_runtime.jsxs)(Box.x,{pad:"medium",basis:"full",justify:"between",direction:"row",align:"center",alignContent:"center",hoverIndicator:{background:{color:"accent-1"}},background:{color,opacity:"strong"},round:"small",children:[(0,jsx_runtime.jsxs)(Box.x,{basis:"1/4",children:[(0,jsx_runtime.jsx)(Heading.X,{level:3,size:"small",margin:{top:"none",bottom:"small"},children:title}),(0,jsx_runtime.jsxs)(Text.x,{size:"xlarge",weight:"bolder",children:[price," ₽"]})]}),(0,jsx_runtime.jsx)(Box.x,{basis:"2/4",align:"center",alignContent:"center",children:(0,jsx_runtime.jsx)(List.a,{data:list,basis:"1/2",border:!1,pad:{vertical:"xxsmall"},style:{columns:2},children:function children(listItem){return(0,jsx_runtime.jsxs)(Box.x,{direction:"row",children:[(0,jsx_runtime.jsx)(StatusGood.Y,{size:"medium",color:"brand"}),(0,jsx_runtime.jsx)(Text.x,{size:"small",margin:{left:"small"},children:listItem.title},listItem.id)]})}})}),(0,jsx_runtime.jsx)(Button.z,{size:"medium",primary:is_active,onClick:onButtonClick,label:button_text})]})};view_PriceItem.displayName="PriceItem";var Price2=function Price2(props){props.id;var _props$value=props.value,value=void 0===_props$value?_2_defaults:_props$value,_value$title=(props.onButtonClick,value.title),title=void 0===_value$title?_2_defaults.title:_value$title,_value$subtitle=value.subtitle,subtitle=void 0===_value$subtitle?_2_defaults.subtitle:_value$subtitle,_value$button_text=value.button_text,button_text=void 0===_value$button_text?_2_defaults.button_text:_value$button_text,_value$prices=value.prices,prices=void 0===_value$prices?_2_defaults.prices:_value$prices;return(0,jsx_runtime.jsx)(Box.x,{background:{color:"light-3"},align:"center",children:(0,jsx_runtime.jsxs)(Box.x,{width:"xxlarge",children:[(0,jsx_runtime.jsxs)(Box.x,{width:"100%",pad:"medium",direction:"column",align:"center",children:[(0,jsx_runtime.jsx)(Box.x,{children:(0,jsx_runtime.jsx)(Heading.X,{level:2,children:title})}),(0,jsx_runtime.jsx)(Box.x,{children:(0,jsx_runtime.jsx)(Paragraph.n,{children:subtitle})})]}),prices.length>0&&(0,jsx_runtime.jsx)(Box.x,{direction:"column",pad:"small",background:"light-3",gap:"medium",basis:"full",children:prices.map((function(item,index){return(0,jsx_runtime.jsx)(view_PriceItem,{data:item,button_text},item.id)}))})]})})};Price2.displayName="Price2";const _2_view=Price2;try{view.displayName="view",view.__docgenInfo={description:"",displayName:"view",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"IPrice2Value"}},onButtonClick:{defaultValue:{value:'() => {\r\n    alert("click")\r\n}'},description:"",name:"onButtonClick",required:!1,type:{name:"(MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/prices/2/view.tsx#view"]={docgenInfo:view.__docgenInfo,name:"view",path:"src/prices/2/view.tsx#view"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const features_1_defaults={title:"Мы лучшая в мир компания!",subtitle:"Lorem ipsum dolor sit amet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing\n    elit, sed do eiusmod tempor incididunt ut labore et\n    dolore magna aliqua. Ut enim ad minim veniam, quis\n    nostrud exercitation ullamco laboris nisi ut aliquip\n    ex ea commodo consequat. Duis aute irure dolor in\n    reprehenderit in voluptate velit esse cillum dolore\n    eu fugiat nulla pariatur. Excepteur sint occaecat\n    cupidatat non proident, sunt in culpa qui officia\n    deserunt mollit anim id est laborum."};var _templateObject;var UiImageBox=(0,styled_components_browser_esm.default)(Box.x)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n    aspect-ratio: 1;\n"]))),ImageBox=function ImageBox(){return(0,jsx_runtime.jsx)(UiImageBox,{fill:"horizontal",background:{color:"light-3"},round:"small"})};ImageBox.displayName="ImageBox";var GridBox=function GridBox(){return(0,jsx_runtime.jsx)(Box.x,{fill:"horizontal",children:(0,jsx_runtime.jsx)(ImageBox,{})})};GridBox.displayName="GridBox";var Feature1=function Feature1(props){var _props$value=props.value,value=void 0===_props$value?features_1_defaults:_props$value,_value$title=value.title,title=void 0===_value$title?features_1_defaults.title:_value$title,_value$subtitle=value.subtitle,subtitle=void 0===_value$subtitle?features_1_defaults.subtitle:_value$subtitle,_value$description=value.description,description=void 0===_value$description?features_1_defaults.description:_value$description;return(0,jsx_runtime.jsx)(Box.x,{align:"center",fill:"horizontal",children:(0,jsx_runtime.jsx)(Box.x,{width:"xlarge",children:(0,jsx_runtime.jsxs)(Box.x,{direction:"row",gap:"xlarge",pad:{vertical:"medium"},children:[(0,jsx_runtime.jsxs)(Box.x,{direction:"column",justify:"center",fill:"horizontal",children:[(0,jsx_runtime.jsx)(Paragraph.n,{color:"dark-3",fill:!0,size:"small",margin:{top:"none",bottom:"medium"},style:{textTransform:"uppercase"},children:(0,jsx_runtime.jsx)("strong",{children:subtitle})}),(0,jsx_runtime.jsx)(Heading.X,{color:"dark-1",level:2,size:"medium",margin:{top:"none",bottom:"medium"},children:title}),(0,jsx_runtime.jsx)(Paragraph.n,{color:"dark-2",margin:{top:"xsmall",bottom:"xsmall"},fill:!0,size:"medium",style:{lineHeight:"30px"},children:description})]}),(0,jsx_runtime.jsxs)(Grid.r,{justify:"center",fill:"horizontal",rows:["1fr","1fr"],columns:["1fr","1fr"],gap:"medium",children:[(0,jsx_runtime.jsx)(GridBox,{}),(0,jsx_runtime.jsx)(GridBox,{}),(0,jsx_runtime.jsx)(GridBox,{}),(0,jsx_runtime.jsx)(GridBox,{})]})]})})})};Feature1.displayName="Feature1";const features_1_view=Feature1;try{view.displayName="view",view.__docgenInfo={description:"",displayName:"view",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"IFeature1Value"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/1/view.tsx#view"]={docgenInfo:view.__docgenInfo,name:"view",path:"src/features/1/view.tsx#view"})}catch(__react_docgen_typescript_loader_error){}const news_1_defaults={title:"Мы лучшие в мирdddе!",subtitle:"Закажите сейчас и получите скидку 50%",list:[{id:1,description:"Lorem ipsum dolor Sit amet consectetur adipiscing Elit sed do eiusmod tempor Incididunt ut labore",title:"Simple plan",is_active:!0,date:"15 Aug 2022"},{id:2,description:"Lorem ipsum dolor Sit amet consectetur adipiscing Elit sed do eiusmod tempor Incididunt ut labore",title:"Simfdg  gan",is_active:!1,date:"16 Aug 2022"},{id:2,description:"Lorem ipsum dolor Sit amet consectetur adipiscing Elit sed do eiusmod tempor Incididunt ut labore",title:"Simfdg  gan",is_active:!1,date:"16 Aug 2022"}]};var view_templateObject;var _1_view_exampleButtonClick=function exampleButtonClick(){alert("click")},BlogItemSmall=function BlogItemSmall(_ref){var data=_ref.data,_ref$onButtonClick=_ref.onButtonClick,onButtonClick=void 0===_ref$onButtonClick?_1_view_exampleButtonClick:_ref$onButtonClick,title=data.title,date=data.date;data.is_active;return(0,jsx_runtime.jsxs)(Box.x,{pad:{horizontal:"medium",vertical:"small"},justify:"end",margin:{vertical:"xsmall"},hoverIndicator:{background:{color:"accent-1"}},background:{color:"light-1",opacity:"strong"},onClick:onButtonClick,round:"small",children:[(0,jsx_runtime.jsx)(Heading.X,{level:3,size:"small",margin:"none",children:title}),(0,jsx_runtime.jsx)(Text.x,{as:"div",size:"xsmall",margin:{top:"xsmall"},children:date})]})};BlogItemSmall.displayName="BlogItemSmall";var BlogItemBig=function BlogItemBig(_ref2){var data=_ref2.data,_ref2$onButtonClick=_ref2.onButtonClick,onButtonClick=void 0===_ref2$onButtonClick?_1_view_exampleButtonClick:_ref2$onButtonClick,title=data.title,description=data.description,date=data.date;data.is_active;return(0,jsx_runtime.jsx)(Box.x,{direction:"row",margin:{vertical:"xsmall"},style:{gridRow:"1 / 3"},hoverIndicator:{background:{color:"accent-1"}},background:{color:"accent-1",opacity:"strong"},onClick:onButtonClick,round:"small",overflow:"hidden",children:(0,jsx_runtime.jsxs)(Grid.r,{width:"100%",columns:["60%","1fr"],children:[(0,jsx_runtime.jsx)(Box.x,{fill:"vertical",background:{color:"neutral-1"}}),(0,jsx_runtime.jsxs)(Box.x,{pad:{horizontal:"medium",vertical:"small"},justify:"between",children:[(0,jsx_runtime.jsxs)(Box.x,{fill:"vertical",justify:"center",children:[(0,jsx_runtime.jsx)(Heading.X,{level:3,size:"small",margin:"none",children:title}),(0,jsx_runtime.jsx)(Paragraph.n,{size:"small",children:description})]}),(0,jsx_runtime.jsx)(Text.x,{as:"div",size:"xsmall",margin:{top:"xsmall"},children:date})]})]})})};BlogItemBig.displayName="BlogItemBig";styled_components_browser_esm.default.div(view_templateObject||(view_templateObject=function view_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 30%;\n    gap: 10px;\n"])));var Blog1=function Blog1(props){props.id;var _props$value=props.value,value=void 0===_props$value?news_1_defaults:_props$value,_value$title=(props.onButtonClick,value.title),title=void 0===_value$title?news_1_defaults.title:_value$title,_value$subtitle=value.subtitle,subtitle=void 0===_value$subtitle?news_1_defaults.subtitle:_value$subtitle,_value$list=value.list,list=void 0===_value$list?news_1_defaults.list:_value$list;return(0,jsx_runtime.jsx)(Box.x,{background:{color:"light-3"},align:"center",children:(0,jsx_runtime.jsxs)(Box.x,{width:"xlarge",children:[(0,jsx_runtime.jsxs)(Box.x,{pad:{vertical:"small",horizontal:"medium"},direction:"column",align:"start",children:[(0,jsx_runtime.jsx)(Heading.X,{level:2,margin:{vertical:"xsmall"},children:title}),(0,jsx_runtime.jsx)(Paragraph.n,{margin:{vertical:"xsmall"},children:subtitle})]}),list.length>0&&(0,jsx_runtime.jsx)(Box.x,{pad:{vertical:"small",horizontal:"medium"},children:(0,jsx_runtime.jsx)(Grid.r,{columns:["1fr","30%"],rows:"small",gap:"small",children:list.map((function(item){return item.is_active?(0,jsx_runtime.jsx)(BlogItemBig,{data:item},item.id):(0,jsx_runtime.jsx)(BlogItemSmall,{data:item},item.id)}))})})]})})};Blog1.displayName="Blog1";const news_1_view=Blog1;try{view.displayName="view",view.__docgenInfo={description:"",displayName:"view",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"IBlog1Value"}},onButtonClick:{defaultValue:{value:'() => {\r\n    alert("click")\r\n}'},description:"",name:"onButtonClick",required:!1,type:{name:"(MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/news/1/view.tsx#view"]={docgenInfo:view.__docgenInfo,name:"view",path:"src/news/1/view.tsx#view"})}catch(__react_docgen_typescript_loader_error){}var AllBlocks_stories_templateObject;var UiContainer=(0,styled_components_browser_esm.default)(Box.x)(AllBlocks_stories_templateObject||(AllBlocks_stories_templateObject=function AllBlocks_stories_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n    @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");\n\n    * {\n        font-family: "Roboto", sans-serif;\n    }\n']))),AllBlocksStory=function AllBlocksStory(){return(0,jsx_runtime.jsx)(Grommet.p,{children:(0,jsx_runtime.jsxs)(UiContainer,{direction:"column",fill:!0,children:[(0,jsx_runtime.jsx)(_1_view,{}),(0,jsx_runtime.jsx)(grid_text_1_view,{}),(0,jsx_runtime.jsx)(prices_1_view,{}),(0,jsx_runtime.jsx)(_2_view,{}),(0,jsx_runtime.jsx)(features_1_view,{}),(0,jsx_runtime.jsx)(news_1_view,{})]})})};AllBlocksStory.displayName="AllBlocksStory";var Template=function Template(args){return(0,jsx_runtime.jsx)(AllBlocksStory,Object.assign({},args))};Template.displayName="Template";var ExamplePageBuilder=Template.bind({});ExamplePageBuilder.args={};const AllBlocks_stories={title:"Example/All blocks",component:AllBlocksStory};ExamplePageBuilder.parameters=Object.assign({storySource:{source:"(args) => {\n    return <AllBlocksStory {...args} />\n}"}},ExamplePageBuilder.parameters);var __namedExportsOrder=["ExamplePageBuilder"]},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/AllBlocks.stories.tsx":"./src/stories/AllBlocks.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[558],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);