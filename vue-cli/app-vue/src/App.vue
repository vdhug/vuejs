<template>
  <div id="app">
    <!-- <h1>{{mensagem}}</h1>
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
    </modal-principal>-->
    <!-- Aula sobre Dynamic -->
    <!-- <button @click="componenteAtivo = 'AulaDescricao'">Descricao</button>
    <button @click="componenteAtivo = 'AulaDownload'">Download</button>-->

    <!-- Keep alive para o elemento não ser destruído e ser criado apenas uma vez -->
    <!-- <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>-->
    <!-- <aula-descricao></aula-descricao>
    <aula-download></aula-download>-->

    <menu-principal></menu-principal>
  </div>
</template>

<script>
import AulaDescricao from "./components/AulaDescricao.vue";
import AulaDownload from "./components/AulaDownload.vue";
import MenuPrincipal from "./components/MenuPrincipal.vue";

export default {
  components: {
    MenuPrincipal,
    AulaDescricao,
    AulaDownload
  },
  data() {
    return {
      componenteAtivo: "AulaDownload"
    };
  }
};
</script>

<style lang="scss">
</style>
