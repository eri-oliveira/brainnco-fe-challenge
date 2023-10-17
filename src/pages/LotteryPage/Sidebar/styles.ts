import { Box, TextField, Typography, styled } from "@mui/material";
import { backgroundGray } from "../styles";

interface StyleProps {
  lottoColor: string;
}

export const SidebarBox = styled(Box)<StyleProps>(({ theme, lottoColor }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: lottoColor,
  position: "relative",

  "&::before": {
    content: `""`,
    position: "absolute",
    right: "-100px",
    width: "200px",
    height: "100%",
    backgroundColor: backgroundGray,
    borderRadius: "60% 10% 0 60%",
  },

  [theme.breakpoints.down("md")]: {
    "&::before": {
      right: "-50px",
      width: "100px",
    },
  },

  [theme.breakpoints.down("sm")]: {
    minHeight: "350px",

    "&::before": {
      right: "0",
      bottom: "-50px",
      width: "100%",
      height: "100px",
      borderRadius: "100%",
    },
  },
}));

export const SidebarContent = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateRows: "1fr 2fr 1fr",
  height: "100%",
  paddingLeft: "60px",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    paddingLeft: "30px",
  },

  [theme.breakpoints.down("sm")]: {
    height: "85%",
    padding: "0",
    justifyContent: "center",
  },
}));

export const SelectTextField = styled(TextField)(() => ({
  width: "200px",
  padding: "8px 12px",
  borderRadius: "10px",
  border: `1px solid ${backgroundGray}`,
  backgroundColor: backgroundGray,
}));

export const LotteryBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",

  [theme.breakpoints.down("sm")]: {
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

export const SvgBox = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",

  [theme.breakpoints.down("md")]: {
    width: "30px",
    height: "30px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
  },
}));

export const LotteryTypography = styled(Typography)(({ theme }) => ({
  fontFamily: `'Montserrat', sans-serif`,
  fontWeight: "700",
  fontSize: "1.75rem",
  color: "white",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
  },
}));

export const DescriptionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    gap: "20px",
  },
}));

export const DescriptionTypography = styled(Typography)(({ theme }) => ({
  width: "100%",
  color: "white",
  fontSize: "16px",
  fontFamily: `'Montserrat', sans-serif`,

  [theme.breakpoints.down("sm")]: {
    width: "auto",
    fontSize: "12px",
  },
}));
