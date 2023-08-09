import React from 'react';
import Typewriter from 'typewriter-effect';
import { Box } from '@mui/material';
import "../css/CodeAnimation.css";

const CodeAnimation = ({ code }) => {

  return (
    <div className="code-animation-container">
      <Box sx={{ color: 'text.dark' }}>
        <Typewriter
          options={{
            strings: [code],
            autoStart: true,
            loop: true,
            delay: 0,
            deleteSpeed: 1000,
          }}
        />
      </Box>

    </div>
  );
};

export default CodeAnimation;
