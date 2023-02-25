import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import {
  getFavorites,
  fetchProducts,
  addToCart,
  addToFavorite,
  removeFromFavorite,
} from "../api/api";
import FiltersList from "../components/FilterList";
import { filtersInitialState, filterProducts } from "../utils/utils";
import { ProductCard } from "../components/ProductCard";
import Loading from "../components/Loading";
import Carousel from "../components/Carousel";
import HeaderBoxes from "../components/HeaderBoxes";
import { getToken } from "../api/token";
import { useCustomContext } from "./layout";
import Container from "@mui/material/Container";

export default function Products(props) {
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState(filtersInitialState);
  const { searchQuery } = useCustomContext();

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    try {
      const isLoggedIn = typeof getToken() === "string";
      const prods = await fetchProducts();
      setProducts(prods.data.filter((p) => !!p.info && !!p.tags) || []);
      if (isLoggedIn) {
        const favoritesData = await getFavorites();
        setFavorites(favoritesData || []);
      }
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

  const productsQuery = searchQuery
    ? products.filter((p) =>
        p.info.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  const filteredProducts = products
    ? filterProducts(productsQuery, filters)
    : null;

  return (
    <>
      <Carousel />
      <Container component="main" maxWidth="xl">
        <Grid container direction="column">
          <Grid item>
            <HeaderBoxes />
          </Grid>
          <Grid item>
            <Grid container>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  [theme.breakpoints.up("xs")]: {
                    padding: 0,
                  },
                  [theme.breakpoints.up("md")]: {
                    padding: 2,
                  },
                }}
              >
                <FiltersList setFilter={setFilter} />
              </Grid>
              <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                  {filteredProducts ? (
                    filteredProducts.map((product) => (
                      <ProductCard
                        key={product._id}
                        addToCart={addToCart}
                        addToFavorite={addToFavorite}
                        removeFromFavorite={removeFromFavorite}
                        product={product}
                        isFavorited={favorites.includes(product._id)}
                        reload={initialize}
                      />
                    ))
                  ) : (
                    <Loading />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
