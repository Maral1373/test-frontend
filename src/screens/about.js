import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import LanguageIcon from "@mui/icons-material/Language";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    fontWeight: "fontWeightBold",
    fontSize: "24px",
  },
  button: {
    margin: theme.spacing(1),
    padding: "43px",
    fontSize: "72px",
    "&:hover": {
      background: "#FAF6F2",
      color: "white",
    },
  },
  head: {
    fontSize: "64px",
    variant: "h2",
  },
}));

export default function About() {
  const classes = useStyles();

  function WebIcons(props) {
    return (
      <LanguageIcon LanguageIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </LanguageIcon>
    );
  }

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Box className={classes.paper} sx={{ m: "2%" }}>
            <Typography variant="h5" color="primary" component="p">
              You can know who I am and what I can do. I hope ...
            </Typography>
          </Box>

          <Box className={classes.paper} sx={{ m: "2%" }}>
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
          <Box className={classes.paper}></Box>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRowTwo() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Box className={classes.paper}>
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

          <Box className={classes.paper}>
            <Box sx={{ p: "2%" }}></Box>

            <Box>
              <Typography variant="h4" color="primary" component="p">
                WHAT CAN I DO
              </Typography>
            </Box>
            <ButtonBase>
              <WebIcons className={classes.button} color="primary"></WebIcons>
            </ButtonBase>
          </Box>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid container item xs={12}>
          <Box fontWeight="fontWeightLight" m={1}></Box>
        </Grid>

        <Grid container item xs={6} sm={6} spacing={2}>
          <FormRow />
        </Grid>

        <Grid container item direction="row" xs={6} sm={6} spacing={2}>
          <FormRowTwo />
        </Grid>
      </Grid>
    </div>
  );
}
