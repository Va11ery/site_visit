(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{220:function(t,e,r){t.exports=r.p+"img/logo.b53d67b.png"},263:function(t,e,r){var content=r(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("4db9d57e",content,!0,{sourceMap:!1})},273:function(t,e,r){var content=r(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("2858a3e8",content,!0,{sourceMap:!1})},288:function(t,e,r){"use strict";var n=r(452),o=r(453),c={name:"DefaultLayout"},l=r(60),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e(n.a,{attrs:{app:""}},[e("Burger"),t._v(" "),e("TheHeader"),t._v(" "),e(o.a,[e("Nuxt")],1),t._v(" "),e("TheFooter")],1)],1)}),[],!1,null,"2943ac28",null);e.a=component.exports;installComponents(component,{Burger:r(442).default,TheHeader:r(443).default,TheFooter:r(444).default})},290:function(t,e,r){t.exports=r.p+"img/font-card-1.ac904c1.jpg"},297:function(t,e,r){r(298),t.exports=r(299)},347:function(t,e,r){"use strict";r(263)},348:function(t,e,r){var n=r(16)(!1);n.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=n},351:function(t,e,r){var content=r(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("736e5d00",content,!0,{sourceMap:!1})},352:function(t,e,r){var n=r(16),o=r(353),c=r(290),l=n(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap);"]);var d=o(c);l.push([t.i,".theme--light.v-application{background:#616161!important;color:#fff!important}.v-list--three-line .v-list-item .v-list-item__subtitle,.v-list-item--three-line .v-list-item__subtitle{-webkit-line-clamp:6!important}.card-page .v-image{height:400px}.color-card{background:none!important}.security.v-card{background:url("+d+");background-size:cover;background-position:50%}",""]),t.exports=l},415:function(t,e,r){"use strict";r(273)},416:function(t,e,r){var n=r(16)(!1);n.push([t.i,".v-btn--fab.v-size--default[data-v-cc6a1b34]{height:65px;width:65px}.number-list[data-v-cc6a1b34]{display:flex}.tel[data-v-cc6a1b34]{color:transparent}.mail[data-v-cc6a1b34],.tel[data-v-cc6a1b34]{min-height:auto!important}a[data-v-cc6a1b34]{text-decoration:none}.list-content[data-v-cc6a1b34]{padding:4px 0!important;text-shadow:2px 2px 2px #000}.v-toolbar__title[data-v-cc6a1b34]{min-width:260px}.adaptive[data-v-cc6a1b34]{display:none}@media(max-width:1092px){.header-content[data-v-cc6a1b34]{display:none}.adaptive[data-v-cc6a1b34]{display:block}}@media(max-width:400px){.v-toolbar__title[data-v-cc6a1b34]{min-width:100px!important;width:120px!important;white-space:pre-wrap;font-size:1.1rem}}",""]),t.exports=n},423:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(86);n.a.use(o.b),e.default=function(){return new o.a({state:{dialog:!1,drawer:!1},mutations:{setDialog:function(t,e){t.dialog=e},setDrawer:function(t,e){t.drawer=e}},actions:{},modules:{}})}},442:function(t,e,r){"use strict";r.r(e);var n=r(205),o=r(203),c=r(140),l=r(204),d=r(41),f=r(454),v=(r(7),r(28),r(55),r(112)),h={name:"HeaderBurger",data:function(){return{fixed:!1,group:null,type:"selector",duration:783,offset:0,easing:"easeOutQuad",easings:Object.keys(v),items:[{icon:"mdi-apps",title:"Главная",to:"/"},{icon:"mdi-shield-car",title:"Услуги",to:"/services"},{icon:"mdi-file-document-multiple",title:"Лицензии",scroll:"licenses"},{icon:"mdi-account-box ",title:"Клиенты",scroll:"clients"},{icon:"mdi-account-box ",title:"Контакты",scroll:"contacts"},{icon:"mdi-card-account-details",title:"Вакансии",to:"/vacancy"}]}},computed:{options:function(){return{duration:this.duration,offset:this.offset,easing:this.easing}},drawer:{get:function(){return this.$store.state.drawer},set:function(t){this.$store.commit("setDrawer",t)}}},methods:{scrollPage:function(i,t){"index"===this.$route.name&&0!==t&&1!==t&&4!==t&&(this.drawer=!1),"services"===this.$route.name&&0!==t&&1!==t&&4!==t&&this.$router.push({name:"index"}),"vacancy"===this.$route.name&&0!==t&&1!==t&&4!==t&&this.$router.push({name:"index"}),setTimeout((function(){document.getElementById(i).scrollIntoView()}),200)}}},m=r(60),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e(f.a,{attrs:{app:"",temporary:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(o.a,t._l(t.items,(function(r,i){return e(c.a,{key:i,attrs:{to:r.to,router:"",exact:""},on:{click:function(e){return t.scrollPage(r.scroll,i)}}},[e(l.a,[e(n.a,[t._v(t._s(r.icon))])],1),t._v(" "),e(d.a,[e(d.c,{domProps:{textContent:t._s(r.title)}})],1)],1)})),1)],1)}),[],!1,null,"3b7846cd",null);e.default=component.exports},443:function(t,e,r){"use strict";r.r(e);var n=r(460),o=r(456),c=r(141),l=r(205),d=r(175),f=r(203),v=r(140),h=r(41),m=r(455),_=r(457),x=r(459),w=r(286),y=r(84),k=(r(7),r(28),r(55),r(112)),C={name:"TheHeader",data:function(){return{type:"selector",duration:783,offset:0,easing:"easeOutQuad",easings:Object.keys(k)}},computed:{options:function(){return{duration:this.duration,offset:this.offset,easing:this.easing}},drawer:{get:function(){return this.$store.state.drawer},set:function(t){this.$store.commit("setDrawer",t)}}},methods:{scrollMain:function(i){"index"===this.$route.name?this.$vuetify.goTo("#carousel",this.options):this.$router.push({name:"index"})},scrollPage:function(i,t){"index"===this.$route.name&&0!==t&&1!==t&&(this.drawer=!1),"services"===this.$route.name&&0!==t&&1!==t&&this.$router.push({name:"index"}),"vacancy"===this.$route.name&&0!==t&&1!==t&&this.$router.push({name:"index"}),setTimeout((function(){document.getElementById(i).scrollIntoView()}),200)}}},$=(r(415),r(60)),component=Object($.a)(C,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{app:"",height:"75",dark:"",color:"grey darken-3",elevation:"16"}},[e("div",{directives:[{def:y.a,name:"ripple",rawName:"v-ripple"}],staticStyle:{display:"flex","align-items":"center"},on:{click:function(e){return e.preventDefault(),t.scrollMain()}}},[e(c.a,{attrs:{fab:""}},[e(d.a,{attrs:{id:"logo",src:r(220),"max-height":"65","max-width":"65"}})],1),t._v(" "),e(w.a,{staticClass:"ml-5",staticStyle:{"text-shadow":"2px 2px 2px black","align-items":"center",display:"flex"}},[t._v("Охранная Организация КГБ")])],1),t._v(" "),e(m.a,{staticClass:"adaptive"}),t._v(" "),e(o.a,{staticClass:"adaptive",on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),e(x.a,{staticClass:"header-content",attrs:{centered:"","exact-active-class":""}},[e(_.a,{on:{click:function(e){return e.preventDefault(),t.scrollMain()}}},[t._v("Главная")]),t._v(" "),e(_.a,{attrs:{to:"/services"}},[t._v("Услуги")]),t._v(" "),e(_.a,{on:{click:function(e){return e.preventDefault(),t.scrollPage("licenses",3)}}},[t._v("Лицензии")]),t._v(" "),e(_.a,{on:{click:function(e){return e.preventDefault(),t.scrollPage("clients",4)}}},[t._v("Клиенты")]),t._v(" "),e(_.a,{on:{click:function(e){return e.preventDefault(),t.scrollPage("contacts",5)}}},[t._v("Контакты")]),t._v(" "),e(_.a,{attrs:{to:"/vacancy"}},[t._v("Вакансии")])],1),t._v(" "),e(f.a,{staticClass:"color-card mx-auto header-content",attrs:{dark:"",elevation:"0"}},[e(v.a,{staticClass:"tel"},[e("a",{staticClass:"tel mr-2",attrs:{href:"tel: '8 (812) 224 24 96'"}},[e(l.a,[t._v("mdi-cellphone")])],1),t._v(" "),e(h.a,{staticClass:"list-content"},[e(h.c,[e("a",{staticStyle:{color:"white"},attrs:{href:"tel: '8 (812) 224 24 96'"}},[t._v("8 (812) 224 24 96\n          ")])])],1)],1),t._v(" "),e(v.a,{staticClass:"mail"},[e("a",{staticClass:"tel mr-2",staticStyle:{color:"white"},attrs:{href:"mailto:op.kgb@mail.ru"}},[e(l.a,[t._v("mdi-at")])],1),t._v(" "),e(h.a,{staticClass:"list-content"},[e(h.c,[e("a",{staticClass:"tel",staticStyle:{color:"white"},attrs:{href:"mailto:op.kgb@mail.ru"}},[t._v("\n            op.kgb@mail.ru\n          ")])])],1)],1)],1)],1)}),[],!1,null,"cc6a1b34",null);e.default=component.exports},444:function(t,e,r){"use strict";r.r(e);var n=r(208),o=r(146),c=r(458),l=r(175),d={name:"TheFooter"},f=r(60),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"justify-center",attrs:{dark:"",color:"grey darken-3"}},[e(n.a,{staticClass:"white--text text-center mx-auto",attrs:{flat:"",tile:"",color:"grey darken-3"}},[e(o.b,{staticClass:"white--text"},[e(l.a,{staticStyle:{margin:"0 auto"},attrs:{src:r(220),"max-height":"70","max-width":"70"}}),t._v(" "),e("div",{staticClass:"pt-4"},[t._v("Телефон: 8 (812) 224 24 96")])],1),t._v(" "),e("div",{staticClass:"pa-4"},[t._v("Информация на сайте не является публичной офертой")]),t._v(" "),e(o.b,{staticClass:"white--text"},[t._v("\n      2015 — "+t._s((new Date).getFullYear())+' © ООО "Охранная организация "Карго\n      Глобал Безопасность" Адрес: г. Санкт-Петербург ул. Большая Пороховская\n      61\n    ')])],1)],1)}),[],!1,null,null,null);e.default=component.exports},85:function(t,e,r){"use strict";var n=r(452),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(347),r(60)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports}},[[297,9,4,10]]]);