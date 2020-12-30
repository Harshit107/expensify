import {
    createStore
} from 'redux';

const incrementCount = ({ incrementByValue = 1 } = {}) => {
    return {
    type : 'INCREMENT',
    incrementByValue
}}

const decrementCount = ({ decrementByValue = 1 } = {}) => ({
    type : 'DECREMENT',
    decrementByValue
})

const countReducer = ((state = {counter: 0 }, action) => {
    
    //normal switch case
        switch (action.type) {
            case 'INCREMENT' : 
                return {counter: state.counter + action.incrementByValue}
            case 'DECREMENT' : 
                return {counter: state.counter - action.decrementByValue}
            case 'RESET' : 
                return {counter: state.counter = 0}
    
            default : return state;
    
        }
    })

const store = createStore(countReducer);


//subscribe will call automatically when there is a change in state
// and return a function which can be call anywhere we want to stop the calling subscribe
// const unSubscribe =
 store.subscribe(() => {
    console.log(store.getState().counter);
})

store.dispatch(incrementCount({incrementByValue : 5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementByValue : 10}));

// unSubscribe();

// store.dispatch({
//     type: 'INCREMENT'
// })


// store.dispatch({
//     type: 'DECREMENT'
// })

// store.dispatch({
//     type: 'RESET'
// })

