<template>
  <section>
    <h2>Crie sua conta</h2>
    <ErroNotificacao :erros="erros" />
    <transition mode="out-in">
      <button v-if="!criar" @click="criar = true" class="btn">Criar Conta</button>
      <UsuarioForm v-else>
        <button @click.prevent="criarUsuario" class="btn btn-form">Criar Usuário</button>
      </UsuarioForm>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
export default {
  data() {
    return {
      criar: false,
      erros: []
    };
  },
  components: {
    UsuarioForm
  },
  methods: {
    async criarUsuario(event) {
      this.erros = [];
      const btn = event.currentTarget;
      btn.value = "Criando usuário...";
      btn.setAttribute("disabled", "");
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
        await this.$store.dispatch("logarUsuario", this.$store.state.usuario);
        await this.$store.dispatch("getUsuario");
        this.$router.push({ name: "usuario" });
      } catch (e) {
        btn.removeAttribute("disabled");
        btn.value = "Criar Usuário";
        this.erros.push(e.response.data.message);
      }
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
.btn-form {
  max-width: 100%;
}
</style>