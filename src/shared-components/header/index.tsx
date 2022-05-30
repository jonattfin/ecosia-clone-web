import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, Menu, Divider, Badge } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { useRouter } from "next/router";

import { TreesContext } from "../../providers/context";

import {
  ForestOutlined as ForestOutlinedIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
} from "@mui/icons-material";

const pages = [
  { url: "/", text: "Home", icon: "home" },
  { url: "/how-it-works", text: "How Ecosia works", icon: "build" },
  { url: "/about-us", text: "About us", icon: "help" },
  { url: "/mobile", text: "Mobile app", icon: "mobile-phone" },
  { url: "/privacy", text: "Privacy", icon: "shield" },
];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function Component() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const router = useRouter();
  const handleClose = (url: string) => {
    setAnchorEl(null);
    router.push(url);
  };

  const numberOfTrees = useContext(TreesContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {/* Photos */}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="large" aria-label="" color="inherit">
                <Badge badgeContent={numberOfTrees} color="success">
                  <ForestOutlinedIcon color="info" />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label="" color="inherit">
                <Badge color="default">
                  <NotificationsNoneOutlinedIcon color="disabled" />
                </Badge>
              </IconButton>
            </Box>
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
              {pages.map(({ text, url }, index) => (
                <MenuItem
                  key={`menuItem_${index}`}
                  onClick={() => handleClose(url)}
                >
                  {text}
                </MenuItem>
              ))}
              <Divider />
            </Menu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon color="primary" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
