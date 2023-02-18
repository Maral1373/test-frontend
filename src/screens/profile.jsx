import React, { useState, useEffect } from "react";
import { getUser } from "../api/api";
import Container from "@mui/material/Container";

import Divider from "@mui/material/Divider";
import Loading from "../components/Loading";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    const response = await getUser();
    setUser(response.data);
  };

  return (
    <Container sx={{ my: 0 }} maxWidth="xl">
      {!user ? (
        <Loading />
      ) : (
        <>
          <h1>Your Account</h1>
          <div>
            <h2>Info</h2>
            <Divider />
            <p>
              <b>Username: </b>
              {user.username}
            </p>
            <p>
              <b>E-mail: </b>
              {user.email}
            </p>
            <p>
              <b>Billing Address: </b>
              {user.address}
            </p>
            <p>
              <b>Phone: </b>
              {user.phone}
            </p>
          </div>
        </>
      )}
    </Container>
  );
};

export default Profile;
