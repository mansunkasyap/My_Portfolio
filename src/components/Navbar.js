"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar({ toggleTheme }) {
  const { data: session, status  } = useSession();
  if (status === "loading") return null;
  return (
    <AppBar position="sticky" elevation={2}>
      <Toolbar>

        {/* LOGO */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          Kasyap.dev
        </Typography>

        {/* NAV LINKS */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

          <Button color="inherit" component={Link} href="/">
            Home
          </Button>

          <Button color="inherit" component={Link} href="/projects">
            Projects
          </Button>

          <Button color="inherit" component={Link} href="/contact">
            Contact
          </Button>

          {/* 🔐 AUTH BUTTON */}
          {session ? (
            <>
              <Button color="inherit" component={Link} href="/admin">
                Admin
              </Button>

              <Button color="error" onClick={() => signOut()}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" component={Link} href="/login">
              Login
            </Button>
          )}

          {/* 🌙 DARK MODE */}
          <IconButton color="inherit" onClick={toggleTheme}>
            <Brightness4Icon />
          </IconButton>

        </Box>
      </Toolbar>
    </AppBar>
  );
}