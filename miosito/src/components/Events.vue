<template>
  <div class="calendar
  ">
    <vue-event-calendar :events="demoEvents"></vue-event-calendar>
  </div>

</template>
<script>
export default {
  name: 'Events',
  //calendario già impostato
 data () {
    return {
      demoEvents: [{
        date: '2018/08/12', // Required
        title: 'Evento a Caso' // Required
      }, {
        date: '2018/08/15',
        title: 'Altro Evento A Caso',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
