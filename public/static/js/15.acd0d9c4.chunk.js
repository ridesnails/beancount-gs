(this["webpackJsonpbeancount-web"]=this["webpackJsonpbeancount-web"]||[]).push([[15],{126:function(t,e,n){"use strict";var a=n(113),i=n(40),o=n(41),c=n(43),r=n(42),s=n(0),l=n(3);e.a=function(t){return function(e){Object(c.a)(s,e);var n=Object(r.a)(s);function s(){var t;Object(i.a)(this,s);for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return(t=n.call.apply(n,[this].concat(a))).defaultCommodity={currency:"CNY",symbol:"\uffe5"},t.currentCommodity=window.localStorage.getItem("ledgerCurrency"),t}return Object(o.a)(s,[{key:"render",value:function(){return Object(l.jsx)(t,Object(a.a)(Object(a.a)({},this.props),{},{commodity:this.currentCommodity?JSON.parse(this.currentCommodity):this.defaultCommodity}))}}]),s}(s.Component)}},471:function(t,e,n){"use strict";n.r(e);var a=n(40),i=n(41),o=n(43),c=n(42),r=n(479),s=n(22),l=n(250),h=n(347),d=n(360),u=(n(455),n(0)),f=n(60),b=n(44),p=n(126),j=n(3),m=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).theme=t.context.theme,t.state={loading:!1,path:null,files:[],rawContent:"",content:"",editorState:d.EditorState.createEmpty()},t.fetchFileDir=function(){t.setState({loading:!0}),Object(f.b)("/api/auth/file/dir").then((function(e){t.setState({files:e})})).finally((function(){t.setState({loading:!1})}))},t.handldEditContent=function(e){t.setState({editorState:e,content:e.getCurrentContent().getPlainText()})},t.handleChangeFile=function(e){t.setState({path:e},(function(){t.fetchFileContent(e)}))},t.fetchFileContent=function(){t.setState({loading:!0}),Object(f.b)("/api/auth/file/content?path=".concat(t.state.path)).then((function(e){t.setState({rawContent:e,content:e,editorState:d.EditorState.createWithContent(d.ContentState.createFromText(e))})})).finally((function(){t.setState({loading:!1})}))},t.saveFileContent=function(){var e=t.state,n=e.path,a=e.content;t.setState({loading:!0}),Object(f.b)("/api/auth/file",{method:"POST",body:{path:n,content:a}}).then((function(){t.setState({rawContent:a}),s.b.success("\u4fdd\u5b58\u6210\u529f")})).finally((function(){t.setState({loading:!1})}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.fetchFileDir()}},{key:"render",value:function(){return this.context.theme!==this.theme&&(this.theme=this.context.theme),Object(j.jsxs)("div",{className:"edit-page",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u6e90\u6587\u4ef6",style:{width:"200px"},onChange:this.handleChangeFile,children:this.state.files.map((function(t){return Object(j.jsx)(l.a.Option,{value:t,children:t},t)}))}),"\xa0\xa0",Object(j.jsx)(h.a,{type:"primary",icon:Object(j.jsx)(r.a,{}),disabled:this.state.rawContent===this.state.content,loading:this.state.loading,onClick:this.saveFileContent,children:"\u4fdd\u5b58"})]}),Object(j.jsx)("div",{style:{marginTop:"1rem"},children:Object(j.jsx)(d.Editor,{placeholder:"\u672a\u9009\u62e9\u6587\u4ef6",editorState:this.state.editorState,onChange:this.handldEditContent})})]})}}]),n}(u.Component);m.contextType=b.a,e.default=Object(p.a)(m)}}]);