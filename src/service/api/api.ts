import axios from "axios";

const api = axios.create({
  baseURL: "https://loteriascaixa-api.herokuapp.com/",
  timeout: 10000,
});

export { api };
