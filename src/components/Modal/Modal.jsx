import React, { useState, useContext } from 'react';
import { Modal, TextField, Typography, Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { CirclePicker } from 'react-color'
import CalendarContext from '../../context/CalendarContext';
import useStyles from './styles';
import { hex } from 'wcag-contrast';
// functi to delete events..
var contrast = require('contrast');

const eventExample = {
  title: "Session with Adrian",
  description: "Working on Family Calendar", // custom
  // priority: 4, // custom 1-5 slider // custom 
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


const SimpleModal = () => {
  const { isModalOpen, setIsModalOpen, events, setEvents, dateInfo, setDateInfo } = useContext(CalendarContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const classes = useStyles();

  const createEvent = (e) => {
    e.preventDefault();

    console.log('bg color', backgroundColor)
    console.log('text color before', textColor)

    if (contrast(backgroundColor) === 'light') {
      console.log(1, textColor)
      setTextColor('#000')
      console.log('1a', textColor)
    } else {
      setTextColor('#fff');
      console.log(2)
    }
    console.log('text color after', textColor)

    const newEvent = { id: uuidv4(), title, description, textColor, backgroundColor, ...dateInfo };
    // console.log(hex('#ffffff', color));



    setEvents([...events, newEvent]);
    setTitle('');
    setDescription('');
    setDateInfo({});
    setIsModalOpen(false);
  }

  return (
    <div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div style={{ top: `50%`, left: `50%`, transform: `translate(-50%, -50%)` }} className={classes.paper}>
          <Typography variant="h3" gutterBottom>Create a new Event</Typography>
          <form className={classes.form} onSubmit={createEvent} noValidate autoComplete="off">
            <TextField value={title} onChange={(e) => setTitle(e.target.value)} label="Title" variant="outlined" fullWidth />
            <TextField value={description} onChange={(e) => setDescription(e.target.value)} label="Description" variant="outlined" fullWidth multiline rowsMax={4} />
            <CirclePicker color={backgroundColor} onChangeComplete={(color) => setBackgroundColor(color.hex)} />
            <Button type="submit" variant="contained" color="primary">Create Event</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default SimpleModal;