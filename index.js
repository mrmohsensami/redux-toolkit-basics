const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED';

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    };
}

const initialState = {
    numOfCake: 10,
    anotherProperty: 0,
};

// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCake: state.numOfCake - 1,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);
console.log('Initial State: ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Update state: ', store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
