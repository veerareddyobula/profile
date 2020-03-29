
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default store;