import axios from "axios";

let url = "http://0.0.0.0:5776/api/v2/";
if (process.env.NODE_ENV !== "development" && process.env.LNG === "en") {
    url = 'https://een-newsapi.simplr.ru/api/v2/'
}
if (process.env.NODE_ENV !== "development" && process.env.LNG !== "en") {
  url = 'https://newsapi.simplr.ru/api/v2/'
}

const APIConfig = axios.create({
    baseURL: url,
    responseType: "json"
});

export default APIConfig;