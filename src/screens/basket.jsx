import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import { getCart, deleteCart, editCart, createOrder } from "../api/api";
import Button from "@mui/material/Button";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { useCustomContext } from "./layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";

const Cart = () => {
  const [cart, setCart] = useState({ items: [] });
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const {
    snackbar: { setOpen, setText, setSeverity },
  } = useCustomContext();

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    setIsLoading(true);
    const cart = await getCart();
    if (cart.status === 200 && cart.data.items) {
      // filtering because of a problem in backend. some items doesn't have the product key. will fix later.
      setCart({
        ...cart.data,
        items: cart.data.items.filter((j) => !!j.product),
      });
    } else {
      setCart({ items: [] });
    }
    setIsLoading(false);
  };

  const removeItem = async (itemId) => {
    try {
      await editCart({
        cartId: cart._id,
        itemId: itemId,
      });

      await initialize();
    } catch (e) {
      setText("Removing item failed");
      setSeverity("error");
      setOpen(true);
    }
  };

  const emptyCart = async () => {
    try {
      await deleteCart({ id: cart._id });
      await initialize();
    } catch (e) {
      console.log(e);
      setText("Emptying Cart failed");
      setSeverity("error");
      setOpen(true);
    }
  };

  const makeOrder = async () => {
    try {
      const order = cart.items.map((item) => {
        let order = {
          name: item.product.info.name,
          price: item.product.info.price,
          quantity: item.quantity,
          dateCreated: Date.now(),
        };
        return order;
      });
      await createOrder({ order });
      await emptyCart(); // fix
      navigate("/orders");
    } catch (e) {
      setText("Order submission failed");
      setSeverity("error");
      setOpen(true);
    }
  };

  const cartExists =
    !isLoading && cart._id !== "undefined" && cart.items.length > 0;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid container sx={{ display: "flex", flexDirection: "column" }}>
          <Grid item sx={{ my: 5 }}>
            <Typography variant="h4">Your Cart</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item sx={{ bgcolor: "#f5f5f5" }} xs={12} md={3}>
                <Grid
                  container
                  spacing={2}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Grid item>
                    <Typography>
                      Number of items:{" "}
                      {cartExists
                        ? cart.items.reduce(
                            (acc, item) => (acc += item.quantity),
                            0
                          )
                        : 0}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      Total amount:{" "}
                      {cartExists
                        ? numeral(
                            cart.items.reduce(
                              (acc, item) =>
                                (acc +=
                                  item.product.info.price * item.quantity),
                              0
                            )
                          ).format("$0,0.00")
                        : numeral(0).format("$0,0.00")}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      disabled={!cartExists}
                      onClick={makeOrder}
                      sx={{
                        [theme.breakpoints.up("xs")]: {
                          padding: 2,
                          marginLeft: "10%",
                          width: "50%",
                        },
                        [theme.breakpoints.up("md")]: {
                          width: "80%",
                          margin: 3,
                          marginBottom: 0,
                        },
                      }}
                    >
                      Checkout
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      disabled={!cartExists}
                      onClick={emptyCart}
                      sx={{
                        [theme.breakpoints.up("xs")]: {
                          padding: 2,
                          marginLeft: "10%",
                          width: "50%",
                        },
                        [theme.breakpoints.up("md")]: {
                          width: "80%",
                          margin: 3,
                          marginBottom: 0,
                        },
                      }}
                    >
                      Empty cart
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={9}>
                {cartExists ? (
                  <TableContainer component={Paper}>
                    <Table aria-label="basket table">
                      <TableHead>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell>Product Name</TableCell>
                          <TableCell>Price</TableCell>
                          <TableCell>Qty</TableCell>
                          <TableCell>Total</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cart.items.map((item) => (
                          <TableRow
                            key={item.product.info.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>
                              <img
                                src={item.product.info.photo}
                                alt={item.product.info.name}
                                width="80px"
                              />
                            </TableCell>
                            <TableCell>
                              <Link to={`/products/${item.product._id}`}>
                                {item.product.info.name}
                              </Link>
                            </TableCell>
                            <TableCell>
                              {numeral(item.product.info.price).format(
                                "$0,0.00"
                              )}
                            </TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>
                              {numeral(
                                item.product.info.price * item.quantity
                              ).format("$0,0.00")}
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
                                type="button"
                                color="primary"
                                onClick={() => removeItem(item._id)}
                              >
                                remove
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : (
                  <Typography variant="h5">No items in the cart.</Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Cart;
