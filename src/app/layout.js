"use client";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import Navbar from "@/components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}