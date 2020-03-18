import axios from "axios";
import { GET_FORECAST } from "./types";

export const getForecast = (appId: string, city:string) => (disaptch: any) => {
  console.log(appId,city)
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast?APPID=${appId}&mode=json&q=${city}`
    )
    .then(res => disaptch({ type: GET_FORECAST, payload: res }));
};