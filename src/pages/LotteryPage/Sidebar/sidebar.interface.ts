import { MenuLotteryInterface } from "./menu/lotteries-menu.interface";

export interface SidebarProps {
  choosedLottery: MenuLotteryInterface | null;
  setChoosedLottery: React.Dispatch<
    React.SetStateAction<MenuLotteryInterface | null>
  >;
  isLoading: boolean;
  contestNumber: string;
  contestDate: string;
}
