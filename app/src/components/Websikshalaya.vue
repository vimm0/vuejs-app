<template>
<div id='teachers'>
<ul>
  <li v-for='teacher in teachers' v-on:click='teacher.show = !teacher.show'>
  <h2>{{teacher.name}}</h2>
  <h3 v-show='teacher.show'>{{teacher.speciality}}</h3>
  </li>
</ul>
<button v-on:click='deleteTeacher'>Delete</button>

</div>
</template>

<script>

export default {
props:{
  teachers:{
    type: Array,
    required:true
  }
},
data() {
  return {

  }
},
methods:{
  deleteTeacher:function(){
    this.teachers.pop();
  }
},
beforeCreate(){
  alert('before create');
},
created(){
  alert('created');
},
beforeMount(){
  alert('before mount');
},
mounted(){
  alert('mounted');
},
beforeUpdate(){
  alert('before updated');
},
updated(){
  alert('updated');
}
}
</script>
<style scoped>
div#teachers{
  background: green;
}
</style>
