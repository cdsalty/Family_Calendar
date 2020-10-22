import React, { useState, useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { v4 as uuidv4 } from 'uuid';

import './Calendar.css';

// What should happen when we click on the day
// Mobile Responsive / Device Compatibility 
import CalendarContext from '../../context/CalendarContext';

import currentTime from '../../utils/currentTime';

const Calendar = () => {
  const { isModalOpen, setIsModalOpen } = useContext(CalendarContext);
  const [events, setEvents] = useState([
    {
      title: "Session with Adrian",
      description: "Working on Family Calendar", // custom
      priority: 4, // custom 1-5 slider
      // url: "https://www.google.com",
      // start: '2020-10-20T12:30:00',
      // end: '2020-10-20T14:30:00',
      id: uuidv4(), // id
      classNames: ['event', 'myclass1'],
      // backgroundColor: 'white',
      // borderColor: 'green',
      // textColor: 'green',
      editable: true,
      display: 'auto', // 'block', 'list-item', 'background', 'none' // okay as it is
      // allDay: true,
      // BELOW ARE FOR RECURRING EVENTS
      daysOfWeek: [1], // create a picker input with days of the week.
      startTime: "14:30", // The time of day this event starts.
      endTime: "16:00", // The time of day this event ends.
      groupId: 'blueEvents',
    }
  ]);

  //   const handleDateClick = (info) => {
  //     console.log(info.date);
  //   };

  const handleSelect = ({ start, end }) => {
    setIsModalOpen(true);
  };

  return (
    <FullCalendar
      customButtons={{
        addEvent: {
          text: 'Add Event',
          click() {
            setIsModalOpen(true);
          }
        }
      }}
      events={events}
      select={handleSelect}
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, bootstrapPlugin]}
      initialView="dayGridMonth"
      themeSystem='bootstrap'
      headerToolbar={{ start: 'prev,next today addEvent', center: 'title', end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth' }}
      selectable
      eventOverlap={(stillEvent, movingEvent) => stillEvent.allDay && movingEvent.allDay}
      slotDuration='00:15:00'
      navLinks
      nowIndicator
      scrollTime={currentTime}
    // dateClick={handleDateClick}
    // height={800}
    // aspectRatio={2}  left off with aspect ratio not conforming to our beliefs
    // var time = today. getHours() + ":" + today
    />
  );
};




// selectOverlap (we need to set it to false)
// Determines whether the user is allowed to select periods of time that are occupied by events.

// selectConstraint
// Limits user selection to certain windows of time.

export default Calendar;