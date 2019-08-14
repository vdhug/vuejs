export default {
  name: "GetExchange",
  data() {
    return {
      exchange: "1 real = 4 dólares",
    }
  },
  methods: {
    getExchange() {
      fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then(r => r.json())
        .then(r => {
          this.exchange = r.rates["BRL"];
        })
    }
  },
  created() {
    this.getExchange();
  },
  template: `
  <div class="component-2">
    <h1>1 dólar é igual a {{exchange}} reais</h1>
  </div>
  `
}