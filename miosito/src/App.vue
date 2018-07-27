<template>

  <div id="app">
    <header><app-header></app-header></header>
  </div>

</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    'app-header': Header
  }
  //data: {}
}
</script>

<style lang="scss" scoped>
@import 'sass/_mixin.scss';

#app {
@include patuaOne;

}



</style>
