(function(e){function t(t){for(var n,i,a=t[0],d=t[1],l=t[2],p=0,u=[];p<a.length;p++)i=a[p],o[i]&&u.push(o[i][0]),o[i]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);c&&c(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,a=1;a<s.length;a++){var d=s[a];0!==o[d]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},o={app:0},r=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=d;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},2770:function(e,t,s){},"2fed":function(e,t,s){},"549a":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e._v("\n  Welcome to App Template...\n  "),s("Company",{attrs:{msg:"Welcome to Bibhash India!"}}),s("div",[s("table",[s("tr",[s("td",[s("button",{on:{click:e.showEmployees}},[e._v(e._s(e.exten))])]),s("td",[e.show?s("button",{on:{click:e.addEmployees}},[e._v(e._s(e.edit))]):e._e()])])]),s("table",[s("tr",[s("td",[e.show?s("Developer",{attrs:{dev:e.developers,showAdd:e.showAdd,edit:e.edit},on:{employeeAdded:function(t){return e.newDeveloper(t)}}}):e._e()],1),s("td",[e.show?s("Tester",{attrs:{tes:e.testers,showAdd:e.showAdd,edit:e.edit},on:{testerAdded:function(t){return e.newTester(t)}}}):e._e()],1)])])])],1)},r=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"first"},[s("h1",[e._v("Bibhash Resources")]),e._v("\n    "+e._s(e.msg)+"\n")])},a=[],d={name:"Company",props:{msg:String}},l=d,c=(s("97a7"),s("2877")),p=Object(c["a"])(l,i,a,!1,null,"377108a4",null),u=p.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h5",[e._v("Developers")]),e._l(e.dev,function(e){return s("div",{key:e.id},[s("DeveloperList",{attrs:{devList:e}})],1)}),s("div",{staticClass:"row"},[s("form",[e.empAdd?s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newEmp,expression:"newEmp"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:e.newEmp},on:{input:function(t){t.target.composing||(e.newEmp=t.target.value)}}}):e._e(),s("div",{staticClass:"col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group"},[e.showAdd?s("button",{staticClass:"btn btn-primary",on:{click:function(t){return t.preventDefault(),e.addDeveloper(t)}}},[e._v("Add Developer")]):e._e()])])])],2)},f=[],h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-list",class:{"is-complete":!e.devList.complete}},[s("p",[s("input",{staticClass:"box-color",attrs:{type:"checkbox"},on:{change:e.markComplete}}),e._v("\n\n    "+e._s(e.devList.id+" ::: "+e.devList.devName)+"\n")])])},v=[],w={name:"DeveloperList",props:["devList"],methods:{markComplete:function(){this.devList.complete=!this.devList.complete}}},_=w,b=(s("6012"),Object(c["a"])(_,h,v,!1,null,"4a5d6148",null)),y=b.exports,A={name:"Developer",data:function(){return{empType:"developer",empAdd:!1,newEmp:""}},components:{DeveloperList:y},props:["dev","showAdd"],methods:{addDeveloper:function(){this.empAdd&&(this.$emit("employeeAdded",this.newEmp),this.newEmp=""),this.empAdd=!this.empAdd}}},g=A,x=Object(c["a"])(g,m,f,!1,null,"26265a51",null),T=x.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h5",[e._v("Testers")]),e._l(e.tes,function(e){return s("div",{key:e.id},[s("TesterList",{attrs:{testList:e}})],1)}),s("div",{staticClass:"row"},[s("form",[e.tesAdd?s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newTes,expression:"newTes"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:e.newTes},on:{input:function(t){t.target.composing||(e.newTes=t.target.value)}}}):e._e(),s("div",{staticClass:"col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group"},[e.showAdd?s("button",{staticClass:"btn btn-primary",on:{click:function(t){return t.preventDefault(),e.addTester(t)}}},[e._v("Add Tester")]):e._e()])])])],2)},E=[],L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-list",class:{"is-complete":!e.testList.complete}},[s("p",[s("input",{staticClass:"box-color",attrs:{type:"checkbox"},on:{change:e.markComplete}}),e._v("\n\n    "+e._s(e.testList.id+" ::: "+e.testList.tesName)+"\n")])])},k=[],O={name:"TesterList",props:["testList"],methods:{markComplete:function(){this.testList.complete=!this.testList.complete}}},j=O,D=(s("8722"),Object(c["a"])(j,L,k,!1,null,"75376dc5",null)),N=D.exports,M={name:"Tester",data:function(){return{empType:"tester",tesAdd:!1,newTes:""}},components:{TesterList:N},props:["tes","showAdd"],methods:{addTester:function(){this.tesAdd&&(this.$emit("testerAdded",this.newTes),this.newTes=""),this.tesAdd=!this.tesAdd}}},P=M,$=Object(c["a"])(P,C,E,!1,null,"0c1ac550",null),R=$.exports,S={name:"app",components:{Company:u,Developer:T,Tester:R},data:function(){return{developers:[{id:123,devName:"bibhash",complete:!0},{id:456,devName:"ankur",complete:!0},{id:789,devName:"akshat",complete:!0}],testers:[{id:100,tesName:"imran",complete:!0},{id:101,tesName:"deepak",complete:!0},{id:102,tesName:"vishal",complete:!0}],show:!1,showAdd:!1,exten:"View Resources",edit:"Edit Resources"}},methods:{showEmployees:function(){this.show=!this.show,this.show?this.exten="Hide Resources":this.exten="View Resources"},addEmployees:function(){this.showAdd=!this.showAdd,this.showAdd?this.edit="Cancel Edit":this.edit="Edit Resources"},newDeveloper:function(e){this.developers.push({id:Math.floor(200*Math.random()),devName:e,complete:!0})},newTester:function(e){this.testers.push({id:Math.floor(200*Math.random()),tesName:e,complete:!0})}}},B=S,J=(s("9275"),Object(c["a"])(B,o,r,!1,null,"7a319672",null)),V=J.exports;n["a"].config.productionTip=!1,new n["a"]({el:"#app",render:function(e){return e(V)}})},6012:function(e,t,s){"use strict";var n=s("549a"),o=s.n(n);o.a},"6a3f":function(e,t,s){},8722:function(e,t,s){"use strict";var n=s("2770"),o=s.n(n);o.a},9275:function(e,t,s){"use strict";var n=s("6a3f"),o=s.n(n);o.a},"97a7":function(e,t,s){"use strict";var n=s("2fed"),o=s.n(n);o.a}});
//# sourceMappingURL=app.783720c3.js.map