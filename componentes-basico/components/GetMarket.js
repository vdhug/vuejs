import GetExchange from "./GetExchange.js"
export default {
  name: "GetMarket",
  data() {
    return {
      marketValue: "600bilhoes",
    }
  },
  methods: {
    getMarket() {
      fetch("https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_f0e6665043424116944536eda0ba7186")
        .then(r => r.json())
        .then(r => {
          this.marketValue = r.marketCap.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
        })
    }
  },
  created() {
    this.getMarket();
  },
  template: `
    <div class="component-3">
      <h1>Valor de mercado da Apple = {{marketValue}}</h1>
      <get-exchange></get-exchange>
    </div>
    `,
  components: {
    GetExchange
  }
}