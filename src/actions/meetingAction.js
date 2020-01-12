export const addMeetingAction = meeting => {
    return {
        type: 'ADD_MEETING',
        payload: meeting
    }
}

export const deleteMeetingAction = id => {
    return {
        type: 'DELETE_MEETING',
        payload: id
    }
}