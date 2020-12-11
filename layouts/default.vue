<template>
  <div>

    <div class="layouts_navbar">
      <v-sidebar/>
      <div class="layouts_sidebar">
        <v-navbar/>
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.layouts_navbar{
  display: flex;
}
.layouts_sidebar{
  display: flex;
  flex-direction: column;
}
</style>
<script>
import VNavbar from "../components/v-navbar";
import VSidebar from "~/components/v-sidebar";
export default {
  components: {VSidebar, VNavbar}
}
</script>
