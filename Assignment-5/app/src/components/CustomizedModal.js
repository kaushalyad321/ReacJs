import { useState } from "react";
import ModalDialog from "./ModalDialog";
import Button from "@mui/material/Button";

const CustomizedModal = (type) => {
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


  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleFormSubmit = () => {
    handleCloseDialog();
  };

  return (
    <div className="App">
      <div style={modalStyle}>
        <Button
          onClick={handleOpenDialog}
          type="submit"
          variant="contained"
          color="primary"
        >
          Open Dialog
        </Button>
        <ModalDialog
          open={isDialogOpen}
          onClose={handleCloseDialog}
          title="This is a Dialog "
          content="This web page is in progress so plz don't take it seriously"
          onSubmit={handleFormSubmit}
          type="secondary"
        />
      </div>
      <div style={modalStyle}>
        <Button
          onClick={handleOpenDialog}
          type="submit"
          variant="contained"
          color="primary"
        >
          Open Dialog
        </Button>
        <ModalDialog
          open={isDialogOpen}
          onClose={handleCloseDialog}
          title="This is a Dialog "
          content="This web page is in progress so plz don't take it seriously"
          onSubmit={handleFormSubmit}
          type="secondary"
        />
      </div>
      <div style={modalStyle}>
        <Button
          onClick={handleOpenDialog}
          type="submit"
          variant="contained"
          color="primary"
        >
          Open Dialog
        </Button>
        <ModalDialog
          open={isDialogOpen}
          onClose={handleCloseDialog}
          title="This is a Dialog "
          content="This web page is in progress so plz don't take it seriously"
          onSubmit={handleFormSubmit}
          type="secondary"
        />
      </div>
    </div>
  );
};

export default CustomizedModal;
