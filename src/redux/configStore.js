import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { diceGameReducer } from "./reducers/diceGameReducer";
//state trong redux là reducer
const rootReducer = combineReducers({
  //Các state được lưu trữ tại đây
  gioHangReducer: gioHangReducer,
  diceGameReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
   window.__REDUX_DEVTOOLS_EXTENSION__()
);
