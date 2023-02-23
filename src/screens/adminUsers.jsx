import React, { useState, useEffect } from "react";
import { getUsers } from "../api/api";
import Container from "@mui/material/Container";

import Divider from "@mui/material/Divider";

import "./orders.css";
import Loading from "../components/Loading";

const AdminUsers = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    try {
      const response = await getUsers();
      console.log(response);
      setUsers(response.data);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <Container sx={{ my: 0 }} maxWidth="xl">
      {!users ? (
        <Loading />
      ) : (
        <>
          <h2>Users</h2>
          <Divider />
          <div className="orders">
            {users ? (
              <table>
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Orders</th>
                    <th>Favorited Products</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.phone}</td>
                      <td>{user.orders.length}</td>
                      <td>{user.favorites.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h1>No users.</h1>
            )}
          </div>
        </>
      )}
    </Container>
  );
};

export default AdminUsers;
