(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{2183:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=a(n(4)),o=a(n(3)).default.div(r||(r=(0,i.default)(["\n  padding: 18px 30px 18px 30px;\n"])));t.default=o},2196:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=a(n(4)),o=a(n(3)).default.div(r||(r=(0,i.default)(["\n  .btn-group button {\n    line-height: 28px;\n  }\n"])));t.default=o},2213:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),i=a(n(2)),o=n(7),l=n(24),u=n(10),d=n(30),f=function(e){var t=e.headerId,n=e.isOpen,a=e.onClosed,i=e.onSubmit,f=e.onToggle,s=e.renderForm,c=e.subHeaderContent,p=e.type;return r.default.createElement(o.Modal,{isOpen:n,onClosed:a,onToggle:f},r.default.createElement(o.HeaderModal,null,r.default.createElement("section",null,r.default.createElement(o.HeaderModalTitle,{style:{textTransform:"none"}},r.default.createElement(d.AttributeIcon,{type:"timestamp"===p?"date":["decimal","float","integer","biginter"].includes(p)?"number":p,style:{margin:"auto 20px auto 0"}}),r.default.createElement(l.FormattedMessage,{id:t}))),r.default.createElement("section",null,r.default.createElement(o.HeaderModalTitle,null,r.default.createElement("span",null,(0,u.upperFirst)(c)),r.default.createElement("hr",null)))),r.default.createElement("form",{onSubmit:i},r.default.createElement(o.ModalForm,null,r.default.createElement(o.ModalBody,null,s())),r.default.createElement(o.ModalFooter,null,r.default.createElement("section",null,r.default.createElement(d.Button,{onClick:f,color:"cancel"},r.default.createElement(l.FormattedMessage,{id:"components.popUpWarning.button.cancel"})),r.default.createElement(d.Button,{type:"submit",color:"success"},r.default.createElement(l.FormattedMessage,{id:"form.button.done"}))))))};f.defaultProps={isOpen:!1,onClosed:function(){},onSubmit:function(){},onToggle:function(){},renderForm:function(){},subHeaderContent:"",type:""},f.propTypes={headerId:i.default.string.isRequired,isOpen:i.default.bool,onClosed:i.default.func,onSubmit:i.default.func,onToggle:i.default.func,renderForm:i.default.func,subHeaderContent:i.default.string,type:i.default.string};var s=f;t.default=s},2214:function(e,t,n){"use strict";var a=n(0),r=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(41)),o=a(n(46)),l=a(n(6)),u=a(n(40)),d=a(n(23)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=D(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(1)),s=a(n(2)),c=n(10),p=n(38),m=n(24),g=n(59),b=n(7),v=a(n(97)),y=a(n(2215)),E=a(n(2183)),h=a(n(2217)),x=a(n(2219));function D(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(D=function(e){return e?n:t})(e)}var O=function(e){var t=e.children,n=e.history.goBack,a=e.getListDisplayedFields,r=e.inputs,s=e.initialData,p=e.isEditSettings,D=e.isLoading,O=e.modifiedData,_=e.onChange,M=e.onConfirmReset,w=e.onConfirmSubmit,S=e.name,I=(0,b.useGlobalContext)(),C=I.emitEvent,k=I.formatMessage,T=(0,f.useState)(!1),j=(0,d.default)(T,2),P=j[0],F=j[1],L=(0,f.useState)(!1),B=(0,d.default)(L,2),W=B[0],R=B[1],A=(0,f.useMemo)((function(){return(0,c.get)(O,["schema","attributes"],{})}),[O]),U=function(){return F((function(e){return!e}))},N=function(){return R((function(e){return!e}))},q={actions:[{color:"cancel",onClick:U,label:k({id:"".concat(v.default,".popUpWarning.button.cancel")}),type:"button",disabled:(0,c.isEqual)(O,s),style:{fontWeight:600,paddingLeft:15,paddingRight:15}},{color:"success",label:k({id:"".concat(v.default,".containers.Edit.submit")}),type:"submit",disabled:(0,c.isEqual)(O,s),style:{minWidth:150,fontWeight:600}}],title:{label:k({id:"".concat(v.default,".components.SettingsViewWrapper.pluginHeader.title")},{name:(0,c.upperFirst)(S)})},content:k({id:"".concat(v.default,".components.SettingsViewWrapper.pluginHeader.description.").concat(p?"edit":"list","-settings")})},H=function(e){if("settings.defaultSortBy"===e.name)return["id"].concat((0,u.default)(a().filter((function(e){return"media"!==(0,c.get)(A,[e,"type"],"")&&"id"!==e&&"richtext"!==(0,c.get)(A,[e,"type"],"")}))));if("settings.mainField"===e.name){var t=A;return Object.keys(t).filter((function(e){var n=(0,c.get)(t,[e,"type"],"");return!["json","text","relation","component","boolean","date","media","richtext"].includes(n)&&!!n}))}return e.options};return D?f.default.createElement(b.LoadingIndicatorPage,null):f.default.createElement(f.default.Fragment,null,f.default.createElement(b.BackHeader,{onClick:n}),f.default.createElement(E.default,{className:"container-fluid"},f.default.createElement("form",{onSubmit:function(e){e.preventDefault(),N(),C("willSaveContentTypeLayout")}},f.default.createElement(g.Header,q),f.default.createElement("div",{className:"row",style:{paddingTop:"3px"}},f.default.createElement(y.default,{style:{marginBottom:"13px",paddingBottom:"30px",paddingTop:"24px"}},f.default.createElement(h.default,{isSettings:!0}),f.default.createElement("div",{className:"row"},r.map((function(e){return f.default.createElement(m.FormattedMessage,{key:e.name,id:e.label.id},(function(t){return f.default.createElement("div",{className:e.customBootstrapClass,style:{marginBottom:1}},f.default.createElement(m.FormattedMessage,{id:(0,c.get)(e,"description.id","app.utils.defaultMessage")},(function(n){return f.default.createElement(g.Inputs,(0,l.default)({},e,{description:n,label:" "===t?null:t,onChange:_,options:H(e),value:(0,c.get)(O,e.name,"")}))})))}))})),f.default.createElement("div",{className:"col-12"},f.default.createElement(x.default,{style:{marginBottom:23}}))),f.default.createElement(h.default,null),t)),f.default.createElement(b.PopUpWarning,{isOpen:P,toggleModal:U,content:{title:"".concat(v.default,".popUpWarning.title"),message:"".concat(v.default,".popUpWarning.warning.cancelAllSettings"),cancel:"".concat(v.default,".popUpWarning.button.cancel"),confirm:"".concat(v.default,".popUpWarning.button.confirm")},popUpWarningType:"danger",onConfirm:function(){M(),U()}}),f.default.createElement(b.PopUpWarning,{isOpen:W,toggleModal:N,content:{title:"".concat(v.default,".popUpWarning.title"),message:"".concat(v.default,".popUpWarning.warning.updateAllSettings"),cancel:"".concat(v.default,".popUpWarning.button.cancel"),confirm:"".concat(v.default,".popUpWarning.button.confirm")},popUpWarningType:"danger",onConfirm:(0,o.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:N();case 3:case"end":return e.stop()}}),e)})))}))))};O.defaultProps={getListDisplayedFields:function(){return[]},inputs:[],initialData:{},isEditSettings:!1,modifiedData:{},name:"",onConfirmReset:function(){},onConfirmSubmit:function(){var e=(0,o.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onSubmit:function(){},pluginHeaderProps:{actions:[],description:{id:"app.utils.defaultMessage"},title:{id:"app.utils.defaultMessage",values:{}}}},O.propTypes={children:s.default.node.isRequired,getListDisplayedFields:s.default.func,history:s.default.shape({goBack:s.default.func.isRequired}).isRequired,initialData:s.default.object,inputs:s.default.array,isEditSettings:s.default.bool,isLoading:s.default.bool.isRequired,modifiedData:s.default.object,name:s.default.string,onChange:s.default.func.isRequired,onConfirmReset:s.default.func,onConfirmSubmit:s.default.func,onSubmit:s.default.func,pluginHeaderProps:s.default.shape({actions:s.default.array,description:s.default.shape({id:s.default.string}),title:s.default.shape({id:s.default.string,values:s.default.object})})};var _=(0,p.withRouter)(O);t.default=_},2215:function(e,t,n){"use strict";var a=n(0),r=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(1)),o=a(n(2)),l=n(24),u=n(2216);function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var f=function(e){return i.default.createElement("p",null,e)},s=function(e){var t=e.children,n=e.description,a=e.style,r=e.title;return i.default.createElement("div",{className:"col-md-12"},i.default.createElement(u.Wrapper,{style:a},i.default.createElement(u.Sub,null,!!r&&i.default.createElement("p",null,i.default.createElement(l.FormattedMessage,{id:r})),!!n&&i.default.createElement(l.FormattedMessage,{id:n},f)),t))};s.defaultProps={children:null,description:null,style:{},title:null},s.propTypes={children:o.default.any,description:o.default.string,style:o.default.object,title:o.default.string};var c=(0,i.memo)(s);t.default=c},2216:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.Wrapper=t.Sub=void 0;var r,i,o=a(n(4)),l=a(n(3)),u=l.default.div(r||(r=(0,o.default)(["\n  margin-bottom: 35px;\n  background: #ffffff;\n  padding: 22px 28px 18px;\n  padding-bottom: 13px;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px #e3e9f3;\n  -webkit-font-smoothing: antialiased;\n"])));t.Wrapper=u;var d=l.default.div(i||(i=(0,o.default)(["\n  padding-top: 0px;\n  line-height: 18px;\n  > p:first-child {\n    margin-bottom: 1px;\n    font-weight: 700;\n    color: #333740;\n    font-size: 1.8rem;\n  }\n  > p {\n    color: #787e8f;\n    font-size: 13px;\n  }\n"])));t.Sub=d},2217:function(e,t,n){"use strict";var a=n(0),r=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(1)),o=a(n(2)),l=n(24),u=a(n(97)),d=a(n(2218));function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var s=function(e){var t=e.isSettings?"settings":"view",n="".concat(u.default,".containers.SettingPage.").concat(t);return i.default.createElement("div",{style:{marginBottom:"18px"}},i.default.createElement(l.FormattedMessage,{id:n},(function(e){return i.default.createElement(d.default,null,e)})))};s.propTypes={isSettings:o.default.bool},s.defaultProps={isSettings:!1};var c=(0,i.memo)(s);t.default=c},2218:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=a(n(4)),o=a(n(3)).default.div(r||(r=(0,i.default)(["\n  color: #787e8f;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.77px;\n  text-transform: uppercase;\n"])));t.default=o},2219:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=a(n(4)),o=a(n(3)).default.div(r||(r=(0,i.default)(["\n  margin-top: 17px;\n  margin-bottom: 24px;\n  border-top: 1px solid #f6f6f6;\n"])));t.default=o},2563:function(e,t,n){"use strict";var a=n(0),r=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(41)),o=a(n(46)),l=a(n(23)),u=T(n(1)),d=a(n(2)),f=n(10),s=n(7),c=n(24),p=n(113),m=n(58),g=n(59),b=a(n(97)),v=a(n(712)),y=a(n(714)),E=a(n(2213)),h=a(n(2214)),x=a(n(2196)),D=a(n(716)),O=a(n(2564)),_=a(n(2565)),M=a(n(2566)),w=a(n(2567)),S=a(n(2568)),I=T(n(2569)),C=a(n(2570));function k(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(k=function(e){return e?n:t})(e)}function T(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=k(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var j=function(e){var t=e.deleteLayout,n=e.slug,a=(0,u.useReducer)(I.default,I.initialState),r=(0,l.default)(a,2),d=r[0],k=r[1],T=(0,u.useState)(!1),j=(0,l.default)(T,2),P=j[0],F=j[1],L=(0,u.useState)(!1),B=(0,l.default)(L,2),W=B[0],R=B[1],A=(0,u.useState)(!1),U=(0,l.default)(A,2),N=U[0],q=U[1],H=(0,s.useGlobalContext)().emitEvent,G=function(){return R((function(e){return!e}))},J=d.toJS(),z=J.labelForm,V=J.labelToEdit,K=J.initialData,Q=J.modifiedData,X=J.isLoading,Y=new AbortController,Z=Y.signal,$=(0,u.useMemo)((function(){return(0,f.get)(Q,["schema","attributes"],{})}),[Q]);(0,u.useEffect)((function(){return function(){var e=(0,o.default)(i.default.mark((function e(){var t,a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.request)((0,y.default)("content-types/".concat(n)),{method:"GET",signal:Z});case 3:t=e.sent,a=t.data,k({type:"GET_DATA_SUCCEEDED",data:a.contentType}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),20!==e.t0.code&&strapi.notification.error("notification.error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()(),function(){Y.abort()}}),[n]);var ee=(0,u.useMemo)((function(){return(0,f.get)(Q,["schema","info","name"],"")}),[Q]),te=function(){return(0,f.get)(Q,["layouts","list"],[])},ne=function(){var e=(0,f.get)(Q,["metadatas"],{}),t=$;return Object.keys(e).filter((function(e){var n=(0,f.get)(t,[e,"type"],"");return!["json","component","richtext","relation"].includes(n)&&!!n})).filter((function(e){return!te().includes(e)}))},ae=function(e){k({type:"SET_LABEL_TO_EDIT",labelToEdit:e}),G()},re=function(e){var t=e.target,n=t.name,a=t.value;k({type:"ON_CHANGE_LABEL_METAS",name:n,value:a})},ie=function(){var e=(0,o.default)(i.default.mark((function e(){var a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,delete(a=(0,f.cloneDeep)(Q)).apiID,delete a.schema,delete a.uid,e.next=7,(0,s.request)((0,y.default)("content-types/".concat(n)),{method:"PUT",body:a,signal:Z});case 7:k({type:"SUBMIT_SUCCEEDED"}),t(n),H("didEditListSettings"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),strapi.notification.error("notification.error");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),oe=function(e,t){k({type:"MOVE_FIELD",originalIndex:e,atIndex:t})},le=(0,p.useDrop)({accept:v.default.FIELD}),ue=(0,l.default)(le,2)[1];return u.default.createElement(D.default,{isDraggingSibling:N,setIsDraggingSibling:q},u.default.createElement(h.default,{getListDisplayedFields:te,inputs:C.default,isLoading:X,initialData:K,modifiedData:Q,onChange:function(e){var t=e.target,n=t.name,a=t.value;k({type:"ON_CHANGE",keys:n,value:"settings.pageSize"===n?parseInt(a,10):a})},onConfirmReset:function(){k({type:"ON_RESET"})},onConfirmSubmit:ie,name:ee},u.default.createElement(w.default,null,u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-12"},u.default.createElement(x.default,{ref:ue,style:{display:"flex",width:"100%"}},te().map((function(e,t){var n=(0,f.get)(Q,["metadatas",e,"list","label"],"");return u.default.createElement(O.default,{count:te().length,key:e,index:t,isDraggingSibling:N,label:n,move:oe,name:e,onClick:ae,onRemove:function(e){e.stopPropagation(),1===te().length?strapi.notification.info("".concat(b.default,".notification.info.minimumFields")):k({type:"REMOVE_FIELD",index:t})},selectedItem:V,setIsDraggingSibling:q})}))))),u.default.createElement(M.default,{isOpen:P,toggle:function(){ne().length>0&&F((function(e){return!e}))},direction:"down",style:{position:"absolute",top:11,right:10}},u.default.createElement(S.default,{disabled:0===ne().length}),u.default.createElement(_.default,null,ne().map((function(e){return u.default.createElement(m.DropdownItem,{key:e,onClick:function(){k({type:"ADD_FIELD",item:e})}},e)})))))),u.default.createElement(E.default,{headerId:"".concat(b.default,".containers.ListSettingsView.modal-form.edit-label"),isOpen:W,onClosed:function(){k({type:"UNSET_LABEL_TO_EDIT"})},onSubmit:function(e){e.preventDefault(),G(),k({type:"SUBMIT_LABEL_FORM"})},onToggle:G,renderForm:function(){return u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"col-6",style:{marginBottom:4}},u.default.createElement(c.FormattedMessage,{id:"".concat(b.default,".form.Input.label")},(function(e){return u.default.createElement(c.FormattedMessage,{id:"".concat(b.default,".form.Input.label.inputDescription")},(function(t){return u.default.createElement(g.Inputs,{description:t,label:e,type:"text",name:"label",onBlur:function(){},value:(0,f.get)(z,"label",""),onChange:re})}))}))),"media"!==(0,f.get)($,[V,"type"],"text")&&u.default.createElement("div",{className:"col-6",style:{marginBottom:4}},u.default.createElement(c.FormattedMessage,{id:"".concat(b.default,".form.Input.sort.field")},(function(e){return u.default.createElement(g.Inputs,{label:e,type:"bool",name:"sortable",value:(0,f.get)(z,"sortable",!1),onChange:re})}))))},subHeaderContent:V,type:(0,f.get)($,[V,"type"],"text")}))};j.propTypes={deleteLayout:d.default.func.isRequired,location:d.default.shape({search:d.default.string.isRequired}).isRequired,slug:d.default.string.isRequired};var P=j;t.default=P},2564:function(e,t,n){"use strict";var a=n(0),r=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(23)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(1)),l=a(n(2)),u=n(113),d=n(253),f=a(n(712)),s=a(n(717)),c=a(n(713));function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var m=function(e){var t=e.count,n=e.index,a=e.label,r=e.move,l=e.name,p=e.onClick,m=e.onRemove,g=e.selectedItem,b=(0,o.useRef)(null),v=(0,c.default)().setIsDraggingSibling,y=(0,u.useDrop)({accept:f.default.FIELD,hover:function(e){if(b.current){var t=e.index,a=n;t!==a&&(r(t,a),e.index=a)}}}),E=(0,i.default)(y,2)[1],h=(0,u.useDrag)({begin:function(){v(!0)},end:function(){v(!1)},item:{type:f.default.FIELD,id:l,name:l,index:n},collect:function(e){return{isDragging:e.isDragging()}}}),x=(0,i.default)(h,3),D=x[0].isDragging,O=x[1],_=x[2];return(0,o.useEffect)((function(){_((0,d.getEmptyImage)(),{captureDraggingState:!1})}),[_]),O(E(b)),o.default.createElement(s.default,{count:t,ref:b,isDragging:D,label:a,name:l,onClick:p,onRemove:m,selectedItem:g})};m.defaultProps={index:0,label:"",selectedItem:""},m.propTypes={count:l.default.number.isRequired,index:l.default.number,label:l.default.string,move:l.default.func.isRequired,name:l.default.string.isRequired,onClick:l.default.func.isRequired,onRemove:l.default.func.isRequired,selectedItem:l.default.string};var g=m;t.default=g},2565:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=a(n(4)),o=a(n(3)),l=n(58),u=(0,o.default)(l.DropdownMenu)(r||(r=(0,i.default)(["\n  max-height: 180px;\n  min-width: 230px;\n  margin-left: -1px;\n  margin-top: -1px;\n  padding: 0;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0;\n  border-color: #e3e9f3 !important;\n  border-top-color: #aed4fb !important;\n  box-shadow: 0 2px 3px rgba(227, 233, 245, 0.5);\n  transform: translate3d(-199px, 30px, 0px) !important;\n\n  overflow: scroll;\n\n  button {\n    height: 30px;\n    padding-left: 10px !important;\n    line-height: 26px;\n    cursor: pointer;\n    font-size: 13px !important;\n    &:focus,\n    &:active,\n    &:hover,\n    &:hover {\n      background-color: #fafafb !important;\n      color: #333740;\n      outline: 0;\n    }\n    div {\n      margin: 0;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n"])));t.default=u},2566:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=a(n(4)),o=a(n(3)),l=n(58),u=(0,o.default)(l.ButtonDropdown)(r||(r=(0,i.default)(["\n  display: table-cell;\n"])));t.default=u},2567:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=a(n(4)),o=a(n(3)).default.div(r||(r=(0,i.default)(["\n  position: relative;\n  padding: 11px 40px 11px 11px;\n  margin-top: 19px;\n  margin-bottom: 10px;\n  border: 1px dashed #e3e9f3;\n  border-radius: 2px;\n  > div,\n  > div > div {\n    margin: 0;\n    padding: 0;\n  }\n  > div > div {\n    overflow-x: auto;\n    overflow-y: scroll;\n  }\n"])));t.default=o},2568:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=a(n(4)),o=a(n(3)),l=n(58),u="\n  content: '\f067';\n  font-family: FontAwesome;\n  font-size: 13px;\n  -webkit-font-smoothing: antialiased;\n",d=(0,o.default)(l.DropdownToggle)(r||(r=(0,i.default)(["\n  width: 30px;\n  height: 30px;\n  background: #fafafb;\n  border: 1px solid #e3e9f3;\n  border-radius: 2px;\n  border-top-right-radius: 2px !important;\n  border-bottom-right-radius: 2px !important;\n  color: #b3b5b9;\n\n  &:disabled {\n    cursor: not-allowed !important;\n\n    background: #fafafb;\n    border: 1px solid #e3e9f3;\n    border-radius: 2px;\n    color: #b3b5b9;\n  }\n\n  &:before {\n    ","\n  }\n\n  &:hover,\n  :active,\n  :focus {\n    ","\n\n    &:before {\n      ","\n    }\n  }\n"])),u,"\n  background-color: #e6f0fb !important;\n  border: 1px solid #aed4fb !important;\n  color: #007eff !important;\n",u);t.default=d},2569:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=t.default=void 0;var r=a(n(40)),i=n(39),o=(0,i.fromJS)({labelForm:{},labelToEdit:"",initialData:{},isLoading:!0,modifiedData:{}});t.initialState=o;var l=function(e,t){switch(t.type){case"ADD_FIELD":return e.updateIn(["modifiedData","layouts","list"],(function(e){return e.push(t.item)}));case"GET_DATA_SUCCEEDED":return e.update("initialData",(function(){return(0,i.fromJS)(t.data)})).update("isLoading",(function(){return!1})).update("modifiedData",(function(){return(0,i.fromJS)(t.data)}));case"MOVE_FIELD":return e.updateIn(["modifiedData","layouts","list"],(function(e){return e.delete(t.originalIndex).insert(t.atIndex,e.get(t.originalIndex))}));case"ON_CHANGE":return e.updateIn(["modifiedData"].concat((0,r.default)(t.keys.split("."))),(function(){return t.value}));case"ON_CHANGE_LABEL_METAS":return e.updateIn(["labelForm",t.name],(function(){return t.value}));case"ON_RESET":return e.update("modifiedData",(function(){return e.get("initialData")}));case"REMOVE_FIELD":var n=["modifiedData","settings","defaultSortBy"],a=e.getIn(n),o=["modifiedData","layouts","list",t.index],l=e.getIn(o),u=e.getIn(["modifiedData","layouts","list",1]),d=e.getIn(["modifiedData","schema","attributes",u,"type"]),f="media"!==d&&"richtext"!==d?u:"id";return e.removeIn(["modifiedData","layouts","list",t.index]).updateIn(n,(function(){return l===a?f:a}));case"SET_LABEL_TO_EDIT":return e.update("labelToEdit",(function(){return t.labelToEdit})).updateIn(["labelForm","label"],(function(){return e.getIn(["modifiedData","metadatas",t.labelToEdit,"list","label"])})).updateIn(["labelForm","sortable"],(function(){return e.getIn(["modifiedData","metadatas",t.labelToEdit,"list","sortable"])}));case"UNSET_LABEL_TO_EDIT":return e.update("labelToEdit",(function(){return""})).update("labelForm",(function(){return(0,i.fromJS)({})}));case"SUBMIT_LABEL_FORM":var s=["modifiedData","metadatas",e.get("labelToEdit"),"list"];return e.updateIn([].concat(s,["label"]),(function(){return e.getIn(["labelForm","label"])})).updateIn([].concat(s,["sortable"]),(function(){return e.getIn(["labelForm","sortable"])}));case"SUBMIT_SUCCEEDED":return e.update("initialData",(function(){return e.get("modifiedData")}));default:return e}};t.default=l},2570:function(e){e.exports=JSON.parse('[{"label":{"id":"content-manager.form.Input.search"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"name":"settings.searchable","type":"bool","validations":{}},{"label":{"id":"content-manager.form.Input.filters"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"name":"settings.filterable","type":"bool","validations":{}},{"label":{"id":"content-manager.form.Input.bulkActions"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"name":"settings.bulkable","type":"bool","validations":{}},{"label":{"id":"content-manager.form.Input.pageEntries"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"description":{"id":"content-manager.form.Input.pageEntries.inputDescription"},"name":"settings.pageSize","options":[10,20,50,100],"type":"select","validations":{}},{"label":{"id":"content-manager.form.Input.defaultSort"},"customBootstrapClass":"col-md-4 ml-md-auto","didCheckErrors":false,"errors":[],"style":{"marginRight":"-20px"},"name":"settings.defaultSortBy","options":["id"],"type":"select","validations":{}},{"label":{"id":"app.utils.defaultMessage"},"customBootstrapClass":"col-md-2","didCheckErrors":false,"errors":[],"name":"settings.defaultSortOrder","options":["ASC","DESC"],"type":"select","validations":{}}]')}}]);