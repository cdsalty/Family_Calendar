import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function renderEventContent(eventInfo) {
  console.log(eventInfo);

  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default class DemoApp extends React.Component {
  handleDateClick = (arg) => {
    alert(arg.dateStr);
  }

  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={this.handleDateClick}
        initialView="dayGridMonth"
        eventContent={renderEventContent}
        events={[
          { title: 'event 1', date: '2020-09-01' },
          { title: 'event 2', date: '2020-09-02' },
        ]}
      />
    );
  }
}
