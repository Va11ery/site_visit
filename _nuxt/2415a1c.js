(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{443:function(t,n,e){t.exports=e.p+"img/1.2cbf744.jpg"},444:function(t,n,e){t.exports=e.p+"img/2.66d4337.jpg"},445:function(t,n,e){t.exports=e.p+"img/3.3ac7d32.jpg"},446:function(t,n,e){t.exports=e.p+"img/4.b657cea.jpg"},447:function(t,n,e){t.exports=e.p+"img/5.7c18e4f.jpg"},448:function(t,n,e){var map={"./1.jpg":443,"./2.jpg":444,"./3.jpg":445,"./4.jpg":446,"./5.jpg":447};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=448},449:function(t,n,e){"use strict";e.r(n);var o=e(201),r=e(202),c=e(137),l=e(519),f=e(282),d=e(515),m=e(518),j={name:"LisenceModal",props:{item:null},computed:{getImg:function(){return this.item?this.item.img:""},dialog:{get:function(){return this.$store.state.dialog},set:function(t){this.$store.commit("setDialog",t)}}}},v=e(63),component=Object(v.a)(j,(function(){var t=this,n=t._self._c;return n(d.a,{attrs:{justify:"center"}},[n(l.a,{attrs:{width:"570"},model:{value:t.dialog,callback:function(n){t.dialog=n},expression:"dialog"}},[n(r.a,{attrs:{"max-width":"570",dark:""}},[n(f.a,{attrs:{src:t.getImg?e(448)("./".concat(t.getImg)):""}}),t._v(" "),n(c.a,[n(m.a),t._v(" "),n(o.a,{attrs:{color:"green darken-1",text:""},on:{click:function(n){t.dialog=!1}}},[t._v("\n          Закрыть\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);