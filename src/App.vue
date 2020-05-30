<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>

  </div>
</template>
<script>
  import Navbar from '@/components/Navbar'
  export default {
    components: {Navbar},
    data: {
      number: 42
    }
  }
</script>
<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';
</style>
