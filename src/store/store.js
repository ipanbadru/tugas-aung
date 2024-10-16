import { configureStore } from "@reduxjs/toolkit";
import answerReducer from "./answerSlice";

export const store = configureStore({
    reducer: {
        answer: answerReducer
    }
});