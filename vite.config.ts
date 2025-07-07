import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react-oxc'
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "habille": resolve(__dirname, "./src/index.ts"),
    },
  },
})
