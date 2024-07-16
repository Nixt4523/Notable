import { contextBridge, ipcRenderer } from "electron";

if (!process.contextIsolated) {
	throw new Error("ContextIsolation must be Enabled");
}

try {
	contextBridge.exposeInMainWorld("api", {
		getAllNotes: () => ipcRenderer.invoke("getAllNotes"),
		readNote: (noteName: string) => ipcRenderer.invoke("readNote", noteName),
		writeNote: (noteName: string, noteContent: string) =>
			ipcRenderer.invoke("writeNote", noteName, noteContent),
		deleteNote: (noteName: string) => ipcRenderer.invoke("deleteNote", noteName),
		minimizeWindow: () => ipcRenderer.send("minimizeWindow"),
		resizeWindow: () => ipcRenderer.send("resizeWindow"),
		closeWindow: () => ipcRenderer.send("closeWindow"),
	});
} catch (error) {
	console.log(error);
}
