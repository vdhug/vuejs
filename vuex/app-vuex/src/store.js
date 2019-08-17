// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aulasCompletadas: [],
    acao: null,
  },
  mutations: {
    COMPLETAR_AULA(state, aulaCompleta) {
      state.aulasCompletadas.push(aulaCompleta)
    },
    UPDATE_ACAO(state, payload) {
      state.acao = payload;
    }
  },
  actions: {
    puxarAcao(context) {
      fetch("https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_f0e6665043424116944536eda0ba7186")
        .then(r => r.json())
        .then(r => {
          context.commit("UPDATE_ACAO", r);
        })
    },
  }
})