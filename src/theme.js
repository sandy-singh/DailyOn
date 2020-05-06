import { createMuiTheme } from "@material-ui/core/styles";
export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    common: {
      black: "rgba(0, 0, 0, 1)",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    primary: {
      light: "rgba(247, 157, 122, 1)",
      main: "rgba(255, 127, 80, 1)",
      dark: "rgba(253, 83, 22, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(144, 228, 255, 1)",
      main: "rgba(0, 185, 245, 1)",
      dark: "rgba(0, 131, 173, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "rgba(255, 168, 168, 1)",
      main: "rgba(252, 18, 0, 1)",
      dark: "rgba(143, 0, 0, 1)",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});
