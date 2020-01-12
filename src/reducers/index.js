import { combineReducers } from 'redux';
import meetingReducer from './meetingReducer';
import validationReducer from './validationReducer';

export default combineReducers({
    meeting: meetingReducer,
    error: validationReducer
});