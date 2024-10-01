import * as React from 'react';
import Box from '@mui/material/Box';
import ModalContainer from '@mui/material/Modal';


interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#000',
  border: '2px solid #000',
  boxShadow: 24,
  maxWidth: '90%', 
  maxHeight: '90%',
  overflow: 'hidden',
  padding: '1rem'
};

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <ModalContainer
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        {children}
      </Box>
    </ModalContainer>
  );
};

export default Modal;
