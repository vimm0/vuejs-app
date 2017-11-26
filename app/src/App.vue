<template>
  <div>
  Test
  <h1>{{ title }}</h1>
  <teacher></teacher>
  </div>
</template>

<script>
import Webshikshalaya from './Webshikshalaya.vue'

export default {
components:{
'teacher': Webshikshalaya
},
data() {
  return {
  title: 'web shikshalaya'
  }
}

}
</script>

<style>
</style>
