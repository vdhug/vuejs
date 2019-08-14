export default {
  name: "GetTempo",
  data() {
    return {
      tempo: "23°",
    }
  },
  methods: {
    getClima() {
      this.tempo = "40º";
    },
  },
  created() {
    this.getClima();
  },
  template: `
  <div class="component-1">
    <h1>Temperatura prevista para hoje no RJ : {{tempo}} C</h1>
  </div>
  `
}