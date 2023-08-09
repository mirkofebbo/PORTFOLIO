import React from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
// import { LinkedIn, GitHub, Twitter } from "@mui/icons-material";

const Footer = () => {
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
      {/* <Typography variant="body2" color="text.primary">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </Typography>
      <Box>
        <IconButton color="inherit" component={Link} href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener">
          <LinkedIn />
        </IconButton>
        <IconButton color="inherit" component={Link} href="https://github.com/your-github-profile" target="_blank" rel="noopener">
          <GitHub />
        </IconButton>
        <IconButton color="inherit" component={Link} href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener">
          <Twitter />
        </IconButton>
      </Box> */}
    </Box>
  );
};

export default Footer;
