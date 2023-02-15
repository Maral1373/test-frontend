import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useTheme } from "@mui/material";
import api from "../api/api";
import { styled } from "@mui/material/styles";
import FiltersList from "../components/FilterList";
import { Block } from "@mui/icons-material";

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
  flex: 3,
}));

export default function Products() {
  const theme = useTheme();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get(`/catalog`);
      setProducts(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          width: "100%",
          pb: 6,
          pt: 4,
        }}
      >
        <Box maxWidth="1">
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            <CardMedia
              component="img"
              sx={{
                mt: "-33px",
                maxWidth: "100%",
                maxHeight: "40vh",
                width: "100%",
                objectFit: "fill",
              }}
              src="https://thumbs.dreamstime.com/b/smartphone-headphones-office-accessories-yellow-background-modern-lifestyle-business-flat-lay-banner-copy-space-176172776.jpg"
              // src="https://thumbs.dreamstime.com/b/smartphone-office-accessories-yellow-background-modern-lifestyle-business-flat-lay-banner-copy-space-176172335.jpg"
              alt="header"
            />
          </Typography>

          <Grid
            container
            sx={{
              marginLeft: "5%",
              maxWidth: "100vw",
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Avatar
                sx={{
                  bgcolor: "#F4C7AB",
                  marginBottom: "5",
                  height: "100px",
                  width: "100px",
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                  marginRight: "10%",
                }}
                item
                xs={4}
              >
                <LocalShippingOutlinedIcon fontSize="large" />
              </Avatar>
              <Box
                item
                xs={4}
                marginBottom={5}
                textAlign={"center"}
                marginLeft={"63%"}
                marginTop={"5%"}
              >
                Free shipping up to $50
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Avatar
                sx={{
                  bgcolor: "#B2B8A3",
                  marginBottom: "5",
                  height: "100px",
                  width: "100px",
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                  marginRight: "10%",
                }}
                item
                xs={4}
              >
                <CategoryIcon fontSize="large" />
              </Avatar>

              <Box
                item
                xs={4}
                marginBottom={5}
                textAlign={"center"}
                marginLeft={"63%"}
                marginTop={"5%"}
              >
                Product well package
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Avatar
                sx={{
                  bgcolor: "#abcfd6",
                  marginBottom: "5",
                  height: "100px",
                  width: "100px",
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                  marginRight: "10%",
                }}
                item
                xs={4}
              >
                <SupportAgentIcon fontSize="large" />
              </Avatar>
              <Box
                item
                xs={12}
                textAlign={"center"}
                marginLeft={"63%"}
                marginTop={"5%"}
              >
                Support
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Flex>
        <Left>
          <FiltersList />
        </Left>
        <Right>
          <Container sx={{ my: 0 }} maxWidth="xl">
            {/* End hero unit */}
            <Grid container spacing={2}>
              {products.map((product) => {
                console.log(product);
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
                      <CardActions>
                        <IconButton
                          size="large"
                          aria-label="add to shopping cart"
                          sx={{
                            "&:hover": {
                              bgcolor: "#FFF5EB",
                            },
                          }}
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
              })}
            </Grid>
          </Container>
        </Right>
      </Flex>
    </main>
  );
}
