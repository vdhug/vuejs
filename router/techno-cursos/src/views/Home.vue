<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <div v-if="api">
      <h1>Home</h1>
      <div>{{api}}</div>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "home",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  }
};
</script>