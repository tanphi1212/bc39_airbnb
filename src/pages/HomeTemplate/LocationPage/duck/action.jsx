import api from "../../../../utils/apiUtil";
import * as ActionType from "./types";

export const actGetRooms = (id) => {
    return (dispatch) =>{
        dispatch(actRoomRequest)

        api.get(`phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`)
        .then((result)=>{
            dispatch(actRoomSuccess(result.data.content))
        })
        .catch((err)=>{
            dispatch(actRoomFail(err))
        })
       
    }
};

const actRoomRequest = () => {
    return {
        type: ActionType.ROOM_REQUEST,
    };
};

const actRoomSuccess = (data) => {
    return {
        type: ActionType.ROOM_SUCCESS,
        payload: data,
    };
};

const actRoomFail = (error) => {
    return {
        type: ActionType.ROOM_FAIL,
        payload: error,
    };
};