import { createBrowserRouter } from "react-router-dom";
import LotteryPage from "../pages/LotteryPage/LotteryPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LotteryPage />,
  },
  {
    path: "/:lottery",
    element: <LotteryPage />,
  },
]);
