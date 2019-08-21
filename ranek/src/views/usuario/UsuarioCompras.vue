<template>
  <section>
    <div v-if="compras">
      <h2>Compras</h2>
      <div v-for="(compra, index) in compras" :key="index" class="produtos-wrapper">
        <ProdutoItem v-if="compra.produto" :produto="compra.produto">
          <p class="vendedor">
            <span>Vendedor:</span>
            {{compra.vendedor_id}}
          </p>
        </ProdutoItem>
      </div>
    </div>
    <PaginaCarregando v-else />
  </section>
</template>

<script>
import ProdutoItem from "@/components/ProdutoItem.vue";
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
  name: "UsuarioCompras",
  data() {
    return {
      compras: null
    };
  },
  computed: {
    ...mapState(["usuario", "login"])
  },
  components: {
    ProdutoItem
  },
  methods: {
    getCompras() {
      api.get("/transacao?tipo=comprador_id").then(r => {
        this.compras = r.data;
      });
    }
  },
  watch: {
    login() {
      this.getCompras();
    }
  },
  created() {
    if (this.login) {
      this.getCompras();
      document.title = "Ranek - Usuário | Compras";
    }
  }
};
</script>

<style scoped>
.produto-wrapper {
  margin-bottom: 40px;
}

.vendedor span {
  color: #e80;
}

h2 {
  margin-bottom: 20px;
}
</style>