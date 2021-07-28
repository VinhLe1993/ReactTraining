import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";

//state trong redux là reducer
const rootReducer = combineReducers({
  //Các state được lưu trữ tại đây
  gioHangReducer: gioHangReducer,
});

export const store = createStore(rootReducer);
