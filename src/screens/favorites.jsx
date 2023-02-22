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

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    try {
      const favoritesData = await getFavorites();
      setFavorites(favoritesData || []);
      const prods = await fetchProducts();
      setProducts(prods.data || []);
    } catch (e) {
      console.log(e);
    }
  };

  const filteredProducts = products
    ? products.filter((p) => favorites.includes(p._id))
    : null;

  return (
    <main>
      <Grid container sx={{ margin: "auto", maxWidth: "80vw" }} spacing={2}>
        {filteredProducts ? (
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
          <Loading />
        )}
      </Grid>
    </main>
  );
}
