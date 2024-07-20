import { Note, NoteInfo } from "@shared/types";
import * as fs from "fs/promises";
import path from "path";

class NoteManager {
	private notesDir: string;

	constructor(notesDir: string) {
		this.notesDir = notesDir;
		this.initialize();
	}

	async initialize(): Promise<void> {
		try {
			await fs.mkdir(this.notesDir, { recursive: true });
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

	async readNote(noteName: string): Promise<Note> {
		try {
			const notePath = path.join(this.notesDir, noteName);
			const noteContent = await fs.readFile(notePath, "utf8");
			return { name: noteName, content: noteContent };
		} catch (error) {
			console.log("Error while reading note", error);
			throw new Error("Failed to retrieve note content");
		}
	}

	async writeNote(noteName: string, noteContent: string): Promise<Note> {
		try {
			const notePath = path.join(this.notesDir, noteName);
			await fs.writeFile(notePath, noteContent, { flag: "w" });
			return { name: noteName, content: noteContent };
		} catch (error) {
			console.log(`Error while writing note ${noteName}`, error);
			throw new Error("Failed to write note");
		}
	}

	async deleteNote(noteName: string): Promise<void> {
		try {
			const notePath = path.join(this.notesDir, noteName);
			await fs.unlink(notePath);
		} catch (error) {
			console.log(`Error while deleting note ${noteName}`, error);
			throw new Error("Failed to delete note");
		}
	}

	async getNoteInfo(noteName: string): Promise<NoteInfo> {
		try {
			const notePath = path.join(this.notesDir, noteName);
			const stats = await fs.stat(notePath);

			return {
				name: noteName,
				path: notePath,
				createdAt: stats.birthtime,
				lastEdited: stats.mtime,
			};
		} catch (error) {
			console.log(`Error while getting note info for ${noteName}`, error);
			throw new Error("Failed to get note info");
		}
	}
}

export default NoteManager;
