const initial_state = {
    counter: 0
};

const CounterReducer = (state=initial_state, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return { counter:state.counter+1}
        case 'DECREMENT': 
        return { counter:state.counter-1}
        default:
            return state
    }
};

export default CounterReducer;