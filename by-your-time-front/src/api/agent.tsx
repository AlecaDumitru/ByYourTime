import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5286/";

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
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

const Account = {
  login: (values: any) =>
    requests.post("login", values).then(function (response) {
      console.log(response);
    }),
  register: (values: any) => requests.post("register", values),
  currentUser: () => requests.get("currentUser"),
};

const agent = {
  Account,
};

export default agent;