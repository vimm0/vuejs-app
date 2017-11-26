<template>
  <header>
    <h1 v-on:click='changeTitle'>{{ title }}</h1>
  </header>

</template>

<script>

export default {
props:{
  title:{
    type:String
  }
},
data() {
  return {
  title:'Web Shikshalaya'
  }
},
methods:{
  changeTitle:function(){
    this.title = 'Vue Wizards'
  }
}

}
</script>
<style scoped>
header{
background:lightgreen;
}
</style>
