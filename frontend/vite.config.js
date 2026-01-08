import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // If strictPort is set to true, the server will exit if the port is already in use.
    // If set to false (default), it will try the next available port (e.g., 5174).
    strictPort: false,
  }
})
