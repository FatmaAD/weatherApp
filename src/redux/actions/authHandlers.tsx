import { GET_APP_ID } from "./types";

export const getAppId = (appId: string) => ({
    type: GET_APP_ID, payload: appId
});