<template>
  <div>
  <h2>Please fill out our form.</h2>
  <form>
    <div id='form-header'>
      <slot name='form-header'></slot>
    </div>
    <div id='form-fields'>
    <slot name='form-fields'></slot>

    </div>
    <div id='form-controls'>
    <slot name='form-controls'></slot>
    </div>
    <div id='useful-links'>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>

      </ul>
    </div>

  </form>
  </div>
</template>

<script>
export default {

data() {
  return {
  }
},
methods:{

}
}
</script>
<style scoped>
h1{
  color:red;
}
h3{
  color:green;
}
</style>
