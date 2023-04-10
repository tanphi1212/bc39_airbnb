import api from "../../../../utils/apiUtil";
import * as ActionType from "./types";

export const actGetLoctions = (data) => {
    return (dispatch) =>{
        dispatch(actLoctionsRequest)

        api.get('/vi-tri')
        .then((result)=>{
            dispatch(actLoctionsSuccess(result.data.content))
        })
        .catch((err)=>{
            dispatch(actLoctionsFail(err))
        })
       
    }
};

const actLoctionsRequest = () => {
    return {
        type: ActionType.LOCATIONS_REQUEST,
    };
};

const actLoctionsSuccess = (data) => {
    return {
        type: ActionType.LOCATIONS_SUCCESS,
        payload: data,
    };
};

const actLoctionsFail = (error) => {
    return {
        type: ActionType.LOCATIONS_FAIL,
        payload: error,
    };
};