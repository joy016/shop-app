"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    body1: { color: "#172c66" },
  },
  palette: {
    background: {
      default: "#fef6e4", // page background
      paper: "#ffffff", // card/paper background
    },
    primary: {
      main: "#001858", // headline / buttons
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f582ae", // accent / call to action
      contrastText: "#001858",
    },
    text: {
      primary: "#001858",
      secondary: "#172c66",
    },
    info: {
      main: "#8bd3dd",
    },
    error: {
      main: "#f3d2c1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "20px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: "#001858", // link color (accent)
          textDecoration: "none",
          transition: "color 0.3s ease",
          "&:hover": {
            color: "#001858", // hover color
          },
        },
      },
    },
  },
});

export default theme;
