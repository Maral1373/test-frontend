import React, { useState, useEffect } from "react";
import numeral from "numeral";
import moment from "moment";
import { getUser } from "../api/api";
import Container from "@mui/material/Container";

import Divider from "@mui/material/Divider";

import "./orders.css";
import Loading from "../components/Loading";

const Orders = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    const response = await getUser();
    setUser(response.data);
  };

  return (
    <Container sx={{ my: 0, mt: 20 }} maxWidth="xl">
      {!user ? (
        <Loading />
      ) : (
        <>
          <h2>Order History</h2>
          <Divider />
          <div className="orders">
            {user.orders.length ? (
              <table>
                <thead>
                  <tr>
                    <th>Date Created</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {user.orders.map((order) => (
                    <tr key={order.name}>
                      <td>{moment(order.dateCreated).format("ll")}</td>
                      <td>{order.name}</td>
                      <td>{numeral(order.price).format("$0,0.00")}</td>
                      <td>{order.quantity}</td>
                      <td>
                        {numeral(
                          parseInt(order.price) * parseInt(order.quantity)
                        ).format("$0,0.00")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h1>No order history.</h1>
            )}
          </div>
        </>
      )}
    </Container>
  );
};

export default Orders;
