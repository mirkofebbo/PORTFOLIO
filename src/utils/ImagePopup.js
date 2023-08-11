import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';

const ImagePopup = ({ open, onClose, mediaUrl, description }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Image Details</DialogTitle>
      <DialogContent>
        {mediaUrl && (
          <img
            src={mediaUrl}
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
