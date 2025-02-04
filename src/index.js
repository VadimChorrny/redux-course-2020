import { createStore } from "./createStore";
import { rootReducer } from "./redux/rootReduct";
import "./styles.css";

const counter = document.getElementById("counter");

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");

const themeBtn = document.getElementById("theme");

const store = createStore(rootReducer, 0);

window.store = store;

addBtn.addEventListener("click", () => {
    store.dispatch({ type: "INCREMENT" });
});

subBtn.addEventListener("click", () => {
    store.dispatch({ type: "DECREMENT" });
});
store.subscribe(() => {
    const state = store.getState();

    counter.textContent = state;
});
