import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

//Reducers
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case  'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const resetCount = () => ({
    type: 'RESET'
});



const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

console.log(store.getState());

store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy: 5}));
store.dispatch(decrementCount());
store.dispatch(setCount({count: 101}));
store.dispatch(resetCount());

// store.dispatch(
//     {
//         type: 'INCREMENT',
//         incrementBy: 5
//     }
// );

// store.dispatch(
//     {
//         type: 'INCREMENT'
//     }
// );

// console.log(store.getState());
// store.dispatch(
//     {
//         type: 'DECREMENT',
//         decrementBy: 2
//     }
// );

// const add = ({a, b}, c) => {
//    return a + b + c;
// };
//
// console.log(add({a:1, b: 2}, 100));