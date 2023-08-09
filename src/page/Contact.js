import React from "react";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Mirko Febbo
      </Typography>
      <Typography variant="subtitle1" mb={2}>
        mirkofebbo@gmail.com
      </Typography>
      <Typography variant="subtitle1" mb={2}>
        <br></br> Goldsmiths University of London
        <br></br> 17-19 St-James Hatcham House
        <br></br> M.Febbo@gold.ac.uk
        <br></br> Technician: Computing
        <br></br> Research Assistant: Neurolive
      </Typography>
    </Box>
  );
};

export default Contact;
