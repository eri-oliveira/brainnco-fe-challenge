import dayjs from "dayjs";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "./routes/routes";

function App() {
  dayjs.locale("pt-br");

  return (
    <React.StrictMode>
      <ToastContainer
        draggable
        rtl={false}
        newestOnTop
        closeButton
        pauseOnHover
        closeOnClick
        theme="light"
        hideProgressBar
        pauseOnFocusLoss
        autoClose={5000}
        position="top-right"
      />
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
}

export default App;
