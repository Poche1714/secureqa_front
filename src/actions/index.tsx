//import history from "../history";
import {
  FETCH_STREAMS,
  SELECT_MENU,
} from "./types";


export const setTypeModal = (v: any) => {
  return {
    type: FETCH_STREAMS,
    payload: v,
  };
};


export const setSelectMenu = (v: any) => {
  return {
    type: SELECT_MENU,
    payload: v,
  };
};