<template>
    <nav>
      <ul>
        <li><router-link v-bind:to="'About'">About</router-link></li>
        <li><router-link v-bind:to="'Menu'">Menu</router-link></li>
        <router-view></router-view>
      </ul>
    </nav>

</template>
<script>
export default {
  name: 'Header'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
