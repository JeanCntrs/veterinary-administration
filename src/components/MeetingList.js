import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMeetingAction } from '../actions/meetingAction';

const MeetingList = () => {

    const currentState = useSelector(state => state.meeting);
    const message = Object.keys(currentState.meeting).length === 0 ? 'No hay citas' : 'Administra las citas aquí';

    const dispatch = useDispatch();

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{message}</h2>
                <div className="lista-citas">
                    {currentState.meeting.map(element => (
                        <div key={element.id} className="media mt-3">
                            <div className="media-body">
                                <h3 className="mt-0">{element.pet}</h3>
                                <p className="card-text"><span>Nombre Dueño: </span>{element.owner}</p>
                                <p className="card-text"><span>Fecha: </span>{element.date}</p>
                                <p className="card-text"><span>Hora: </span>{element.hour}</p>
                                <p className="card-text"><span>Sintomas: </span><br />{element.symptom}</p>
                                <button className="btn btn-danger" onClick={() => dispatch(deleteMeetingAction(element.id))}>Eliminar &times;</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MeetingList;