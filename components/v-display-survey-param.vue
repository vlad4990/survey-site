<template>
  <div>
    <div class="display_survey__items">
      <v-survey-item
        v-for="item in SURVEY"
        :key="item.id"
        :item_data="item"
      />

      <div class="display_survey__add_param">
        <button  class="display_survey__add_param__button" @click="addParam">Добавить условие выборки</button>
      </div>
    </div>
    <div class="display_survey__footer">
      <button class="display_survey__button display_survey__button__test">Протестировать опрос</button>
      <button class="display_survey__button display_survey__button__sendParam" @click="sendParam">Далее</button>
    </div>
  </div>

</template>

<script>
import VSurveyItem from "~/components/v-survey-item";
import {mapGetters, mapMutations} from "vuex";
export default {
name: "v-display-survey-param",
  components: {VSurveyItem},
  data(){
    return{
      id: '',
      name: '',
      data: ''
    }
  },
  methods: {
    ...mapMutations(["ADD_PARAM", "FIX_SURVEY","DELETE_SURVEY"]),
    addParam(){
      this.ADD_PARAM({
        id: this.GET_ID,
        name: 'Возраст респондента',
        data: ''
      })
    },
    sendParam(){
      this.FIX_SURVEY();
      console.log(this.SURVEY);
      alert('результаты опроса для передачи на сервер выведены в консоль браузера')
    }
  },
  computed: {
    ...mapGetters(["SURVEY","GET_ID","GET_FINAL_SURVEY"])
  }
}
</script>

<style scoped>
.display_survey__items{
  display: flex;
  flex-direction: column;
  width: 700px;
  border-right: 1px solid #e6e9e9;
  border-left: 1px solid #e6e9e9;
  border-top: 1px solid #e6e9e9;
  border-top: none;
  border-bottom: none;
}
.display_survey__add_param{
  height: 80px;
  background: white;
  color: #277927;
  margin-top: 20px;
  padding: 20px 10px 20px 20px;
}

.display_survey__add_param__button{
  height: 40px;
  background: #eff8ef;
  color: #277927;
  border-color: #dfe4e9;
  border: 1px solid;
  width: 660px;
  margin-bottom: 30px;
  border-radius: 6px;
}

.display_survey__add_param__button:hover{
  background: #e6f8e6;
}

.display_survey__footer{
  display: flex;
  justify-content: space-between;
  width: 700px;
  background: #edf0f1;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.display_survey__button{
  padding: 10px 15px 10px;
  border-radius: 8px;
  margin: 20px;
}
.display_survey__button__test{
  color: #069e23;
  background: #f7f7f7;
  border-color: #e7e9ec;
}
.display_survey__button__sendParam{
  color: #f7f7f7;
  background: #0f9f29;
  border-color: #90ee90;
}
</style>
