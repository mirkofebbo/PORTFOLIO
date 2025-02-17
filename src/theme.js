import { createTheme } from "@mui/material/styles";

const DarkBackgroundGrey = "#222222"; 
const MediumGrey = "#d5d5d5"; 
const LightGrey = "#2E2E2E"; 
const White = "#FFFFFF";
const AccentOrange = "#FF6F00";
const DarkerOrange = "#E65100"; 
const DividerColor = "#BDBDBD";

const theme = createTheme({
  palette: {
    primary: {
      main: MediumGrey, 
    },
    secondary: {
      main: LightGrey, 
    },
    text: {
      primary: White, 
      secondary: MediumGrey, 
    },
    background: {
      default: DarkBackgroundGrey, 
      paper: LightGrey, 
    },
    accent: {
      main: AccentOrange, 
    },
    divider: DividerColor,
  },
  typography: {
    fontSize: 16,
    fontFamily: [
      "Inter",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: White,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      color: White,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: MediumGrey,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
      color: White,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: MediumGrey,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: DarkBackgroundGrey,
          color: White,
        },
        "*::-webkit-scrollbar": {
          width: "0.5em",
          backgroundColor: DarkBackgroundGrey,
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: MediumGrey,
          borderRadius: "8px",
        },
        a: {
          color: AccentOrange,
          textDecoration: "none",
          "&:hover": {
            color: DarkerOrange, 
          },
          "&:visited": {
            color: MediumGrey,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: DividerColor,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: "8px",
          backgroundColor: AccentOrange,
          color: White,
          "&:hover": {
            backgroundColor: DarkerOrange,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: LightGrey, 
          // border: `2px solid ${AccentOrange}`,
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "16px",
        },
      },
    },
  },
});

export default theme;
