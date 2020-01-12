import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMeetingAction } from '../actions/meetingAction';
import { validateFormAction } from '../actions/validationAction';
import uuid from 'uuid/v4';

const MeetingForm = () => {

    const [pet, setPet] = useState('');
    const [owner, setOwner] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [symptom, setSymptom] = useState('');

    // dispatch ejecuta nuestras acciones 
    const dispatch = useDispatch();
    const addMeeting = meeting => dispatch(addMeetingAction(meeting));
    const validateForm = state => dispatch(validateFormAction(state));

    // useSelector es similar a mapStateToProps, pero usando hooks
    const currentState = useSelector(state => state.error);

    const handleSubmit = event => {
        event.preventDefault();
        if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || hour.trim() === '' || symptom.trim() === '') {
            validateForm(true);
            return;
        } else {
            validateForm(false);
            addMeeting({ id: uuid(), pet, owner, date, hour, symptom });
            setPet('');
            setOwner('');
            setDate('');
            setHour('');
            setSymptom('');
        }
    }

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Mascota"
                                value={pet}
                                onChange={event => {
                                    return (
                                        setPet(event.target.value)
                                    )
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Dueño de la Mascota"
                                value={owner}
                                onChange={event => setOwner(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input
                                type="date"
                                className="form-control"
                                value={date}
                                onChange={event => setDate(event.target.value)}
                            />
                        </div>

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input
                                type="time"
                                className="form-control"
                                value={hour}
                                onChange={event => setHour(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea
                                className="form-control"
                                value={symptom}
                                onChange={event => setSymptom(event.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>
                {currentState.error ? <div className="alert alert-danger text-center p2">Todos los campos son obligatorios</div> : null}
            </div>
        </div>
    );
}

export default MeetingForm;