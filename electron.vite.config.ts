import react from "@vitejs/plugin-react";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import { resolve } from "path";

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin()],
		resolve: {
			alias: {
				"@lib": resolve("src/main/lib")
			}
		}
	},
	preload: {
		plugins: [externalizeDepsPlugin()]
	},
	renderer: {
		assetsInclude: "src/renderer/assets/**",
		resolve: {
			alias: {
				"@renderer": resolve("src/renderer/src"),
				"@components": resolve("src/renderer/src/components"),
				"@hooks": resolve("src/renderer/src/hooks"),
				"@utils": resolve("src/renderer/src/utils"),
				"@/*": resolve("src/renderer/src/**/*")
			}
		},
		plugins: [react()]
	}
});
