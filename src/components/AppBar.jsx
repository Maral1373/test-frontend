import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useTheme } from "@mui/material";
import { getToken, getAdminToken } from "../api/token";
import { SITE_NAME } from "../consts/consts";

import { Link } from "react-router-dom";
import { BasketIcon } from "./BasketIcon";
import { useHref } from "react-router-dom";

const pages = [
  {
    title: "Products",
    link: "products",
  },
  {
    title: "Contact",
    link: "contact",
  },
  {
    title: "About",
    link: "about",
  },
];

const userSettings = [
  { title: "Sign in", link: "login", private: false },
  { title: "Sign up", link: "signup", private: false },
  // { title: "Forgot Password", link: "forgot", private: false },
  { title: "Admin Sign in", link: "admin/login", private: false },
  { title: "Admin Sign up", link: "admin/signup", private: false },
  { title: "Profile", link: "profile", private: true },
  { title: "Orders", link: "orders", private: true },
  { title: "Favorites", link: "favorites", private: true },
  { title: "Basket", link: "basket", private: true },
  { title: "Logout", link: "logout", private: true },
];

const adminSettings = [
  { title: "Orders", link: "admin/orders", private: true },
  { title: "Products", link: "admin/products", private: true },
  { title: "Users", link: "admin/users", private: true },
  { title: "Logout", link: "admin/logout", private: true },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "85%",
  margin: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function ResponsiveAppBar({ searchQuery, setSearchQuery }) {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const href = useHref();
  const isOnProductsPage = href === "/" || href === "/products";

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isUserLoggedIn = typeof getToken() === "string";
  const isAdminLoggedIn = typeof getAdminToken() === "string";

  const settingItemsToShow = isAdminLoggedIn
    ? adminSettings
    : isUserLoggedIn
    ? userSettings.filter((s) => s.private)
    : userSettings.filter((s) => !s.private);

  const desktopTypography = (
    <>
      <ShoppingBagOutlinedIcon sx={{ display: { xs: "none", md: "flex" } }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        underline="none"
        sx={{
          ml: 2,
          display: { xs: "none", md: "flex" },
          letterSpacing: "0.1rem",
          color: "Black",
          textDecoration: "none",
          typography: {
            fontFamily: `"Open Sans", sons-serif`,
            fontSize: 20,
            fontWeight: 700,
          },
        }}
      >
        {SITE_NAME}
      </Typography>
    </>
  );

  const mobileMenu = (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem
            key={page.title}
            onClick={handleCloseNavMenu}
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#DEEDF0",
              },
            }}
          >
            <Link
              to={page.link}
              style={{ textDecoration: "none", color: "#282A3A" }}
            >
              <Typography textAlign="center">{page.title}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );

  const mobileTypography = (
    <Typography
      noWrap
      component="a"
      href=""
      sx={{
        display: { xs: "flex", md: "none" },
        flexGrow: 1,
        fontFamily: "inherit",
        fontWeight: 700,
        letterSpacing: ".01rem",
        color: "Black",
        textDecoration: "none",
      }}
    >
      {SITE_NAME}
    </Typography>
  );

  const searchComponent = (
    <Search sx={{ display: { xs: "none", md: "flex" } }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={searchQuery}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Search>
  );

  const navBarLinks = pages.map((page) => (
    <Link key={page.title} to={page.link} style={{ textDecoration: "none" }}>
      {/** change styling here, remove underline for links */}
      <Button
        key={page.title}
        onClick={handleCloseNavMenu}
        sx={{
          my: 2,
          color: "Black",
          display: "block",
          "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
          },
        }}
      >
        {page.title}
      </Button>
    </Link>
  ));

  const userMenu = (
    <>
      <Tooltip title="Open settings">
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{
            p: 0,
            [theme.breakpoints.up("xs")]: {
              marginLeft: 2,
            },
            [theme.breakpoints.up("md")]: {
              marginLeft: 8,
            },
          }}
        >
          <Avatar alt="User" src="" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settingItemsToShow.map((setting) => (
          <MenuItem
            key={setting.title}
            onClick={handleCloseUserMenu}
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#DEEDF0",
              },
            }}
          >
            <Link
              to={setting.link}
              style={{ textDecoration: "none", color: "#282A3A" }}
            >
              {setting.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  return (
    <AppBar position="fixed" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {desktopTypography}
          {mobileMenu}
          {mobileTypography}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {isOnProductsPage && searchComponent}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {navBarLinks}
          </Box>
          <Box
            sx={{
              paddingTop: 1,
              [theme.breakpoints.up("md")]: {
                paddingLeft: 2,
              },
            }}
          >
            <BasketIcon />
          </Box>
          <Box sx={{ flexGrow: 0 }}>{userMenu}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
