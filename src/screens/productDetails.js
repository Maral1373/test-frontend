import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useTheme } from "@mui/material";
import api from "../api/api";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Flex = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  maxWidth: "80vw",
  margin: "auto",
}));

const Left = styled("div")(({ theme }) => ({
  flex: 1,
}));

const Right = styled("div")(({ theme }) => ({
  flex: 1,
}));

export default function ProductDetails() {
  const theme = useTheme();
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/catalog/${productId}`);
      setProduct(response.data.info);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main>
      <Container sx={{ my: 0 }} maxWidth="xl">
        {product.name && (
          <Card>
            <Flex>
              <Left>
                <CardMedia
                  maxWidth="xl" // make larger
                  component="img"
                  sx={{
                    px: 3,
                    py: 3,
                    "&:hover": {
                      transition: "transform 0.15s ease-in-out",
                      transform: "scale3d(1.05, 1.05, 1)",
                    },
                  }}
                  image={product.photo}
                />
              </Left>
              <Right>
                <CardContent
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>{product.camera}</Typography>
                  <Typography>
                    {product.displaySize} ({product.displayResolution})
                  </Typography>
                  <Typography>{product.cpu}</Typography>
                  <Typography>{product.ram} Ram</Typography>
                  <Typography>{product.internalMemory} Storage</Typography>
                  <Typography>${product.price}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    size="large"
                    aria-label="add to shopping cart"
                    sx={{
                      "&:hover": {
                        bgcolor: "#DED1BD",
                      },
                    }}
                  >
                    <AddShoppingCartIcon
                      sx={{
                        cursor: "pointer",
                        color: "#B08401",
                      }}
                    />
                  </IconButton>
                  <IconButton
                    aria-label="add to favorites"
                    // variant="plain"
                    // color="danger"
                    sx={{
                      "&:hover": {
                        bgcolor: "#DED1BD",
                      },
                    }}
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
              </Right>
            </Flex>
          </Card>
        )}
      </Container>
    </main>
  );
}
