<template>
  <h1>{{ msg }}</h1>
  <button @click="EventEmit">Emit</button>
</template>

<!--<script setup>
import { defineProps } from 'vue'

defineProps({
  msg: String
})
</script>-->

<script type="text/javascript">
  export default {
    props: ['msg'],
    // props: {
    //   msg:String
    // },
    methods:{
      EventEmit(){
        this.$emit("emitE",this.msg)
      }
    }
  }
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
