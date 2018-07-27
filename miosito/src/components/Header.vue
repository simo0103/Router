<template>
    <div class="app-header">
      <nav>
        <ul>
          <li><router-link v-bind:to="'Home'">Home</router-link></li>
          <li><router-link v-bind:to="'About'">About</router-link></li>
          <li><router-link v-bind:to="'Menu'">Menu</router-link></li>
          <li><router-link v-bind:to="'Contacts'">Contacts</router-link></li>
          <li><router-link v-bind:to="'Blog'">Blog</router-link></li>
        </ul>
      </nav>
    <router-view class="sub-menu"></router-view>
 </div>
</template>
<script>
export default {
  name: 'Header'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../sass/_mixin.scss';
  @include reset;
  @import '../sass/_header.scss';

</style>
