<template>
  <div class="modal">
    <slot name="header"></slot>
    <h2>{{user.nome}}</h2>
    <h1>Modal Principal</h1>
    <slot :user="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal",
  data() {
    return {
      user: {
        nome: "Vitor Hugo"
      }
    };
  }
};
</script>