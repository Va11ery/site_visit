(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5],{445:function(t,e,n){t.exports=n.p+"img/amg_cop.32f6797.jpg"},446:function(t,e,n){t.exports=n.p+"img/1.2cbf744.jpg"},447:function(t,e,n){t.exports=n.p+"img/2.66d4337.jpg"},448:function(t,e,n){t.exports=n.p+"img/3.3ac7d32.jpg"},449:function(t,e,n){t.exports=n.p+"img/4.b657cea.jpg"},450:function(t,e,n){t.exports=n.p+"img/5.7c18e4f.jpg"},451:function(t,e,n){var map={"./1.jpg":446,"./2.jpg":447,"./3.jpg":448,"./4.jpg":449,"./5.jpg":450};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=451},452:function(t,e,n){"use strict";n.r(e);var o=n(201),r=n(202),c=n(137),l=n(514),d=n(282),v=n(510),f=n(513),m={name:"LisenceModal",props:{item:null},computed:{getImg:function(){return this.item?this.item.img:""},dialog:{get:function(){return this.$store.state.dialog},set:function(t){this.$store.commit("setDialog",t)}}}},_=n(63),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e(v.a,{attrs:{justify:"center"}},[e(l.a,{attrs:{width:"570"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(r.a,{attrs:{"max-width":"570",dark:""}},[e(d.a,{attrs:{src:t.getImg?n(451)("./".concat(t.getImg)):""}}),t._v(" "),e(c.a,[e(f.a),t._v(" "),e(o.a,{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Закрыть\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},453:function(t,e,n){t.exports=n.p+"img/page_5.7b2dc22.jpg"},454:function(t,e,n){t.exports=n.p+"img/security.4709c3b.png"},455:function(t,e,n){t.exports=n.p+"img/page_1.f27ac28.jpg"},456:function(t,e,n){t.exports=n.p+"img/page_55.8613154.jpg"},457:function(t,e,n){var content=n(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("2f5ae5fc",content,!0,{sourceMap:!1})},474:function(t,e,n){var map={"./amg.jpg":475,"./amg_cop.jpg":445,"./font-card-1.jpg":284,"./font-card.jpg":476,"./lisenci/1.jpg":446,"./lisenci/2.jpg":447,"./lisenci/3.jpg":448,"./lisenci/4.jpg":449,"./lisenci/5.jpg":450,"./page_1.jpg":455,"./page_2.jpg":477,"./page_3.jpg":478,"./page_5.jpg":453,"./page_55.jpg":456,"./security.jpg":479};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=474},475:function(t,e,n){t.exports=n.p+"img/amg.5c54bd8.jpg"},476:function(t,e,n){t.exports=n.p+"img/font-card.431cb07.jpg"},477:function(t,e,n){t.exports=n.p+"img/page_2.276fbaf.jpg"},478:function(t,e,n){t.exports=n.p+"img/page_3.4bf0942.jpg"},479:function(t,e,n){t.exports=n.p+"img/security.7bdbee4.jpg"},480:function(t,e,n){"use strict";n(457)},481:function(t,e,n){var o=n(17)(!1);o.push([t.i,".list-content[data-v-11960fc7]{text-align:justify;text-shadow:2px 2px 2px #000}.page-h6[data-v-11960fc7]{font-size:30px!important;font-weight:500!important}.page-title[data-v-11960fc7]{color:#fff}.page-title div[data-v-11960fc7]{padding:10px}.center[data-v-11960fc7]{display:flex;align-items:center}.block-center[data-v-11960fc7]{margin:0 auto!important}.list-title[data-v-11960fc7]{text-overflow:none!important}@media(max-width:1263.5px){.security-card-img[data-v-11960fc7]{height:auto!important}}._search[data-v-11960fc7]{font-size:24px!important;font-weight:500}@media(max-width:959.5px){.order_1[data-v-11960fc7]{order:-1}}",""]),t.exports=o},486:function(t,e,n){"use strict";n.r(e);var o=n(511),r=n(201),c=n(202),l=n(137),d=n(518),v=n(519),f=n(495),m=n(517),_=n(197),h=n(282),x=n(199),j=n(133),y=n(200),k=n(70),C=n(114),w=n(510),O=n(512),I=n(485),M=n(452),L={name:"HomePage",components:{Carousel3d:I.Carousel3d,Slide:I.Slide,LisenceModal:M.default},data:function(){return{contacts:[{text:"8 (812) 224 24 96",icon:"mdi-cellphone"},{text:"op.kgb@mail.ru",icon:"mdi-email"},{text:"ВКонтакте",icon:"mdi-account"},{text:"Instagram",icon:"mdi-instagram"},{text:"hh.ru",icon:"mdi-text-box"}],items:["page_1","page_2","page_3"],security:"security",modal:[],lisence:[{img:"1.jpg",modal:!1},{img:"2.jpg",modal:!1},{img:"3.jpg",modal:!1},{img:"4.jpg",modal:!1},{img:"5.jpg",modal:!1}],card_list:[{title:"Опыт и профессионализм ",subtitle:"В КГБ  сотрудники охраны хорошо подготовлены психологически и физически и готовы продемонстрировать свои навыки в деле"},{title:"Перевозка лекарственных и психотропных веществ",subtitle:"Охранная Организация КГБ имеет лицензию на перевозку лекарственных средст и психотропных веществ, также у нас есть специализированный фармацевт"},{title:"Индивидуальный подход",subtitle:"Система лояльности для постоянных клиентов"},{title:"Усовершенствованная логистика",subtitle:"Наша команда КГБ работает по всей России "},{title:"Качественное и исправное оборудование в том числе машины для выполнения охранных услуг ",subtitle:"Команда КГБ может установить систему «умный дом» для охраны квартир дач и других объектов"},{title:"Золотой месяц",subtitle:"Наша команда дает месяц отсрочки на оплату охранных услуг"}],listing:[{icon:"",text:"Для владельцев автомобиля"},{icon:"",text:"Сопровождение груза"},{icon:"",text:"Такси с защитой (аэропрт)"},{icon:"",text:"Аренда авто"},{icon:"",text:"Помощь в дороге автомобилисту "}]}},computed:{dialog:{get:function(){return this.$store.state.dialog},set:function(t){this.$store.commit("setDialog",t)}}},methods:{modalItem:function(t){this.modal=t,this.dialog=!0},linkVK:function(i){2===i&&window.open("https://vk.com/public214878440","_self"),1===i&&window.open("mailto:op.kgb@mail.ru","_self"),4===i&&window.open("https://spb.hh.ru/vacancy/68113018?hhtmFrom=employer_vacancies","_self")}}},D=(n(480),n(63)),component=Object(D.a)(L,(function(){var t=this,e=t._self._c;return e("div",[e(d.a,{attrs:{id:"carousel",height:"800","show-arrows-on-hover":"","hide-delimiter-background":""}},t._l(t.items,(function(t,i){return e(v.a,{key:i,attrs:{src:n(474)("./".concat(t,".jpg"))}})})),1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6",attrs:{"single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Команда")])]),t._v(" "),e(m.a,[e(x.a,{attrs:{color:"#616161",dark:""}},[e(w.a,[e(f.a,[e(j.a,[e(k.a,{staticClass:"list-content text-h6"},[t._v("\n                            Карго Глобал\n              Безопасность - это команда опытных сотрудников, которая\n              обеспечит надежную охрану вашей жизни, а также возьмет на себя\n              ответственность за сохранение собственности, грузов, объектов,\n              офисов, мероприятий и др. Команда КГБ применяет индивидуальный\n              подход к каждому клиенту и действует на основании\n              законодательства РФ.\n            ")])],1)],1),t._v(" "),e(f.a,[e(j.a,[e(k.a,{staticClass:"list-content text-h6"},[t._v("\n                    Сотрудники офиса постоянно повышают свою\n              квалификацию для стратегического развития охранной организации.\n              Наши охранники повышают свою квалификацию доказывая уровень\n              своих знаний и умений для оказания качественных охранных услуг.\n            ")])],1)],1)],1)],1)],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{"single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Наши преимущества")])]),t._v(" "),e(m.a,[e(w.a,{attrs:{"no-gutters":"",justify:"space-between"}},t._l(t.card_list,(function(i,n){return e(f.a,{key:n,attrs:{md:"5","align-self":"start"}},[e(c.a,{staticClass:"color-card",attrs:{color:"#616161",dark:"",elevation:"0"}},[e(j.a,{attrs:{"three-line":""}},[e(y.a,{attrs:{tile:"",size:"90"}},[e(_.a,{staticStyle:{"font-size":"90px"}},[t._v("mdi-medal")])],1),t._v(" "),e(k.a,{staticClass:"text-h6"},[e("div",{class:{"justify-center":i.center}},[t._v("\n                "+t._s(i.title)+"\n              ")]),t._v(" "),e(k.b,[t._v(t._s(i.subtitle))])],1)],1)],1)],1)})),1)],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{id:"cargo_support","single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Сопровождение груза")])]),t._v(" "),e(w.a,{attrs:{"no-gutters":""}},[e(f.a,{attrs:{cols:"12",md:"6"}},[e(c.a,{attrs:{dark:"",color:"#616161",elevation:"0",height:"100%"}},[e(h.a,{staticClass:"car-img",attrs:{src:n(456),height:"100%"}})],1)],1),t._v(" "),e(f.a,{attrs:{md:"6"}},[e(x.a,{staticClass:"color-card",attrs:{dark:"",color:"#616161",elevation:"0","three-line":""}},[e(O.a,[t._v("\n          Охранная Организация КГБ предлает множество услуг, связанных с\n          сопровождением:\n        ")]),t._v(" "),t._l(t.listing,(function(i,n){return e(j.a,{key:n},[e(k.a,[e(k.c,[t._v(t._s(i.text))])],1)],1)}))],2)],1)],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{"single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Охрана объекта")])]),t._v(" "),e(w.a,{attrs:{"no-gutters":""}},[e(f.a,{attrs:{cols:"12",md:"6"}},[e(c.a,{staticClass:"color-card",attrs:{dark:"",color:"#616161",elevation:"0"}},[e(l.b,[t._v("текст  Охрана объекта")])],1)],1),t._v(" "),e(f.a,{staticClass:"order_1",attrs:{cols:"12",md:"6"}},[e(c.a,{attrs:{dark:"",color:"#616161",elevation:"0",height:"100%"}},[e(h.a,{attrs:{src:n(445),height:"100%"}})],1)],1)],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{"single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Личная охрана")])]),t._v(" "),e(w.a,{attrs:{"no-gutters":""}},[e(f.a,{attrs:{cols:"12",md:"6"}},[e(c.a,{staticClass:"security",attrs:{dark:""}},[e(h.a,{staticClass:"security-card-img",attrs:{src:n(454),height:"500"}})],1)],1),t._v(" "),e(f.a,[e(c.a,{staticClass:"color-card",attrs:{dark:"",color:"#616161",elevation:"0"}},[e(l.b,[t._v("\n          текст Личная охрана\n        ")])],1)],1)],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100 mb-4",attrs:{id:"job_openings","single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Вакансии")])]),t._v(" "),e(m.a,[e(w.a,[e(f.a,[e(c.a,{staticClass:"color-card",attrs:{dark:"",color:"#616161",elevation:"0"}},[e(j.a,[e(k.a,{staticClass:"justify-center _search"},[t._v("\n              Наша команда ищет опытных охранников\n            ")])],1),t._v(" "),e(j.a,[e(k.a,{staticClass:"justify-center _search"},[t._v("\n              8 (931) 599 34 37\n            ")])],1),t._v(" "),e(j.a,[e(k.a,{staticClass:"justify-center _search"},[t._v("\n              Игорь Васильевич Леонтьев\n            ")])],1),t._v(" "),e(j.a,{staticClass:"mb-4"},[e(k.a,{staticClass:"justify-center _search"},[t._v("\n              otdel-kadrow.kgb@yandex.ru\n            ")])],1),t._v(" "),e(j.a,{staticClass:"mb-4"},[e(k.a,{staticClass:"justify-center _search"},[t._v("\n              hh.ru\n            ")])],1),t._v(" "),e(j.a,{staticClass:"pb-4 justify-center"},[e(k.a,{staticClass:"justify-center",staticStyle:{flex:"none"}},[e(r.a,{attrs:{color:"grey darken-3"}},[t._v(" Подробнее ")])],1)],1)],1)],1)],1)],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{id:"licenses","single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Лицензии")])]),t._v(" "),e("div",{staticClass:"pb-5 pt-5"},[e("carousel-3d",{attrs:{"controls-visible":!0,height:"494.27",display:"5"}},t._l(t.lisence,(function(o,i){return e("slide",{key:i,attrs:{index:i},scopedSlots:t._u([{key:"default",fn:function(r){var c=r.index,l=r.isCurrent,d=r.leftIndex,v=r.rightIndex;return[e("img",{class:{current:l,onLeft:d>=0,onRight:v>=0},attrs:{"data-index":c,src:n(451)("./".concat(o.img))},on:{click:function(e){return t.modalItem(o)}}})]}}],null,!0)})})),1),t._v(" "),e("LisenceModal",{attrs:{item:t.modal}})],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{id:"contacts","single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Наши социальные сети")])]),t._v(" "),e(m.a,[e(c.a,{staticClass:"color-card mx-auto",attrs:{dark:"",color:"#616161",elevation:"0","max-width":"300",tile:""}},[e(x.a,{staticClass:"color-card",attrs:{flat:"",color:"#616161",elevation:"0"}},t._l(t.contacts,(function(n,i){return e(j.a,{key:i,attrs:{id:"copy-".concat(i)},on:{click:function(e){return t.linkVK(i)}}},[e(C.a,[e(_.a,{domProps:{textContent:t._s(n.icon)}})],1),t._v(" "),e(k.a,[e(k.c,{domProps:{textContent:t._s(n.text)}})],1)],1)})),1)],1)],1)],1)}),[],!1,null,"11960fc7",null);e.default=component.exports;installComponents(component,{LisenceModal:n(452).default})}}]);