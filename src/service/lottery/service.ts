import { toast } from "react-toastify";
import { api } from "../api/api";
import { Response } from "../models/response.interface";
import { LotteryResponse } from "./service.interface";

const baseUrl = "api";

const getLatestLottery = async (
  lottery: string
): Promise<Response<LotteryResponse>> => {
  try {
    const res = await api.get<LotteryResponse>(`${baseUrl}/${lottery}/latest`);
    return { data: res.data, success: true, status: res.status };
  } catch (error) {
    toast.error(error?.toString());
    throw error;
  }
};

export default getLatestLottery;
