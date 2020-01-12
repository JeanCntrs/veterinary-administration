const initialState = {
    meeting: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MEETING':
            return {
                ...state,
                meeting: [...state.meeting, action.payload]
            }
        case 'DELETE_MEETING':
            return {
                ...state,
                meeting: state.meeting.filter(element => element.id !== action.payload)
            }

        default:
            return state;
    }
}