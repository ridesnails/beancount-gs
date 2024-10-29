"use strict";(self.webpackChunkbeancount_web=self.webpackChunkbeancount_web||[]).push([[682],{7287:(e,t,s)=>{s.d(t,{A:()=>n});var i=s(4760);const n=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";t=Number(t).toFixed(2);const r=(0,i.b9)(e);return"Income"===r?t>0?`-${s}${Math.abs(t)} ${s?"":n}`:`+${s}${Math.abs(t)} ${s?"":n}`:"Assets"===r?t>0?`+${s}${Math.abs(t)} ${s?"":n}`:`-${s}${Math.abs(t)} ${s?"":n}`:"Expenses"===r||"Liabilities"===r?t>0?`-${s}${Math.abs(t)} ${s?"":n}`:`+${s}${Math.abs(t)} ${s?"":n}`:String(t)}},9470:(e,t,s)=>{s.d(t,{A:()=>n});s(9284);var i=s(712);const n=e=>{let{iconType:t,...s}=e;return(0,i.jsx)("img",{...s,src:`../../web/icons/${t}.png`,alt:"",width:32,height:32})}},1410:(e,t,s)=>{s.d(t,{A:()=>f});var i=s(5504),n=s(8405),r=s(1619),a=s(8037),o=s(6749),c=s(3981),l=s(9284),h=s(4760),d=s(7287),u=s(9470),m=s(1419),p=s(712);class y extends l.Component{constructor(){super(...arguments),this.state={transactions:[],selectedMonth:"",loading:!1},this.handleQueryAccountTransaction=e=>{if(!e)return;let t,s;if(this.setState({loading:!0}),this.state.selectedMonth){const e=this.state.selectedMonth.split("-").filter((e=>e));1===e.length?t=e[0]:2===e.length&&(t=e[0],s=e[1])}(0,h.hd)(`/api/auth/transaction?account=${e}&year=${t}&month=${s}`).then((e=>{this.setState({transactions:e})})).catch(console.error).finally((()=>{this.setState({loading:!1})}))},this.handleChangeMonth=e=>{this.setState({selectedMonth:e},(()=>{this.handleQueryAccountTransaction(this.props.account)}))}}componentDidMount(){this.props.account&&this.handleQueryAccountTransaction(this.props.account)}componentWillReceiveProps(e){e.visible&&this.handleQueryAccountTransaction(e.account)}render(){const e=this.props.account,{transactions:t,loading:s}=this.state;return(0,p.jsx)(r.A,{title:(0,p.jsxs)("div",{style:{fontSize:14},children:[(0,p.jsx)("div",{children:e}),(0,p.jsxs)("div",{children:["\u6700\u8fd1",t.length,"\u6761\u4ea4\u6613\u8bb0\u5f55"]})]}),placement:"bottom",closable:!0,className:"page-drawer",height:"90vh",bodyStyle:{display:"flex",justifyContent:"center"},...this.props,children:(0,p.jsxs)("div",{className:"page-form",children:[(0,p.jsx)(m.A,{size:"middle",value:this.state.selectedMonth,onChange:this.handleChangeMonth}),(0,p.jsx)(a.Ay,{itemLayout:"horizontal",loading:s,dataSource:t,renderItem:t=>{const s=t.costCurrency&&t.currency!==t.costCurrency,r=Boolean(t.price);let m,y;return s&&(m=(0,c.A)(t.costPrice).mul((0,c.A)(t.number).abs()),r&&(y=(0,c.A)(t.price).sub((0,c.A)(t.costPrice)).mul((0,c.A)(t.number).abs()))),(0,p.jsx)(a.Ay.Item,{actions:[(0,p.jsxs)("div",{style:{textAlign:"right"},children:[(0,p.jsx)("div",{children:t.number?(0,d.A)(e,t.number,t.currencySymbol,t.currency):""}),(0,p.jsx)("div",{style:{fontSize:"12px"},children:(0,h.vv)(t.balance,this.props.commodity)})]})],children:(0,p.jsx)(a.Ay.Item.Meta,{avatar:(0,p.jsx)(u.A,{iconType:(0,h.fe)(e)}),title:t.desc,description:(0,p.jsxs)("div",{children:[t.tags&&(0,p.jsx)("div",{children:t.tags.map((e=>(0,p.jsxs)("a",{style:{marginRight:"4px"},children:["#",e]})))}),(0,p.jsxs)("span",{children:[t.date,"\xa0",t.payee,"\xa0",t.commodity]}),s&&(0,p.jsx)("div",{style:{marginTop:"13px"},children:r?(0,p.jsxs)(l.Fragment,{children:[(0,p.jsxs)(o.A,{children:["\u6301\u4ed3\u6210\u672c: ",t.costPrice," (",t.costDate,")"]}),(0,p.jsxs)(o.A,{children:["\u786e\u8ba4\u51c0\u503c: ",t.price]}),y>=0?(0,p.jsxs)(l.Fragment,{children:[(0,p.jsxs)(o.A,{icon:(0,p.jsx)(i.A,{}),color:"#f50",children:[(100*Number(y)/Number(m)).toFixed(2),"%"]}),(0,p.jsxs)(o.A,{color:"#f50",children:["+",Math.abs(y).toFixed(2)]})]}):(0,p.jsxs)(l.Fragment,{children:[(0,p.jsxs)(o.A,{icon:(0,p.jsx)(n.A,{}),color:"#1DA57A",children:[(100*Number(y)/Number(m)).toFixed(2),"%"]}),(0,p.jsxs)(o.A,{color:"#1DA57A",children:["-",Math.abs(y).toFixed(2)]})]})]}):(0,p.jsx)(l.Fragment,{children:(0,p.jsxs)(o.A,{children:[t.isAnotherCurrency?"\u6c47\u7387":"\u8d2d\u5165\u51c0\u503c",": ",t.costPrice]})})})]})})})}})]})})}}const f=y},8415:(e,t,s)=>{s.d(t,{A:()=>F});var i=s(323),n=s(6684),r=s(8943),a=s(6445),o=s(9636),c=s(6668),l=s(4412),h=s(1619),d=s(9492),u=s(9663),m=s(6749),p=s(2942),y=s(9641),f=s(2125),A=s(1896),x=s(8409),g=s.n(x),j=s(3981),b=s(9284),v=s(4760),C=s(9470),S=s(712);const T=e=>{let{currencies:t=[],ledgerCurrency:s,defaultValue:i,onChange:n}=e;return 0===t.length?(0,S.jsx)(b.Fragment,{}):1===t.length?(0,S.jsx)("div",{children:t[0].currency}):(0,S.jsx)(o.A,{defaultValue:i,onChange:n,className:"select-before",children:t.map((e=>{let{price:t,currency:s}=e;return(0,S.jsx)(o.A.Option,{value:s,children:s})}))})},{Option:M}=o.A,w={required:"${label} \u4e0d\u80fd\u4e3a\u7a7a\uff01"},Y=e=>{let{form:t,initialValue:s,...i}=e;return b.useEffect((()=>{t.current.setFields([{name:i.name,value:s}])}),[]),(0,S.jsx)(c.A.List,{...i})};class D extends b.Component{constructor(){super(...arguments),this.formRef=b.createRef(),this.state={loading:!1,drawerVisible:!1,templateLoading:!1,accounts:[],payees:[],autoCompletePayees:[],templates:this.props.defaultAccounts?[{entries:[...this.props.defaultAccounts]}]:[],showTag:!1,tags:[],isDivide:!1},this.formatEnties=e=>e.map((e=>this.formatOneEntity(e,e.currency||this.props.commodity.currency))),this.formatOneEntity=(e,t)=>{if(e.currency=t,t!==this.props.commodity.currency){if(e.currencies&&e.currencies.length>0){const s=e.currencies.filter((e=>e.currency===t));s&&s.length>0&&(e.price=s[0].price,e.priceCommodity=this.props.commodity.currency)}}else delete e.price,delete e.priceCommodity;return e},this.queryAllValidAccounts=()=>{(0,v.hd)("/api/auth/account/valid").then((e=>{this.setState({accounts:this.formatEnties(e)})})).catch(console.error)},this.queryLatest100Payees=()=>{(0,v.hd)("/api/auth/transaction/payee").then((e=>{this.setState({payees:e,autoCompletePayees:e.slice(0,Math.max(e.length,10))})})).catch(console.error)},this.queryTransactionTemplates=()=>{(0,v.hd)("/api/auth/transaction/template").then((e=>{this.setState({templates:e})})).catch(console.error)},this.queryAllTags=()=>{(0,v.hd)("/api/auth/tags").then((e=>{this.setState({tags:e})})).catch(console.error)},this.handleSearchPayee=e=>{const t=this.state.payees.filter((t=>t.indexOf(e)>=0));this.setState({autoCompletePayees:t})},this.handleSaveTransactionTemplate=()=>{const e=this.formRef.current.getFieldsValue();e&&e.entries&&e.entries.length>0&&this.state.accounts&&this.state.accounts.length>0&&e.entries.forEach((e=>{const t=this.state.accounts.filter((t=>t.account===e.account));t&&1===t.length&&((e=t[0]).number=e.number||"")}));const{payee:t,desc:s}=e;e.templateName=`${t||""}-${s||""}`,this.setState({templateLoading:!0}),(0,v.hd)("/api/auth/transaction/template",{method:"POST",body:e}).then((e=>{l.Ay.success("\u4fdd\u5b58\u6a21\u7248\u6210\u529f"),this.queryTransactionTemplates()})).finally((()=>{this.setState({templateLoading:!1,drawerVisible:!1})}))},this.handleChangeAmount=e=>{this.setState({balanceAmount:e})},this.handleChangeAccount=(e,t)=>{const s=this.formRef.current.getFieldsValue().entries;s[t]=this.getAccount(e),this.formRef.current.setFieldsValue({entries:s})},this.getAccount=e=>this.state.accounts.filter((t=>t.account===e))[0],this.getAccountCommodity=e=>{const t=this.state.accounts.filter((t=>t.account===e))[0];return t?t.currency:""},this.needFillAccountCommodityRate=e=>{if(!e)return!1;const t=this.state.accounts.filter((t=>t.account===e.account))[0];return!!t&&t.currency!==this.props.commodity.currency},this.handleChangeAccountCurrency=(e,t,s)=>{const i=this.getAccount(e.account),{entries:n}=this.formRef.current.getFieldsValue();n[s]=this.formatOneEntity(i,t),this.formRef.current.setFieldsValue({entries:n})},this.handleSubmit=e=>{const{divideCount:t,divideCycle:s}=e;if(t&&t>0){const i=g()(e.date);e.divideDateList=[];for(let n=0;n<t;n++)"day"===s?e.divideDateList.push(i.add(n,"days").format("YYYY-MM-DD")):"week"===s?e.divideDateList.push(i.add(n,"weeks").format("YYYY-MM-DD")):"month"===s&&e.divideDateList.push(i.add(n,"months").format("YYYY-MM-DD"));delete e.divideCount,delete e.divideCycle}if(!e.entries||!e.entries.length)return void l.Ay.error("\u8d26\u76ee\u4e0d\u80fd\u4e3a\u7a7a");let i,n=0;for(let r of e.entries)r&&r.number||(i=r,n++);if(1==n)i.number=String(this.computeBalanceAmount(e,this.props.commodity.currency));else if(n>1)return void l.Ay.error("\u8d26\u76ee\u91d1\u989d\u9879\u4e0d\u80fd\u4e3a\u7a7a");this.props.defaultTransaction&&this.props.defaultTransaction.id&&(e.id=this.props.defaultTransaction.id),this.setState({loading:!0}),(0,v.hd)("/api/auth/transaction",{method:"POST",body:e}).then((t=>{l.Ay.success("\u6dfb\u52a0\u6210\u529f"),this.queryAllValidAccounts(),this.formRef.current.resetFields(),this.formRef.current.setFieldsValue({date:g()().format("YYYY-MM-DD")});const{payees:s}=this.state;if(e.payee){const t=Array.from(new Set([...s,e.payee])),i=t.slice(0,Math.max(t.length,10));this.setState({autoCompletePayees:i})}else this.setState({autoCompletePayees:s.slice(0,Math.max(s.length,10))});this.props.onSubmit&&this.props.onSubmit(e)})).finally((()=>{this.setState({loading:!1})}))},this.handleDeleteTransactionTemplate=(e,t)=>{e.preventDefault(),(0,v.hd)(`/api/auth/transaction/template?id=${t}`,{method:"DELETE"}).then((e=>{this.setState({templates:this.state.templates.filter((e=>e.id!==t))})}))},this.handleSetTemplate=e=>{if(delete e.date,this.state.accounts&&this.state.accounts.length>0){const t=e.entries.map((e=>{const t=this.state.accounts.filter((t=>t.account===e.account));return t&&1===t.length?{...t[0],number:e.number}:e}));e.entries=t}this.formRef.current.setFieldsValue(e)},this.handleToggleShowTagInput=()=>{this.setState({showTag:!this.state.showTag})},this.handleToggleShowDivideInput=()=>{this.setState({isDivide:!this.state.isDivide})}}componentDidMount(){this.props.visible&&setTimeout((()=>{this.queryAllValidAccounts(),this.queryLatest100Payees(),this.queryTransactionTemplates(),this.queryAllTags()}),1e3),this.props.visible&&this.setState({drawerVisible:!0})}componentWillReceiveProps(e){e.visible&&!this.loaded&&(this.queryAllValidAccounts(),this.queryLatest100Payees(),this.queryTransactionTemplates(),this.queryAllTags(),this.loaded=!0),this.formRef.current&&e.defaultAccounts&&e.defaultAccounts.length>0&&(!this.props.defaultAccounts||e.defaultAccounts[0].account!==this.props.defaultAccounts[0].account)&&this.formRef.current.setFieldsValue({entries:this.formatEnties([...e.defaultAccounts])}),this.formRef.current&&e.defaultTransaction&&e.defaultTransaction.id&&this.formRef.current.setFieldsValue(e.defaultTransaction)}computeBalanceAmount(e,t){let s=(0,j.A)(0);const i=e.entries.filter((e=>e&&e.currency!==t&&(e.number||e.price)));return e.entries.filter((e=>e&&e.currency===t&&e.number)).forEach((e=>{const{number:t}=e;s=(s||(0,j.A)(0)).sub((0,j.A)(t))})),i.forEach((e=>{const{number:i,currency:n,price:r}=e;n&&t!==n&&i&&r?s=(s||(0,j.A)(0)).sub((0,j.A)(i).mul((0,j.A)(r))):i?s=(s||(0,j.A)(0)).sub((0,j.A)(i)):r&&(s=(s||(0,j.A)(0)).div((0,j.A)(r)))})),s.toNumber()}render(){return(0,S.jsx)(h.A,{...this.props,title:"\u8bb0\u8d26",placement:"bottom",closable:!0,height:"90vh",className:"page-drawer",bodyStyle:{display:"flex",justifyContent:"center"},forceRender:!0,onClose:()=>{this.props.onClose&&this.props.onClose(),this.formRef.current&&this.formRef.current.resetFields()},children:(0,S.jsx)(c.A,{className:"page-form",size:"large",loading:this.props.loading,ref:this.formRef,onFinish:this.handleSubmit,validateMessages:w,children:(0,S.jsxs)(d.A,{spinning:this.props.loading,children:[(0,S.jsx)("div",{style:{marginBottom:"1rem"},children:(0,S.jsx)(u.A,{wrap:!0,children:this.state.templates.map((e=>(0,S.jsx)("a",{onClick:()=>{this.handleSetTemplate(e)},children:(0,S.jsx)(m.A,{size:"middle",color:"#1DA57A",closable:!0,onClose:t=>{this.handleDeleteTransactionTemplate(t,e.id)},children:e.templateName||e.payee||e.id})},e.id)))})}),(0,S.jsx)(c.A.Item,{name:"date",initialValue:g()().format("YYYY-MM-DD"),rules:[{required:!0}],children:(0,S.jsx)(p.A,{type:"date",placeholder:"\u4ea4\u6613\u65f6\u95f4"})}),(0,S.jsx)(c.A.Item,{name:"payee",children:(0,S.jsx)(y.A,{onSearch:this.handleSearchPayee,placeholder:"\u6536\u6b3e\u4eba/\u5546\u6237/\u6536\u5165\u6765\u6e90\u6e20\u9053",children:this.state.autoCompletePayees.map((e=>(0,S.jsx)(y.A.Option,{value:e,children:e},e)))})}),(0,S.jsx)(c.A.Item,{name:"desc",rules:[{required:!0,message:"\u8be6\u7ec6\u63cf\u8ff0"}],style:{flex:1},children:(0,S.jsx)(p.A,{placeholder:"\u8be6\u7ec6\u63cf\u8ff0\uff0c\u8bb0\u5f55\u7ec6\u8282"})}),(0,S.jsxs)("div",{style:{display:"flex"},children:[(0,S.jsx)(i.A,{style:{color:this.state.showTag?"#1DA57A":"gray",width:"40px",lineHeight:"40px",fontSize:"20px"},onClick:this.handleToggleShowTagInput}),(0,S.jsx)(n.A,{style:{color:this.state.isDivide?"#1DA57A":"gray",width:"40px",lineHeight:"40px",fontSize:"20px"},onClick:this.handleToggleShowDivideInput})]}),this.state.showTag&&(0,S.jsxs)(b.Fragment,{children:[(0,S.jsx)(f.A,{plain:!0,children:"\u6807\u7b7e"}),(0,S.jsx)(c.A.Item,{name:"tags",rules:[{required:!0}],children:(0,S.jsx)(o.A,{mode:"tags",style:{width:"100%"},placeholder:"\u6807\u7b7e\uff08\u4e0d\u652f\u6301\u4e2d\u6587\uff09\uff0c\u65c5\u884c/\u8ba1\u5212/\u5b66\u4e60",children:this.state.tags.map((e=>(0,S.jsx)(o.A.Option,{value:e,children:e},e)))})})]}),this.state.isDivide&&(0,S.jsxs)(b.Fragment,{children:[(0,S.jsx)(f.A,{plain:!0,children:"\u9884\u652f\u5206\u671f"}),(0,S.jsxs)("div",{style:{display:"flex"},children:[(0,S.jsx)(c.A.Item,{name:"divideCount",rules:[{required:!0,message:"\u5206\u671f\u6570"}],style:{flex:"2",marginRight:"12px"},children:(0,S.jsx)(p.A,{type:"number",step:"1",addonAfter:"\u671f"})}),(0,S.jsx)(c.A.Item,{name:"divideCycle",initialValue:"month",style:{flex:"1"},children:(0,S.jsxs)(o.A,{style:{width:"100%"},children:[(0,S.jsx)(o.A.Option,{value:"day",children:"\u95f4\u9694\u4e00\u5929"}),(0,S.jsx)(o.A.Option,{value:"week",children:"\u95f4\u9694\u4e00\u5468"}),(0,S.jsx)(o.A.Option,{value:"month",children:"\u95f4\u9694\u4e00\u6708"})]})})]})]}),(0,S.jsx)(f.A,{plain:!0,children:"\u8d26\u6237\u660e\u7ec6"}),(0,S.jsx)(c.A.Item,{children:(0,S.jsx)(Y,{form:this.formRef,name:"entries",children:(e,t)=>{let{add:s,remove:i}=t;return(0,S.jsxs)("div",{children:[e.map((e=>{let t=null,s=this.formRef.current.getFieldsValue().entries[e.name];s&&(t=this.getAccountCommodity(s.account));const n=this.formRef.current.getFieldsValue(["entries"]),a=this.computeBalanceAmount(n,this.props.commodity.currency);return(0,S.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginBottom:8},children:[(0,S.jsx)(c.A.Item,{name:[e.name,"account"],fieldKey:[e.fieldKey,"account"],rules:[{required:!0,message:"\u5fc5\u8f93\u9879"}],children:(0,S.jsx)(o.A,{showSearch:!0,placeholder:"\u9009\u62e9\u8d26\u6237",optionFilterProp:"children",onChange:t=>{this.handleChangeAccount(t,e.name)},style:{marginRight:"10px"},children:this.state.accounts.map((e=>(0,S.jsxs)(M,{value:e.account,children:[(0,S.jsx)(C.A,{style:{width:"22px",height:"22px",marginRight:"6px"},iconType:(0,v.fe)(e.account)}),e.account]})))})}),this.needFillAccountCommodityRate(s)&&(0,S.jsxs)(b.Fragment,{children:[(0,S.jsx)(c.A.Item,{hidden:!0,name:[e.name,"priceCurrency"],fieldKey:[e.fieldKey,"priceCurrency"],children:(0,S.jsx)(p.A,{})}),(0,S.jsx)(c.A.Item,{name:[e.name,"price"],fieldKey:[e.fieldKey,"price"],children:(0,S.jsx)(p.A,{type:"number",step:"0.01",addonBefore:`1 ${t}\u2248`,addonAfter:this.props.commodity.currency,placeholder:"\u6c47\u7387/\u51c0\u503c\uff08\u9009\u586b\uff09",onChange:this.handleChangeAmount})})]}),(0,S.jsx)(c.A.Item,{hidden:!0,name:[e.name,"currency"],fieldKey:[e.fieldKey,"currency"],children:(0,S.jsx)(p.A,{})}),(0,S.jsxs)("div",{style:{display:"flex"},children:[(0,S.jsx)(c.A.Item,{name:[e.name,"number"],fieldKey:[e.fieldKey,"number"],style:{flex:1},children:(0,S.jsx)(p.A,{type:"number",step:"0.01",addonBefore:s?(0,S.jsx)(T,{defaultValue:s.currency,currencies:s.currencies,ledgerCurrency:this.props.commodity.currency,onChange:t=>{s.currency=t,this.handleChangeAccountCurrency(s,t,e.name)}}):null,placeholder:a?`${a}(\u6309Enter\u952e\u53ef\u5feb\u901f\u4fdd\u5b58)`:(this.state.isDivide?"\u9884\u652f\u5206\u671f\u603b":"")+"\u91d1\u989d",onChange:this.handleChangeAmount,style:{flex:1}})}),(0,S.jsx)(r.A,{style:{width:"40px",lineHeight:"40px",fontSize:"20px"},onClick:()=>{i(e.name)}})]}),(0,S.jsx)(f.A,{})]},e.name)})),(0,S.jsx)(c.A.Item,{children:(0,S.jsxs)(A.A,{type:"dashed",onClick:()=>{s()},block:!0,children:[(0,S.jsx)(a.A,{})," \u6dfb\u52a0\u8d26\u76ee"]})})]})}})}),(0,S.jsxs)(c.A.Item,{children:[(0,S.jsx)(A.A,{type:"primary",htmlType:"submit",loading:this.state.loading,className:"submit-button",children:"\u4fdd\u5b58"}),"\xa0\xa0",(0,S.jsx)(A.A,{htmlType:"button",disabled:this.state.loading,loading:this.state.templateLoading,onClick:this.handleSaveTransactionTemplate,block:!0,children:"\u4fdd\u5b58\u4e3a\u6a21\u7248"})]}),(0,S.jsx)(c.A.Item,{})]})})})}}const F=D},1419:(e,t,s)=>{s.d(t,{A:()=>h});var i=s(9636),n=s(8409),r=s.n(n),a=s(9284),o=s(4760),c=s(712);class l extends a.Component{constructor(){super(...arguments),this.currentYear=r()().format("YYYY"),this.currentMonth=r()().format("YYYY-M"),this.state={loading:!1,years:[this.currentYear],months:[this.currentMonth]},this.queryMonthList=()=>{this.setState({loading:!0}),(0,o.hd)("/api/auth/stats/months").then((e=>{let t=Array.from(new Set(e.map((e=>e.split("-")[0]))));this.setState({months:e,years:t})})).catch(console.error).finally((()=>{this.setState({loading:!1})}))}}componentDidMount(){this.queryMonthList()}render(){return(0,c.jsxs)(i.A,{size:"small",showSearch:!0,placeholder:"\u9009\u62e9\u6708\u4efd",style:{width:"120px"},...this.props,children:[!this.props.onlyShowMonth&&(0,c.jsx)(i.A.Option,{value:"",children:"\u4e0d\u9650"}),!this.props.onlyShowMonth&&this.state.years.reverse().map((e=>(0,c.jsx)(i.A.Option,{value:e,children:r()(e).format("YYYY\u5e74")},e))),this.state.months.reverse().map((e=>(0,c.jsx)(i.A.Option,{value:e,children:r()(e).format("YYYY\u5e74MM\u6708")},e)))]})}}const h=l},2069:(e,t,s)=>{s.d(t,{A:()=>r});var i=s(9284),n=s(712);const r=e=>class extends i.Component{constructor(){super(...arguments),this.defaultCommodity={currency:"CNY",symbol:"\uffe5"},this.currentCommodity=window.localStorage.getItem("ledgerCurrency")}render(){return(0,n.jsx)(e,{...this.props,commodity:this.currentCommodity?JSON.parse(this.currentCommodity):this.defaultCommodity})}}}}]);