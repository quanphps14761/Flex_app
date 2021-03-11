import {combineReducers, createStore} from"redux"
import { FormReducers } from "./reducer/FormReducers"
const RootReducer = combineReducers({
    FormReducers
})
export const store = createStore(RootReducer);