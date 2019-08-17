<template>
  <div id="app">
    <ul>
      <li v-for="livro in $store.state.livros" :key="livro.nome">
        <p>{{livro.nome}}</p>
      </li>
    </ul>

    <h2>Livros Lidos</h2>
    <ul>
      <li v-for="livro in livrosLidos" :key="livro.nome">
        <p>{{livro.nome}}</p>
      </li>
    </ul>
    <h2>Livros não lidos</h2>
    <ul>
      <li v-for="livro in filterLivros(false)" :key="livro.nome">
        <p>{{livro.nome}}</p>
      </li>
    </ul>
    <Aluno />
    <Curso />
  </div>
</template>

<script>
import Aluno from "@/components/Aluno";
import Curso from "@/components/Curso";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Aluno,
    Curso
  },
  computed: {
    ...mapGetters(["livrosLidos", "filterLivros"])
  },
  created() {
    this.$store.dispatch("puxarAcao");
  }
};
</script>

<style>
</style>
