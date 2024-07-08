export interface ElectronAPI {
	getAllNotes: () => Promise<string[]>;
	readNote: (noteName: string) => Promise<string>;
	writeNote: (noteName: string, noteContent: string) => Promise<void>;
	deleteNote: (noteName: string) => Promise<void>;
}

declare global {
	interface Window {
		api: ElectronAPI;
	}
}
