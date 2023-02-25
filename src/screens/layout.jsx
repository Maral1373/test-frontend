import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Snackbar from "../components/Snackbar";
import theme from "../theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Layout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  const [severity, setSeverity] = React.useState("success");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Snackbar open={open} setOpen={setOpen} text={text} severity={severity} />
      <AppBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          [theme.breakpoints.up("xs")]: {
            marginTop: 7,
          },
          [theme.breakpoints.up("md")]: {
            marginTop: 9,
          },
        }}
      >
        <Outlet
          context={{
            searchQuery,
            setSearchQuery,
            snackbar: { setOpen, setText, setSeverity },
          }}
        />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;

export function useCustomContext() {
  return useOutletContext();
}
