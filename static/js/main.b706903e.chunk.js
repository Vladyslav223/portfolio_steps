(this.webpackJsonpperfectorium=this.webpackJsonpperfectorium||[]).push([[0],{39:function(e,t,a){e.exports=a(54)},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),o=a.n(r),i=a(20),l=a(14),s=a(26),m=a(27),u=a(28),p="DISPATCH",d=p,g=function(e,t){return function(t){t({type:d,payload:e})}},b=p,E={data1:!1,data2:!1,data3:!1,data4:!1},f=Object(l.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)({},e);default:return e}}),Object(s.composeWithDevTools)(Object(l.applyMiddleware)(m.a))),v=(a(49),a(50),a(32)),_=a(9),h=a(5),N=a(77),k=a(3),w=a(82),j=a(78),O=a(81),S=a(76),y=a(80),C=a(79),I=a(75),P=(a(51),Object(h.a)((function(e){return{root:{color:"white",backgroundColor:I.a[200],"&:hover":{backgroundColor:I.a[300]}}}}))(y.a)),x=Object(h.a)({alternativeLabel:{top:16,marginLeft:"-5px"},active:{"& $line":{backgroundColor:"#22c1c6"}},completed:{"& $line":{backgroundColor:"#22c1c6"}},line:{height:3,border:0,backgroundColor:"#eaeaf0",borderRadius:1}})(S.a),R=Object(N.a)({root:{backgroundColor:"#ccc",zIndex:1,color:"#fff",width:33,height:33,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"},active:{backgroundColor:"white",border:"2px solid #00b7bd",boxSizing:"border-box",color:"#00b7bd"},completed:{backgroundColor:"#00b7bd"}});function D(e){var t,a=R(),n=e.active,r=e.completed,o={2:c.a.createElement("img",{alt:"icon",src:"icons/step1.png"}),3:c.a.createElement("img",{alt:"icon",src:"icons/step2.png"}),4:c.a.createElement("img",{alt:"icon",src:"icons/step3.png"}),5:c.a.createElement("img",{alt:"icon",src:"icons/step4.png"})},i={2:c.a.createElement("img",{alt:"icon",src:"icons/step1b.png"}),3:c.a.createElement("img",{alt:"icon",src:"icons/step2b.png"}),4:c.a.createElement("img",{alt:"icon",src:"icons/step3b.png"}),5:c.a.createElement("img",{alt:"icon",src:"icons/step4b.png"})};return c.a.createElement("div",{className:Object(k.a)(a.root,(t={},Object(_.a)(t,a.active,n),Object(_.a)(t,a.completed,r),t))},e.active?i[String(e.icon)]:o[String(e.icon)])}var A=Object(N.a)((function(e){return{root:{width:"100%",marginLeft:"7%"},button:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));var H=Object(i.b)((function(e){return{data1:"tra"}}),(function(e){return{onDispatch:function(){return e(g())}}}))((function(e){var t=e.onDispatch,a=A(),n=c.a.useState(1),r=Object(v.a)(n,2),o=r[0],i=r[1],l=["Step 1","Step 2","Step 3","Step 4"];return c.a.createElement("div",{className:a.root},c.a.createElement(w.a,{alternativeLabel:!0,activeStep:o,connector:c.a.createElement(x,null)},c.a.createElement("div",{className:"first-line"}),l.map((function(e){return c.a.createElement(j.a,{key:e},c.a.createElement(O.a,{StepIconComponent:D},c.a.createElement("div",{className:"label"},e)))}))),o===l.length?c.a.createElement("div",null,c.a.createElement(C.a,{className:a.instructions},"Information 1, 2 and 3 received. All steps completed!"),c.a.createElement(y.a,{variant:"contained",color:"primary",onClick:function(){i(0)},className:a.button},"Reset")):c.a.createElement("div",null,c.a.createElement(C.a,{className:a.instructions},function(e){switch(e){case 0:return"Hello! Plese agree with our terms.";case 1:return"Step1. Receiving user information 1";case 2:return"Step2. Information 1 received. Receiving user information 2";case 3:return"Step3. Information 1 & 2 received. Receiving user information 3";default:return"Unknown step"}}(o)),c.a.createElement("div",null,c.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),e.target[0].checked&&i((function(e){return e+1})),e.target[0].checked&&t(o,e.target[0].checked)}},c.a.createElement("input",{type:"checkbox"}),c.a.createElement("label",null,"I agree to the ",c.a.createElement("a",{href:"http://google.com"},"Terms and Conditions")),c.a.createElement("br",null),c.a.createElement(y.a,{style:{color:"gray"},variant:"contained",color:"default",disabled:0===o,onClick:function(){i((function(e){return e-1}))},className:a.button},"Back"),c.a.createElement(P,{type:"submit",variant:"contained",color:"primary",className:a.button},o===l.length-1?"Finish":"DISPATCH")))))})),T=(a(52),function(){return c.a.createElement("div",{className:"bottom"})}),L=a(29),B=a(15),z=a(30),J=a(31),$=a(33),F=(a(53),function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(z.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(c)))).state={collapse:!1},a.clickHandle=function(){a.setState((function(e){return{collapse:!e.collapse}}))},a}return Object($.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this.state.collapse,t=e?"menu__points":"menu__points-disabled";return c.a.createElement("div",{className:"menu"},c.a.createElement("img",{onClick:this.clickHandle,className:e?"menu__icon menu__collapse-button":"menu__icon menu__collapse-button menu__scaled",alt:"menu icon",src:"icons/collapse.png"}),c.a.createElement("div",{className:e?"menu__collapse":"menu__collapse menu__collapse-collapsed"},c.a.createElement("div",{className:"menu__icons-wrap"},c.a.createElement("div",{className:e?"menu__icon-wrapper-collapsed":"menu__icon-wrapper"},c.a.createElement("img",{className:"menu__icon",alt:"menu icon",src:"icons/1.png"})),c.a.createElement("div",{className:"menu__icon-wrapper"},c.a.createElement("img",{className:"menu__icon",alt:"menu icon",src:"icons/2g.png"})),c.a.createElement("div",{className:"menu__icon-wrapper"},c.a.createElement("img",{className:"menu__icon",alt:"menu icon",src:"icons/3g.png"})),c.a.createElement("div",{className:"menu__icon-wrapper"},c.a.createElement("img",{className:"menu__icon",alt:"menu icon",src:"icons/4g.png"})),c.a.createElement("div",{className:"menu__icon-wrapper"},c.a.createElement("img",{className:"menu__icon",alt:"menu icon",src:"icons/5g.png"})),c.a.createElement("div",{className:"menu__icon-wrapper"},c.a.createElement("img",{className:"menu__icon",alt:"menu icon",src:"icons/6g.png"}))),c.a.createElement("div",{className:"menu__points-wrap"},c.a.createElement("p",{className:t},"Point 1"),c.a.createElement("p",{className:t},"Point 2"),c.a.createElement("p",{className:t},"Point 3"),c.a.createElement("p",{className:t},"Point 4"),c.a.createElement("p",{className:t},"Point 5"),c.a.createElement("p",{className:t},"Point 6"))))}}]),t}(n.Component));var M=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(H,null),c.a.createElement(T,null),c.a.createElement(F,null))};o.a.render(c.a.createElement(i.a,{store:f},c.a.createElement(M,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b706903e.chunk.js.map