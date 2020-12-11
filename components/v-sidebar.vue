<template>
  <div class="sidebar_box">
    <div class="red_dot">
      <NuxtLink :src="require('../assets/images/survey.png') " to="/" type="button" class="">
        <img :src="require('../assets/images/red.png') " class="sidebar_image" alt="красная точка">
      </NuxtLink>
    </div>
    <div class="sidebar_item">
      <NuxtLink :src="require('../assets/images/survey.png') " to="/surveys/" type="button" class="">
        <img :src="require('../assets/images/survey.png') " class="sidebar_image" alt="Опросы">
      </NuxtLink>
    </div>
    <div class="sidebar_item">
      <NuxtLink to="#" type="button" class="">
        <img :src="require('../assets/images/users.png') " class="sidebar_image" alt="пользователи">
      </NuxtLink>
    </div>
    <div class="sidebar_item">
      <NuxtLink to="#" type="button" class="">
        <img :src="require('../assets/images/blacklist.png') " class="sidebar_image" alt="черный список">
      </NuxtLink>
    </div>
    <div class="sidebar_item">
      <NuxtLink to="#" type="button" class="">
        <img :src="require('../assets/images/call-center.png') " class="sidebar_image" alt="кол-центр">
      </NuxtLink>
    </div>
    <div class="question_dot">
      <img :src="require('../assets/images/question.png') " class="sidebar_image" alt="Подсказка">
    </div>
  </div>
</template>

<script>
export default {
  name: "v-sidebar"
}
</script>

<style scoped>
.sidebar_box{
  display: flex;
  flex-direction: column;
  height: 700px;
  margin-right: 30px;
  border: 1px solid #e6e6e6;
}
.sidebar_item{
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.sidebar_image{
  height: 50px;
}
.sidebar_item:hover{
outline: 1px solid #d6d5d5;
}

.red_dot{
  padding-left: 12px;
  padding-bottom: 30px;
}

.question_dot{
  padding-left: 11px;
  padding-top: 260px;
}
</style>
