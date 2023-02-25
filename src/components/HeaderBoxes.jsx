import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function HeaderBoxes() {
  return (
    <Grid container>
      {[
        {
          avatar: <LocalShippingOutlinedIcon fontSize="large" />,
          avatarStyles: { bgcolor: "#abcfd6" },
          text: "Free shipping up to $50",
        },
        {
          avatar: <CategoryIcon fontSize="large" />,
          avatarStyles: { bgcolor: "#B2B8A3" },
          text: "Product well package",
        },
        {
          avatar: <SupportAgentIcon fontSize="large" />,
          avatarStyles: { bgcolor: "#F4C7AB" },
          text: "Support",
        },
      ].map((content) => (
        <Grid
          key={content.text}
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pt: 8,
            pb: 4,
          }}
        >
          <Avatar
            sx={{
              height: "100px",
              width: "100px",
              ...content.avatarStyles,
            }}
          >
            {content.avatar}
          </Avatar>
          <Box textAlign={"center"} sx={{ pt: 2 }}>
            {content.text}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
