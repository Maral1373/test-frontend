import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "./CopyRight";

function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Welcome to the Amazon of Mobile Shops ^__^
      </Typography>
      <Copyright />
    </Box>
  );
}

export default Footer;
