import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { useState } from "react";

import Auth from "../utils/auth";
import { Link } from "react-router-dom";

export default function Navbar() {
  //   const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  //   const handleChange = (event) => {
  //     setAuth(event.target.checked);
  //   };

  //   const handleMenu = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Link to="/me" style={{ textDecoration: "none" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Work timeline
          </Typography>
          {Auth.loggedIn() ? (
            <div>
              <Button color="light" onClick={logout}>Logout</Button>
              <Link to="/me">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Link>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button color="light">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
