<template>
<div class="survey_item"
     :class="{colorAge: (selectparam === 'Возраст респондента'),
      colorType: (selectparam === 'Тип карты лояльности'),
      colorStatus: (selectparam === 'Статус карты лояльности')}"
     >
  <div class="survey_item__condition">
    <h4 class="survey_item__flex_left survey_item__condition__word" >Условие {{item_data.id + 1}}</h4>
    <select class="survey_item__flex_right border__select" v-model="selectparam" >
      <option value="" disabled selected>Выберите условие</option>
      <option>Возраст респондента</option>
      <option>Тип карты лояльности</option>
      <option>Статус карты лояльности</option>
    </select>
  </div>
  <div class="survey_item__line survey_item__age_block" v-if="selectparam === 'Возраст респондента'">
    <p class="survey_item__flex_left from_to margin_20"  >диапазон 1 </p>
    <div class="survey_item__flex_right " >
      <div class="survey_item__Age" >
        <p class="from_to"> от </p>
        <input @change="pushAge" class="margin_20 border__select" type="number"  v-model="inputfrom">
        <p class="from_to"> до </p>
        <input @change="pushAge" class="margin_20 border__select" type="number"  v-model="inputto">
      </div>

    </div>
  </div>
  <div class="survey_item__line survey_item__Type " v-if="selectparam === 'Тип карты лояльности'">
    <p class="survey_item__flex_left survey_item__condition__word" >Тип 1</p>
    <div class="survey_item__flex_right" >
      <select class="survey_item__select" @change="pushType" v-model="selectType" >
        <option value="" disabled selected>Выберите тип</option>
        <option>Platinum</option>
        <option>Gold</option>
        <option>Silver</option>
      </select>
    </div>
  </div>
  <div class="survey_item__line survey_item__Type" v-if="selectparam === 'Статус карты лояльности'">
    <p class="survey_item__flex_left survey_item__param__word">Статус 1</p>
    <select class="survey_item__select" @change="pushStatus" v-model="selectStatus" >
      <option value="" disabled selected>Выберите статус</option>
      <option>Активна</option>
      <option>Не активирована</option>
    </select>

  </div>
  <button class="survey_item__delete" @click="deleteParam" >Удалить</button>
</div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "v-survey-item",
  props:{
    item_data:{
      type: Object,
      default() {
        return{}
      }
    }
  },
  data() {
    return {
      selectparam: '',
      ageRange: '0',
      inputfrom: '',
      inputto: '',
      selectType: '',
      selectStatus: ''

    }
  },
  methods:{
    ...mapMutations(["CHANGE_PARAM","DELETE_PARAM"]),
    pushAge(){
      this.CHANGE_PARAM({
        id: Number(this.item_data.id),
        name: this.selectparam,
        data: (String(this.inputfrom) + "по" + String(this.inputto))
      })
    },
    pushType(){
      this.CHANGE_PARAM({
        id: Number(this.item_data.id),
        name: this.selectparam,
        data: this.selectType
      })
    },
    pushStatus(){
      this.CHANGE_PARAM({
        id: Number(this.item_data.id),
        name: this.selectparam,
        data: this.selectStatus
      })
    },
    deleteParam(){
      this.DELETE_PARAM(Number(this.item_data.id))
    }
  }
}
</script>

<style>
.survey_item{
  background: #f2f3f3;
  display: flex;
  flex-direction: column;
}
.survey_item__condition{
  display: flex;
}

.survey_item__condition__word{
  padding-top: 8px;
  padding-left: 5px;
  margin: 20px;
}

.survey_item__param__word{
  padding-top: 8px;
  padding-left: 5px;
  margin: 20px 8px 20px 20px;
}
.survey_item__flex_left{
  width: 33%;
}

.survey_item__flex_right{
  width: 67%;
}

.border__select{
  border-radius: 6px;
  padding: 8px;
  margin: 20px;
  border: 1px solid #d9d9d9;
}

.survey_item__line{
  display: flex;
}

.margin_20{
  margin: 20px;
}

.from_to{
  margin-top: 28px;
}

.survey_item__Age{
  display: flex;
}

.survey_item__age_block{

}

.survey_item__delete{
  margin: 5px 20px 20px 500px;
  padding: 8px;
  color: #f72504;
  background: #f7f7f7;
  border-radius: 6px;
  border: 1px solid #f7cccc;
}
.survey_item__delete:hover{
  background: #f6dada;
}
.survey_item__select{
  border-radius: 6px;
  padding: 8px;
  margin: 20px 20px 20px 5px;
  width: 350px;
  border: 1px solid #d9d9d9;
}

.colorAge{
  background: #f7f4ed;
}

.colorType{
  background: #f1f2f7;
}

.colorStatus{
  background: #f2f7f1;
}
</style>
