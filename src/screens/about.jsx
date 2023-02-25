import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function About() {
  return (
    <Container sx={{ my: 0 }} maxWidth="xl">
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} spacing={2}>
          <Box
            sx={{
              padding: 1,
              textAlign: "left",
              fontWeight: "fontWeightBold",
              fontSize: "24px",
              m: "2%",
            }}
          >
            <Typography variant="h5" color="primary" component="p">
              You can know who I am and what I can do. I hope ...
            </Typography>
          </Box>

          <Box
            sx={{
              padding: 1,
              textAlign: "left",
              fontWeight: "fontWeightBold",
              fontSize: "24px",
              m: "2%",
            }}
          >
            <Typography variant="body1" component="p">
              <Box sx={{ p: "2%" }}></Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              consequatur, culpa asperiores aspernatur veniam ipsa reiciendis
              sed dolorem repellendus voluptate nam assumenda necessitatibus
              repellat tempora quasi excepturi harum et consectetur! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Porro perspiciatis
              accusantium consectetur voluptatum distinctio sit ullam
              praesentium dignissimos voluptatem eligendi, possimus hic vero
              totam culpa ratione fuga dolores ab. Non nesciunt vitae
              repellendus atque impedit, voluptate inventore hic nostrum
              quisquam voluptatibus enim veritatis ex magni recusandae quasi
              corporis laborum voluptatem.
            </Typography>
          </Box>
          <Box
            sx={{
              padding: 1,
              textAlign: "left",
              fontWeight: "fontWeightBold",
              fontSize: "24px",
            }}
          ></Box>
        </Grid>

        <Grid item direction="row" xs={12} md={6} spacing={2}>
          <Box
            sx={{
              padding: 1,
              textAlign: "left",
              fontWeight: "fontWeightBold",
              fontSize: "24px",
            }}
          >
            <Box>
              <Typography variant="h4" color="primary" component="p">
                MY SKILLS
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="textSecondary" component="p">
                front end development
              </Typography>
              <Box
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={80}
              ></Box>
            </Box>
            <Box>
              <Typography variant="h6" color="textSecondary" component="p">
                web design
              </Typography>
              <Box
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={60}
              ></Box>
            </Box>
            <Box>
              <Typography variant="h6" color="textSecondary" component="p">
                Back end development
              </Typography>
              <Box
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={40}
              ></Box>
            </Box>
            <Box>
              <Box
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
              ></Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
