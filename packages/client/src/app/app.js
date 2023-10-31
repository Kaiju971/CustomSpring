import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { SnackbarProvider } from "notistack";
import Topbar from "../header/topbar";
import Footer from "../footer/footer";
import { AppRoutes } from "../app/appRoutes";

export let theme = createTheme({
  palette: {
    colorVertFoncé1: {
      main: "#092e09",
    },
    secondaryVertFoncé2: {
      main: "#1e4630",
    },
    colorVertPastel: {
      main: "#8dc48d4d",
    },
    colorVertFoncé3: {
      main: "#35674c",
    },
    colorVert: {
      main: "#077c36",
    },
    colorVertFluo: {
      main: "#64cb2cf7",
    },

    colorVertNoir: {
      main: "#1a1717",
    },
    colorVertNoirClair: {
      main: "##323243",
    },
    colorWhite: {
      main: "#fefefe",
    },
  },

  typography: {
    h1: {
      fontFamily: "Metal Mania, serif",
    },
    h2: {
      fontFamily: "Metal Mania, serif",
    },
    h3: {
      fontFamily: "Metal Mania, serif",
      "@media (max-width:750px)": {
        fontSize: "15px",
      },
    },
    h4: {
      fontFamily: "Birthstone, cursive",
      "@media (max-width:750px)": {
        fontSize: "10px",
      },
    },

    body1: {
      fontFamily: "Birthstone, cursive",
    },
    body2: {
      fontFamily: "Birthstone, cursive",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 568, md: 760, lg: 960, xl: 1200 },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <Topbar />
      <SnackbarProvider>
        <AppRoutes />
      </SnackbarProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
