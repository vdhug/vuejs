<template>
  <div>
    <h1>Curso ativo: {{curso}}</h1>
    <ul>
      <router-link to="/cursos/javascript">Javascript</router-link>
      <router-link to="/cursos/css">CSS</router-link>
      <router-link to="/cursos/html">HTML</router-link>
    </ul>
  </div>
</template>


<script>
export default {
  props: ["curso"],
  created() {
    console.log("Componente criado");
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    next();
  }
};
</script>