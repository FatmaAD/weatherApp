import { GET_FORECAST, GET_APP_ID } from "./actions/types";
import { IAction } from "../interfaces/redux/action.interface";
import { IState } from "../interfaces/redux/states.interface";

const initState: IState = {
  //u can try this appId "0296e1b5270f2508b6edded63baf27e5"
  appId: "",
  city: {
    id: 0,
    name: "",
    coord: {},
    country: ""
  },
  weather: []
};

const reducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case GET_FORECAST: {
      return  {
        ...state, weather: action.payload.data.list, city: action.payload.data.city
      };
    }case GET_APP_ID: {
      localStorage.setItem('appID', action.payload);
      return  {
        ...state, appId: action.payload
      };
    }
    default:
      return state;
  }
};
export default reducer;
