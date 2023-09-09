import _ from "lodash";
import {
    FETCH_STREAMS,
    SELECT_MENU,
} from "../actions/types";

const INTIAL_STATE = {
    value: null,
    menu: null
};
const streamReducer = (state = { INTIAL_STATE }, action: any) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return {
                ...state,
                value: action.payload
            };
        case SELECT_MENU:
            return {
                ...state,
                menu: action.payload
            };
        default:
            return state;
    }
};
export default streamReducer;