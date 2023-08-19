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
