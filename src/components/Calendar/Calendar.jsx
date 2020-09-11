import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  const [event, setEvent] = useState({});

  // Great work so far :) I LOVE THIS STUFF!

  const handleDateClick = (info) => {
    console.log(info.date);
  };

  const handleSelect = (info) => {
    setEvent({ title: 'event 1', start: info.start, end: info.end });
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      selectable
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      events={[
        event,
      ]}
      dateClick={handleDateClick}
      select={handleSelect}
    />
  );
};

export default Calendar;

// selectable dates:
