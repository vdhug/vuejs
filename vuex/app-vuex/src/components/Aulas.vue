<template>
  <div>
    <ul>
      <li v-for="(aula, index) in aulas" :key="index">
        <p>{{aula.nome}} com duração de {{aula.duracao}} minutos</p>
        <button @click="completarAula(index)">Completar aula</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      aulas: [
        {
          nome: "HTML e CSS",
          duracao: 15
        },
        {
          nome: "JavaScript",
          duracao: 30
        },
        {
          nome: "UX Design",
          duracao: 20
        }
      ]
    };
  },
  methods: {
    ...mapMutations(["COMPLETAR_AULA"]),
    completarAula(index) {
      this.COMPLETAR_AULA(this.aulas[index]);
    }
  }
};
</script>

<style>
</style>