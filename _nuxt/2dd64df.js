(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5],{462:function(t,e,n){t.exports=n.p+"img/amg_cop.32f6797.jpg"},463:function(t,e,n){t.exports=n.p+"img/1.2cbf744.jpg"},464:function(t,e,n){t.exports=n.p+"img/2.66d4337.jpg"},465:function(t,e,n){t.exports=n.p+"img/3.3ac7d32.jpg"},466:function(t,e,n){t.exports=n.p+"img/4.b657cea.jpg"},467:function(t,e,n){t.exports=n.p+"img/5.7c18e4f.jpg"},468:function(t,e,n){var map={"./1.jpg":463,"./2.jpg":464,"./3.jpg":465,"./4.jpg":466,"./5.jpg":467};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=468},469:function(t,e,n){"use strict";n.r(e);var o=n(141),r=n(208),c=n(146),l=n(525),d=n(175),v=n(528),m=n(455),f={name:"LisenceModal",props:{item:null},computed:{getImg:function(){return this.item?this.item.img:""},dialog:{get:function(){return this.$store.state.dialog},set:function(t){this.$store.commit("setDialog",t)}}}},_=n(57),component=Object(_.a)(f,(function(){var t=this,e=t._self._c;return e(v.a,{attrs:{justify:"center"}},[e(l.a,{attrs:{width:"570"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(r.a,{attrs:{"max-width":"570"}},[e(d.a,{attrs:{src:t.getImg?n(468)("./".concat(t.getImg)):""}}),t._v(" "),e(c.a,[e(m.a),t._v(" "),e(o.a,{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Закрыть\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},470:function(t,e,n){t.exports=n.p+"img/page_5.7b2dc22.jpg"},471:function(t,e,n){t.exports=n.p+"img/security.4709c3b.png"},472:function(t,e,n){t.exports=n.p+"img/page_1.f27ac28.jpg"},473:function(t,e,n){t.exports=n.p+"img/page_6.3e8c6d0.jpg"},474:function(t,e,n){t.exports=n.p+"img/page_55.8613154.jpg"},475:function(t,e,n){var content=n(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("3682d612",content,!0,{sourceMap:!1})},492:function(t,e,n){var map={"./amg.jpg":493,"./amg_cop.jpg":462,"./font-card-1.jpg":290,"./font-card.jpg":494,"./lisenci/1.jpg":463,"./lisenci/2.jpg":464,"./lisenci/3.jpg":465,"./lisenci/4.jpg":466,"./lisenci/5.jpg":467,"./page_1.jpg":472,"./page_2.jpg":495,"./page_3.jpg":496,"./page_5.jpg":470,"./page_55.jpg":474,"./page_6.jpg":473,"./security.jpg":497};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=492},493:function(t,e,n){t.exports=n.p+"img/amg.5c54bd8.jpg"},494:function(t,e,n){t.exports=n.p+"img/font-card.431cb07.jpg"},495:function(t,e,n){t.exports=n.p+"img/page_2.276fbaf.jpg"},496:function(t,e,n){t.exports=n.p+"img/page_3.4bf0942.jpg"},497:function(t,e,n){t.exports=n.p+"img/security.7bdbee4.jpg"},500:function(t,e,n){"use strict";n(475)},501:function(t,e,n){var o=n(16)(!1);o.push([t.i,".list-content[data-v-009533b2]{text-align:justify;text-shadow:2px 2px 2px #000}.page-h6[data-v-009533b2]{font-size:30px!important;font-weight:500!important}.page-title[data-v-009533b2]{color:#fff}.page-title div[data-v-009533b2]{padding:10px}.center[data-v-009533b2]{display:flex;align-items:center}.block-center[data-v-009533b2]{margin:0 auto!important}.list-title[data-v-009533b2]{text-overflow:none!important}@media(max-width:1263.5px){.security-card-img[data-v-009533b2]{height:auto!important}}._search[data-v-009533b2]{font-size:24px!important;font-weight:500}@media(max-width:959.5px){.order_1[data-v-009533b2]{order:-1}}button[data-v-009533b2],div[data-v-009533b2]{text-shadow:2px 2px 2px #000}",""]),t.exports=o},505:function(t,e,n){"use strict";n.r(e);var o=n(529),r=n(141),c=n(208),l=n(146),d=n(534),v=n(535),m=n(514),f=n(533),_=n(205),x=n(175),h=n(203),j=n(140),y=n(206),C=n(41),k=n(117),w=n(528),S=n(504),O=n(469),I={name:"HomePage",components:{Carousel3d:S.Carousel3d,Slide:S.Slide,LisenceModal:O.default},data:function(){return{contacts:[{text:"8 (812) 224 24 96",icon:"mdi-cellphone"},{text:"op.kgb@mail.ru",icon:"mdi-email"},{text:"ВКонтакте",icon:"mdi-account"},{text:"Instagram",icon:"mdi-instagram"},{text:"hh.ru",icon:"mdi-text-box"}],items:["page_1","page_2","page_3"],security:"security",modal:[],lisence:[{img:"1.jpg",modal:!1},{img:"2.jpg",modal:!1},{img:"3.jpg",modal:!1},{img:"4.jpg",modal:!1},{img:"5.jpg",modal:!1}],card_list:[{title:"Опыт и профессионализм ",subtitle:"В КГБ  сотрудники охраны хорошо подготовлены психологически и физически и готовы продемонстрировать свои навыки в деле"},{title:"Перевозка лекарственных и психотропных веществ",subtitle:"Охранная Организация КГБ имеет лицензию на перевозку лекарственных средств и психотропных веществ, также у нас есть специализированный фармацевт"},{title:"Индивидуальный подход",subtitle:"Система лояльности для постоянных клиентов"},{title:"Усовершенствованная логистика",subtitle:"Наша команда КГБ работает по всей России "},{title:"Качественное и исправное оборудование, в том числе машины, для выполнения охранных услуг ",subtitle:"Команда КГБ может установить систему «умный дом» для охраны квартир, дач и других объектов"},{title:"Золотой месяц",subtitle:"Наша команда дает месяц отсрочки на оплату охранных услуг (прописывается в договоре)"}],listing:[{icon:"",text:"Для владельцев автомобиля"},{icon:"",text:"Сопровождение груза"},{icon:"",text:"Такси с защитой (аэропрт)"},{icon:"",text:"Аренда авто"},{icon:"",text:"Помощь в дороге автомобилисту "}]}},computed:{dialog:{get:function(){return this.$store.state.dialog},set:function(t){this.$store.commit("setDialog",t)}}},methods:{modalItem:function(t){this.modal=t,this.dialog=!0},linkVK:function(i){2===i&&window.open("https://vk.com/public214878440","_self"),1===i&&window.open("mailto:op.kgb@mail.ru","_self"),4===i&&window.open("https://spb.hh.ru/vacancy/68113018?hhtmFrom=employer_vacancies","_self"),3===i&&window.open("https://www.instagram.com/invites/contact/?i=930rihqvqmmh&utm_content=p2bij7u","_self")}}},M=(n(500),n(57)),component=Object(M.a)(I,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page"},[e(d.a,{attrs:{id:"carousel",height:"800","show-arrows-on-hover":"","hide-delimiter-background":""}},t._l(t.items,(function(t,i){return e(v.a,{key:i,attrs:{src:n(492)("./".concat(t,".jpg"))}})})),1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6",attrs:{"single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Команда")])]),t._v(" "),e(f.a,[e(h.a,{attrs:{color:"#616161",dark:""}},[e(w.a,[e(m.a,[e(j.a,[e(C.a,{staticClass:"list-content text-h6"},[t._v("\n                            Карго Глобал\n              Безопасность - это команда опытных сотрудников, которая\n              обеспечит надежную охрану вашей жизни, а также возьмет на себя\n              ответственность за сохранение собственности, грузов, объектов,\n              офисов, мероприятий и др. Команда КГБ применяет индивидуальный\n              подход к каждому клиенту и действует на основании\n              законодательства РФ.\n            ")])],1)],1),t._v(" "),e(m.a,[e(j.a,[e(C.a,{staticClass:"list-content text-h6"},[t._v("\n                    Сотрудники офиса постоянно повышают свою\n              квалификацию для стратегического развития охранной организации.\n              Наши охранники повышают свою квалификацию доказывая уровень\n              своих знаний и умений для оказания качественных охранных услуг.\n            ")])],1)],1)],1)],1)],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{"single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Наши преимущества")])]),t._v(" "),e(f.a,[e(w.a,{attrs:{"no-gutters":"",justify:"space-between"}},t._l(t.card_list,(function(i,n){return e(m.a,{key:n,attrs:{md:"5","align-self":"start"}},[e(c.a,{staticClass:"color-card",attrs:{color:"#616161",dark:"",elevation:"0"}},[e(j.a,{attrs:{"three-line":""}},[e(y.a,{attrs:{tile:"",size:"90"}},[e(_.a,{staticStyle:{"font-size":"90px"}},[t._v("mdi-medal")])],1),t._v(" "),e(C.a,{staticClass:"text-h6"},[e("div",{class:{"justify-center":i.center}},[t._v("\n                "+t._s(i.title)+"\n              ")]),t._v(" "),e(C.b,[t._v(t._s(i.subtitle))])],1)],1)],1)],1)})),1)],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{id:"cargo_support","single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Сопровождение груза")])]),t._v(" "),e(w.a,{attrs:{"no-gutters":""}},[e(m.a,{attrs:{cols:"12",md:"6"}},[e(c.a,{attrs:{dark:"",color:"#616161",elevation:"0",height:"100%"}},[e(x.a,{staticClass:"car-img",attrs:{src:n(474),height:"100%"}})],1)],1),t._v(" "),e(m.a,{attrs:{md:"6"}},[e(c.a,{staticClass:"color-card",attrs:{dark:"",color:"#616161",elevation:"0"}},[e(l.b,{staticClass:"list-content text-h6",staticStyle:{color:"white"}},[e("div",{staticStyle:{padding:"10px 30px"}},[t._v("\n                           \n             Охранная компания «ОО «КГБ» с 2015 г. занимается\n            сопровождением местных и междугородних контейнерных перевозок. При\n            оказании нашей компании данного вида услуг решаются задачи, как\n            сохранности груза, так и обеспечения безопасности водителя.\n            Сотрудники охраны, привлекаемые нами для выполнения этих задач\n            имеют достаточную квалификацию и опыт. При принятии груза под\n            охрану в обязательном порядке заполняется акт приёма, куда вписаны\n            все средства обеспечения (пломбы). Эта информация досконально\n            проверяется материально ответственными лицами в пункте назначения.\n            Кроме этого, наши сотрудники в обязательном порядке\n            предупреждаются о возможных попытках сговора водителя с третьими\n            лицами. Кроме того, наша компания осуществляет сопровождение и\n            перевозку медицинских средств специально оборудованным\n            транспортом, которой оснащен климатическим оборудованием. Персонал\n            охраны в обязательном порядке обеспечен GPS-трекером с выводом на\n            наш пульт наблюдения. С помощью этого же устройства сотрудник\n            охраны всегда может подать сигнал «Тревога» в нашу дежурную часть.\n          ")])])],1)],1)],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{"single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Охрана объекта")])]),t._v(" "),e(w.a,{attrs:{"no-gutters":""}},[e(m.a,{attrs:{cols:"12",md:"6"}},[e(c.a,{staticClass:"color-card",attrs:{dark:"",color:"#616161",elevation:"0"}},[e(l.b,{staticClass:"list-content text-h6",staticStyle:{color:"white"}},[e("div",{staticStyle:{padding:"10px 30px"}},[t._v("\n                          Безопасность\n            функционирования объекта, сохранности его материального имущества,\n            защиту жизни и здоровья его персонала.Действия по обеспечению\n            безопасности объекта осуществляются обученными и подготовленными\n            сотрудниками. В специально созданных центрах их обучают владению\n            оружием, навыкам психоанализа, оказанию первой медицинской\n            помощи.В обязанности охранников входит непосредственное\n            присутствие на объекте, контроль территории, при необходимости\n            досмотр людей на проходных пунктах предприятий, офисных зданий,\n            фирм. Их деятельность осуществляется согласно Закону Российской\n            Федерации от 11.03.1992 № 2487-1 «О частной детективной и охранной\n            деятельности в Российской Федерации».\n          ")])])],1)],1),t._v(" "),e(m.a,{staticClass:"order_1",attrs:{cols:"12",md:"6"}},[e(c.a,{attrs:{dark:"",color:"#616161",elevation:"0",height:"100%"}},[e(x.a,{attrs:{src:n(462),height:"100%"}})],1)],1)],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{"single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Личная охрана")])]),t._v(" "),e(w.a,{attrs:{"no-gutters":""}},[e(m.a,{attrs:{cols:"12",md:"6"}},[e(c.a,{staticClass:"security",attrs:{dark:""}},[e(x.a,{staticClass:"security-card-img",attrs:{src:n(471),height:"500"}})],1)],1),t._v(" "),e(m.a,[e(c.a,{staticClass:"color-card",attrs:{dark:"",color:"#616161",elevation:"0"}},[e(f.a,[e(l.b,{staticClass:"list-content text-h6",staticStyle:{color:"white"}},[e("div",{staticStyle:{padding:"10px 30px"}},[t._v("\n                            Личная охрана\n              доступна в любое время, также все охранники вооружены\n              огнестрельным оружием. Обеспечение безопасности охраняемого\n              лица, независимо от того, какого рода опасность может ему\n              угрожать – целенаправленное покушение или форс-мажорные\n              обстоятельства.\n            ")])])],1)],1)],1)],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100 mb-4",attrs:{id:"job_openings","single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Вакансии")])]),t._v(" "),e(f.a,[e(w.a,[e(m.a,[e(c.a,{staticClass:"color-card",attrs:{dark:"",color:"#616161",elevation:"0"}},[e(j.a,[e(C.a,{staticClass:"justify-center _search text-center"},[t._v("\n              Наша команда ищет опытных охранников\n            ")])],1),t._v(" "),e(j.a,[e(C.a,{staticClass:"justify-center _search text-center"},[t._v("\n              8 (931) 599 34 37\n            ")])],1),t._v(" "),e(j.a,[e(C.a,{staticClass:"justify-center _search text-center"},[t._v("\n              Игорь Васильевич Леонтьев\n            ")])],1),t._v(" "),e(j.a,{staticClass:"mb-4"},[e(C.a,{staticClass:"justify-center _search text-center"},[t._v("\n              otdel-kadrow.kgb@yandex.ru\n            ")])],1),t._v(" "),e(j.a,{staticClass:"mb-4"},[e(C.a,{staticClass:"justify-center _search text-center"},[t._v("\n              hh.ru\n            ")])],1),t._v(" "),e(j.a,{staticClass:"pb-4 justify-center text-center"},[e(C.a,{staticClass:"justify-center",staticStyle:{flex:"none"}},[e(r.a,{attrs:{color:"grey darken-3"},on:{click:function(e){return e.preventDefault(),t.$router.push({name:"vacancy"})}}},[t._v("\n                Подробнее\n              ")])],1)],1)],1)],1)],1)],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{id:"licenses","single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Лицензии")])]),t._v(" "),e("div",{staticClass:"pb-5 pt-5"},[e("carousel-3d",{attrs:{"controls-visible":!0,height:"494.27",display:"5"}},t._l(t.lisence,(function(o,i){return e("slide",{key:i,attrs:{index:i},scopedSlots:t._u([{key:"default",fn:function(r){var c=r.index,l=r.isCurrent,d=r.leftIndex,v=r.rightIndex;return[e("img",{class:{current:l,onLeft:d>=0,onRight:v>=0},attrs:{"data-index":c,src:n(468)("./".concat(o.img))},on:{click:function(e){return t.modalItem(o)}}})]}}],null,!0)})})),1),t._v(" "),e("LisenceModal",{attrs:{item:t.modal}})],1),t._v(" "),e(o.a,{staticClass:"page-title text-center page-h6 w-100",attrs:{id:"contacts","single-line":"",elevation:"21",color:"grey darken-3"}},[e("div",[t._v("Наши социальные сети")])]),t._v(" "),e(f.a,[e(c.a,{staticClass:"color-card mx-auto",attrs:{dark:"",color:"#616161",elevation:"0","max-width":"300",tile:""}},[e(h.a,{staticClass:"color-card",attrs:{flat:"",color:"#616161",elevation:"0"}},t._l(t.contacts,(function(n,i){return e(j.a,{key:i,attrs:{id:"copy-".concat(i)},on:{click:function(e){return t.linkVK(i)}}},[e(k.a,[e(_.a,{domProps:{textContent:t._s(n.icon)}})],1),t._v(" "),e(C.a,[e(C.c,{domProps:{textContent:t._s(n.text)}})],1)],1)})),1)],1)],1)],1)}),[],!1,null,"009533b2",null);e.default=component.exports;installComponents(component,{LisenceModal:n(469).default})},532:function(t,e,n){"use strict";n.r(e);var o={name:"IndexPage"},r=n(57),component=Object(r.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"home-page"},[t("Page")],1)}),[],!1,null,"154dc76b",null);e.default=component.exports;installComponents(component,{Page:n(505).default})}}]);