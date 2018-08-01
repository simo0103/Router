<template>
  <div>

  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'calendar',
  //calendario già impostato
 data () {
    return {
      oggi: moment(),
      dateContext: moment(),
      days: ['L','M','M','G','V','S','D'],
      computed: {
        year: function () {
          var t = this;
          return t.dateContext.format('Y')
        },
        month: function () {
          var t = this;
          return t.dateContext.format('MMMM')
        },

        daysInMonth: function () {
          var t = this;
          return t.dateContext.daysInMonth();
        },
        currentDate: function () {
          var t = this;
          return t.dateContext.get('date');
        },

        firstDayOfMonth: function () {
        var t = this;
        var firstDay = moment(t.dateContext).subtract((t.currentDate - 1), 'days');
        return firstDay.weekday();
        },

        initialDate: function () {
        var t = this;
        return t.today.get('date');
        },

        initialMonth: function () {
        var t = this;
        return t.today.get('MMMM');
        },
        initialMonth: function () {
        var t = this;
        return t.today.get('Y');
        },

      },// end computed
      methods: {
        addMonth: function () {
          var t = this;
          t.dateContext = moment(t.dateContext).add(1, 'month');
        },


      }
    }
  }
}
</script>
