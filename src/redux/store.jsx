import { configureStore } from "@reduxjs/toolkit";
import clubReducer from "./clubSlice.jsx";
import eventReducer from "./eventSlice.jsx";

const store = configureStore({
    reducer: {
        clubs: clubReducer,
        events: eventReducer,
    },
});

export default store;
