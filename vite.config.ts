import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassDts from 'vite-plugin-sass-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sassDts({
      // Configurações do plugin, se necessário
      global: true,
    }),
  ],
})
