<template>
  <section class="login">
    <h1>Login</h1>
    <form action>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="login.senha" />
      <button class="btn" @click.prevent="logar">Logar</button>
      <ErroNotificacao :erros="erros" />
    </form>
    <p class="perdeu">
      <a
        href="http://rankeapilocal.local/wp-login.php?action=lostpassword"
        target="_blank"
      >Perdeu a senha? Clique aqui.</a>
    </p>
    <LoginCriar />
  </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar";

export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        senha: ""
      },
      erros: []
    };
  },
  components: {
    LoginCriar
  },
  methods: {
    logar() {
      this.erros = [];
      this.$store
        .dispatch("logarUsuario", this.login)
        .then(r => {
          this.$store.dispatch("getUsuario");
          this.$router.push({ name: "usuario" });
        })
        .catch(erro => {
          this.erros.push(erro.response.data.message);
        });
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0;
}

.perdeu :hover {
  color: #87f;
  text-decoration: underline;
}
</style>