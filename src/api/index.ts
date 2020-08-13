import axios, { AxiosResponse } from "axios";
import { Data } from "../interfaces";
const url =
  "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/2-353412_1_AL";

const apiKey = "NnROiP5yzeXqlfoY6jxBSYSRfvnGiqGo";

interface Request {
  apikey: string;
  language: string;
  metric: boolean;
}
const req: Request = {
  apikey: apiKey,
  language: "vi",
  metric: true,
};
export async function getDataWeather(callback = (data: Data[]) => {}) {
  const data: AxiosResponse<Data[]> = await axios.get(url, { params: req });
  console.log(data);
  callback(data.data);
}
