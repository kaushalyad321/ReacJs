import { useState } from "react";
import ModalDialog from "./ModalDialog";
import Button from "@mui/material/Button";

 const CustomizedModal = (props) => {

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
      <Button onClick={handleOpenDialog} type="submit" variant="contained" color="primary">Open Dialog</Button>
      <ModalDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        title="This is a Dialog "
        content="This web page is in progress so plz don't take it seriously"
        onSubmit={handleFormSubmit}
        type='secondary'
      />
    </div>
  );
};

export default CustomizedModal