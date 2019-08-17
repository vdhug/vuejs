<template>
  <div>
    <h1>Bem vindo {{aluno}}</h1>
    <h3>Aulas completadas</h3>
    <ul>
      <li v-for="(aula, index) in aulasCompletadas" :key="index">
        <p>{{aula.nome}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      aluno: "Vitor Hugo"
    };
  },
  computed: {
    ...mapState(["aulasCompletadas"])
  }
};
</script>

<style>
</style>