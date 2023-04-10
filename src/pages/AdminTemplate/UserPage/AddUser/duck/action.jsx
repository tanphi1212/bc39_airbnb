import * as ActionType from "./types";
import api from "../../../../../utils/apiUtil";


export const actAddUserAdmin = (data) => {
    return (dispatch) =>{
        dispatch(actAddUserAdminRequest())

        api
            .post("/users",data)
            .then((result)=> {
                dispatch(actAddUserAdminSuccess(result.data.content))
            })
            .catch(err => {
                dispatch(actAddUserAdminFail(err))
            })
    }
};

const actAddUserAdminRequest = () => {
    return {
        type: ActionType.ADD_USER_ADMIN_REQUEST,
    };
};

const actAddUserAdminSuccess = (data) => {
    return {
        type: ActionType.ADD_USER_ADMIN_SUCCESS,
        payload: data,
    };
};

const actAddUserAdminFail = (error) => {
    return {
        type: ActionType.ADD_USER_ADMIN_FAIL,
        payload: error,
    };
};