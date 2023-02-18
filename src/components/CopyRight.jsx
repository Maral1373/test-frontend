import React from "react";
import { SITE_NAME } from "../consts/consts";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      component="p"
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        {SITE_NAME}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
