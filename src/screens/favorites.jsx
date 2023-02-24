import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import {
  getFavorites,
  addToCart,
  addToFavorite,
  removeFromFavorite,
  fetchProducts,
} from "../api/api";
import { ProductCard } from "../components/ProductCard";
import Loading from "../components/Loading";

export default function Favorites() {
  const theme = useTheme();
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    try {
      setIsLoading(true);
      const favoritesData = await getFavorites();
      setFavorites(favoritesData || []);
      const prods = await fetchProducts();
      setProducts(prods.data || []);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const filteredProducts = products
    ? products.filter((p) => favorites.includes(p._id))
    : [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Grid
        container
        sx={{ margin: "auto", maxWidth: "80vw", mt: 15 }}
        spacing={2}
      >
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              addToCart={addToCart}
              addToFavorite={addToFavorite}
              product={product}
              removeFromFavorite={removeFromFavorite}
              isFavorited={true}
              reload={initialize}
            />
          ))
        ) : (
          <Grid item sx={{ width: "100%" }}>
            <h1>No favorites.</h1>
          </Grid>
        )}
      </Grid>
    </main>
  );
}
