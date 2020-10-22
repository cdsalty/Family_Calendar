import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { CalendarStore } from './context/CalendarContext';

ReactDOM.render(
  <CalendarStore>
    <App />
  </CalendarStore>,
  document.getElementById('root')
);
