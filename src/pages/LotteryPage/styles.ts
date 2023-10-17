import { Box, styled } from "@mui/material";

export const backgroundGray = "#efeeee";

export const PageLayout = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  width: "100vw",
  height: "100vh",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr 1fr",
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr 1fr",
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 1fr",
  },
}));
