import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const ModalDialog = ({ open, onClose, title, content, onSubmit ,type}) => {
let modalStyle ;
if(type==='primary'){
  modalStyle={
    color:'white' ,
    backgroundColor:'black'
  }

}

if(type==='danger'){
  modalStyle={
  color:'red' ,
  backgroundColor:'white'
  }

}

if(type==='secondary'){
  modalStyle={
    color:'blue' ,
    backgroundColor:'grey'
  }

}




  return (
    <Dialog open={open} onClose={onClose} color={type}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDialog;