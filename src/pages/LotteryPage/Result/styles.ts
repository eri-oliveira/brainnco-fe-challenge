import { Box, Typography, styled } from "@mui/material";

export const backgroundGray = "#efeeee";

export const ContentBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateRows: "1fr 100px",
  alignItems: "center",
  padding: "100px 100px 0 0",
  zIndex: "1",
  background: backgroundGray,

  [theme.breakpoints.down("md")]: {
    padding: "20px 10px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0",
  },
}));

export const ResultBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "40px",
  width: "100%",
}));

export const CircleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  backgroundColor: "white",

  [theme.breakpoints.down("md")]: {
    width: "70px",
    height: "70px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "60px",
    height: "60px",
  },
}));

export const ResultTypography = styled(Typography)(({ theme }) => ({
  fontSize: "30px",

  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const WarningBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));
