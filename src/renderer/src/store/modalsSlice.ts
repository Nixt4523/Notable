import { createSlice } from "@reduxjs/toolkit";

type ModalsState = {
	newNoteModalOpen: boolean;
	noteInfoModalOpen: boolean;
};

const initialState: ModalsState = {
	newNoteModalOpen: false,
	noteInfoModalOpen: false,
};

const modalsSlice = createSlice({
	name: "modals",
	initialState,
	reducers: {
		toggleNewNoteModal: (state) => {
			state.newNoteModalOpen = !state.newNoteModalOpen;
		},
		toggleNoteInfoModal: (state) => {
			state.noteInfoModalOpen = !state.noteInfoModalOpen;
		},
	},
});

export const { toggleNewNoteModal, toggleNoteInfoModal } = modalsSlice.actions;
export default modalsSlice.reducer;
