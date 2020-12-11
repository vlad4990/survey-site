<template>
<div class="addsurvey_list">

  <v-display-survey-param
    :survey_params = "SURVEY"/>
</div>
</template>

<script>
import VDisplaySurveyParam from "~/components/v-display-survey-param";
import {mapGetters} from 'vuex';
export default {
  name: "add",
  components: {VDisplaySurveyParam},
  computed:{
    ...mapGetters(["SURVEY"])
  }
}
</script>

<style scoped>

</style>
