import * as React from 'react';
import { useState } from 'react'; 
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios';

export default function Event(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SaveEvent = () => {
    const e = {
      "eventId": Math.floor(Math.random() * 10000),
      "userId": "123",
      "title": title,
      "description": description,
      "startDate": new Date(props.date).toISOString(),
      "endDate": new Date(props.date).toISOString()
    };
    try{
    axios.post(`http://localhost:5102/Event`, e )
    .then(res =>res.statusCode==200? <h1>נוסף בהצלחה!!</h1>:<h1>נסה שוב פעם!!</h1> )  
  } catch(err) {
      console.log(err);
    }
  }   


  return (

    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        New Event
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Create new event"}
        </DialogTitle>
        <DialogContent>
        <TextField
        sx={{mt:2, mr:1}}
          required
          id="title"
          label="title"
          onChange={(e) => setTitle(e.target.value)}
        />
         <TextField
          sx={{mt:2}}
          id="desc"
          label="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Dont Save</Button>
          <Button onClick={() => {handleClose();SaveEvent()}} autoFocus>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}