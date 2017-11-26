<template>
<ul>
  <li v-for='teacher in teachers'>{{teacher}}</li>
</ul>
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

<style>
</style>
