import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import MeetingForm from './components/MeetingForm';
import MeetingList from './components/MeetingList';

const App = () => {
    return (
        <Provider store={store}>
            <div className="container mt-4">
                <header>
                    <h1 className="text-center">Administrador de Pacientes en Veterinaria</h1>
                </header>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <MeetingForm />
                    </div>
                    <div className="col-md-6">
                        <MeetingList />
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;