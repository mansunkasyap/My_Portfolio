"use client";

import { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "@/theme";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar toggleTheme={toggleTheme} mode={mode} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}