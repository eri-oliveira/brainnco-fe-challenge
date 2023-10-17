import { useEffect, useState } from "react";
import getLatestLottery from "../../service/lottery/service";
import { LotteryResponse } from "../../service/lottery/service.interface";
import Result from "./Result/Result";
import Sidebar from "./Sidebar/Sidebar";
import { MenuLotteryInterface } from "./Sidebar/menu/lotteries-menu.interface";
import { PageLayout } from "./styles";

export default function LotteryPage() {
  const [isLoading, setIsLoading] = useState(true);

  const [choosedLottery, setChoosedLottery] =
    useState<MenuLotteryInterface | null>(null);

  const [lotteryResult, setLotteryResult] = useState<LotteryResponse | null>(
    null
  );

  useEffect(() => {
    if (choosedLottery) {
      setIsLoading(true);

      const getPayload = async () => {
        getLatestLottery(choosedLottery.key)
          .then((res) => {
            if (res.success) {
              setLotteryResult(res.data);
            }
          })
          .finally(() => setIsLoading(false));
      };

      getPayload();
    }
  }, [choosedLottery]);

  return (
    <PageLayout>
      <Sidebar
        contestNumber={lotteryResult?.concurso?.toString() || ""}
        contestDate={lotteryResult?.data || ""}
        choosedLottery={choosedLottery}
        setChoosedLottery={setChoosedLottery}
        isLoading={isLoading}
      />
      <Result isLoading={isLoading} result={lotteryResult} />
    </PageLayout>
  );
}
