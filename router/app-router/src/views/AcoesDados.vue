<template>
  <div>
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
    <div v-else>
      <p>{{simbolo}}</p>
      <div>{{acao}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["simbolo"],
  data() {
    return {
      loading: true,
      acao: null
    };
  },
  methods: {
    puxarAcao() {
      this.loading = true;
      this.acao = null;

      fetch(
        `https://cloud.iexapis.com/stable/stock/${this.simbolo}/quote?token=pk_f0e6665043424116944536eda0ba7186`
      )
        .then(r => r.json())
        .then(r => {
          this.acao = r;
          this.loading = false;
        });
    }
  },
  created() {
    this.puxarAcao();
  },
  watch: {
    $route: "puxarAcao"
  }
  // beforeRouteUpdate(to, from, next) {
  //   this.puxarAcao(to.params.simbolo);
  //   next();
  // }
};
</script>

<style>
</style>