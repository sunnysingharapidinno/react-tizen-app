import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // This will read your tsconfig paths automatically
  ],
  build: {
    outDir: "build",
  },
})
