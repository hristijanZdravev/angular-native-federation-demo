import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nativeFederation } from '@softarc/native-federation';


// https://vite.dev/config/
export default defineConfig({
    plugins: [
    react(),
  ],
  build: {
    target: 'esnext', // IMPORTANT for federation
  },
  server: {
    port: 4202
  }
});