<template>
<div>
  <h1>List of teachers</h1>
  <ul>
    <li v-for='teacher in teachers'>{{teacher}}</li>
  </ul>
</div>
</template>

<script>
export default {
data() {
  return {
    teachers:['Avinash', 'Utsav', 'Saurav']
  }
}

}
</script>

<style scoped>
h1{
  color:green;
}
</style>
