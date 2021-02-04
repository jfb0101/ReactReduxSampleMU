import { compose, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

declare var window: any;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export { store };
