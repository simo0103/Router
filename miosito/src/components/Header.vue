<template>
    <div class="app-header">
      <nav>
        <ul>
          <li class="home active"><router-link v-bind:to="'Home'">Home</router-link></li>
          <li class="about"><router-link v-bind:to="'About'">About</router-link></li>
          <li class="menu"><router-link v-bind:to="'Menu'">Menu</router-link></li>
          <li class="contacts"><router-link v-bind:to="'Contacts'">Contacts</router-link></li>
          <li class="blog"><router-link v-bind:to="'Blog'">Blog</router-link></li>
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
  @import '../sass/_header.scss';


</style>
