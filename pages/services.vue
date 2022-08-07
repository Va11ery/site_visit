<template>
  <div>
    <v-row id="service" no-gutters class="service">
      <v-col cols="12" md="6">
        <v-card dark color="#616161" elevation="0" class="color-card">
          <v-img
            :src="require(`~/assets/img/page_5.jpg`)"
            height="100%"
          ></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card dark color="#616161" elevation="0" height="100%">
          <v-card-title class="justify-center page-h6"
            >Сопровождение груза</v-card-title
          >
          <v-card-text> текст сопровождение груза </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-card dark color="#616161" elevation="0" class="color-card">
          <v-card-title class="justify-center page-h6"
            >Охрана объектов</v-card-title
          >
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
            </div></v-card-text
          >
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

    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-card class="security">
          <v-img
            class="security-card-img"
            :src="require(`~/assets/img/security.png`)"
            height="500"
          ></v-img>
        </v-card>
      </v-col>
      <v-col>
        <v-card dark color="#616161" elevation="0" class="color-card">
          <v-card-title class="justify-center page-h6"
            >Личная охрана</v-card-title
          >
          <v-card-text class="list-content text-h6" style="color: white">
            <div style="padding: 10px 30px">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Личная охрана
              доступна в любое время, также все охранники вооружены
              огнестрельным оружием. Обеспечение безопасности охраняемого лица,
              независимо от того, какого рода опасность может ему угрожать –
              целенаправленное покушение или форс-мажорные обстоятельства.
            </div></v-card-text
          >
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-card dark color="#616161" elevation="0" class="color-card">
          <v-card-title class="justify-center page-h6"
            >Охрана мероприятий</v-card-title
          >
          <v-card-text> текст Охрана мероприятий </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="order_1">
        <v-card dark color="#616161" elevation="0" height="100%">
          <v-img
            :src="require(`~/assets/img/page_1.jpg`)"
            height="100%"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
}
</script>

<style lang="scss" scoped>
.page-h6 {
  font-size: 25px !important;
  font-weight: 500 !important;
}
.page-title {
  color: #fff;
  div {
    padding: 5px;
  }
}
@media (max-width: 1263.5px) {
  .security-card-img {
    height: auto !important;
  }
}
@media (max-width: 959.5px) {
  .order_1 {
    order: -1;
  }
}
div {
  text-shadow: 2px 2px 2px black;
}
</style>
