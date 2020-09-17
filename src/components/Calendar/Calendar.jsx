import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';

const Calendar = () => {
  const [events, setEvents] = useState([
    {
      start: '2020-09-18',
      end: '2020-09-20',
      display: 'background'
    }
  ]);

  //   const handleDateClick = (info) => {
  //     console.log(info.date);
  //   };

  const handleSelect = ({ start, end }) => {
    const title = prompt('Enter the title: ');
    const newEvent = { title, start, end };

    setEvents([...events, newEvent]);
  };

  // timeGridDay
  return (
    <FullCalendar
      // height={800}
      // aspectRatio={2}  left off with aspect ratio not conforming to our beliefs
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, bootstrapPlugin]}
      initialView="dayGridMonth"
      themeSystem='bootstrap'
      headerToolbar={{
        start: 'prev,next today',
        center: 'title',

        end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
      }
      }
      selectable
      events={events}
      eventOverlap={(stillEvent, movingEvent) => stillEvent.allDay && movingEvent.allDay}
      //   dateClick={handleDateClick}
      select={handleSelect}
    />
  );
};

// selectOverlap (we need to set it to false)
// Determines whether the user is allowed to select periods of time that are occupied by events.

// selectConstraint
// Limits user selection to certain windows of time.

export default Calendar;