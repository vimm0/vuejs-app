<template>
<div>

</div>
</template>

<script>
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
components:{
  'form-one': formOne,
  'form-two': formTwo

},
data() {
  return {
    title:'I am dynamic title.'
  }
},
methods:{

}

}
</script>
