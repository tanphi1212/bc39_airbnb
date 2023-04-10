import * as ActionType from './types';

const initialState = {
    loading: false,
    data: null,
    error: null,
};

export const detailRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.DETAIL_ROOM_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state };
        }

        case ActionType.DETAIL_ROOM_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state };
        }

        case ActionType.DETAIL_ROOM_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;

            return { ...state };
        }

        default:
            return { ...state };
    }
};

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.COMMENT_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;

            return { ...state };
        }

        case ActionType.COMMENT_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state };
        }

        case ActionType.COMMENT_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;

            return { ...state };
        }

        default:
            return { ...state };
    }
};