import * as React from "react";
// import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    // <Box
    //   sx={{
    //     bgcolor: "background.paper",
    //     p: 10,
    //     mt: 40,
    //     ml: 2,
    //     display: { md: "flex" },
    //   }}
    //   component="footer"
    // >
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      component="p"
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Website name
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
    // </Box>
  );
}

export default Copyright;
