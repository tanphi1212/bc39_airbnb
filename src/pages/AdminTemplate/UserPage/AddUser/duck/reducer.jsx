import * as ActionType from './types';

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const addUserAdminReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.ADD_USER_ADMIN_REQUEST: {
        state.loading = true;
        state.data = null;
        state.error = null;
  
        return { ...state };
      }
  
      case ActionType.ADD_USER_ADMIN_SUCCESS: {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
  
        return { ...state };
      }
  
      case ActionType.ADD_USER_ADMIN_FAIL: {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
  
        return { ...state };
      }
  
      default:
        return { ...state };
    }
  };
  

  export default addUserAdminReducer