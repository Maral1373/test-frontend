import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxHeight: "10vh",
});

export default function Basket() {
  const theme = useTheme();
  return (
    <main>
      orders
      {/* <Container
        sx={{
          p: 9,
          margin: "auto",
          maxWidth: "50vw",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid
          xs={12}
          sm
          container
          spacing={6}
          justifyContent="space-evenly"
          style={{ minHeight: "80vh" }}
        >
          {cards.map((card) => (
            <Grid
              item
              xs
              container
              direction="column"
              spacing={2}
              key={card}
              md={10}
              style={{ maxHeight: "10%", maxWidth: "80%" }}
            >
              <Card
                sx={{
                  height: "15vh",
                  display: "flex",
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
                <ButtonBase
                  sx={{
                    width: 128,
                    height: 128,
                    margin: "auto",
                    marginLeft: 3,
                  }}
                >
                  <Img
                    alt="complex"
                    src="https://source.unsplash.com/random"
                    sx={{
                      px: 3,
                      py: 3,
                      "&:hover": {
                        transition: "transform 0.15s ease-in-out",
                        transform: "scale3d(1.05, 1.05, 1)",
                      },
                    }}
                  />
                </ButtonBase>
                <Box
                  sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <Typography
                    item
                    xs
                    sx={{
                      margin: "auto",
                      marginLeft: 3,
                    }}
                  >
                    about product Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quia ab iste, impedit laborum incidunt
                    quae dolor atque veniam quo eius sint totam maxime velit
                    necessitatibus hic eveniet non temporibus dolore?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    item
                    size="large"
                    aria-label="add to shopping cart"
                    sx={{
                      marginRight: "10%",
                      "&:hover": {
                        background: "none",
                      },
                    }}
                  >
                    <ClearIcon
                      variant="body2"
                      sx={{
                        marginRight: "1vw",
                        border: "1px solid",
                        cursor: "pointer",
                        color: "#B2B8A3",
                      }}
                    />
                  </Button>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      marginRight: "1vw",
                      marginLeft: "-10%",
                      display: { xs: "none", md: "flex" },
                      width: "5vw",
                    }}
                  >
                    <TextField
                      sx={{
                        textAlign: "center",
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                      }}
                      label="Quantity"
                      focused
                      inputProps={{
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                      }}
                    />
                  </Typography>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      marginRight: "2vw",
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                      }}
                    />
                    $20
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
     </Container> */}
    </main>
  );
}