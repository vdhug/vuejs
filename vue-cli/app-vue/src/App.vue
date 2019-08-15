<template>
  <div id="app">
    <h1>{{mensagem}}</h1>
    <header-principal></header-principal>
  </div>
</template>

<script>
import HeaderPrincipal from "./components/HeaderPrincipal.vue";

export default {
  components: {
    HeaderPrincipal
  },
  data() {
    return {
      mensagem: "Ola Mundo"
    };
  }
};
</script>

<style lang="scss">
</style>
