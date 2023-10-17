/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuItem, Skeleton, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { backgroundGray } from "../styles";
import { lotteryItens } from "./menu/lotteries-menu";
import { MenuLotteryInterface } from "./menu/lotteries-menu.interface";
import { SidebarProps } from "./sidebar.interface";
import {
  DescriptionBox,
  DescriptionTypography,
  LotteryBox,
  LotteryTypography,
  SelectTextField,
  SidebarBox,
  SidebarContent,
  SvgBox,
} from "./styles";

const Sidebar: React.FC<SidebarProps> = ({
  choosedLottery,
  setChoosedLottery,
  isLoading,
  contestNumber,
  contestDate,
}) => {
  const navigate = useNavigate();

  const pathname = useLocation().pathname;

  const handleChange = (event: any) => {
    const selectedLottery = lotteryItens.find(
      (item: MenuLotteryInterface) => item.title === event.target.value
    );

    if (selectedLottery) setChoosedLottery(selectedLottery);
    navigate(`/${selectedLottery?.key}` || "");
  };

  useEffect(() => {
    if (pathname === "/" || pathname === "") {
      setChoosedLottery(lotteryItens[0]);
      navigate(`/${lotteryItens[0].key}`);
      return;
    }

    const pathnameExists = lotteryItens.find(
      (item: MenuLotteryInterface) => item.key === pathname?.split("/")[1]
    );

    if (pathnameExists?.title) {
      setChoosedLottery(pathnameExists);
      return;
    }

    setChoosedLottery(lotteryItens[0]);
    navigate(`/${lotteryItens[0].key}`);
  }, [pathname]);

  return (
    <SidebarBox lottoColor={choosedLottery?.color || backgroundGray}>
      <SidebarContent>
        <div>
          {!isLoading ? (
            <SelectTextField
              id="choosed-lottery"
              select
              value={choosedLottery ? choosedLottery.title : ""}
              onChange={handleChange}
              variant="standard"
              InputProps={{ disableUnderline: true }}
            >
              {lotteryItens.map((menu: MenuLotteryInterface) => {
                return (
                  <MenuItem key={menu.title} value={menu.title}>
                    <Typography variant="body1">{menu.title}</Typography>
                  </MenuItem>
                );
              })}
            </SelectTextField>
          ) : (
            <Skeleton height={60} width={200} variant="rounded" />
          )}
        </div>

        <LotteryBox>
          <SvgBox>
            <img
              src="src\assets\lottery-logo.svg"
              alt="lottery-logo"
              width="100%"
              height="100%"
            />
          </SvgBox>
          <LotteryTypography variant="h6">
            {choosedLottery?.title?.toUpperCase()}
          </LotteryTypography>
        </LotteryBox>

        <DescriptionBox>
          <DescriptionTypography variant="body2" fontWeight="light">
            Concurso
          </DescriptionTypography>
          {!isLoading ? (
            <DescriptionTypography variant="body1" fontWeight="bold">
              {contestNumber} – {contestDate}
            </DescriptionTypography>
          ) : (
            <Skeleton height={30} width={200} variant="rounded" />
          )}
        </DescriptionBox>
      </SidebarContent>
    </SidebarBox>
  );
};

export default Sidebar;
