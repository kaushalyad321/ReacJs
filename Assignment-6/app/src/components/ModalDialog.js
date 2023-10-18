import React, { useState } from 'react';
const ModalDialog = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1',
  };

  return (
    <div style={modalStyle}>
      <div style={{ backgroundColor: 'white', margin: '20% auto', padding: '20px', maxWidth: '500px' }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalDialog;