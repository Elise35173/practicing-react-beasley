import React from 'react';

import Attendee from '../attendee/Attendee';
import './AttendeeList.css';

function AttendeeList(props) {
    const listItems = props.attendees.map((attendee, i) => (
       <Attendee key={i} attendee={attendee} />
    ))
    return (
        <ul className="AttendeeList">
           {listItems} 
        </ul>
    )
}

export default AttendeeList;