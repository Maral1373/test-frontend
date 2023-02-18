import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import RemoveShoppingCart from "@mui/icons-material/RemoveShoppingCart";
import NavigateNext from "@mui/icons-material/NavigateNext";
import { getCart } from "../api/api";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import "./cart.css";

const Cart = () => {
  const [cart, setCart] = useState({ items: [] });

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    const cart = await getCart();
    setCart(cart.data);
  };

  const deleteCart = async () => {};

  const editCart = async () => {};

  const createOrder = async () => {};

  const removeItem = async (itemId) => {
    await editCart({
      cartId: cart._id,
      itemId: itemId,
    });

    getCart();
  };

  const emptyCart = async () => {
    await deleteCart({ id: cart._id });
    await getCart();
  };

  const makeOrder = async () => {
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
  };

  const cartExists = cart._id !== "undefined" && cart.items.length > 0;

  return (
    <Container sx={{ my: 0 }} maxWidth="xl">
      <div className="cart-container">
        <h1>Your Cart</h1>
        <div className="cart">
          <div className="cart-info">
            <div className="info">
              <p>
                <b>Number of items: </b>
                {cartExists
                  ? cart.items.reduce((acc, item) => (acc += item.quantity), 0)
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
                onClick={() => {}}
                className="btn"
                label="Checkout"
                labelPosition="before"
                icon={<NavigateNext />}
                primary={true}
                disabled={!cartExists}
              />
              <Button
                variant="contained"
                onClick={() => {}}
                className="btn"
                label="Empty cart"
                labelPosition="before"
                icon={<RemoveShoppingCart />}
                secondary={true}
                disabled={!cartExists}
              />
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
                      <td>
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
    </Container>
  );
};

export default Cart;
