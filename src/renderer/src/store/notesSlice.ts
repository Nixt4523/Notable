import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, NoteInfo } from "@shared/types";

export type NotesState = {
	notes: string[];
	currentNote: Note | null;
	currentNoteInfo: NoteInfo | null;
	loading: boolean;
	error: string | null;
};

const initialState: NotesState = {
	notes: [],
	currentNote: null,
	currentNoteInfo: null,
	loading: false,
	error: null,
};

const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		setNotes: (state, action: PayloadAction<string[]>) => {
			state.notes = action.payload;
			state.loading = false;
			state.error = null;
		},
		addNote: (state, action: PayloadAction<string>) => {
			state.notes.push(action.payload);
		},
		updateNote: (state, action: PayloadAction<Note>) => {
			state.currentNote = action.payload;
		},
		deleteNote: (state, action: PayloadAction<string>) => {
			state.notes = state.notes.filter((note) => note !== action.payload);
		},
		setCurrentNote: (state, action: PayloadAction<Note | null>) => {
			state.currentNote = action.payload;
		},
		setCurrentNoteInfo: (state, action: PayloadAction<NoteInfo | null>) => {
			state.currentNoteInfo = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

export const {
	setNotes,
	addNote,
	updateNote,
	deleteNote,
	setCurrentNote,
	setCurrentNoteInfo,
	setLoading,
	setError,
} = notesSlice.actions;
export default notesSlice.reducer;
