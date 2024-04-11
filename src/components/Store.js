import { applyMiddleware, legacy_createStore as createStore } from "redux";
import userSlice from "./userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import {thunk} from "redux-thunk";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ userSlice })
);
const store=createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(logger,thunk))
)
export default store;
