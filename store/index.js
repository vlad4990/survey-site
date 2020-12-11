import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new  Vuex.Store({
  state: {
    survey: [],
    count: 0
  },
  mutations: {
    ADD_PARAM: (state, item) => {
      state.survey.push(item)
    },
    COUNT_INCREMENT: (state) => {
      state.count++
    },
    CHANGE_PARAM: (state, item) =>{
      let paramID = state.survey.findIndex(i => i.id ===(item.id));
      state.survey[paramID] = item
    },
    DELETE_PARAM: (state, ID) => {
      let paramID = state.survey.findIndex(i => i.id ===(ID));
      state.survey.splice(paramID, 1)
    },
    FIX_SURVEY:(state) => {
      for(let i=0; i < state.survey.length; i++) {
        state.survey[i].id = i
      }
    },
    DELETE_SURVEY:(state) => {
      state.survey = []
    }

  },
  getters: {
      SURVEY(state){
        return state.survey
      },
      COUNT(state){
        return state.count
      },
      GET_ID(state){
        if (state.survey.length == 0){
          return 0
        } else {
          return (Number(state.survey[state.survey.length - 1].id) + 1);
        }
      },
      GET_FINAL_SURVEY(state){
        let sendedSurvey = [];
        let finalSurveyId = 0;
        let lastID = Number(state.survey[state.survey.length - 1].id);
        for (let i; i < state.survey.length; i++){
            sendedSurvey = {id: i, name: state.survey[i].name, data: state.survey[i].data }
          };
        return (sendedSurvey);
        }

  }
})

export default store;
