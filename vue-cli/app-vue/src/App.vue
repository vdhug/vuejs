<template>
  <div id="app">
    <h1>{{mensagem}}</h1>
    <header-principal></header-principal>
    <modal-principal>
      <template v-slot:header>
        <p>Header do componente modal</p>
      </template>
      <template v-slot:footer>
        <p>Footer do componente modal</p>
      </template>

      <template v-slot:default="{user}">
        <h3>{{user}}</h3>
        <p>Esse é um teste</p>
      </template>
    </modal-principal>
  </div>
</template>

<script>
import HeaderPrincipal from "./components/HeaderPrincipal.vue";
import ModalPrincipal from "./components/ModalPrincipal.vue";

export default {
  components: {
    HeaderPrincipal,
    ModalPrincipal
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
