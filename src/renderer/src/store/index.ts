import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "./modalsSlice";
import notesReducer from "./notesSlice";

export const store = configureStore({
	reducer: {
		modals: modalsReducer,
		notes: notesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
