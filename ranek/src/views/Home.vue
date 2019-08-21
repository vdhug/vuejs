<template>
  <section>
    <h1>&#128077; Compre ou Venda &#128078;</h1>
    <ProdutosBuscar />
    <ProdutosLista />
  </section>
</template>

<script>
import ProdutosBuscar from "@/components/ProdutosBuscar.vue";
import ProdutosLista from "@/components/ProdutosLista.vue";
export default {
  name: "home",
  components: {
    ProdutosBuscar,
    ProdutosLista
  },
  created() {
    document.title = "Ranek";
  }
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}
</style>
