let initialState = {
    counter:0
}

function reducer(state=initialState, action) {
    if (action.type === "INCREMENT"){
        return { ...state, counter: state.counter + 1 };
    }

    return {...state}
}

export default reducer;