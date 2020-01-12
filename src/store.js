import { createStore } from 'redux';
import reducer from './reducers'; // Carga index.js por defecto
import { getStorageState, setStorageState } from './localStorage';

const initialState = getStorageState();

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    setStorageState({
        meeting: store.getState().meeting
    });
});

export default store;