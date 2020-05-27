(function(e){function t(t){for(var a,i,o=t[0],u=t[1],l=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(m.length)m.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var u=s[o];0!==r[u]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},r={app:0},n=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/rating-game-client/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},"1fe2":function(e,t,s){},cd49:function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-content",[s("page")],1)],1)},n=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("connect",{directives:[{name:"show",rawName:"v-show",value:"joining"===e.state,expression:"state === 'joining'"}],on:{"join-game":e.joinGame,"create-game":e.createGame}}),s("game",{directives:[{name:"show",rawName:"v-show",value:"joining"!==e.state,expression:"state !== 'joining'"}],attrs:{"game-id":e.gameId,players:e.players,leader:e.leader,name:e.name,state:e.state,prompts:e.prompts,guesses:e.guesses,"all-guesses":e.allGuesses,answers:e.answers},on:{"start-game":e.startGame,"submit-prompts":e.submitPrompts,"submit-rating":e.submitRating,"submit-guesses":e.submitGuesses}})],1)},o=[],u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"4",offset:"4","align-self":"center"}},[s("v-text-field",{attrs:{label:"Nom"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),s("v-row",[s("v-col",{attrs:{height:"100%",cols:"4",offset:"2","align-self":"center"}},[s("v-card",{attrs:{height:"100%"}},[s("v-card-title",[e._v(" Nouvelle partie ")]),s("v-card-actions",[s("v-btn",{attrs:{color:"primary"},on:{click:e.create}},[e._v("Créer")])],1)],1)],1),s("v-col",{attrs:{cols:"4",offset:"2","align-self":"center"}},[s("v-card",[s("v-card-title",[e._v(" Rejoindre une partie ")]),s("v-card-text",[s("v-text-field",{attrs:{label:"ID de la partie"},model:{value:e.gameId,callback:function(t){e.gameId=t},expression:"gameId"}})],1),s("v-card-actions",[s("v-btn",{attrs:{color:"primary"},on:{click:e.join}},[e._v("Rejoindre")])],1)],1)],1)],1)],1)},l=[],c=a["default"].extend({name:"Connect",data:function(){return{name:"",gameId:""}},methods:{join:function(){this.$emit("join-game",this.name,this.gameId)},create:function(){this.$emit("create-game",this.name)}}}),d=c,m=s("2877"),p=s("6544"),f=s.n(p),g=s("8336"),v=s("b0af"),b=s("99d9"),h=s("62ad"),_=s("a523"),w=s("0fd9"),y=s("8654"),x=Object(m["a"])(d,u,l,!1,null,"5a42c0bf",null),j=x.exports;f()(x,{VBtn:g["a"],VCard:v["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:h["a"],VContainer:_["a"],VRow:w["a"],VTextField:y["a"]});var k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("room-info",{attrs:{"game-id":e.gameId,players:e.players,leader:e.leader,name:e.name,state:e.state},on:{"start-game":e.start}}),s("div",[s("prompts-write",{directives:[{name:"show",rawName:"v-show",value:"writing_prompt"===e.state,expression:"state === 'writing_prompt'"}],on:{"submit-prompts":e.submitPrompts}}),s("rate-self",{directives:[{name:"show",rawName:"v-show",value:"rating_prompts"===e.state,expression:"state === 'rating_prompts'"}],attrs:{prompts:e.prompts},on:{"submit-rating":e.submitRating}}),s("guess",{directives:[{name:"show",rawName:"v-show",value:"guessing"===e.state,expression:"state === 'guessing'"}],attrs:{guesses:e.guesses,name:e.name},on:{"submit-guesses":e.submitGuesses}}),s("answers",{directives:[{name:"show",rawName:"v-show",value:"answers"===e.state,expression:"state === 'answers'"}],attrs:{answers:e.answers,guesses:e.allGuesses,players:e.players}}),s("div",{directives:[{name:"show",rawName:"v-show",value:"waiting_prompts"===e.state||"waiting_rates"===e.state||"waiting_guesses"===e.state,expression:"state === 'waiting_prompts' || state === 'waiting_rates' || state === 'waiting_guesses'"}]},[e._v(" En attente... ")])],1)],1)},V=[],O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-card-title",[e._v("ID de la partie : "+e._s(e.gameId))]),s("v-card-text",[s("v-list",{attrs:{subheader:""}},[s("v-subheader",[e._v("Joueurs")]),e._l(e.players,(function(t,a){return s("v-list-item",{key:a,attrs:{disabled:""}},[s("v-list-item-icon",[t===e.leader?s("v-icon",{attrs:{color:"orange"}},[e._v("mdi-star")]):e._e()],1),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:e._s(t)}})],1)],1)})),"waiting_room"===e.state&&e.name===e.leader?s("v-list-item",{on:{click:e.start}},[s("v-list-item-icon"),s("v-list-item-content",[s("v-list-item-title",[e._v("Commencer")])],1)],1):e._e()],2)],1)],1)},G=[],I=a["default"].extend({name:"RoomInfo",props:{gameId:{required:!0,type:String,default:""},players:{required:!0,type:Array,default:function(){return[]}},leader:{required:!0,type:String,default:""},name:{required:!0,type:String,default:""},state:{required:!0,type:String,default:""}},methods:{start:function(){this.$emit("start-game")}}}),S=I,$=s("132d"),q=s("8860"),C=s("da13"),P=s("5d23"),E=s("34c3"),R=s("e0c7"),T=Object(m["a"])(S,O,G,!1,null,"4f1cb3ea",null),L=T.exports;f()(T,{VCard:v["a"],VCardText:b["b"],VCardTitle:b["c"],VIcon:$["a"],VList:q["a"],VListItem:C["a"],VListItemContent:P["a"],VListItemIcon:E["a"],VListItemTitle:P["b"],VSubheader:R["a"]});var N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-textarea",{attrs:{outlined:""},model:{value:e.prompt1,callback:function(t){e.prompt1=t},expression:"prompt1"}}),s("v-textarea",{attrs:{outlined:""},model:{value:e.prompt2,callback:function(t){e.prompt2=t},expression:"prompt2"}}),s("v-textarea",{attrs:{outlined:""},model:{value:e.prompt3,callback:function(t){e.prompt3=t},expression:"prompt3"}}),s("v-btn",{on:{click:e.submit}},[e._v("Soumettre")])],1)},A=[],M=a["default"].extend({name:"Game",data:function(){return{prompt1:"",prompt2:"",prompt3:""}},methods:{submit:function(){this.$emit("submit-prompts",[this.prompt1,this.prompt2,this.prompt3])}}}),J=M,B=s("a844"),D=Object(m["a"])(J,N,A,!1,null,"132efd05",null),W=D.exports;f()(D,{VBtn:g["a"],VTextarea:B["a"]});var F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("rate-list",{model:{value:e.ordered,callback:function(t){e.ordered=t},expression:"ordered"}}),s("v-btn",{on:{click:e.submit}},[e._v("Soumettre")])],1)},z=[],H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("draggable",{attrs:{tag:"v-list",list:e.list},on:{change:function(t){return e.$emit("input",e.list)}}},e._l(e.list,(function(t){return s("v-list-item",{key:t},[s("v-list-item-content",[s("v-list-item-title",[e._v(e._s(t))])],1)],1)})),1)},K=[],Q=s("310e"),U=s.n(Q),X=a["default"].extend({name:"RateList",components:{draggable:U.a},props:{value:{required:!1,type:Array,default:function(){return[]}}},data:function(){return{list:[]}},watch:{value:{handler:function(e){this.list=e},immediate:!0}}}),Y=X,Z=(s("f375"),Object(m["a"])(Y,H,K,!1,null,null,null)),ee=Z.exports;f()(Z,{VListItem:C["a"],VListItemContent:P["a"],VListItemTitle:P["b"]});var te=a["default"].extend({name:"RateSelf",components:{RateList:ee},props:{prompts:{required:!0,type:Array,default:function(){return[]}}},data:function(){return{ordered:[]}},methods:{submit:function(){this.$emit("submit-rating",this.ordered)}},watch:{prompts:function(e){this.ordered=e}}}),se=te,ae=Object(m["a"])(se,F,z,!1,null,"8b8289e6",null),re=ae.exports;f()(ae,{VBtn:g["a"]});var ne=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._l(e.otherPlayersGuesses,(function(t){return s("v-card",{key:t},[s("v-card-title",[e._v(" "+e._s(t)+" ")]),s("rate-list",{model:{value:e.orderedGuesses[t],callback:function(s){e.$set(e.orderedGuesses,t,s)},expression:"orderedGuesses[playerName]"}})],1)})),s("v-btn",{on:{click:e.submit}},[e._v("Soumettre")])],2)},ie=[],oe=a["default"].extend({name:"Guess",components:{RateList:ee},props:{guesses:{required:!0,type:Object,default:function(){return{}}},name:{required:!0,type:String,default:""}},data:function(){return{orderedGuesses:{}}},methods:{submit:function(){this.$emit("submit-guesses",this.orderedGuesses)}},computed:{otherPlayersGuesses:function(){var e=this;return Object.keys(this.orderedGuesses).filter((function(t){return t!==e.name}))}},watch:{guesses:function(e){this.orderedGuesses=e}}}),ue=oe,le=Object(m["a"])(ue,ne,ie,!1,null,"23f14cce",null),ce=le.exports;f()(le,{VBtn:g["a"],VCard:v["a"],VCardTitle:b["c"]});var de=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.isObjectEmpty(e.answers)||e.isObjectEmpty(e.guesses)?e._e():s("v-simple-table",[s("thead",[s("tr",[s("th"),e._l(e.players,(function(t){return s("th",{key:t},[e._v(e._s(t)+" ")])}))],2)]),s("tbody",e._l(e.players,(function(t){return s("tr",{key:t},[s("td",[s("v-card",[s("v-card-title",[e._v(e._s(t))]),s("v-list",e._l(e.answers[t],(function(t){return s("v-list-item",{key:t},[e._v(" "+e._s(t)+" ")])})),1)],1)],1),e._l(e.players,(function(a){return s("td",{key:a},[a!==t?s("v-list",e._l(e.guesses[a][t],(function(t){return s("v-list-item",{key:t},[e._v(" "+e._s(t)+" ")])})),1):e._e()],1)}))],2)})),0)])},me=[],pe=a["default"].extend({name:"Answers",props:{answers:{required:!0,type:Object,default:function(){return{}}},players:{required:!0,type:Array,default:function(){return[]}},guesses:{required:!0,type:Object,default:function(){return{}}}},methods:{isObjectEmpty:function(e){return 0===Object.entries(e).length}}}),fe=pe,ge=s("1f4f"),ve=Object(m["a"])(fe,de,me,!1,null,"3eb7997e",null),be=ve.exports;f()(ve,{VCard:v["a"],VCardTitle:b["c"],VList:q["a"],VListItem:C["a"],VSimpleTable:ge["a"]});var he=a["default"].extend({name:"Game",components:{RoomInfo:L,PromptsWrite:W,RateSelf:re,Guess:ce,Answers:be},props:{gameId:{required:!0,type:String,default:""},players:{required:!0,type:Array,default:function(){return[]}},leader:{required:!0,type:String,default:""},name:{required:!0,type:String,default:""},prompts:{required:!0,type:Array,default:function(){return[]}},state:{required:!0,type:String,default:""},guesses:{required:!0,type:Object,default:function(){return{}}},allGuesses:{required:!0,type:Object,default:function(){return{}}},answers:{required:!0,type:Object,default:function(){return{}}}},methods:{start:function(){this.$emit("start-game")},submitPrompts:function(e){this.$emit("submit-prompts",e)},submitRating:function(e){this.$emit("submit-rating",e)},submitGuesses:function(e){this.$emit("submit-guesses",e)}}}),_e=he,we=Object(m["a"])(_e,k,V,!1,null,"9b27cfc4",null),ye=we.exports,xe=a["default"].extend({name:"Page",components:{Connect:j,Game:ye},data:function(){return{state:"joining",socket:null,name:"",gameId:"",players:[],leader:"",prompts:[],guesses:{},allGuesses:{},answers:{}}},methods:{sendMessage:function(e,t){null!==this.socket?(console.log("send data"),this.socket.send(JSON.stringify({action:e,data:t}))):console.log("No socket")},joinGame:function(e,t){this.name=e,this.sendMessage("join",{name:e,gameId:t})},createGame:function(e){this.name=e,this.sendMessage("create",{name:e})},updateGame:function(e){this.gameId=e.game_id,this.players=e.players,this.leader=e.leader},startGame:function(){this.sendMessage("start",{})},submitPrompts:function(e){this.state="waiting_prompts",this.sendMessage("prompt",{prompts:e})},submitRating:function(e){this.state="waiting_rates",this.sendMessage("rated",{prompts:e})},submitGuesses:function(e){this.state="waiting_guesses",this.sendMessage("guessed",{guesses:e})}},created:function(){console.log("created"),this.socket=new WebSocket("wss://blooming-brook-70135.herokuapp.com");var e=this;this.socket.onmessage=function(t){var s=JSON.parse(t.data);switch(console.log(s),s.action){case"update_room":"joining"!==e.state&&"waiting_room"!==e.state||(e.state="waiting_room",e.updateGame(s.data));break;case"start":"waiting_room"===e.state&&(e.state="writing_prompt");break;case"start_rating":"waiting_prompts"===e.state&&(e.prompts=s.data.prompts,e.state="rating_prompts");break;case"guess":"waiting_rates"===e.state&&(e.guesses=s.data.guesses,e.state="guessing");break;case"show":"waiting_guesses"===e.state&&(e.answers=s.data.answers,e.allGuesses=s.data.guesses,e.state="answers");break;default:break}}}}),je=xe,ke=Object(m["a"])(je,i,o,!1,null,null,null),Ve=ke.exports,Oe=a["default"].extend({name:"App",components:{Page:Ve},data:function(){return{}}}),Ge=Oe,Ie=s("7496"),Se=s("a75b"),$e=Object(m["a"])(Ge,r,n,!1,null,null,null),qe=$e.exports;f()($e,{VApp:Ie["a"],VContent:Se["a"]});var Ce=s("f309");a["default"].use(Ce["a"]);var Pe=new Ce["a"]({}),Ee=s("ce5b"),Re=s.n(Ee);a["default"].config.productionTip=!1,a["default"].use(Re.a),new a["default"]({vuetify:Pe,render:function(e){return e(qe)}}).$mount("#app")},f375:function(e,t,s){"use strict";var a=s("1fe2"),r=s.n(a);r.a}});
//# sourceMappingURL=app.5d4a0e65.js.map