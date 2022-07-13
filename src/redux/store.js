import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Login from "./login/reducer";

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  Login,
});

const AppStore = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default AppStore;
