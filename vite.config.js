import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Explicit output directory
    rollupOptions: {
      // Remove the external option unless you have specific needs
      // external: ['formik'], // Remove this line
    },
  },
  base: '/', // Set base path explicitly
});





// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['formik'], // Only needed if Formik is meant to be external (rare)
//     },
//   },
// });