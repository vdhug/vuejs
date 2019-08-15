<template>
  <div>
    <button @click="ativo = !ativo">Modal</button>
    <transition name="fade">
      <div v-if="ativo" class="modal-wrapper" @click="clickFora">
        <div class="modal">
          <button class="fechar" @click="ativo = false">X</button>
          <h1>Modal</h1>
          <form action method="get">
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" />
            <label for="email">Email</label>
            <input type="text" name="email" id="email" />
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativo: true
    };
  },
  methods: {
    clickFora(event) {
      console.log("CLICOU");
      if (event.target === event.currentTarget) this.ativo = false;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

label,
input {
  box-sizing: border-box;
  display: block;
}

label {
  margin-top: 10px;
  margin-bottom: 5px;
}
.fade-enter-active {
  animation: fadeInDown 0.8s forwards;
}

.fade-leave-active {
  animation: fadeOutUp 0.8s backwards;
}

body {
  height: 800px;
  font-family: "IBM Plex Mono", monospace;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeOutUp {
  0% {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
}

.modal-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: transparent;
  top: 0;
  left: 0;
}

.modal {
  background: white;
  width: 80vw;
  max-width: 600px;
  margin-top: 40px;
  padding: 40px;
  border: 10px solid #fb5;
  box-shadow: 0 0 0 10px white;
  position: relative;
}

.fechar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid white;
  top: -30px;
  right: -30px;
  position: absolute;
  font-weight: bold;
  color: #fff;
  font-size: 1.3rem;
  background: #e54 no-repeat center center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
</style>
