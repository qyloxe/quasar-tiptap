(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{0:function(e,t,n){e.exports=n("2f39")},"12cb":function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var a={isoName:"en-us",nativeName:"English (US)",diagram:{name:"Text Diagram",flow:"Flow Diagram",sequence:"Sequence Diagram",class:"Class Diagram",state:"State Diagram",gantt:"Gantt Diagram",tips:"Generation of diagram and chart from text in a similar manner as markdown"},editor:{add:"Add",addMore:"Add More",url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",todoList:"Todo List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontFamily:"Font Family",defaultFont:"Default Font",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",headings:"Headings",paragraph:"Paragraph",code:"Code",codeBlock:"Code Block",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",viewSource:"View Source",textColor:"Text Color",highlightColor:"Highlight Color",default:"Default",lineHeight:"Line Height",blockquote:"Blockquote",table:"Table",photo:"Insert Photo",formula:"Formula",inlineFormula:"Inline",blockFormula:"Block"},label:{cancel:"Cancel",edit:"Edit",link:"Link",linkAddress:"Link Address",ok:"Ok",preview:"Preview",template:"Template"},table:{insert:"Insert Table",remove:"Remove Table",insertColumnLeft:"Insert column left",insertColumnRight:"Insert column right",removeColumns:"Remove selected columns",insertRowUp:"Insert row up",insertRowDown:"Insert row down",removeRows:"Remove selected rows",merge:"Merge/Unmerge cells"},image:{preferences:"Image Preferences",size:"Size",width:"Width",height:"Height",src:"Image Source",caption:"Caption",link:"Link"}},r={isoName:"zh-hans",nativeName:"简体中文",diagram:{name:"文本绘图",flow:"流程图",sequence:"时序图",class:"类图",state:"状态图",gantt:"甘特图",tips:"使用Markdown风格文本生成流程图、顺序图、类图、状态图和甘特图"},editor:{add:"添加",addMore:"添加更多",url:"URL",bold:"粗体",italic:"斜体",strikethrough:"删除线",underline:"下划线",unorderedList:"无序列表",orderedList:"有序列表",todoList:"任务列表",subscript:"下标",superscript:"上标",hyperlink:"超链接",toggleFullscreen:"全屏切换",quote:"引号",left:"左对齐",center:"居中对齐",right:"右对齐",justify:"两端对齐",print:"打印",outdent:"减少缩进",indent:"增加缩进",removeFormat:"清除格式",formatting:"格式化",fontFamily:"字体",defaultFont:"默认字体",fontSize:"字体大小",align:"对齐方式",hr:"插入分割线",undo:"撤消",redo:"重做",heading1:"标题一",heading2:"标题二",heading3:"标题三",heading4:"标题四",heading5:"标题五",headings:"标题",paragraph:"正文",code:"代码",codeBlock:"代码块",size1:"非常小",size2:"比较小",size3:"正常",size4:"中等偏大",size5:"大",size6:"非常大",size7:"超级大",viewSource:"查看资料",textColor:"文字颜色",highlightColor:"背景颜色",default:"默认",lineHeight:"行高",blockquote:"插入引用",table:"表格",photo:"图片",formula:"数学公式",inlineFormula:"行内公式",blockFormula:"块级公式"},label:{cancel:"取消",edit:"编辑",link:"Link",linkAddress:"链接地址",ok:"确定",preview:"预览",template:"模板"},table:{insert:"插入表格",remove:"删除表格",insertColumnLeft:"左边插入列",insertColumnRight:"右边插入列",removeColumns:"删除选中列",insertRowUp:"上方插入行",insertRowDown:"下方插入行",removeRows:"删除选中行",merge:"合并/拆分 单元格"},image:{preferences:"图片设置",size:"尺寸",width:"宽度",height:"高度",src:"图片地址",caption:"图片说明",link:"链接"}},i=a,o={"en-us":a,"zh-hans":r},l=function(e){return o[e]||i};t["a"]=o},"2f39":function(e,t,n){"use strict";n.r(t);var a=n("967e"),r=n.n(a),i=(n("a481"),n("96cf"),n("fa84")),o=n.n(i),l=(n("5c7d"),n("7d6e"),n("e54f"),n("9f29"),n("62f2"),n("7e6d"),n("a026")),s=n("1f91"),u=n("42d2"),c=n("b05d"),d=n("4d5a"),p=n("e359"),m=n("9404"),f=n("09e3"),h=n("9989"),g=n("65c6"),b=n("6ac5"),w=n("05c0"),k=n("9c40"),v=n("f20b"),x=n("6a67"),Q=n("0016"),y=n("1c1c"),L=n("66e5"),z=n("3b73"),C=n("4074"),F=n("0170"),S=n("4983"),I=n("eb85"),R=n("4e73"),P=n("cb32"),D=n("b498"),H=n("27f9"),T=n("9564"),q=n("714f"),A=n("7f67"),B=n("9c64"),M=n("2a19"),U=n("436b"),N=n("b12a"),V=n("f508");l["a"].use(c["a"],{config:{},lang:s["a"],iconSet:u["a"],components:{QLayout:d["a"],QHeader:p["a"],QDrawer:m["a"],QPageContainer:f["a"],QPage:h["a"],QToolbar:g["a"],QToolbarTitle:b["a"],QTooltip:w["a"],QBtn:k["a"],QBtnDropdown:v["a"],QBtnToggle:x["a"],QIcon:Q["a"],QList:y["a"],QItem:L["a"],QExpansionItem:z["a"],QItemSection:C["a"],QItemLabel:F["a"],QScrollArea:S["a"],QSeparator:I["a"],QMenu:R["a"],QAvatar:P["a"],QColor:D["a"],QInput:H["a"],QToggle:T["a"]},directives:{Ripple:q["a"],ClosePopup:A["a"]},plugins:{Meta:B["a"],Notify:M["a"],Dialog:U["a"],AppFullscreen:N["a"],Loading:V["a"]}});var E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},j=[],J={name:"App"},O=J,$=n("2877"),G=Object($["a"])(O,E,j,!1,null,null,null),_=G.exports,W=n("2f62");l["a"].use(W["a"]);var K=function(){var e=new W["a"].Store({modules:{},strict:!1});return e},X=n("8c4f"),Y=[{path:"/",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"df05"))}},{path:"examples/basic",component:function(){return Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"df05"))}},{path:"examples/readonly",component:function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,"ebba"))}},{path:"examples/all",component:function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,"a900"))}},{path:"tiptap/basic",component:function(){return Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"2c23"))}},{path:"tiptap/test1",component:function(){return Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"2c23"))}},{path:"tiptap/test2",component:function(){return Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,"2c23"))}}]}];Y.push({path:"*",component:function(){return n.e(9).then(n.bind(null,"e51e"))}});var Z=Y;l["a"].use(X["a"]);var ee=function(){var e=new X["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:Z,mode:"history",base:"/quasar-tiptap/"});return e},te=function(){return ne.apply(this,arguments)};function ne(){return ne=o()(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof K){e.next=6;break}return e.next=3,K({Vue:l["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=K;case 7:if(t=e.t0,"function"!==typeof ee){e.next=14;break}return e.next=11,ee({Vue:l["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=ee;case 15:return n=e.t1,t.$router=n,a={el:"#q-app",router:n,store:t,render:function(e){return e(_)}},e.abrupt("return",{app:a,store:t,router:n});case 19:case"end":return e.stop()}}),e)}))),ne.apply(this,arguments)}var ae=n("a925"),re=n("12cb");l["a"].use(ae["a"]);var ie=new ae["a"]({locale:"en-us",fallbackLocale:"en-us",messages:re["a"]}),oe=function(e){var t=e.app;t.i18n=ie},le=n("bc3a"),se=n.n(le);function ue(){return ce.apply(this,arguments)}function ce(){return ce=o()(r.a.mark((function e(){var t,n,a,i,o,s,u,c,d;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:t=e.sent,n=t.app,a=t.store,i=t.router,o=!0,s=function(e){o=!1,window.location.href=e},u=window.location.href.replace(window.location.origin,""),c=[oe,void 0],d=0;case 11:if(!(!0===o&&d<c.length)){e.next=29;break}if("function"===typeof c[d]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,c[d]({app:n,router:i,store:a,Vue:l["a"],ssrContext:null,redirect:s,urlPath:u});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:d++,e.next=11;break;case 29:if(!1!==o){e.next=31;break}return e.abrupt("return");case 31:new l["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),ce.apply(this,arguments)}l["a"].prototype.$axios=se.a,ue()},"7e6d":function(e,t,n){}},[[0,5,0]]]);