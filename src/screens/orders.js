import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useTheme } from "@mui/material";


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



export default function Orders() {
  const theme = useTheme();
  return (
    <main>
      <Grid
        container
        // spacing={3}
        sx={{
          marginLeft: "37%",
          maxWidth: "30vw",
        }}
      >
        <Grid
          item
          xs="6"
          sm={2}
          md={3}
          sx={{ pt: 4, border: "dotted green 2px" }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          Product List
        </Grid>
        <Grid
          item
          xs
          sm={2}
          md={3}
          sx={{ pt: 4, border: "dotted orange 2px" }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          Price
        </Grid>
        <Grid
          item
          xs
          sm={2}
          md={3}
          sx={{ pt: 4, border: "dotted blue 2px" }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          Quantity
        </Grid>
        <Grid
          item
          xs
          sm={6}
          md={3}
          sx={{ pt: 4, border: "dotted red 2px" }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          Total
        </Grid>
      </Grid>
      <Container sx={{ my: 0 }} maxWidth="xl">
        {/* End hero unit */}
        <Grid
          container
          spacing={7}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          style={{ minHeight: "80vh" }}
        >
          <Grid item xs={7} sm={7} md={7}></Grid>
          {cards.map((card) => (
            <Grid
              item
              key={card}
              xs={7}
              sm={7}
              md={7}
              style={{ maxHeight: "10%", maxWidth: "80%" }}
            >
              <Card
                sx={{
                  maxWidth: "100%",
                  height: "20%",
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
                    backgroundColor: "#FAF6F2",
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
                      width: "101%",
                      height: "102%",
                      transformOrigin: { horizontal: "center" },
                    },
                  }}
                  image="https://source.unsplash.com"
                  alt="random"
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    Product name
                  </Typography>
                  <Typography>about product</Typography>
                  <Typography>$price</Typography>
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
