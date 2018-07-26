<template>
  <div id="app">
    <app-header>Header</app-header>
    <app-footer>Footer</app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data: {}
}
</script>

<style>

</style>
