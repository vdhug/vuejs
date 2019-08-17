// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aulasCompletadas: [],
    acao: null,
    livros: [{
        nome: "O Senhor dos Anéis",
        lido: true,
      },
      {
        nome: "Harry Potter",
        lido: true,
      },
      {
        nome: "As Crônicas de Gelo e Fogo",
        lido: false,
      }
    ],
  },
  getters: {
    livrosLidos(state) {
      return state.livros.filter(livro => livro.lido)
    },
    filterLivros(state) {
      return function (lido) {
        return state.livros.filter(livro => livro.lido === lido)
      }
    }
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