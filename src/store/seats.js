export default {
    namespaced: true,
    state: {
        seats: null,
    },
    mutations: {
        setSeats(state, data) {
            state.seats = data
        },
    },
}