import React, { useState } from "react";
import { Box, Typography, Button, MenuItem, Popper, Grow, Paper, ClickAwayListener, MenuList } from "@mui/material";
import { Link } from "react-router-dom";
import projectData from "../data/projectData.json";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0,
        marginTop: 0,
      }}
    >
      <Typography variant="h6" color="text.primary">
        Mirko Febbo
      </Typography>
      <Box>
        <Button color="inherit" sx={{ marginRight: 1 }} component={Link} to="/">
          Home
        </Button>
        <Button
          ref={anchorRef}
          color="inherit"
          sx={{ marginRight: 1 }}
          onMouseEnter={handleToggle}
          component={Link}
          to="/projects"
        >
          Projects
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    sx={{
                      bgcolor: "background.default",
                      fontFamily: "monospace",
                    }}
                  >
                    {projectData.map((project, id) => (
                      <MenuItem key={id} onClick={handleClose}>
                        <Link to={`/Project/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <Typography color="text.primary">{`{${id}: '${project.title}'}`}</Typography>
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
