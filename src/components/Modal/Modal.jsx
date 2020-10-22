import React, { useState, useContext } from 'react';
import { Modal, TextField, Typography, Button } from '@material-ui/core';

import CalendarContext from '../../context/CalendarContext';

import useStyles from './styles';

const SimpleModal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(CalendarContext);
  const classes = useStyles();

  return (
    <div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div style={{ top: `50%`, left: `50%`, transform: `translate(-50%, -50%)` }} className={classes.paper}>
          <Typography variant="h3" gutterBottom>Create a new Event</Typography>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField label="Title" variant="outlined" fullWidth />
            <TextField label="Description" variant="outlined" fullWidth multiline rowsMax={4} />
            <Button variant="contained" color="primary">Create Event</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default SimpleModal;