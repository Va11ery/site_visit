<template>
  <div class="pt-5">
    <v-list two-line subheader dark color="#616161">
      <div
        style="font-size: 24px; text-shadow: 2px 2px 2px black; padding: 0 16px"
      >
        В связи с расширением ООО «ОО «КГБ» срочно ищем охранников 6 разряда на
        сопровождение грузов.
      </div>
      <v-list-item v-for="(i, index) in responsibilities" :key="index">
        <v-list-item-content>
          <v-list-item-title
            class="wrap"
            style="font-size: 24px; text-shadow: 2px 2px 2px black"
            >{{ i.title }}</v-list-item-title
          >
          <v-list-item-subtitle
            v-for="(text, text_index) in i.list"
            :key="text_index"
            class="subtitle wrap"
            >- {{ text }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-card color="#616161" dark elevation="0">
      <v-card-title style="text-shadow: 2px 2px 2px black"
        >Ключевые навыки</v-card-title
      >
      <v-card-text>
        <v-chip>Материальная ответственность</v-chip>

        <v-chip>Умение работать в команде</v-chip>

        <v-chip>Лицензия охранника</v-chip>

        <v-chip>Адекватность</v-chip>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'PageVacancy',
  data() {
    return {
      responsibilities: [
        {
          title: 'Обязанности:',
          list: [
            'Сопровождение товарно-материальных ценностей по г. СПБ и России;',
            'Сопровождение физических лиц.',
          ],
        },
        {
          title: 'Требования:',
          list: [
            'Действующее удостоверение частного охранника 6 разряда г. СПб и Лен, область;',
            'Ответственность;',
            'Дисциплинированность;',
            'Желание работать и зарабатывать!',
          ],
        },
        {
          title: 'Условия:',
          list: [
            'Оформляем официально по ТК РФ (соцпакет);',
            'Заработная плата: 50 000 - 90 000 рублей. Направлений много, зарплата складывается из выполненных рейсов. Поэтому сумма зависит от вас;',
            'График плавающий (информация по рейсам приходит за 1-2 дня до самого рейса);',
            'Трудоустройство в день собеседования;',
            'Заработная плата без задержек, выплата 2 раза в месяц;',
            'Адекватное руководство;',
            'Если остались вопросы, то звоните по телефону 8 (931) 599 34 37 (Отдел кадров) или напишите нам на почту отдела кадров: otdel-kadrow.kgb@yandex.ru, более детально все вопросы обсуждаются на собеседовании с руководителем.',
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  white-space: pre-wrap;
}
.subtitle {
  font-size: 18px;
  text-shadow: 2px 2px 2px black;
}
</style>
