import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 1. Fixes "No open ports detected on 0.0.0.0" by binding to all network interfaces.
    host: '0.0.0.0',
    // 2. Fixes "Blocked request. This host is not allowed."
    //    by explicitly allowing your domain.
    allowedHosts: [
      'www.chatapp.fun'
    ]
  }
})