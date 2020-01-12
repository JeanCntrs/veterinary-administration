export const getStorageState = () => {
    const meetingStorage = localStorage.getItem('meetings');
    const response = meetingStorage === null ? undefined : JSON.parse(meetingStorage);
    return response
}

export const setStorageState = state => {
    const meetingState = JSON.stringify(state);
    localStorage.setItem('meetings', meetingState);
}