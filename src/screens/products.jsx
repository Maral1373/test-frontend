import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { fetchProducts, addToCart, addToFavorite } from "../api/api";
import FiltersList from "../components/FilterList";
import { filtersInitialState, filterProducts } from "../utils/utils";
import { ProductCard } from "../components/ProductCard";
import Loading from "../components/Loading";
import Carousel from "../components/Carousel";
import HeaderBoxes from "../components/HeaderBoxes";

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
      <Grid container sx={{ margin: "auto", maxWidth: "80vw" }} spacing={2}>
        <Grid item xs={12} sm={3}>
          <FiltersList setFilter={setFilter} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={2}>
            {filteredProducts ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  addToCart={addToCart}
                  addToFavorite={addToFavorite}
                  product={product}
                />
              ))
            ) : (
              <Loading />
            )}
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}
