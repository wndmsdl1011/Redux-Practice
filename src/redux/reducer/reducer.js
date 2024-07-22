let initialState = {
    counter: 0,
    id: "",
    password: "",
}

function reducer(state = initialState, action) {
    if (action.type === "INCREMENT") {
        return { ...state, counter: state.counter + 1 };
    }
    if (action.type === "LOGIN") {
        return { ...state, id: action.payload.id, password: action.payload.password }
    }
    if (action.type === "DECREASEMENT") {
        return { ...state, counter: state.counter - 1};
    }

    return { ...state }
}

export default reducer;