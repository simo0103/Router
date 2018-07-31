<template>
    <div class="app-header">
      <nav role="menubar">
        <router-link role="menuitem" tabindex="0" class="home active" v-bind:to="'Home'"><span>Home</span></router-link>
        <router-link role="menuitem" class="about" v-bind:to="'About'"><span>About</span></router-link>
        <router-link role="menuitem" class="menu" v-bind:to="'Menu'"><span>Menu</span></router-link>
        <router-link role="menuitem" class="blog" v-bind:to="'Blog'"><span>Blog</span></router-link>
        <router-link role="menuitem" class="contacts" v-bind:to="'Contacts'"><span>Contacts</span></router-link>
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
