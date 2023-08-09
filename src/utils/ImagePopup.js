import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';

const ImagePopup = ({ open, onClose, imageUrl, description }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Image Details</DialogTitle>
      <DialogContent>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Selected"
            style={{ width: '100%', borderRadius: 2 }}
          />
        )}
        <Typography variant="body1" mt={2}>
          {description}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ImagePopup;
