import React from 'react';

import Calendar from './components/Calendar/Calendar';
import Modal from './components/Modal/Modal';
import './App.css';

const App = () => (
  <div className="outer-container">
    <div className="container">
      <Calendar />
      <Modal />
    </div>
  </div>
);

export default App;

