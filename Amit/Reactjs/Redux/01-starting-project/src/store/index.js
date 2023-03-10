// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit"


const initalCounterState = {
    counter: 0,
    showCounter: true
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: initalCounterState,
    reducers: {
        increment(state) { state.counter++ },
        decrement(state) { state.counter-- },
        increase(state, action) { state.counter = state.counter + action.payload },//payload  change name in the store
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const authInitialState = {
    isAuthed: false

}

const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        login(state) { state.isAuthed = true },
        logout(state) { state.isAuthed = false }
    }
})


// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     return state;
// }

const store = configureStore({ reducer: { counter: counterSlice.reducer, auth: authSlice.reducer } });
export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;