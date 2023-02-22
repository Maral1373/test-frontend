import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
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
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Wrapper>
        <Outlet context={{ searchQuery, setSearchQuery }} />
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;

export function useSearch() {
  return useOutletContext();
}
