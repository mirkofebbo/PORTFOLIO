import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
const ImagePopup = ({ open, onClose, mediaUrl, description }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Image Details
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CancelIcon />
        </IconButton>
      </DialogTitle>
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
