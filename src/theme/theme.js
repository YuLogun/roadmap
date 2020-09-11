import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let Theme = createMuiTheme({
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    // Start Headers
    h1: {
      fontFamily: '"lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: "1.6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: '"lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "1.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: '"lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1.4rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: '"lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "1.3rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: '"lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: "1.2rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: '"lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "1.1rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
  },
});

Theme = responsiveFontSizes(Theme);

export default Theme;
