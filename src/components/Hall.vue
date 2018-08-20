<template>
    <div>
        <div v-for="row in seatsData.rows" :key="row.id">
            {{row.index + 1}} .
            <seat-item :seats="row.seats" @checked-item="selectSeat"></seat-item>
        </div>
        {{selectedSeats}}
    </div>
</template>

<script>
  import SeatItem from './SeatItem.vue'

  export default {
    name: 'HelloWorld',
    props: {
      seatsData: Object
    },
    components: {
      SeatItem,
    },
    data() {
      return {
        selectedSeats: [],
      }
    },
    methods: {
      selectSeat(seat) {
        this.selectedSeats.push(seat.id)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

</style>
