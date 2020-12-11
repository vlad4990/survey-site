<template>
<nav class="navbar">
  <input class="findSite" type="text" placeholder="Поиск по системе" >
  <div class="login">
    <img :src="require('../assets/images/admin.png') " class="login_image" alt="Опросы">
    <div>
      <h4>Alexander C.</h4>
      <p class="admin">администратор</p>
    </div>
  </div>

</nav>
</template>

<script>
export default {
name: "v-navbar"
}
</script>

<style scoped>
.navbar{
  display: flex;
  justify-content: space-between;
  padding: 20px 0px 20px 0px;
}
.findSite{
  width: 500px;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  padding-left: 15px;
  margin-right: 53px;
}
.login{
display: flex;
}

.login_image{
  height: 40px;
  padding-right: 5px;
}

.admin{
  font-size: 13px;
}

</style>
