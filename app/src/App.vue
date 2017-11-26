<template>
<div>
  <app-header></app-header>
  <app-content v-bind:teachers='teachers'></app-content>
  <hr>
  <app-content v-bind:teachers='teachers'></app-content>

  <app-footer></app-footer>

</div>
</template>

<script>
import Header from './components/Header.vue';
import Websikshalaya from './components/Websikshalaya.vue';
import Footer from './components/Footer.vue';

export default {
components:{
  'app-header':Header,
  'app-content':Websikshalaya,
  'app-footer':Footer
},
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
