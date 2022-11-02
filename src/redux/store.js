import { configureStore ,combineReducers } from '@reduxjs/toolkit';
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  user:userReducer
})
// console.log(userReducer);

export const store = configureStore({
  reducer: rootReducer
});