<template>
  <div>
    <v-row id="service" no-gutters class="service">
      <v-col cols="12" md="6">
        <v-card
          dark
          color="#616161"
          elevation="0"
          class="color-card"
          height="100%"
        >
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
          <v-card-text
            class="list-content text-h6 text-justify"
            style="color: white"
          >
            <div style="padding: 10px 30px">
              <span style="padding-left: 100px"></span> Охранная Организация
              «Карго Глобал Безопасность» с 2015 г. занимается сопровождением
              местных и междугородних перевозок груза. При оказании нашей
              компании данного вида услуг решаются задачи, как сохранности
              груза, так и обеспечения безопасности водителя во время оказания
              охранных услуг.
              <div>
                <span style="padding-left: 100px"></span> Сотрудники охраны,
                привлекаемые нами для выполнения этих задач, имеют достаточную
                квалификацию и опыт. При принятии груза под охрану в
                обязательном порядке заполняется акт приёма, куда вписаны все
                средства обеспечения (пломбы). Эта информация досконально
                проверяется материально ответственными лицами в пункте
                назначения груза. Кроме того, наша компания осуществляет
                сопровождение и перевозку медицинских средств специально
                оборудованным транспортом, который оснащен климатическим
                оборудованием.
              </div>
              <span style="padding-left: 100px"></span> Персонал охраны в
              обязательном порядке обеспечен GPS-трекером с выводом на наш пульт
              наблюдения. С помощью этого же устройства сотрудник охраны всегда
              может подать сигнал «Тревога» в нашу дежурную часть.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-card dark color="#616161" elevation="0" class="color-card">
          <v-card-title class="justify-center page-h6"
            >Охрана объектов</v-card-title
          >
          <v-card-text
            class="list-content text-h6 text-justify"
            style="color: white"
          >
            <div style="padding: 10px 30px">
              <span style="padding-left: 100px"></span> Команда ООО «ОО «КГБ»
              готова обеспечить безопасность функционирования объекта,
              сохранности его материального имущества, защиту жизни и здоровья
              его персонала. Действия по обеспечению безопасности объекта
              осуществляются обученными и подготовленными сотрудниками. В
              специально созданных центрах их обучают владению оружием, навыкам
              психоанализа, оказанию первой медицинской помощи, что поможет
              обеспечить надежную охрану объектов.
              <div>
                <span style="padding-left: 100px"></span> В обязанности
                охранников входит: непосредственное присутствие на объекте,
                контроль территории, при необходимости досмотр людей на
                проходных пунктах предприятий, офисных зданий, фирм. Их
                деятельность осуществляется согласно Закону Российской Федерации
                от 11.03.1992 № 2487-1 «О частной детективной и охранной
                деятельности в Российской Федерации».
              </div>
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
        <v-card class="security" height="100%">
          <v-img
            class="security-card-img"
            :src="require(`~/assets/img/security.png`)"
            height="100%"
          ></v-img>
        </v-card>
      </v-col>
      <v-col>
        <v-card dark color="#616161" elevation="0" class="color-card">
          <v-card-title class="justify-center page-h6"
            >Личная охрана</v-card-title
          >
          <v-card-text
            class="list-content text-h6 text-justify"
            style="color: white"
          >
            <div style="padding: 10px 30px">
              <span style="padding-left: 100px"></span> Личная охрана доступна в
              любое время, также все охранники вооружены огнестрельным оружием.
              Обеспечение безопасности охраняемого лица, независимо от того,
              какого рода опасность может ему угрожать – целенаправленное
              покушение или форс-мажорные обстоятельства.

              <div>
                <span style="padding-left: 100px"></span> В компании ОО «КГБ» вы
                можете заказать различные услуги, включая:
              </div>
              <div v-for="i in list" :key="i">
                <span style="padding-left: 100px"></span>- {{ i }}
              </div>
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
          <v-card-text
            class="list-content text-h6 text-justify"
            style="color: white"
          >
            <div style="padding: 10px 30px">
              <span style="padding-left: 100px"></span> Охрана
              культурно-массовых и спортивно-массовых мероприятий требует
              проведения целого комплекса организационных мер, направленных на
              обеспечение общественной безопасности. ООО «ОО «КГБ» обеспечит
              высокий уровень безопасности при охране массовых мероприятий
              любого типа. Гарантируем: безопасность имущества, здоровье гостей
              и сотрудников, неприкосновенность приглашенных на объектах в
              Санкт-Петербурге и Ленобласти.
              <div>
                <span style="padding-left: 100px"></span> Мы предоставляем
                группу опытных лицензированных охранников и спецтранспорт. ООО
                «ОО «КГБ» оказывает охранные услуги на высшем уровне и берет на
                себя организацию контрольно-пропускного режима, координацию
                посетителей, контроль периметра, предупреждение и локализацию
                ситуаций, угрожающих жизни, здоровью и хорошему настроению
                гостей и персонала.
              </div>
              <span style="padding-left: 100px"></span> Индивидуально подходим к
              каждому мероприятию. Обязанности и действия сотрудников охраны
              планируются согласно сценарию и согласовываются с организатором.
              ООО «ОО «КГБ» остается востребованной и на этом сегменте рынка
              охранных услуг и готова предоставить физическую охрану мероприятий
              для обеспечения Вашей безопасности.
            </div>
          </v-card-text>
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

    <v-row no-gutters>
      <v-col cols="12" md="6" class="order_1">
        <v-card dark color="#616161" elevation="0" height="100%">
          <v-img
            :src="require(`~/assets/img/page_6.jpg`)"
            height="100%"
          ></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card dark color="#616161" elevation="0" class="color-card">
          <v-card-title class="justify-center page-h6"
            >Охрана собственности</v-card-title
          >
          <v-card-text
            class="list-content text-h6 text-justify"
            style="color: white"
          >
            <div style="padding: 10px 30px">
              <span style="padding-left: 100px"></span>Скоординированные
              действия сотрудников ООO «ОО «КГБ» с применением новых
              технологических средств способны гарантировать полную безопасность
              Вашему имуществу.
              <div>
                <span style="padding-left: 100px"></span> Многолетний опыт на
                рынке негосударственных охранных услуг позволяет нам
                предотвратить наступление неблагоприятных последствий для
                клиента. Применяя при этом меры, направленные на обеспечение
                технической укрепленности вашей собственности, создание системы
                дистанционного контроля за ним, с использование IT-технологий.
              </div>
              <div>
                <span style="padding-left: 100px"></span> Наши охранники
                предотвращают повреждения или хищения Вашего имущества.
              </div>
              <span style="padding-left: 100px"></span> Наибольший потенциал ООО
              «ОО «КГБ» заключен в активном применении технических систем
              безопасности, как наиболее экономичного и надежного способа защиты
              собственности, что позволяет уменьшить влияние "человеческого
              фактора", снизить финансовые и материальные издержки организации,
              сократить численность персонала.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      list: [
        'личная охрана на час;',
        'постоянно личная охрана и сопровождение;',
        'личный охранник для встречи клиента в аэропорту;',
        'охрана на время проведения определенных торжественных мероприятий.',
      ],
    }
  },
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
