<template>
  <div>
    <nav>
      <ul>
        <li @click="componenteAtivo = 'SobreEmpresa'">Sobre</li>
        <li @click="componenteAtivo = 'ServicosEmpresa'">Servicos</li>
        <li @click="componenteAtivo = 'ContatoEmpresa'">Contato</li>
      </ul>
    </nav>

    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import SobreEmpresa from "./SobreEmpresa.vue";
import ServicosEmpresa from "./ServicosEmpresa.vue";

export default {
  name: "MenuPrincipal",
  components: {
    SobreEmpresa,
    ServicosEmpresa,
    ContatoEmpresa: () => import("./ContatoEmpresa.vue")
  },
  data() {
    return {
      componenteAtivo: "SobreEmpresa"
    };
  }
};
</script>