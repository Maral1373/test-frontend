import * as React from "react";
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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Products() {
  const theme = useTheme();
  return (
    <main>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pb: 6,
          pt: 4,
        }}
      >
        <Container maxWidth="100vw">
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            <CardMedia
              component="img"
              sx={{ pt: 4, maxWidth: "100vw" }}
              image="https://source.unsplash.com/random"
              alt="random"
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
                  bgcolor: "#DED1BD",
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
                  bgcolor: "#683B2B",
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
                  bgcolor: "#D49E8D",
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
        </Container>
      </Box>
      <Container sx={{ my: 0 }} maxWidth="xl">
        {/* End hero unit */}
        <Grid container spacing={2}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
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
                  image="https://source.unsplash.com/random"
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
