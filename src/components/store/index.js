import { createStore } from "redux";
import {todoApp } from "../reducers";

const initialState = { cart: "MY Cart 1 " };
const store = createStore(todoApp)

export default store;