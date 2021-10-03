import { combineReducers } from "redux";
import { formLinkReducer } from "./formlink/formlink.reducer";
import { analysisReducer } from "./analysis/analysis.reducer";

const rootReducer = combineReducers({
    formlink: formLinkReducer,
    analysis: analysisReducer,
})

export default rootReducer