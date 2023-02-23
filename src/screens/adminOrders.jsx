import React, { useState, useEffect } from "react";
import numeral from "numeral";
import moment from "moment";
import { getOrders } from "../api/api";
import Container from "@mui/material/Container";

import Divider from "@mui/material/Divider";

import "./orders.css";
import Loading from "../components/Loading";

const AdminOrders = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    try {
      const response = await getOrders();
      setOrders(response.data);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <Container sx={{ my: 0 }} maxWidth="xl">
      {!orders ? (
        <Loading />
      ) : (
        <>
          <h2>Orders</h2>
          <Divider />
          <div className="orders">
            {orders ? (
              <table>
                <thead>
                  <tr>
                    <th>Date Created</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.name}>
                      <td>{moment(order.dateCreated).format("ll")}</td>
                      <td>{order.user.email}</td>
                      <td>{order.user.address}</td>
                      <td>{order.user.phone}</td>
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
              <h1>No orders.</h1>
            )}
          </div>
        </>
      )}
    </Container>
  );
};

export default AdminOrders;
