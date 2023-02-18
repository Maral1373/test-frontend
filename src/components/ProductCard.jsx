import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ addToCart, addToFavorite, product }) => {
  const theme = useTheme();
  const {
    photo,
    name,
    displaySize,
    displayResolution,
    cpu,
    internalMemory,
    ram,
    camera,
    price,
  } = product.info;
  return (
    <Grid item key={product._id} xs={12} sm={6} md={3}>
      <Card
        sx={{
          maxWidth: 345,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              lg: 1200,
              xl: 1536,
            },
          },
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#FFF",
          },
        }}
      >
        <Link
          to={`/products/${product._id}`}
          style={{ textDecoration: "none" }} // @maral fix link color
        >
          <CardMedia
            maxWidth="sm"
            component="img"
            sx={{
              px: 3,
              py: 3,
              "&:hover": {
                transition: "transform 0.15s ease-in-out",
                transform: "scale3d(1.05, 1.05, 1)",
              },
            }}
            image={photo}
          />
          <CardContent
            sx={{
              flexGrow: 1,
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              fontWeight={"bold"}
              component="h2"
            >
              {name}
            </Typography>
            <Typography>{camera}</Typography>
            <Typography>
              {displaySize} ({displayResolution})
            </Typography>
            <Typography>{cpu}</Typography>
            <Typography>{ram} Ram</Typography>
            <Typography>{internalMemory} Storage</Typography>
            <Typography>{price}</Typography>
          </CardContent>
        </Link>
        <CardActions>
          <IconButton
            size="large"
            aria-label="add to shopping cart"
            sx={{
              "&:hover": {
                bgcolor: "#FFF5EB",
              },
            }}
            onClick={() => addToCart(product)}
          >
            <AddShoppingCartIcon
              sx={{
                cursor: "pointer",
                color: "#d1936d",
              }}
            />
          </IconButton>
          <IconButton
            aria-label="add to favorites"
            // variant="plain"
            // color="danger"
            sx={{
              "&:hover": {
                bgcolor: "#FFF5EB",
              },
            }}
            onClick={() => addToFavorite(product)}
          >
            <FavoriteIcon
              sx={{
                cursor: "pointer",
                color: "#ff8a80",
                "&:hover": {
                  borderColor: "purple",
                },
              }}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};
