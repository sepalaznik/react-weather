const defaultState={
    currentCity: '',
}

const cityReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SELECT_CITY':
            return {
                ...state,
                currentCity = action.payload,
            };
        default:
            return state;
    }
};

export default cityReducer;
