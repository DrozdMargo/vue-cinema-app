<template>
    <div class="container">
        <div class="hall">
            <div v-for="row in seats.rows" :key="row.id" class="row">
                {{row.index + 1}} .
                <div v-for="seat in row.seats" class="seats" :key="seat.id">
                    <label v-bind:class="[seat.available ? 'free' : '', checkSelected(seat.id) ? 'selected' : '']">
                        <input type="checkbox" v-model="selectedSeatIds" v-bind:value="seat.id"
                               :disabled="!seat.available">
                        {{seat.index + 1}}
                    </label>
                </div>
            </div>
        </div>
        <div class="order">
            <div v-show="selectSeats.length > 0">
                You are select:
                <div v-for="seat in selectSeats" :key="seat.id">
                    <span>{{seat.row + 1}} row {{seat.index + 1}} seat,</span>
                </div>
                <div class="total-price">Total:
                    <span v-if="selectSeats.length > 0">{{totalPrice}} RUB</span>
                    <span v-else>0</span>
                </div>
                <button @click="buyTickets">Buy</button>
                <button @click="resetOrder">Cancel</button>
            </div>
            <h3 v-if="orderSuccessfull && !selectSeats.length">Thank you for order!!!</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Hall',
        data() {
            return {
                selectedSeatIds: [],
                isSelected: false,
                selectSeats: [],
                orderSuccessfull: false,
            }
        },
        watch: {
            selectedSeatIds(data) {
                this.selectSeats = []
                data.forEach((id) => {
                    this.seats.rows.forEach((row) => {
                        row.seats.forEach((seat) => {
                            if (seat.id === id) {
                                this.selectSeats.push(seat)
                            }
                        })
                    })
                })
            }
        },
        computed: {
            totalPrice() {
                const prices = []
                this.selectSeats.forEach((item) => {
                    prices.push(item.price)
                })
                return prices.reduce((a, b) => a + b)
            },
            seats: {
                get() {
                    return this.$store.state.seats.seats
                },
                set(value) {
                    this.$store.commit('seats/setSeats', value)
                }
            }
        },
        methods: {
            checkSelected(id) {
                return this.selectedSeatIds.includes(Number(id))
            },
            resetOrder() {
                this.selectedSeatIds = []
                this.selectSeats = []
            },
            buyTickets() {
                const data = Object.create(this.seats)
                data.rows.forEach((row) => {
                    this.selectSeats.forEach((seat) => {
                        seat.available = false
                        if (row.id === seat.row) {
                            row.seats.forEach((item, i) => {
                                if (item.id === seat.id) {
                                    row.seats.splice(i, 1, item)
                                }
                            })
                        }
                    })
                })
                this.seats = data
                this.orderSuccessfull = true
                this.resetOrder()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        justify-content: center;
        margin: 0 auto;
    }

    .seats {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 1px solid #555;
        vertical-align: middle;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .seats label {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: red;
    }

    .seats input {
        visibility: hidden;
        position: absolute;
        left: 0;
    }

    .seats .free {
        background-color: forestgreen;
    }

    .seats .selected {
        background-color: yellow;
    }

    .order {
        width: 300px;
    }

    .total-price {
        margin: 5px;
    }

    .total-price span {
        font-weight: 600;
    }

</style>
