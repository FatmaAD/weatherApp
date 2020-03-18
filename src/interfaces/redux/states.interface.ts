export interface IState {
  appId: string;
  weather: Array<object>;
  city: {
    id: Number;
    name: String;
    coord: any;
    country: String;
    population?:Number;
    timezone?: Number;
    sunrise?: Number;
    sunset?: Number;
  };
}
