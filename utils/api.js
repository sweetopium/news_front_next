import axios from "axios";

let url = "http://0.0.0.0:5776/api/v2/";
if (process.env.NODE_ENV !== "development") {
  url = 'https://tapi.futbot.me/api/v1/'
}

const APIConfig = axios.create({
    baseURL: url,
    responseType: "json"
});

export default APIConfig;