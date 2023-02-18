import React, { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useTheme } from "@mui/material";
import { fetchProducts, addToCart, addToFavorite } from "../api/api";
import { styled } from "@mui/material/styles";
import FiltersList from "../components/FilterList";
import { filtersInitialState, filterProducts } from "../utils/utils";
import { ProductCard } from "../components/ProductCard";
import Loading from "../components/Loading";

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
  const [products, setProducts] = useState(null);
  const [filters, setFilters] = useState(filtersInitialState);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    try {
      const prods = await fetchProducts();
      setProducts(prods.data || []);
    } catch (e) {
      console.log(e);
    }
  };

  const setFilter = (filterType, filterValue) => {
    const newState = { ...filters };
    newState[filterType] = filterValue;
    setFilters(newState);
  };

  const clearFilters = () => setFilters(filtersInitialState);

  const filteredProducts = products ? filterProducts(products, filters) : null;

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
              // direction="row"
              // spacing={2}
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
              // direction="row"
              // spacing={2}
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
              // direction="row"
              // spacing={2}
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
          <FiltersList setFilter={setFilter} />
        </Left>
        <Right>
          <Container sx={{ my: 0 }} maxWidth="xl">
            {/* End hero unit */}
            <Grid container spacing={2}>
              {filteredProducts ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    addToCart={addToCart}
                    addToFavorite={addToFavorite}
                    product={product}
                  />
                ))
              ) : (
                <Loading />
              )}
            </Grid>
          </Container>
        </Right>
      </Flex>
    </main>
  );
}
