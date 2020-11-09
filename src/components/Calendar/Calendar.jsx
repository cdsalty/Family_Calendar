import React, { useState, useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import './Calendar.css';

// What should happen when we click on the day
// Mobile Responsive / Device Compatibility 
import CalendarContext from '../../context/CalendarContext';

import currentTime from '../../utils/currentTime';

const Calendar = () => {
  const { isModalOpen, setIsModalOpen, events, setEvents, setDateInfo } = useContext(CalendarContext);

  const handleDateClick = (info) => {
    console.log('hello')
    console.log(info)
    console.log(info.date);
  };

  const handleSelect = ({ start, end, allDay }) => {
    setDateInfo({ start, end, allDay });
    setIsModalOpen(true);
  };

  console.log(events)

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