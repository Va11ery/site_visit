<template>
  <div>
    <v-carousel height="800" show-arrows-on-hover hide-delimiter-background>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="require(`~/assets/img/${item}.jpg`)"
      ></v-carousel-item>
    </v-carousel>
    <v-banner
      single-line
      elevation="0"
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
      elevation="0"
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
          <v-card color="#616161" dark elevation="0">
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
      single-line
      elevation="0"
      class="page-title text-center page-h6 w-100"
      color="grey darken-3"
    >
      <div>Личная охрана</div></v-banner
    >

    <v-container>
      <v-row>
        <v-col>
          <v-card dark max-width="512">
            <v-img :src="require(`~/assets/img/${security}.jpg`)"></v-img>
          </v-card>
        </v-col>
        <v-col>
          <v-card dark color="#616161" elevation="0">
            <v-card-title>dasdadadada</v-card-title>
            <v-card-text
              >ОО КГБ обеспечит надежную личную охрануОО КГБ обеспечит надежную
              личную охрануОО КГБ обеспечит надежную личную охрануОО КГБ
              обеспечит надежную личную охрануОО КГБ обеспечит надежную личную
              охрануОО КГБ обеспечит надежную личную охрануОО КГБ обеспечит
              надежную личную охрануОО КГБ обеспечит надежную личную охрануОО
              КГБ обеспечит надежную личную охрануОО КГБ обеспечит надежную
              личную охрануОО КГБ обеспечит надежную личную охрануОО КГБ
              обеспечит надежную личную охрануОО КГБ обеспечит надежную личную
              охрануОО КГБ обеспечит надежную личную охрану</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-banner
      single-line
      elevation="0"
      class="page-title text-center page-h6 w-100 mb-4"
      color="grey darken-3"
    >
      <div>Сопровождение груза</div></v-banner
    >
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      items: ['page_1', 'page_2', 'page_3'],
      security: 'security',
      card_list: [
        {
          title: 'Опыт и профессионализм ',
          subtitle:
            'В КГБ  сотрудники охраны хорошо подготовлены психологически и физически и готовы продемонстрировать свои навыки в деле',
        },
        {
          title: 'Перевозка лекарственных и психотропных веществ',
          subtitle:
            'Охранная Организация КГБ имеет лицензию на перевозку лекарственных средст и психотропных веществ, также у нас есть специализированный фармацевт',
        },

        {
          title: 'Индивидуальный подход',
          subtitle: 'Система лояльности для постоянных клиентов',
        },
        {
          title: 'Усовершенствованная логистика',
          subtitle: 'Наша команда КГБ работает по всей россии ',
        },
        {
          title:
            'Качественное и исправное оборудование в том числе машины для выполнения охранных услуг ',
          subtitle:
            'Команда КГБ может установить систему «умный дом» для охраны квартир дач и других объектов',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.page-title {
  color: #fff;
  div {
    padding: 10px;
  }
}
.list-content {
  text-align: justify;
  text-shadow: 2px 2px 2px black;
}
.page-h6 {
  font-size: 30px !important;
  font-weight: 500 !important;
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
</style>
