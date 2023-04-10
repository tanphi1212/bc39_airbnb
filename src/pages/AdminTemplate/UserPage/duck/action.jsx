import * as ActionType from "./types";
import api from "../../../../utils/apiUtil";

export const actListAdminUser = () => {
    return (dispatch) => {
        dispatch(actAdminUserRequset())
        api
        .get('/users')
        .then((result)=>{
            dispatch(actAdminUserSuccess(result.data.content))
          
        })
        .catch( (error) => {
            dispatch(actAdminUserFail(error))
        })
    }
}

export const actDeleteUser = (id) => {
    return (dispatch) => {
        dispatch(actAdminUserRequset())
        api
        .delete(`/users?id=${id}`)
        .then((result)=>{
            actListAdminUser()
        })
        .catch( (err) => {
            dispatch(actAdminUserFail(err))
        })
    }
}


const actAdminUserRequset = () => {
    return {
        type: ActionType.ADMIN_USER_REQUEST
    }
}

const actAdminUserSuccess = (data) => {
    return {
        type: ActionType.ADMIN_USER_SUCCESS,
        payload: data
    }
}

const actAdminUserFail = (err) => {
    return{
        type: ActionType.ADMIN_USER_FAIL,
        payload: err
    }
}