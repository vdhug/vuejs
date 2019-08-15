<template>
  <div>
    <button @click="ativo = !ativo">Toggle</button>
    <transition name="fade" enter-active-class="animar" leave-active-class="animar">
      <h1 v-if="ativo">Serviços</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativo: true
    };
  }
};
</script>

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
} */

.animar {
  transition: opacity 5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
