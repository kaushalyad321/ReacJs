import { useState } from "react";
import ModalDialog from "../Components/ModalDialog";
import Button from "@mui/material/Button";

 const ShowModel = () => {

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
      />
    </div>
  );
};

export default ShowModel
