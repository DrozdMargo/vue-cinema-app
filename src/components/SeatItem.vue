<template>
    <div>
        <div v-for="seat in seats" class="seats" v-bind:class="{free: seat.available}" @click="checkSeat(seat)">
            <div>
                {{seat.index + 1}}
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    props: {
      seats: Array,
      isActive: Boolean,
    },
    data() {
      return {}
    },
    methods: {
      checkSeat(item) {
       // console.log(item)
        this.isActive = !this.isActive;
        if (item.available && this.isActive) {
          this.$emit('checked-item', item)
        }
      },
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

    .seats {
        display: inline-block;
        width: 100px;
        height: 100px;
        border: 1px solid #555;
        vertical-align: middle;
        margin-right: 10px;
        background-color: red;
    }

    .seats.free {
        background-color: forestgreen;
    }

    .seats.active {
        background-color: yellow;
    }

</style>
