"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Link from "next/link";


export default function Navbar({ toggleTheme }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>

        <Button color="inherit" component={Link} href="/">
          Home
        </Button>

        <Button color="inherit" component={Link} href="/projects">
          Projects
        </Button>

        <IconButton color="inherit" onClick={toggleTheme}>
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}