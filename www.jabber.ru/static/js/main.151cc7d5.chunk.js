(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(54)},44:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),l=n(3),i=n(5),o=n(4),u=n(6),s=n(7),m=(n(44),n(24)),b=n(32),d=n(22),h=Object(d.Map)({waiting:!1,failed:!1,token:null}),p=Object(b.combineReducers)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_STARTED":return e.set("failed",!1).set("waiting",!0);case"LOGIN_SUCCESSFUL":return e.set("token",t.token).set("failed",!1).set("waiting",!1);case"LOGIN_FAILED":return e.set("failed",!0).set("waiting",!1);default:return e}}}),E=Object(m.b)(p),O=n(17),f=n(16),j=n(8);var g=n(34),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"medium-blue"}),r.a.createElement("div",{className:"row-full header"},r.a.createElement(O.b,{to:"/"},"Home"),r.a.createElement(O.b,{to:"/about"},"\u041e \u043d\u0430\u0441"),r.a.createElement(O.b,{to:"/service"},"\u0421\u0435\u0440\u0432\u0438\u0441\u044b"),r.a.createElement(O.b,{to:"/help"},"\u041f\u043e\u043c\u043e\u0449\u044c")),r.a.createElement("div",{className:"medium-blue"}))},n}return Object(u.a)(t,e),t}(r.a.PureComponent),w=Object(s.b)()(v),N=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"medium-blue"}),r.a.createElement("div",{className:"row-full footer"}),r.a.createElement("div",{className:"medium-blue"}))},n}return Object(u.a)(t,e),t}(r.a.PureComponent),y=Object(s.b)()(N),k=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-row login-title"},r.a.createElement("div",{className:"underline"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),"/",r.a.createElement("div",{onClick:this.props.switchToSignup},"\u0412\u0445\u043e\u0434")),r.a.createElement("div",{className:"login-row"},r.a.createElement("input",{placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})),r.a.createElement("div",{className:"login-row"},r.a.createElement("input",{placeholder:"Email"})),r.a.createElement("div",{className:"login-row"},r.a.createElement("button",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),r.a.createElement("div",{className:"login-row"},"\u041f\u043e\u0441\u043b\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0441\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u043f\u043e \u043d\u0440\u0430\u0432\u0443 \u0438\u0437 \u043f\u0435\u0440\u0435\u0447\u043d\u044f \u043d\u0438\u0436\u0435, \u043f\u0440\u0438\u0437\u043e\u0432\u0438\u0442\u0435 \u0434\u0440\u0443\u0437\u0435\u0439 \u0438 \u043e\u0431\u0449\u0430\u0439\u0442\u0435\u0441\u044c"))}}]),t}(r.a.PureComponent),C=Object(s.b)()(k),A=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-row login-title"},r.a.createElement("div",{onClick:this.props.switchToRegistration},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),"/",r.a.createElement("div",{className:"underline"},"\u0412\u0445\u043e\u0434")),r.a.createElement("div",{className:"login-row"},r.a.createElement("input",{placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})),r.a.createElement("div",{className:"login-row"},r.a.createElement("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})),r.a.createElement("div",{className:"login-row"},r.a.createElement("button",null,"\u0412\u0445\u043e\u0434")),r.a.createElement("div",{className:"login-row"},"\u041f\u043e\u0441\u043b\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0441\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u043f\u043e \u043d\u0440\u0430\u0432\u0443 \u0438\u0437 \u043f\u0435\u0440\u0435\u0447\u043d\u044f \u043d\u0438\u0436\u0435, \u043f\u0440\u0438\u0437\u043e\u0432\u0438\u0442\u0435 \u0434\u0440\u0443\u0437\u0435\u0439 \u0438 \u043e\u0431\u0449\u0430\u0439\u0442\u0435\u0441\u044c"))}}]),t}(r.a.PureComponent),P=Object(s.b)()(A),S=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).switchToSignup=function(){n.setState({selectedAuth:!0})},n.switchToRegistration=function(){n.setState({selectedAuth:!1})},n.state={selectedAuth:!1},n}return Object(u.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-root"},this.state.selectedAuth?r.a.createElement(P,{switchToRegistration:this.switchToRegistration}):r.a.createElement(C,{switchToSignup:this.switchToSignup}))}}]),t}(r.a.PureComponent),T=Object(s.b)(function(e){return{isLogged:null!==e.getIn(["login","token"],null)}},function(){return{}})(S),F=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(w,null),r.a.createElement("div",{className:"light-blue row-0"}),r.a.createElement("div",{className:"row-1 intro"},r.a.createElement("h2",null,"\u0427\u0430\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441 \u0442\u043e\u0431\u043e\u0439"),r.a.createElement("p",null,"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0439\u0441\u044f \u043a \u043d\u0430\u043c, \u0431\u0430\u0440\u043e\u043d!")),r.a.createElement("div",{className:"row-2 intro intro-image"}),r.a.createElement("div",{className:"light-blue"}),r.a.createElement("div",{className:"row-1 info"},r.a.createElement("h3",null,"\u041a\u043e\u0440\u043e\u0442\u043a\u043e \u043e \u0433\u043b\u0430\u0432\u043d\u043e\u043c"),r.a.createElement("p",null,"Jabber.ru - \u044d\u0442\u043e \u0442\u0430\u043a\u043e\u0439 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440. \u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439, \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439, \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0439, \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0438 \u043d\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u0445.")),r.a.createElement("div",{className:"row-2 donation"},r.a.createElement("h3",null,"\u041f\u043e\u043c\u043e\u0433\u0438\u0442\u0435, \u0447\u0435\u043c \u043c\u043e\u0436\u0435\u0442\u0435"),r.a.createElement("p",null,"\u041d\u0430\u0448 \u0447\u0430\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u044b\u043b \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u043c, \u0442\u0430\u043a\u0438\u043c \u0438 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f. \u041d\u043e \u043c\u044b \u0441 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u0440\u0438\u043c\u0435\u043c \u043f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0442 \u0432\u0441\u0435\u0445, \u043a\u043e\u043c\u0443 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f jabber.ru")),r.a.createElement("div",{className:"row-1 login"},r.a.createElement(T,null)),r.a.createElement("div",{className:"row-2 news"},r.a.createElement(g.a,{sourceType:"profile",screenName:"Jabberru",noHeader:!0,noFooter:!0,noBorders:!0,options:{height:500}})),r.a.createElement("div",{className:"row-wide clients"}),r.a.createElement(y,null))}}]),t}(r.a.PureComponent),I=Object(s.b)(function(e){return{waiting:e.getIn(["login","waiting"],!1),failed:e.getIn(["login","failed"],!1),token:e.getIn(["login","token"],null)}},function(e){return{signup:function(e,t){}}})(F),L=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,"About page.")}}]),t}(r.a.PureComponent),R=Object(s.b)(function(){return{}},function(){return{}})(L),x=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,"Service page.")}}]),t}(r.a.PureComponent),J=Object(s.b)(function(){return{}},function(){return{}})(x),G=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,"Help page.")}}]),t}(r.a.PureComponent),H=Object(s.b)(function(){return{}},function(){return{}})(G),_=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement(O.a,null,r.a.createElement(f.a,{path:"/",exact:!0,component:I}),r.a.createElement(f.a,{path:"/about",exact:!0,component:R}),r.a.createElement(f.a,{path:"/service",exact:!0,component:J}),r.a.createElement(f.a,{path:"/help",exact:!0,component:H}))},n}return Object(u.a)(t,e),t}(r.a.PureComponent),B=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement(s.a,{store:E},r.a.createElement(_,null))},n}return Object(u.a)(t,e),t}(r.a.PureComponent);Object(c.render)(r.a.createElement(B,null),document.getElementById("root"))}},[[35,1,2]]]);