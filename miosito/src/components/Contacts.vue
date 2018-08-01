<template>
    <div>
        <h1>Contacts</h1>
        <calendar></calendar>

    </div>

</template>
<script>

import calendar from './calendar'
export default {
  name: 'Contacts',
  components: {
    "calendar": calendar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
