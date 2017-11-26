<template>
<div id='teachers'>
<ul>
  <li v-for='teacher in teachers' v-on:click='teacher.show = !teacher.show'>
  <h2>{{teacher.name}}</h2>
  <h3 v-show='teacher.show'>{{teacher.speciality}}</h3>
  </li>
</ul>
</div>
</template>

<script>

export default {

data() {
  return {
  teachers: [
    {name:'Mario', speciality:'Graphic', show:false},
    {name:'Steve', speciality:'Data Structure', show:false},
    {name:'Lewis', speciality:'Optimization', show:false},
    {name:'George', speciality:'Operating System', show:false},

  ]
  }
}

}
</script>
<style scoped>
div#teachers{
  background: green;
}
</style>
