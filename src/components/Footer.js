import React from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "background.default",
        padding: 2,
        marginTop: 4,
      }}
    >
      <Typography variant="body2" color="text.primary">
        &copy; {new Date().getFullYear()} 吃屎吧你 All rights reserved.
      </Typography>
      <Box>
        <IconButton component="a" href="https://www.linkedin.com/in/mirko-febbo-843982156/" target="_blank">
          <LinkedInIcon sx={{ color: theme.palette.text.primary }} />
        </IconButton>
        <IconButton component="a" href="https://www.instagram.com/mirko.febbo/" target="_blank">
          <InstagramIcon sx={{ color: theme.palette.text.primary }} />
        </IconButton>
        <IconButton component="a" href="https://github.com/mirkofebbo" target="_blank">
          <GitHubIcon sx={{ color: theme.palette.text.primary }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
