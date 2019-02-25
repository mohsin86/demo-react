import { createStore } from "redux";
import {reducer } from "../reducers/index";

const initialState = { cart: "MY Cart 1 " };
const store = createStore(reducer, initialState);

export default store;