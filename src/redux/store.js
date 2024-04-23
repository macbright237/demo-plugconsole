import { combineReducers, configureStore } from "@reduxjs/toolkit"
import logger from 'redux-logger';
import userReducer from './slice/userSlice';
import projectReducer from './slice/projectSlice';



const rootReducer = combineReducers({
  userStore: userReducer,
  projectStore: projectReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => 
      getDefaultMiddleware().concat(logger),
  devTools: false
})