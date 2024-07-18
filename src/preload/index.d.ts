import { Note } from "@shared/types";

export interface ElectronAPI {
	getAllNotes: () => Promise<string[]>;
	readNote: (noteName: string) => Promise<Note>;
	writeNote: (noteName: string, noteContent: string) => Promise<Note>;
	deleteNote: (noteName: string) => Promise<void>;
	minimizeWindow: () => void;
	resizeWindow: () => void;
	closeWindow: () => void;
}

declare global {
	interface Window {
		api: ElectronAPI;
	}
}
