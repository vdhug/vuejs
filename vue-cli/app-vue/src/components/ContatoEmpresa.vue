<template>
  <div style="background: red; color: black;">
    <form action>
      <label for="nome">Nome</label>
      <input type="text" id="nome" />
      <label for="mensagem">Mensagem</label>
      <textarea id="mensagem"></textarea>
      <input type="submit" value="Enviar" />
    </form>
  </div>
</template>

<script>
export default {
  name: "ContatoEmpresa"
};
</script>