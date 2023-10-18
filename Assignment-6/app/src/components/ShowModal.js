import React, { useState } from "react";
import ModalDialog from "../components/ModalDialog";

const ShowModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <ModalDialog isOpen={isOpen} onClose={closeModal}>
          <p>
            Hi this is new React App made from scratch so don't take it
            seriously.
          </p>
        </ModalDialog>
      )}
    </div>
  );
};

export default ShowModal;
