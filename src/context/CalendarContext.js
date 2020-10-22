import React, { createContext, useState } from "react";

const CalendarContext = createContext(false);

export const CalendarStore = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <CalendarContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </CalendarContext.Provider>
  );
}

export default CalendarContext;