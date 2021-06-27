<template>
<!-- <AppLayout>

  <template v-slot:header>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" @emitE="handleEmit" />
  </template>

  <template v-slot:body>
    <Bottom>enviar</Bottom>
  </template>

</AppLayout> -->
<keep-alive>
  <transition name="fade">
      <component :is="currentComponent" ></component>
  </transition>
</keep-alive>

<button @click="currentComponent = 'Home'" type="button">Home</button>
<button @click="currentComponent = 'About'" type="button">About</button>

</template>

<!--<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Bottom from './components/Bottom.vue'
import AppLayout from './components/AppLayout.vue'
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>-->

<script type="text/javascript">
import HelloWorld from './components/HelloWorld.vue'
import Bottom from './components/Bottom.vue'
import AppLayout from './components/AppLayout.vue'

//Components reutilizables
import Home from './components/Home.vue'
import About from './components/About.vue'
  export default {

    data(){

      return{
        currentComponent:"home",
      }
    },
    components:{
      HelloWorld,
      Bottom,
      AppLayout,
      Home,
      About,
    },
    methods:{
      handleEmit(e){
        console.log(e);
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
},
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}
</style>
