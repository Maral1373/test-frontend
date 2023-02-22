import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import { getCart, deleteCart, editCart, createOrder } from "../api/api";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

import "./cart.css";

const Cart = () => {
  const [cart, setCart] = useState({ items: [] });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
      alert("Removing item failed");
    }
  };

  const emptyCart = async () => {
    try {
      await deleteCart({ id: cart._id });
      await initialize();
    } catch (e) {
      console.log(e);
      alert("Emptying Cart failed");
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
      await emptyCart();
      navigate("/orders");
    } catch (e) {
      alert("Order submission failed");
    }
  };

  const cartExists =
    !isLoading && cart._id !== "undefined" && cart.items.length > 0;

  return (
    <Container sx={{ my: 0 }} maxWidth="xl">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="cart-container">
          <h1>Your Cart</h1>
          <div className="cart">
            <div className="cart-info">
              <div className="info">
                <p>
                  <b>Number of items: </b>
                  {cartExists
                    ? cart.items.reduce(
                        (acc, item) => (acc += item.quantity),
                        0
                      )
                    : 0}
                </p>
                <p>
                  <b>Total amount: </b>
                  <span className="total">
                    {cartExists
                      ? numeral(
                          cart.items.reduce(
                            (acc, item) =>
                              (acc += item.product.info.price * item.quantity),
                            0
                          )
                        ).format("$0,0.00")
                      : numeral(0).format("$0,0.00")}
                  </span>
                </p>
              </div>
              <div className="btns">
                <Button
                  variant="contained"
                  type="submit"
                  color="secondary"
                  disabled={!cartExists}
                  onClick={makeOrder}
                >
                  Checkout
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  color="secondary"
                  disabled={!cartExists}
                  onClick={emptyCart}
                >
                  Empty cart
                </Button>
              </div>
            </div>
            <div className="cart-items">
              {cartExists ? (
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.items.map((item) => (
                      <tr key={item.product.info.name}>
                        <td className="cart-hover">
                          <img src={item.product.info.photo} />
                        </td>
                        <td>
                          <Link to={`/product/${item.product._id}`}>
                            {item.product.info.name}
                          </Link>
                        </td>
                        <td>
                          {numeral(item.product.info.price).format("$0,0.00")}
                        </td>
                        <td>{item.quantity}</td>
                        <td>
                          {numeral(
                            item.product.info.price * item.quantity
                          ).format("$0,0.00")}
                        </td>
                        <td>
                          <button
                            title="Remove this item from the cart"
                            onClick={() => removeItem(item._id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h1>No items in the cart.</h1>
              )}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
