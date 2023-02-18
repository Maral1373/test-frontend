import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";

import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import theme from "../theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Wrapper = styled("div")(({ theme }) => ({
  marginTop: 70,
}));

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
