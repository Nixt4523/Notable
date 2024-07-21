import react from "@vitejs/plugin-react";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import { resolve } from "path";

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin()],
		resolve: {
			alias: {
				"@lib": resolve("src/main/lib"),
				"@shared": resolve("src/shared"),
			},
		},
	},
	preload: {
		plugins: [externalizeDepsPlugin()],
	},
	renderer: {
		assetsInclude: "src/renderer/assets/**",
		resolve: {
			alias: {
				"@renderer": resolve("src/renderer/src"),
				"@components": resolve("src/renderer/src/components"),
				"@assets": resolve("src/renderer/src/assets"),
				"@hooks": resolve("src/renderer/src/hooks"),
				"@utils": resolve("src/renderer/src/utils"),
				"@store": resolve("src/renderer/src/store"),
				"@shared": resolve("src/shared"),
				"@/*": resolve("src/renderer/src/**/*"),
			},
		},
		plugins: [react()],
	},
});
