import { createStore } from "redux";
import BookReducer from "../reducer/index";

const Store = createStore(BookReducer);

export default Store;
