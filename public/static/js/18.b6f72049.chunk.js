(this["webpackJsonpbeancount-web"]=this["webpackJsonpbeancount-web"]||[]).push([[18],{135:function(e,t,n){"use strict";var a=n(129),c=n(43),o=n(44),r=n(46),i=n(45),l=n(0),s=n(3);t.a=function(e){return function(t){Object(r.a)(l,t);var n=Object(i.a)(l);function l(){var e;Object(c.a)(this,l);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).defaultCommodity={currency:"CNY",symbol:"\uffe5"},e.currentCommodity=window.localStorage.getItem("ledgerCurrency"),e}return Object(o.a)(l,[{key:"render",value:function(){return Object(s.jsx)(e,Object(a.a)(Object(a.a)({},this.props),{},{commodity:this.currentCommodity?JSON.parse(this.currentCommodity):this.defaultCommodity}))}}]),l}(l.Component)}},425:function(e,t,n){"use strict";n.r(t);var a=n(43),c=n(44),o=n(46),r=n(45),i=n(80),l=n(304),s=n(20),u=n(159),d=n(0),h=n(67),b=n(48),m=n(135),g=n(3),p=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).ledgerTitle=localStorage.getItem("ledgerTitle")||"\u8d26\u672c",e.state={loading:!1},e.handleOpenDeleteModal=function(){l.a.confirm({title:"\u786e\u8ba4\u5220\u9664".concat(e.ledgerTitle,"\uff1f"),icon:Object(g.jsx)(i.a,{}),content:"\u5220\u9664\u540e\u5c06\u4e0d\u80fd\u6062\u590d",okText:"\u5220\u9664",onOk:e.handleDelete,okButtonProps:{danger:!0},cancelText:"\u53d6\u6d88"})},e.handleDelete=function(){e.setState({loading:!0}),Object(h.b)("/api/auth/ledger",{method:"DELETE"}).then((function(){localStorage.clear(),s.b.success("".concat(e.ledgerTitle,"\u5df2\u5220\u9664")),e.props.history.replace("/ledger")})).finally((function(){e.setState({loading:!1})}))},e}return Object(c.a)(n,[{key:"render",value:function(){return this.context.theme!==this.theme&&(this.theme=this.context.theme),Object(g.jsx)("div",{className:"setting-page",children:Object(g.jsx)(u.a,{block:!0,danger:!0,loading:this.state.loading,onClick:this.handleOpenDeleteModal,children:"\u5220\u9664\u8d26\u672c"})})}}]),n}(d.Component);p.contextType=b.a,t.default=Object(m.a)(p)}}]);