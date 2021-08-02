import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { diceGameReducer } from "./reducers/diceGameReducer";
import baoBuaKeoReducer  from "./reducers/baoBuaKeoReducer";
//state trong redux là reducer
const rootReducer = combineReducers({
  //Các state được lưu trữ tại đây
  gioHangReducer: gioHangReducer,
  diceGameReducer,
  baoBuaKeoReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
