import React from 'react';
import './Attendee.css';

function Attendee (props) {
    return (
        <li className="Attendee">
            {props.attendee.email} - {props.attendee.guests} guest(s)
        </li>
    )
}

export default Attendee;