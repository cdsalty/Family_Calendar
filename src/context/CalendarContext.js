import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const CalendarContext = createContext(false);

const eventExample = {
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


export const CalendarStore = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([eventExample]);
  const [dateInfo, setDateInfo] = useState({});

  return (
    <CalendarContext.Provider value={{
      isModalOpen,
      setIsModalOpen,
      events,
      setEvents,
      dateInfo,
      setDateInfo,
    }}>
      {children}
    </CalendarContext.Provider>
  );
}

export default CalendarContext;