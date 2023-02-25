import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";

export const BasketIcon = () => {
  const theme = useTheme();
  return (
    <Link to={"/basket"} style={{ textDecoration: "none", color: "#282A3A" }}>
      <ShoppingBasketIcon
        sx={{
          // ml: 5,
          color: "black",
          cursor: "pointer",
        }}
      ></ShoppingBasketIcon>
    </Link>
  );
};
