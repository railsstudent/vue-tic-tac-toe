(function(e){function t(t){for(var a,o,c=t[0],s=t[1],u=t[2],b=0,h=[];b<c.length;b++)o=c[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-tic-tac-toe/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"088f":function(e,t,n){"use strict";var a=n("b74f"),r=n.n(a);r.a},"13a9":function(e,t,n){},4126:function(e,t,n){"use strict";var a=n("13a9"),r=n.n(a);r.a},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"8ae9":function(e,t,n){"use strict";var a=n("944c"),r=n.n(a);r.a},"944c":function(e,t,n){},"9c0c":function(e,t,n){},b74f:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Game")],1)},i=[],o=n("d4ec"),c=n("262e"),s=n("2caf"),u=n("9ab4"),l=n("60a3"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[n("h1",[e._v("Vue Tic Tac Toe")]),n("div",{staticClass:"main-container"},[n("div",{staticClass:"left"},[n("div",{staticClass:"play-container"},[n("p",{staticClass:"info"},[e._v("Next Player: "+e._s(e.nextPlayer))]),n("p",{staticClass:"info"},[e._v("Winner: "+e._s(e.winner))])]),n("Board",{attrs:{nextPlayer:e.nextPlayer,endGame:e.endGame},on:{changePlayer:e.changePlayer,announcementWinner:e.announceWinner,generateMoves:e.generateMoves}})],1),n("div",{staticClass:"action-container"},[e.endGame?n("button",{on:{click:e.startGame}},[e._v("New Game")]):e._e(),n("fieldset",{staticClass:"moves"},[n("legend",[e._v("Moves")]),e._l(e.histories,(function(t,a){return n("button",{key:"move-"+a,on:{click:function(t){return e.goBackToMove(t,a)}}},[e._v(" Move "+e._s(a)+" ")])}))],2)])])])},h=[],v=n("2909"),f=n("bee2"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board"},[e._l(e.board,(function(t,a){return n("Square",{key:"square-"+a,staticClass:"square",attrs:{value:t,index:a},on:{setMove:e.update}})})),e._v(" histories: "+e._s(e.histories)+" ")],2)},p=[],O=(n("99af"),n("cb29"),n("4de4"),n("13d5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{click:e.setMove}},[n("span",[e._v(e._s(e.value))])])}),y=[],j=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"setMove",value:function(){this.value||this.$emit("setMove",this.index)}}]),n}(l["d"]);Object(u["a"])([Object(l["b"])()],j.prototype,"value",void 0),Object(u["a"])([Object(l["b"])()],j.prototype,"index",void 0),j=Object(u["a"])([l["a"]],j);var m,g=j,G=g,_=(n("4126"),n("2877")),x=Object(_["a"])(G,O,y,!1,null,"3076a70c",null),N=x.exports;(function(e){e[e["WINNER"]=0]="WINNER",e[e["ONGOING"]=1]="ONGOING",e[e["TIED"]=2]="TIED"})(m||(m={}));var P=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.board=[],e.gameState=m.ONGOING,e.histories=[],e}return Object(f["a"])(n,[{key:"endGameUpdated",value:function(e){e||(this.board=Array(9).fill(""),this.gameState=m.ONGOING,this.histories=[Object(v["a"])(this.board)],this.$emit("generateMoves",this.histories))}},{key:"mounted",value:function(){this.board=Array(9).fill(""),this.histories=[Object(v["a"])(this.board)],this.$emit("generateMoves",this.histories)}},{key:"update",value:function(e){var t=this;if(this.gameState===m.ONGOING){var n=this.board.reduce((function(n,a,r){return r===e?n.concat(t.nextPlayer):n.concat(a)}),[]);this.histories=[].concat(Object(v["a"])(this.histories),[n]),this.board=this.histories[this.histories.length-1],this.gameState=this.checkWinner(),this.gameState===m.ONGOING?(this.$emit("changePlayer"),this.$emit("generateMoves",this.histories)):this.$emit("announcementWinner",this.gameState)}}},{key:"checkWinner",value:function(){for(var e=this,t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=0===t[n].filter((function(t){return e.board[t]!==e.nextPlayer})).length;if(a)return m.WINNER}return 9===this.board.filter((function(e){return""!==e})).length?m.TIED:m.ONGOING}}]),n}(l["d"]);Object(u["a"])([Object(l["c"])()],P.prototype,"board",void 0),Object(u["a"])([Object(l["c"])()],P.prototype,"gameState",void 0),Object(u["a"])([Object(l["c"])()],P.prototype,"histories",void 0),Object(u["a"])([Object(l["b"])()],P.prototype,"nextPlayer",void 0),Object(u["a"])([Object(l["b"])()],P.prototype,"endGame",void 0),Object(u["a"])([Object(l["e"])("endGame",{immediate:!0})],P.prototype,"endGameUpdated",null),P=Object(u["a"])([Object(l["a"])({components:{Square:N}})],P);var k=P,w=k,M=(n("088f"),Object(_["a"])(w,d,p,!1,null,"71b9cefe",null)),I=M.exports,S="X",E="O",T=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.nextPlayer=S,e.winner="N/A",e.endGame=!1,e.histories=[],e}return Object(f["a"])(n,[{key:"changePlayer",value:function(){this.nextPlayer=this.nextPlayer===S?E:S}},{key:"announceWinner",value:function(e){e==m.WINNER?(this.winner=this.nextPlayer,this.endGame=!0):e===m.TIED&&(this.winner="tied",this.endGame=!0)}},{key:"startGame",value:function(){this.endGame=!1,this.nextPlayer=S,this.winner="N/A"}},{key:"generateMoves",value:function(e){this.histories=Object(v["a"])(e)}},{key:"goBackToMove",value:function(e,t){e.preventDefault(),e.stopImmediatePropagation(),console.log("idx",t)}}]),n}(l["d"]);Object(u["a"])([Object(l["c"])()],T.prototype,"nextPlayer",void 0),Object(u["a"])([Object(l["c"])()],T.prototype,"winner",void 0),Object(u["a"])([Object(l["c"])()],T.prototype,"endGame",void 0),Object(u["a"])([Object(l["c"])()],T.prototype,"histories",void 0),T=Object(u["a"])([Object(l["a"])({components:{Board:I}})],T);var W=T,$=W,C=(n("8ae9"),Object(_["a"])($,b,h,!1,null,"526ba906",null)),D=C.exports,q=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(l["d"]);q=Object(u["a"])([Object(l["a"])({components:{Game:D}})],q);var A=q,B=A,R=(n("5c0b"),Object(_["a"])(B,r,i,!1,null,null,null)),J=R.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(J)}}).$mount("#app")}});
//# sourceMappingURL=app.bad03acf.js.map