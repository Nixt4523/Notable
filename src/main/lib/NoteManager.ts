import * as fs from "fs/promises";
import path from "path";

class NoteManager {
	private notesDir: string;

	constructor(notesDir: string) {
		this.notesDir = notesDir;
	}

	async initialize(): Promise<void> {
		try {
			await fs.mkdir(this.notesDir, { recursive: true });
			console.log("Notes directory created at ", this.notesDir);
		} catch (error) {
			console.log("Error while creating notes directory", error);
			throw new Error("Failed to Initialize notes directory");
		}
	}

	async getAllNotes(): Promise<string[]> {
		try {
			const files = await fs.readdir(this.notesDir);
			const notes = files.filter((file) => path.extname(file) === ".md");
			return notes;
		} catch (error) {
			console.log("Error while reading notes directory", error);
			throw new Error("Failed to retrieve notes");
		}
	}

	async readNote(noteName: string): Promise<string> {
		try {
			const notePath = path.join(this.notesDir, noteName);
			const noteContent = await fs.readFile(notePath, "utf8");
			return noteContent;
		} catch (error) {
			console.log("Error while reading note", error);
			throw new Error("Failed to retrieve note content");
		}
	}

	async writeNote(noteName: string, noteContent: string): Promise<void> {
		try {
			await this.initialize();
			const notePath = path.join(this.notesDir, noteName);
			await fs.writeFile(notePath, noteContent, { flag: "w" });
		} catch (error) {
			console.log(`Error while writing note ${noteName}`, error);
			throw new Error("Failed to write note");
		}
	}

	async deleteNote(noteName: string): Promise<void> {
		try {
			const notePath = path.join(this.notesDir, noteName);
			await fs.unlink(notePath);
			console.log(`${notePath} deleted successfully`);
		} catch (error) {
			console.log(`Error while deleting note ${noteName}`, error);
			throw new Error("Failed to delete note");
		}
	}
}

export default NoteManager;
