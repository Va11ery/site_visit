(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4,5],{443:function(t,e,n){t.exports=n.p+"img/1.2cbf744.jpg"},444:function(t,e,n){t.exports=n.p+"img/2.66d4337.jpg"},445:function(t,e,n){t.exports=n.p+"img/3.3ac7d32.jpg"},446:function(t,e,n){t.exports=n.p+"img/4.b657cea.jpg"},447:function(t,e,n){t.exports=n.p+"img/5.7c18e4f.jpg"},448:function(t,e,n){var map={"./1.jpg":443,"./2.jpg":444,"./3.jpg":445,"./4.jpg":446,"./5.jpg":447};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=448},449:function(t,e,n){"use strict";n.r(e);var r=n(201),o=n(202),c=n(137),l=n(519),d=n(282),v=n(515),f=n(518),_={name:"LisenceModal",props:{item:null},computed:{getImg:function(){return this.item?this.item.img:""},dialog:{get:function(){return this.$store.state.dialog},set:function(t){this.$store.commit("setDialog",t)}}}},m=n(63),component=Object(m.a)(_,(function(){var t=this,e=t._self._c;return e(v.a,{attrs:{justify:"center"}},[e(l.a,{attrs:{width:"570"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.a,{attrs:{"max-width":"570",dark:""}},[e(d.a,{attrs:{src:t.getImg?n(448)("./".concat(t.getImg)):""}}),t._v(" "),e(c.a,[e(f.a),t._v(" "),e(r.a,{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Закрыть\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},450:function(t,e,n){t.exports=n.p+"img/amg_cop.32f6797.jpg"},451:function(t,e,n){t.exports=n.p+"img/page_55.8613154.jpg"},452:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("cfd6dc08",content,!0,{sourceMap:!1})},454:function(t,e,n){var map={"./amg.jpg":455,"./amg_cop.jpg":450,"./lisenci/1.jpg":443,"./lisenci/2.jpg":444,"./lisenci/3.jpg":445,"./lisenci/4.jpg":446,"./lisenci/5.jpg":447,"./page_1.jpg":456,"./page_2.jpg":457,"./page_3.jpg":458,"./page_5.jpg":459,"./page_55.jpg":451,"./security.jpg":460};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=454},455:function(t,e,n){t.exports=n.p+"img/amg.5c54bd8.jpg"},456:function(t,e,n){t.exports=n.p+"img/page_1.f27ac28.jpg"},457:function(t,e,n){t.exports=n.p+"img/page_2.276fbaf.jpg"},458:function(t,e,n){t.exports=n.p+"img/page_3.4bf0942.jpg"},459:function(t,e,n){t.exports=n.p+"img/page_5.7b2dc22.jpg"},460:function(t,e,n){t.exports=n.p+"img/security.7bdbee4.jpg"},462:function(t,e,n){var map={"./logo.png":208,"./security.png":463,"./security_1.png":464};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=462},463:function(t,e,n){t.exports=n.p+"img/security.4709c3b.png"},464:function(t,e,n){t.exports=n.p+"img/security_1.29af4f0.png"},466:function(t,e,n){"use strict";n(452)},467:function(t,e,n){var r=n(17)(!1);r.push([t.i,".page-title[data-v-73a18751]{color:#fff}.page-title div[data-v-73a18751]{padding:10px}.list-content[data-v-73a18751]{text-align:justify;text-shadow:2px 2px 2px #000}.page-h6[data-v-73a18751]{font-size:30px!important;font-weight:500!important}.center[data-v-73a18751]{display:flex;align-items:center}.block-center[data-v-73a18751]{margin:0 auto!important}.list-title[data-v-73a18751]{text-overflow:none!important}@media(max-width:1263.5px){.security-card-img[data-v-73a18751]{height:auto!important}}",""]),t.exports=r},490:function(t,e,n){"use strict";n.r(e);var r=n(514),o=n(201),c=n(202),l=n(137),d=n(522),v=n(523),f=n(516),_=n(524),m=n(197),x=n(282),h=n(199),j=n(133),k=n(200),y=n(93),C=n(114),w=n(515),O=n(517),I=n(525),M=n(489),D=n(449),L={name:"HomePage",components:{Carousel3d:M.Carousel3d,Slide:M.Slide,LisenceModal:D.default},data:function(){return{contacts:[{text:"8 (812) 224 24 96",icon:"mdi-cellphone"},{text:"op.kgb@mail.ru",icon:"mdi-at"},{text:"ВКонтакте",icon:"mdi-account"},{text:"Instagram",icon:"mdi-instagram"},{text:"hh.ru",icon:"mdi-text-box"}],items:["page_1","page_2","page_3"],security:"security",modal:[],lisence:[{img:"1.jpg",modal:!1},{img:"2.jpg",modal:!1},{img:"3.jpg",modal:!1},{img:"4.jpg",modal:!1},{img:"5.jpg",modal:!1}],card_list:[{title:"Опыт и профессионализм ",subtitle:"В КГБ  сотрудники охраны хорошо подготовлены психологически и физически и готовы продемонстрировать свои навыки в деле"},{title:"Перевозка лекарственных и психотропных веществ",subtitle:"Охранная Организация КГБ имеет лицензию на перевозку лекарственных средст и психотропных веществ, также у нас есть специализированный фармацевт"},{title:"Индивидуальный подход",subtitle:"Система лояльности для постоянных клиентов"},{title:"Усовершенствованная логистика",subtitle:"Наша команда КГБ работает по всей России "},{title:"Качественное и исправное оборудование в том числе машины для выполнения охранных услуг ",subtitle:"Команда КГБ может установить систему «умный дом» для охраны квартир дач и других объектов"},{title:"Золотой месяц",subtitle:"Наша команда дает месяц отсрочки на оплату охранных услуг"}],listing:[{icon:"",text:"Для владельцев автомобиля"},{icon:"",text:"Сопровождение груза"},{icon:"",text:"Такси с защитой (аэропрт)"},{icon:"",text:"Аренда авто"},{icon:"",text:"Помощь в дороге автомобилисту "}]}},computed:{dialog:{get:function(){return this.$store.state.dialog},set:function(t){this.$store.commit("setDialog",t)}}},methods:{modalItem:function(t){this.modal=t,this.dialog=!0},linkVK:function(i){2===i&&window.open("https://vk.com/public214878440","_self")}}},E=(n(466),n(63)),component=Object(E.a)(L,(function(){var t=this,e=t._self._c;return e("div",[e(d.a,{attrs:{id:"carousel",height:"800","show-arrows-on-hover":"","hide-delimiter-background":""}},t._l(t.items,(function(t,i){return e(v.a,{key:i,attrs:{src:n(454)("./".concat(t,".jpg"))}})})),1),t._v(" "),e(r.a,{staticClass:"page-title text-center page-h6",attrs:{"single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Команда")])]),t._v(" "),e(_.a,[e(h.a,{attrs:{color:"#616161",dark:""}},[e(w.a,[e(f.a,[e(j.a,[e(y.a,{staticClass:"list-content text-h6"},[t._v("\n                            Карго Глобал\n              Безопасность - это команда опытных сотрудников, которая\n              обеспечит надежную охрану вашей жизни, а также возьмет на себя\n              ответственность за сохранение собственности, грузов, объектов,\n              офисов, мероприятий и др. Команда КГБ применяет индивидуальный\n              подход к каждому клиенту и действует на основании\n              законодательства РФ.\n            ")])],1)],1),t._v(" "),e(f.a,[e(j.a,[e(y.a,{staticClass:"list-content text-h6"},[t._v("\n                    Сотрудники офиса постоянно повышают свою\n              квалификацию для стратегического развития охранной организации.\n              Наши охранники повышают свою квалификацию доказывая уровень\n              своих знаний и умений для оказания качественных охранных услуг.\n            ")])],1)],1)],1)],1)],1),t._v(" "),e(r.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{"single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Наши преимущества")])]),t._v(" "),e(_.a,[e(w.a,{attrs:{"no-gutters":"",justify:"space-between"}},t._l(t.card_list,(function(i,n){return e(f.a,{key:n,attrs:{md:"5","align-self":"start"}},[e(c.a,{staticClass:"color-card",attrs:{color:"#616161",dark:"",elevation:"0"}},[e(j.a,{attrs:{"three-line":""}},[e(k.a,{attrs:{tile:"",size:"90"}},[e(m.a,{staticStyle:{"font-size":"90px"}},[t._v("mdi-medal")])],1),t._v(" "),e(y.a,{staticClass:"text-h6"},[e("div",{class:{"justify-center":i.center}},[t._v("\n                "+t._s(i.title)+"\n              ")]),t._v(" "),e(y.b,[t._v(t._s(i.subtitle))])],1)],1)],1)],1)})),1)],1),t._v(" "),e(r.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{id:"cargo_support","single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Сопровождение груза")])]),t._v(" "),e(w.a,{attrs:{"no-gutters":""}},[e(f.a,{attrs:{cols:"12",md:"6"}},[e(c.a,{attrs:{dark:"",color:"#616161",elevation:"0",height:"100%"}},[e(x.a,{staticClass:"car-img",attrs:{src:n(451),height:"100%"}})],1)],1),t._v(" "),e(f.a,{attrs:{md:"6"}},[e(h.a,{staticClass:"color-card",attrs:{dark:"",color:"#616161",elevation:"0","three-line":""}},[e(O.a,[t._v("\n          Охранная Организация КГБ предлает множество услуг, связанных с\n          сопровождением:\n        ")]),t._v(" "),t._l(t.listing,(function(i,n){return e(j.a,{key:n},[e(y.a,[e(y.c,[t._v(t._s(i.text))])],1)],1)}))],2)],1)],1),t._v(" "),e(r.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{"single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Охрана объекта")])]),t._v(" "),e(w.a,{attrs:{"no-gutters":""}},[e(f.a,{attrs:{cols:"12",md:"6"}},[e(c.a,{staticClass:"color-card",attrs:{dark:"",color:"#616161",elevation:"0"}},[e(l.b,[t._v(" Тут будет текст ")])],1)],1),t._v(" "),e(f.a,{attrs:{cols:"12",md:"6"}},[e(c.a,{attrs:{dark:"",color:"#616161",elevation:"0",height:"100%"}},[e(x.a,{attrs:{src:n(450),height:"100%"}})],1)],1)],1),t._v(" "),e(r.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{"single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Личная охрана")])]),t._v(" "),e(_.a,[e(w.a,{attrs:{"no-gutters":""}},[e(f.a,{attrs:{cols:"12",md:"6"}},[e(c.a,{staticClass:"card-page color-card",attrs:{dark:"",color:"#616161",elevation:"0"}},[e(x.a,{staticClass:"security-card-img",attrs:{src:n(462)("./".concat(t.security,".png")),height:"500"}})],1)],1),t._v(" "),e(f.a,[e(c.a,{staticClass:"color-card",attrs:{dark:"",color:"#616161",elevation:"0"}},[e(l.b,[t._v(" Тут будет text ")])],1)],1)],1)],1),t._v(" "),e(r.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{id:"job_openings","single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Вакансии")])]),t._v(" "),e(_.a,[e(w.a,[e(f.a,[e(c.a,{staticClass:"color-card",attrs:{dark:"",color:"#616161",elevation:"0"}},[e(j.a,[e(y.a,{staticClass:"justify-center"},[t._v("\n              Наша команда ищет опытных охранников\n            ")])],1),t._v(" "),e(j.a,[e(y.a,{staticClass:"justify-center"},[t._v("\n              8 (931) 599 34 37\n            ")])],1),t._v(" "),e(j.a,[e(y.a,{staticClass:"justify-center"},[t._v("\n              Игорь Васильевич Леонтьев\n            ")])],1),t._v(" "),e(j.a,{staticClass:"mb-4"},[e(y.a,{staticClass:"justify-center"},[t._v("\n              otdel-kadrow.kgb@yandex.ru\n            ")])],1),t._v(" "),e(w.a,{staticClass:"mb-4",attrs:{align:"center",justify:"center"}},[e(I.a,{attrs:{right:"",color:"red darken-2"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(o.a,t._g(t._b({attrs:{color:"grey darken-3"}},"v-btn",c,!1),r),[t._v("\n                  Подробнее\n                ")])]}}])},[t._v(" "),e("span",[t._v("hh.ru")])])],1)],1)],1)],1)],1),t._v(" "),e(r.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{id:"licenses","single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Лицензии")])]),t._v(" "),e("div",{staticClass:"pb-5 pt-5"},[e("carousel-3d",{attrs:{"controls-visible":!0,height:"494.27",display:"5"}},t._l(t.lisence,(function(r,i){return e("slide",{key:i,attrs:{index:i},scopedSlots:t._u([{key:"default",fn:function(o){var c=o.index,l=o.isCurrent,d=o.leftIndex,v=o.rightIndex;return[e("img",{class:{current:l,onLeft:d>=0,onRight:v>=0},attrs:{"data-index":c,src:n(448)("./".concat(r.img))},on:{click:function(e){return t.modalItem(r)}}})]}}],null,!0)})})),1),t._v(" "),e("LisenceModal",{attrs:{item:t.modal}})],1),t._v(" "),e(r.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{id:"contacts","single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Наши социальные сети")])]),t._v(" "),e(_.a,[e(c.a,{staticClass:"color-card mx-auto",attrs:{dark:"",color:"#616161",elevation:"0","max-width":"300",tile:""}},[e(h.a,{staticClass:"color-card",attrs:{flat:"",color:"#616161",elevation:"0"}},t._l(t.contacts,(function(n,i){return e(j.a,{key:i,attrs:{id:"copy-".concat(i)},on:{click:function(e){return t.linkVK(i)}}},[e(C.a,[e(m.a,{domProps:{textContent:t._s(n.icon)}})],1),t._v(" "),e(y.a,[e(y.c,{domProps:{textContent:t._s(n.text)}})],1)],1)})),1)],1)],1)],1)}),[],!1,null,"73a18751",null);e.default=component.exports;installComponents(component,{LisenceModal:n(449).default})},521:function(t,e,n){"use strict";n.r(e);var r={name:"IndexPage"},o=n(63),component=Object(o.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"home-page"},[t("Page")],1)}),[],!1,null,"154dc76b",null);e.default=component.exports;installComponents(component,{Page:n(490).default})}}]);