import { LotteryResponse } from "../../../service/lottery/service.interface";

export interface ResultProps {
  isLoading: boolean;
  result: LotteryResponse | null;
}
