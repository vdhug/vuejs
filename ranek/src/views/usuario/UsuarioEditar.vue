<template>
  <section>
    <UsuarioForm>
      <button @click.prevent="atualizarUsuario" class="btn">Atualizar Usuário</button>
    </UsuarioForm>
    <ErroNotificacao :erros="erros" />
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
import { api } from "@/services.js";

export default {
  name: "UsuarioEditar",
  data() {
    return {
      erros: []
    };
  },
  components: {
    UsuarioForm
  },
  methods: {
    atualizarUsuario() {
      this.erros = [];
      api
        .put("/usuario", this.$store.state.usuario)
        .then(() => {
          this.$store.dispatch("getUsuario");
          this.$router.push({ name: "usuario" });
        })
        .catch(e => {
          this.erros.push(e.response.data.message);
        });
    }
  }
};
</script>

<style scoped>
</style>