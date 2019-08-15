<template>
  <div>
    <button @click="estoque++">Adicionar ao estoque</button>
    <button @click="estoque = 0">Zerar estoque</button>
    <transition mode="out-in">
      <p v-if="estoque >= 5" key="estoque">{{estoque}} itens em estoque</p>
      <p v-else-if="estoque > 0 && estoque < 5" key="baixo">Itens quase acabando</p>
      <p v-else key="esgotado">Produto fora de estoque</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      estoque: 0
    };
  }
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
