import api from "../../../../../utils/apiUtil";
import { actListAdminUser } from "../../duck/action";
import * as ActionType from "./types";


export const actGetUserById = (id) => {
    return (dispatch) => {
        dispatch(actUpdateUserUserRequset())
        api
        .get(`/users/${id}`)
        .then((result)=>{
            dispatch(actUpdateUserUserSuccess(result.data.content));
          
        })
        .catch( (error) => {
            dispatch(actUpdateUserUserFail(error))
        })
    }
}

export const actUpdateUser = (data) => {
    return (dispatch) => {
        dispatch(actUpdateUserUserRequset())
        api
        .put(`/users/${data.id}`, data )
        .then((result)=>{
        })
        .catch( (error) => {
            dispatch(actUpdateUserUserFail(error))
        })
    }
}


const actUpdateUserUserRequset = () => {
    return {
        type: ActionType.UPDATE_USER_ADMIN_REQUEST
    }
}

const actUpdateUserUserSuccess = (data) => {
    return {
        type: ActionType.UPDATE_USER_ADMIN_SUCCESS,
        payload: data
    }
}

const actUpdateUserUserFail = (err) => {
    return{
        type: ActionType.UPDATE_USER_ADMIN_FAIL,
        payload: err
    }
}