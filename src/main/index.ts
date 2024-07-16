import { electronApp, is, optimizer } from "@electron-toolkit/utils";
import { app, BrowserWindow, ipcMain, shell } from "electron";
import path, { join } from "path";
import icon from "../../resources/icon.png?asset";
import NoteManager from "./lib/NoteManager";

let mainWindow: BrowserWindow;

const rootNotesDir = path.join(app.getPath("documents"), "Notable");
const noteManager = new NoteManager(rootNotesDir);

function createWindow(): void {
	mainWindow = new BrowserWindow({
		width: 900,
		height: 670,
		show: false,
		titleBarStyle: "hidden",
		autoHideMenuBar: true,
		...(process.platform === "linux" ? { icon } : {}),
		webPreferences: {
			preload: join(__dirname, "../preload/index.js"),
			sandbox: true,
			contextIsolation: true,
		},
	});

	mainWindow.on("ready-to-show", () => {
		mainWindow.show();
	});

	mainWindow.webContents.setWindowOpenHandler((details) => {
		shell.openExternal(details.url);
		return { action: "deny" };
	});

	if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
		mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
	} else {
		mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
	}
}

app.whenReady().then(() => {
	electronApp.setAppUserModelId("com.electron");

	app.on("browser-window-created", (_, window) => {
		optimizer.watchWindowShortcuts(window);
	});

	ipcMain.on("minimizeWindow", () => {
		mainWindow.minimize();
	});
	let resizeToggle: boolean = false;
	ipcMain.on("resizeWindow", () => {
		if (resizeToggle) {
			mainWindow.unmaximize();
		} else {
			mainWindow.maximize();
		}

		resizeToggle = !resizeToggle;
	});
	ipcMain.on("closeWindow", () => {
		app.quit();
	});

	ipcMain.handle("getAllNotes", () => noteManager.getAllNotes());
	ipcMain.handle("readNote", (_, noteName: string) => noteManager.readNote(noteName));
	ipcMain.handle("writeNote", (_, noteName: string, noteContent: string) =>
		noteManager.writeNote(noteName, noteContent),
	);
	ipcMain.handle("deleteNote", (_, noteName: string) => noteManager.deleteNote(noteName));

	createWindow();

	app.on("activate", function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
