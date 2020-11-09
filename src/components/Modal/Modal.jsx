import React, { useState, useContext } from 'react';
import { Modal, TextField, Typography, Button } from '@material-ui/core';

import CalendarContext from '../../context/CalendarContext';
import useStyles from './styles';

const SimpleModal = () => {
  const { isModalOpen, setIsModalOpen, events, setEvents, dateInfo, setDateInfo } = useContext(CalendarContext);
  const [title, setTitle] = useState('');
  const classes = useStyles();

  const createEvent = (e) => {
    e.preventDefault();

    const newEvent = { title, ...dateInfo }

    setEvents([...events, newEvent]);
    setTitle('');
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
            {/* <TextField label="Description" variant="outlined" fullWidth multiline rowsMax={4} /> */}
            <Button type="submit" variant="contained" color="primary">Create Event</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default SimpleModal;