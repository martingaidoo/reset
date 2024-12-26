import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ruta base, ajusta esto si es necesario dependiendo de tu despliegue
  build: {
    outDir: 'build', // Directorio de salida
    rollupOptions: {
      input: './index.html', // Ruta de entrada de tu archivo HTML
    },
  },
});
