import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import userReducer from "./userSlice";
export default configureStore({
  reducer: {
    header: headerReducer,
    user: userReducer,
  },
});
