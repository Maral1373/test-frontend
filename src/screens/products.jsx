import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material";
import { fetchProducts, addToCart, addToFavorite } from "../api/api";
import { styled } from "@mui/material/styles";
import FiltersList from "../components/FilterList";
import { filtersInitialState, filterProducts } from "../utils/utils";
import { ProductCard } from "../components/ProductCard";
import Loading from "../components/Loading";
import Carousel from "../components/Carousel";
import HeaderBoxes from "../components/HeaderBoxes";

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
      <Box
        sx={{
          bgcolor: "background.paper",
          width: "100%",
        }}
      >
        <Carousel />
        <HeaderBoxes />
      </Box>
      <Flex>
        <Left>
          <FiltersList setFilter={setFilter} />
        </Left>
        <Right>
          <Container sx={{ my: 0 }} maxWidth="xl">
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
