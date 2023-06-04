import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `
//           @import "@/path/to/navbar.module.scss";
//           @import "@/path/to/main.module.scss";
//           @import "@/path/to/App.module.scss";
//         `,
//       },
//     },
//   },
// });



