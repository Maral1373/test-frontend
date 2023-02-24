import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { PRODUCT_TAGS } from "../consts/consts";
import { createProduct } from "../api/api";
import { useCustomContext } from "./layout";

const SAMPLE_DATA = {
  info: {
    name: "LG V30",
    dimensions: "151.7 x 75.4 x 7.3 mm",
    weight: "158 g",
    displayType: "P-OLED capacitive touchscreen, 16M colors",
    displaySize: '6.0"',
    displayResolution: "1440 x 2880 pixels",
    os: "Android 7.1.2 (Nougat)",
    cpu: "Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)",
    internalMemory: "64 GB",
    ram: "4 GB",
    camera:
      "Dual: 16 MP (f/1.6, 1 µm, 3-axis OIS, PDAF) + 13 MP (f/1.9, no AF)",
    batery: "Non-removable Li-Po 3300 mAh battery",
    color: "Aurora Black",
    price: 800,
    photo: "/img/lg_v30.png",
  },
  tags: {
    priceRange: "750>",
    brand: "lg",
    color: "black",
    os: "android",
    internalMemory: "64",
    ram: "4",
    displaySize: "6.0",
    displayResolution: "1440x2880",
    camera: "16",
    cpu: "octa_core",
  },
};

const INITIAL_STATE = {
  info: {
    name: "",
    dimensions: "",
    weight: "",
    displayType: "",
    displaySize: "",
    displayResolution: "",
    os: "",
    cpu: "",
    internalMemory: "",
    ram: "",
    camera: "",
    batery: "",
    color: "",
    price: 0,
    photo: "",
  },
  tags: {
    priceRange: "750>",
    brand: "lg",
    color: "black",
    os: "android",
    internalMemory: "64",
    ram: "4",
    displaySize: "6.0",
    displayResolution: "1440x2880",
    camera: "16",
    cpu: "octa_core",
  },
};

const AdminProducts = () => {
  const [product, setProduct] = useState(INITIAL_STATE);
  const {
    snackbar: { setOpen, setText, setSeverity },
  } = useCustomContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await createProduct(product);
      console.log("res", res);
    } catch (e) {
      console.log("error", e);
      setText("Registration failed");
      setSeverity("error");
      setOpen(true);
    }
  };

  const onChange = (e) => {
    if (e.target.name.startsWith("info-")) {
      setProduct((prevState) => ({
        ...prevState,
        info: {
          ...prevState.info,
          [e.target.name.slice(5)]: e.target.value,
        },
      }));
    } else if (e.target.name.startsWith("tags-")) {
      setProduct((prevState) => ({
        ...prevState,
        tags: {
          ...prevState.tags,
          [e.target.name.slice(5)]: e.target.value,
        },
      }));
    } else {
      console.log("oopsi");
    }
  };

  return (
    <Container component="main" maxWidth="xl">
      <Box
        sx={{
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography component="h1" variant="h5">
          Create New Product
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
          fullWidth
        >
          <Grid container spacing={2}>
            <Button
              type="button"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setProduct(SAMPLE_DATA)}
            >
              Fill in form with Sample Data
            </Button>
            <Button
              type="button"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setProduct(INITIAL_STATE)}
            >
              Reset Form
            </Button>
            {Object.keys(product.info).map((key) => (
              <Grid item xs={12}>
                <InputLabel id={`info-${key}-label`}>{key}</InputLabel>
                <TextField
                  required
                  fullWidth
                  labelId={`info-${key}-label`}
                  id={`info-${key}`}
                  name={`info-${key}`}
                  autoComplete={key}
                  value={product.info[key]}
                  onChange={onChange}
                />
              </Grid>
            ))}
            <Typography component="h1" variant="h5" sx={{ pt: 5 }}>
              Tags: for filtering products
            </Typography>
            {Object.keys(product.tags).map((key) => (
              <Grid item xs={12}>
                <InputLabel id={`tags-${key}-label`}>Tag - {key}</InputLabel>
                <Select
                  required
                  fullWidth
                  labelId={`tags-${key}-label`}
                  id={`tags-${key}`}
                  name={`tags-${key}`}
                  value={product.tags[key]}
                  label={key}
                  onChange={onChange}
                >
                  {PRODUCT_TAGS[key].map((k) => (
                    <MenuItem value={k.value}>{k.label}</MenuItem>
                  ))}
                </Select>
              </Grid>
            ))}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminProducts;
