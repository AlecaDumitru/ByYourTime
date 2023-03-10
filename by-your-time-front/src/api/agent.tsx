import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../App";
import { store } from "../app/store/configureStore";

axios.defaults.baseURL = "http://localhost:5286/";
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.request.use(config => {
  const token = store.getState().account.user?.token;
  //@ts-ignore
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
})

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response!;
    console.log(data, status);
    switch (status) {
      case 400:
        //@ts-ignore
        if (data.errors) {
          const modelStateErrors: string[] = [];
          //@ts-ignore
          for (const key in data.errors) {
            //@ts-ignore
            if (data.errors[key]) {
              //@ts-ignore
              modelStateErrors.push(data.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        }
        //@ts-ignore
        toast.error(data.title);
        break;

      case 401:
        //@ts-ignore
        toast.error(data.title);
        break;

      case 500:
        history.push({
          pathname: "/server-error",
        });

        //@ts-ignore
        toast.error(data.title);
        break;

      default:
        break;
    }
    console.log("caught by interceptors");
    return Promise.reject(error.response);
  }
);

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};
// de urmarit din nou video 50 si de modificat fetch-ul simplu
const Events = {
  list: () => requests.get("events"),
  details: (id: number) => requests.get(`events/category/${id}`),
};

const Account = {
  login: (values: any) =>
    requests.post("login", values).then(function (response) {
      console.log(response);
      return response;
    }),
  register: (values: any) => requests.post("register", values),
  currentUser: () => requests.get("currentUser"),
};

const TestErrors = {
  get400Error: () => requests.get("Error/bad-request"),
  get401Error: () => requests.get("Error/unauthorized"),
  get404Error: () => requests.get("Error/not-found"),
  get500Error: () => requests.get("Error/server-error"),
  getValidationError: () => requests.get("Error/validation-error"),
};

const Basket = {
  get: () => requests.get("Basket"),
  addItem: (productId: number, quantity = 1) =>
    requests.post(`Basket?productId=${productId}&quantity=${quantity}`, {}),
  removeItem: (productId: number, quantity = 1) =>
    requests.delete(`Basket?productId=${productId}&quantity=${quantity}`),
};

const agent = {
  Account,
  TestErrors,
  Events,
  Basket,
};

export default agent;
