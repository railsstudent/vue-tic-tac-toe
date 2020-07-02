(function(t){function e(e){for(var a,o,c=e[0],s=e[1],u=e[2],h=0,d=[];h<c.length;h++)o=c[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-tic-tac-toe/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"023a":function(t,e,n){"use strict";var a=n("6c07"),i=n.n(a);i.a},"18f6":function(t,e,n){},"38ae":function(t,e,n){"use strict";var a=n("e9dd"),i=n.n(a);i.a},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"6c07":function(t,e,n){},"9c0c":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Game")],1)},r=[],o=n("d4ec"),c=n("262e"),s=n("2caf"),u=n("9ab4"),l=n("60a3"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game"},[n("h1",[t._v("Vue Tic Tac Toe")]),n("div",{staticClass:"main-container"},[n("div",{staticClass:"play-container"},[n("p",{staticClass:"info"},[t._v("Next Player: "+t._s(t.nextPlayer))]),n("p",{staticClass:"info winner"},[t._v("Winner: "+t._s(t.winner))]),n("div",{staticClass:"info"},[t.endGame?n("button",{staticClass:"button new-game",on:{click:t.startGame}},[t._v(" New Game ")]):t._e()])]),n("div",{staticClass:"moves"},t._l(t.histories,(function(e,a){return n("button",{key:"move-"+a,staticClass:"button",attrs:{disabled:t.endGame},on:{click:function(e){return t.goBackToMove(e,a)}}},[t._v(" "+t._s(0!==a?"Move "+a:"Start Game")+" ")])})),0),n("div",{staticClass:"left"},[n("Board",{attrs:{nextPlayer:t.nextPlayer,board:t.board,histories:t.histories,endGame:t.endGame},on:{changePlayer:t.changePlayer,announcementWinner:t.announceWinner,allMoves:t.generateMoves}})],1)])])},d=[],b=(n("cb29"),n("a434"),n("2909")),v=n("bee2"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board"},t._l(t.board,(function(e,a){return n("Square",{key:"square-"+a,staticClass:"square",class:t.winningClass(a),attrs:{value:e,index:a},on:{setMove:t.update}})})),1)},p=[],O=(n("99af"),n("4de4"),n("c975"),n("13d5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:t.setMove}},[n("span",{class:"player-"+t.value},[t._v(t._s(t.value))])])}),j=[],y=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(v["a"])(n,[{key:"setMove",value:function(){this.value||this.$emit("setMove",this.index)}}]),n}(l["d"]);Object(u["a"])([Object(l["b"])()],y.prototype,"value",void 0),Object(u["a"])([Object(l["b"])()],y.prototype,"index",void 0),y=Object(u["a"])([l["a"]],y);var m,g,G=y,_=G,w=(n("023a"),n("2877")),x=Object(w["a"])(_,O,j,!1,null,"647c6912",null),I=x.exports;(function(t){t[t["WINNER"]=0]="WINNER",t[t["ONGOING"]=1]="ONGOING",t[t["TIED"]=2]="TIED"})(m||(m={})),function(t){t["HORT"]="hort",t["VERTICAL"]="vertical",t["LEFT_DIAG"]="left-diag",t["RIGHT_DIAG"]="right-diag"}(g||(g={}));var N=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.gameState=m.ONGOING,t.which=[],t}return Object(v["a"])(n,[{key:"endGameUpdated",value:function(){this.endGame||(this.gameState=m.ONGOING,this.which=[],this.direction=void 0)}},{key:"winningClass",value:function(t){return this.which.indexOf(t)>=0?"winning-".concat(this.direction):""}},{key:"update",value:function(t){var e=this;if(this.gameState===m.ONGOING){var n=this.board.reduce((function(n,a,i){return i===t?n.concat(e.nextPlayer):n.concat(a)}),[]),a=this.checkWinner(n)||{},i=a.state,r=a.which,o=void 0===r?[]:r,c=a.direction,s=void 0===c?void 0:c;this.gameState=i,this.which=o,this.direction=s,this.gameState===m.ONGOING?(this.$emit("changePlayer"),this.$emit("allMoves",[].concat(Object(b["a"])(this.histories),[n]))):(this.$emit("allMoves",[].concat(Object(b["a"])(this.histories),[n])),this.$emit("announcementWinner",this.gameState))}}},{key:"checkWinner",value:function(t){for(var e=this,n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=[g.HORT,g.HORT,g.HORT,g.VERTICAL,g.VERTICAL,g.VERTICAL,g.LEFT_DIAG,g.RIGHT_DIAG],i=0;i<n.length;i++){var r=0===n[i].filter((function(n){return t[n]!==e.nextPlayer})).length;if(r)return{state:m.WINNER,which:n[i],direction:a[i]}}return 9===t.filter((function(t){return""!==t})).length?{state:m.TIED}:{state:m.ONGOING}}}]),n}(l["d"]);Object(u["a"])([Object(l["c"])()],N.prototype,"gameState",void 0),Object(u["a"])([Object(l["c"])()],N.prototype,"which",void 0),Object(u["a"])([Object(l["c"])()],N.prototype,"direction",void 0),Object(u["a"])([Object(l["b"])()],N.prototype,"board",void 0),Object(u["a"])([Object(l["b"])()],N.prototype,"histories",void 0),Object(u["a"])([Object(l["b"])()],N.prototype,"nextPlayer",void 0),Object(u["a"])([Object(l["b"])()],N.prototype,"endGame",void 0),Object(u["a"])([Object(l["e"])("endGame",{immediate:!0})],N.prototype,"endGameUpdated",null),N=Object(u["a"])([Object(l["a"])({components:{Square:I}})],N);var P=N,T=P,k=(n("38ae"),Object(w["a"])(T,f,p,!1,null,"3c352629",null)),C=k.exports,E="X",M="O",S=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.board=[],t.histories=[],t.nextPlayer=E,t.winner="N/A",t.endGame=!1,t}return Object(v["a"])(n,[{key:"mounted",value:function(){this.board=Array(9).fill(""),this.histories=[Object(b["a"])(this.board)]}},{key:"changePlayer",value:function(){this.nextPlayer=this.nextPlayer===E?M:E}},{key:"announceWinner",value:function(t){t==m.WINNER?(this.winner=this.nextPlayer,this.endGame=!0):t===m.TIED&&(this.winner="tied",this.endGame=!0)}},{key:"startGame",value:function(){this.endGame=!1,this.nextPlayer=E,this.winner="N/A",this.histories=[Array(9).fill("")],this.board=Object(b["a"])(this.histories[this.histories.length-1])}},{key:"generateMoves",value:function(t){this.histories=Object(b["a"])(t),this.board=Object(b["a"])(this.histories[this.histories.length-1])}},{key:"goBackToMove",value:function(t,e){t.preventDefault(),t.stopImmediatePropagation(),this.endGame||(this.board=Object(b["a"])(this.histories[e]),this.histories.splice(e+1,this.histories.length-1-e),this.nextPlayer=e%2===0?E:M)}}]),n}(l["d"]);Object(u["a"])([Object(l["c"])()],S.prototype,"board",void 0),Object(u["a"])([Object(l["c"])()],S.prototype,"histories",void 0),Object(u["a"])([Object(l["c"])()],S.prototype,"nextPlayer",void 0),Object(u["a"])([Object(l["c"])()],S.prototype,"winner",void 0),Object(u["a"])([Object(l["c"])()],S.prototype,"endGame",void 0),S=Object(u["a"])([Object(l["a"])({components:{Board:C}})],S);var R=S,A=R,W=(n("dd30"),Object(w["a"])(A,h,d,!1,null,"03ff8047",null)),$=W.exports,D=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(l["d"]);D=Object(u["a"])([Object(l["a"])({components:{Game:$}})],D);var H=D,L=H,V=(n("5c0b"),Object(w["a"])(L,i,r,!1,null,null,null)),q=V.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(q)}}).$mount("#app")},dd30:function(t,e,n){"use strict";var a=n("18f6"),i=n.n(a);i.a},e9dd:function(t,e,n){}});
//# sourceMappingURL=app.5b69dd8d.js.map