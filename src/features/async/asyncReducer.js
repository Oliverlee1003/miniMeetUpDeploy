import {ASYNC_ACTION_ERROR, ASYNC_ACTION_FINISH, ASYNC_ACTION_START} from "../actionConstants";

const initialState = {
    loading: false,
    elementName: null
};

const asyncReducer = (state = initialState, action) => {
    switch (action.type){
        case ASYNC_ACTION_START:
            return {
                ...state,
                loading: true,
                elementName: action.payload
            };
        case ASYNC_ACTION_FINISH:
            return {
                ...state,
                loading: false,
                elementName: action.payload
            };
        case ASYNC_ACTION_ERROR:
            return {
                ...state,
                loading: false,
                elementName: action.payload
            };
        default:
            return state;
    }
};

export default asyncReducer;