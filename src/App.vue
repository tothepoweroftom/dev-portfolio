<template>
  <div id="app">
    <transition name="fade" mode="out-in">
          <router-view></router-view>

      </transition>

    <visualizer></visualizer>
  </div>
</template>

<script>
import Visualizer from './assets/visualizer/Visualizer'

export default {
  name: 'app',
  components: {
    Visualizer,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
