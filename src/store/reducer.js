import { combineReducers } from "redux";
import authLoginReducer from "../pages/AdminTemplate/LoginPage/duck/reducer";
import adminUserReducer from "../pages/AdminTemplate/UserPage/duck/reducer";
import updateAdminUserReducer from "../pages/AdminTemplate/UserPage/UpdateUser/duck/reducer";
import locationsReducer from "../pages/HomeTemplate/HomePage/duck/reducer";
import roomReducer from "../pages/HomeTemplate/LocationPage/duck/reducer";
import { detailRoomReducer } from "../pages/HomeTemplate/RoomPage/duck/reducer";
import { commentReducer } from "../pages/HomeTemplate/RoomPage/duck/reducer";
const rootReducer = combineReducers({
    authLoginReducer,
    adminUserReducer,
    updateAdminUserReducer,
    locationsReducer,
    roomReducer,
    detailRoomReducer,
    commentReducer
});

export default rootReducer;
