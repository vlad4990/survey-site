<template>
  <div class="main_page">
    <h1>Добро пожаловать на сайт</h1>

    <p class="text">Для того, чтобы попасть на экран выбора условий для опроса нажмите на "опросы" в левом меню -> "добавить опрос" . или перейдите по адресу /surveys/add</p>

  </div>
</template>

<script>
import VSurveyItem from "~/components/v-survey-item";
export default {
  name: 'surveys',
  components: {VSurveyItem},
}
</script>

<style>
.text{
  width: 500px;
  margin-top: 50px;
}
</style>
