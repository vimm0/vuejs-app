<template>
  <div>
  Test
  <h1>{{ title }}</h1>
  <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
data() {
  return {
  title: 'Hey, bro!!'
  }
},
methods:{
  greeting:function(){
  return 'cowboy';
  }
}
}
</script>

<style>
</style>
