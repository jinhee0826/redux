// 리듀서를 묶어서 내보내 줌
import {combineReducers} from "redux";
import board from './board';

const rootReducer = combineReducers({board});
export default rootReducer;
