import { defineConfig } from “vite”;
import react from “@vitejs/plugin-react”;
import path from “path”;

export default defineConfig({
base: ‘/hndy-teaser/’, // This is critical for GitHub Pages
plugins: [react()],
resolve: {
alias: {
“@”: path.resolve(__dirname, “./client/src”),
“@db”: path.resolve(__dirname, “./db”),
},
},
build: {
outDir: ‘dist’,
sourcemap: false,
},
server: {
port: 5000,
},
});
