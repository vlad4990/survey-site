<template>
<div>
  <p>hello</p>
  <NuxtLink  to="/surveys/add" type="button" class="button">
    Добавить опрос
  </NuxtLink>
</div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.button{
  background: #98ef98;
  color: #35495e;
  border-radius: 6px;
  height: 20px;
  padding: 20px;
  text-decoration: none;
}
.button:hover{
  background: #7aee7a;
}
</style>
