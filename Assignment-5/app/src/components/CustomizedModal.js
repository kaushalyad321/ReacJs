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
      <div>
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
          title={props.title}
          content={props.content}
          onSubmit={handleFormSubmit}
        
        />
      </div>
    </div>
  );
};

export default CustomizedModal;
