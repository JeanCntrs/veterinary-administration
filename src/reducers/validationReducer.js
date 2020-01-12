const initialState = {
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FORM_VALIDATION':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}