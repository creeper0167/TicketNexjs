"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  direction: 'rtl',
  typography: {
    fontFamily: 'var(--anjoman), Arial, sans-serif',
  },
});

export default theme;
