<template>
<div>
  <app-header></app-header>
  <app-content></app-content>
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
  }
}

}
</script>
