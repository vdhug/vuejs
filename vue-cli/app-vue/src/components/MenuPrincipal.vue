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
import ContatoEmpresa from "./ContatoEmpresa.vue";

export default {
  name: "MenuPrincipal",
  components: {
    SobreEmpresa,
    ServicosEmpresa,
    ContatoEmpresa
  },
  data() {
    return {
      componenteAtivo: "SobreEmpresa"
    };
  }
};
</script>