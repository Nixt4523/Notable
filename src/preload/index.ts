import { contextBridge } from "electron";

if (!process.contextIsolated) {
	throw new Error("ContextIsolation must be Enabled");
}

try {
	contextBridge.exposeInMainWorld("api", {});
} catch (error) {
	console.log(error);
}
