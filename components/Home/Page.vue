<template>
  <div class="page">
    <v-carousel
      id="carousel"
      height="800"
      show-arrows-on-hover
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="require(`~/assets/img/${item}.jpg`)"
      ></v-carousel-item>
    </v-carousel>
    <v-banner
      single-line
      elevation="21"
      class="page-title text-center page-h6"
      color="grey darken-3"
    >
      <div>Команда</div></v-banner
    >
    <v-container>
      <v-list color="#616161" dark>
        <v-row>
          <v-col>
            <v-list-item>
              <v-list-item-content class="list-content text-h6">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Карго Глобал
                Безопасность - это команда опытных сотрудников, которая
                обеспечит надежную охрану вашей жизни, а также возьмет на себя
                ответственность за сохранение собственности, грузов, объектов,
                офисов, мероприятий и др. Команда КГБ применяет индивидуальный
                подход к каждому клиенту и действует на основании
                законодательства РФ.
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col>
            <v-list-item>
              <v-list-item-content class="list-content text-h6">
                &nbsp; &nbsp; &nbsp; Сотрудники офиса постоянно повышают свою
                квалификацию для стратегического развития охранной организации.
                Наши охранники повышают свою квалификацию доказывая уровень
                своих знаний и умений для оказания качественных охранных услуг.
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-list>
    </v-container>

    <v-banner
      single-line
      elevation="21"
      class="page-title text-center page-h6 w-100"
      color="grey darken-3"
    >
      <div>Наши преимущества</div></v-banner
    >
    <v-container>
      <v-row no-gutters justify="space-between">
        <v-col
          v-for="(i, index) in card_list"
          :key="index"
          md="5"
          align-self="start"
        >
          <v-card color="#616161" dark elevation="0" class="color-card">
            <v-list-item three-line>
              <v-list-item-avatar tile size="90">
                <v-icon style="font-size: 90px"
                  >mdi-medal</v-icon
                ></v-list-item-avatar
              >
              <v-list-item-content class="text-h6">
                <div :class="{ 'justify-center': i.center }">
                  {{ i.title }}
                </div>
                <v-list-item-subtitle>{{ i.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-banner
      id="cargo_support"
      single-line
      elevation="21"
      class="page-title text-center page-h6 w-100"
      color="grey darken-3"
    >
      <div>Сопровождение груза</div></v-banner
    >
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-card dark color="#616161" elevation="0" height="100%">
          <v-img
            class="car-img"
            :src="require(`~/assets/img/page_55.jpg`)"
            height="100%"
          ></v-img>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-list
          dark
          color="#616161"
          class="color-card"
          elevation="0"
          three-line
        >
          <v-subheader>
            Охранная Организация КГБ предлает множество услуг, связанных с
            сопровождением:
          </v-subheader>
          <v-list-item v-for="(i, index) in listing" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ i.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-banner
      single-line
      elevation="21"
      class="page-title text-center page-h6 w-100"
      color="grey darken-3"
    >
      <div>Охрана объекта</div></v-banner
    >
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-card dark color="#616161" elevation="0" class="color-card">
          <v-card-text class="list-content text-h6" style="color: white">
            <div style="padding: 10px 30px">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Безопасность
              функционирования объекта, сохранности его материального имущества,
              защиту жизни и здоровья его персонала.Действия по обеспечению
              безопасности объекта осуществляются обученными и подготовленными
              сотрудниками. В специально созданных центрах их обучают владению
              оружием, навыкам психоанализа, оказанию первой медицинской
              помощи.В обязанности охранников входит непосредственное
              присутствие на объекте, контроль территории, при необходимости
              досмотр людей на проходных пунктах предприятий, офисных зданий,
              фирм. Их деятельность осуществляется согласно Закону Российской
              Федерации от 11.03.1992 № 2487-1 «О частной детективной и охранной
              деятельности в Российской Федерации».
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="order_1">
        <v-card dark color="#616161" elevation="0" height="100%">
          <v-img
            :src="require(`~/assets/img/amg_cop.jpg`)"
            height="100%"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-banner
      single-line
      elevation="21"
      class="page-title text-center page-h6 w-100"
      color="grey darken-3"
    >
      <div>Личная охрана</div></v-banner
    >

    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-card dark class="security">
          <v-img
            class="security-card-img"
            :src="require(`~/assets/img/security.png`)"
            height="500"
          ></v-img>
        </v-card>
      </v-col>
      <v-col>
        <v-card dark color="#616161" elevation="0" class="color-card">
          <v-container>
            <v-card-text class="list-content text-h6" style="color: white">
              <div style="padding: 10px 30px">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Личная охрана
                доступна в любое время, также все охранники вооружены
                огнестрельным оружием. Обеспечение безопасности охраняемого
                лица, независимо от того, какого рода опасность может ему
                угрожать – целенаправленное покушение или форс-мажорные
                обстоятельства.
              </div></v-card-text
            >
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-banner
      id="job_openings"
      single-line
      elevation="21"
      class="page-title text-center page-h6 w-100 mb-4"
      color="grey darken-3"
    >
      <div>Вакансии</div></v-banner
    >

    <v-container>
      <v-row>
        <v-col>
          <v-card dark color="#616161" elevation="0" class="color-card">
            <v-list-item>
              <v-list-item-content class="justify-center _search text-center">
                Наша команда ищет опытных охранников
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="justify-center _search text-center">
                8 (931) 599 34 37
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="justify-center _search text-center">
                Игорь Васильевич Леонтьев
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="mb-4">
              <v-list-item-content class="justify-center _search text-center">
                otdel-kadrow.kgb@yandex.ru
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="mb-4">
              <v-list-item-content class="justify-center _search text-center">
                hh.ru
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pb-4 justify-center text-center">
              <v-list-item-content class="justify-center" style="flex: none">
                <v-btn color="grey darken-3"> Подробнее </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-banner
      id="licenses"
      single-line
      elevation="21"
      class="page-title text-center page-h6 w-100"
      color="grey darken-3"
    >
      <div>Лицензии</div></v-banner
    >

    <div class="pb-5 pt-5">
      <carousel-3d :controls-visible="true" height="494.27" display="5">
        <slide v-for="(slide, i) in lisence" :key="i" :index="i">
          <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
            <img
              :data-index="index"
              :class="{
                current: isCurrent,
                onLeft: leftIndex >= 0,
                onRight: rightIndex >= 0,
              }"
              :src="require(`~/assets/img/lisenci/${slide.img}`)"
              @click="modalItem(slide)"
            />
          </template>
        </slide>
      </carousel-3d>
      <LisenceModal :item="modal" />
    </div>

    <v-banner
      id="contacts"
      single-line
      elevation="21"
      class="page-title text-center page-h6 w-100"
      color="grey darken-3"
    >
      <div>Наши социальные сети</div></v-banner
    >
    <v-container>
      <v-card
        dark
        color="#616161"
        elevation="0"
        class="color-card mx-auto"
        max-width="300"
        tile
      >
        <v-list flat color="#616161" elevation="0" class="color-card">
          <v-list-item
            v-for="(item, i) in contacts"
            :id="`copy-${i}`"
            :key="i"
            @click="linkVK(i)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import LisenceModal from './LisenceModal.vue'
export default {
  name: 'HomePage',
  components: {
    Carousel3d,
    Slide,
    LisenceModal,
  },
  data() {
    return {
      contacts: [
        { text: '8 (812) 224 24 96', icon: 'mdi-cellphone' },
        { text: 'op.kgb@mail.ru', icon: 'mdi-email' },
        {
          text: 'ВКонтакте',
          icon: 'mdi-account',
        },
        { text: 'Instagram', icon: 'mdi-instagram' },
        { text: 'hh.ru', icon: 'mdi-text-box' },
      ],
      items: ['page_1', 'page_2', 'page_3'],
      security: 'security',
      modal: [],
      lisence: [
        {
          img: '1.jpg',
          modal: false,
        },
        {
          img: '2.jpg',
          modal: false,
        },
        {
          img: '3.jpg',
          modal: false,
        },
        {
          img: '4.jpg',
          modal: false,
        },
        {
          img: '5.jpg',
          modal: false,
        },
      ],
      card_list: [
        {
          title: 'Опыт и профессионализм ',
          subtitle:
            'В КГБ  сотрудники охраны хорошо подготовлены психологически и физически и готовы продемонстрировать свои навыки в деле',
        },
        {
          title: 'Перевозка лекарственных и психотропных веществ',
          subtitle:
            'Охранная Организация КГБ имеет лицензию на перевозку лекарственных средств и психотропных веществ, также у нас есть специализированный фармацевт',
        },

        {
          title: 'Индивидуальный подход',
          subtitle: 'Система лояльности для постоянных клиентов',
        },
        {
          title: 'Усовершенствованная логистика',
          subtitle: 'Наша команда КГБ работает по всей России ',
        },
        {
          title:
            'Качественное и исправное оборудование, в том числе машины, для выполнения охранных услуг ',
          subtitle:
            'Команда КГБ может установить систему «умный дом» для охраны квартир, дач и других объектов',
        },
        {
          title: 'Золотой месяц',
          subtitle:
            'Наша команда дает месяц отсрочки на оплату охранных услуг (прописывается в договоре)',
        },
      ],
      listing: [
        {
          icon: '',
          text: 'Для владельцев автомобиля',
        },
        {
          icon: '',
          text: 'Сопровождение груза',
        },
        {
          icon: '',
          text: 'Такси с защитой (аэропрт)',
        },
        {
          icon: '',
          text: 'Аренда авто',
        },
        {
          icon: '',
          text: 'Помощь в дороге автомобилисту ',
        },
      ],
    }
  },
  computed: {
    dialog: {
      get() {
        return this.$store.state.dialog
      },
      set(newValue) {
        this.$store.commit('setDialog', newValue)
      },
    },
  },
  methods: {
    modalItem(item) {
      this.modal = item
      this.dialog = true
    },
    linkVK(i) {
      if (i === 2) {
        window.open('https://vk.com/public214878440', '_self')
      }
      if (i === 1) {
        window.open('mailto:op.kgb@mail.ru', '_self')
      }
      if (i === 4) {
        window.open(
          'https://spb.hh.ru/vacancy/68113018?hhtmFrom=employer_vacancies',
          '_self'
        )
      }
      if (i === 3) {
        window.open(
          'https://www.instagram.com/invites/contact/?i=930rihqvqmmh&utm_content=p2bij7u',
          '_self'
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.list-content {
  text-align: justify;
  text-shadow: 2px 2px 2px black;
}
.page-h6 {
  font-size: 30px !important;
  font-weight: 500 !important;
}
.page-title {
  color: #fff;
  div {
    padding: 10px;
  }
}
.center {
  display: flex;
  align-items: center;
}
.block-center {
  margin: 0 auto !important;
}
.list-title {
  text-overflow: none !important;
}
@media (max-width: 1263.5px) {
  .security-card-img {
    height: auto !important;
  }
}
._search {
  font-size: 24px !important  ;
  font-weight: 500;
}
@media (max-width: 959.5px) {
  .order_1 {
    order: -1;
  }
}
div {
  text-shadow: 2px 2px 2px black;
}

button {
  text-shadow: 2px 2px 2px black;
}
</style>
