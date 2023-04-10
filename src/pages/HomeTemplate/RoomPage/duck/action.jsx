import * as ActionType from './types';
import api from '../../../../utils/apiUtil';

export const actGetDetailRoom = (id) => {
    return dispatch => {
        dispatch(actDetailRoomRequest);

        api.get(`/phong-thue/${id}`)
        .then(result => {
            dispatch(actDetailRoomSuccess(result.data.content))
        })
        .catch(err => {
            dispatch(actDetailRoomFail(err))
        })
    }

}




const actDetailRoomRequest = () => {
    return {
       type: ActionType.DETAIL_ROOM_REQUEST,
    };
};

const actDetailRoomSuccess = (data) => {
    return {
        type: ActionType.DETAIL_ROOM_SUCCESS,
        payload: data,
    };
};

const actDetailRoomFail = (error) => {
    return {
        type: ActionType.DETAIL_ROOM_FAIL,
        payload: error,
    };
};


export const actGetComment = (id) => {
    return dispatch => {
        dispatch(actCommentRequest);

        api.get(`binh-luan/lay-binh-luan-theo-phong/${id}`)
        .then(result => {
            dispatch(actCommentSuccess(result.data.content))
        })
        .catch(err => {
            dispatch(actCommentFail(err))
        })
    }

}




const actCommentRequest = () => {
    return {
       type: ActionType.COMMENT_REQUEST,
    };
};

const actCommentSuccess = (data) => {
    return {
        type: ActionType.COMMENT_SUCCESS,
        payload: data,
    };
};

const actCommentFail = (error) => {
    return {
        type: ActionType.COMMENT_FAIL,
        payload: error,
    };
};