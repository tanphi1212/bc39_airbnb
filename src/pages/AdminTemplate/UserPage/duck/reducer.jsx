import * as ActionType from "./types";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const adminUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADMIN_USER_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };

        case ActionType.ADMIN_USER_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };

        case ActionType.ADMIN_USER_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };

        default:
            return { ...state };
    }
}

export default adminUserReducer;