import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-oxc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  root: './playground',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
