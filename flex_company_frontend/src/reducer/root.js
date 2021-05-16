import { combineReducers } from "redux";
import InvoiceReducer from "./new_invoice";

const rootReducer = combineReducers({
    InvoiceReducer,
});
export default rootReducer;