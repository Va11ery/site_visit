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
      elevation="24"
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
    <v-card elevation="1" dark color="#616161">
      <v-card-title class="justify-center page-h6"
        >Наши преимущества</v-card-title
      >
      <v-container>
        <v-row>
          <v-col
            v-for="(i, index) in card_list"
            :key="index"
            :align-self="i.self"
            :cols="i.col"
          >
            <v-list-item>
              <v-list-item-content class="text-h6">
                <div :class="[{ center: i.center }]">
                  <v-icon style="font-size: 60px">mdi-medal</v-icon>
                  {{ i.text }}
                </div></v-list-item-content
              >
            </v-list-item>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      items: ['page_1', 'page_2', 'page_3'],
      card_list: [
        {
          text: 'Опыт и профессионализм ',
          self: 'center',
          col: '8',
        },
        {
          text: 'Перевозка лекарственных и психотропных веществ',
          self: 'center',
          col: '4',
          end: true,
        },
        {
          text: 'Качественное и исправное оборудование в том числе машины для выполнения охранных услуг ',
          self: 'center',
          col: '12',
          center: true,
        },
        {
          text: 'Индивидуальный подход',
          self: 'center',
          col: '8',
        },
        {
          text: 'Усовершенствованная логистика',
          self: 'center',
          col: '4',
          end: true,
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
  justify-content: center;
}
</style>
