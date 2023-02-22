import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useTheme } from "@mui/material";
import { fetchProduct, addToCart, addToFavorite } from "../api/api";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function ProductDetails() {
  const theme = useTheme();
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    if (!productId) return;
    try {
      const response = await fetchProduct(productId);
      setProduct(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main>
      <Container sx={{ my: 0 }} maxWidth="xl">
        {!product ? (
          <Loading />
        ) : (
          <Card>
            <Grid container width={"100vw"} spacing={2}>
              <Grid item xs={12} sm={3}>
                <CardMedia
                  maxWidth="xl"
                  component="img"
                  sx={{
                    px: 3,
                    py: 3,
                    "&:hover": {
                      transition: "transform 0.15s ease-in-out",
                      transform: "scale3d(1.05, 1.05, 1)",
                    },
                  }}
                  image={product.info.photo}
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <CardContent
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.info.name}
                  </Typography>
                  <Typography>{product.info.camera}</Typography>
                  <Typography>
                    {product.info.displaySize} ({product.info.displayResolution}
                    )
                  </Typography>
                  <Typography>{product.info.cpu}</Typography>
                  <Typography>{product.info.ram} Ram</Typography>
                  <Typography>{product.info.internalMemory} Storage</Typography>
                  <Typography>${product.info.price}</Typography>
                </CardContent>
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
              </Grid>
            </Grid>
          </Card>
        )}
      </Container>
    </main>
  );
}
