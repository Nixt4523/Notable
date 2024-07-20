import { Note, NoteInfo } from "@shared/types";

export interface ElectronAPI {
	getAllNotes: () => Promise<string[]>;
	readNote: (noteName: string) => Promise<Note>;
	writeNote: (noteName: string, noteContent: string) => Promise<Note>;
	deleteNote: (noteName: string) => Promise<void>;
	getNoteInfo: (noteName: string) => Promise<NoteInfo>;
	minimizeWindow: () => void;
	resizeWindow: () => void;
	closeWindow: () => void;
}

declare global {
	interface Window {
		api: ElectronAPI;
	}
}
