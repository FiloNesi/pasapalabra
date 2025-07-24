import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ }) => {

    return {
        base: '/pasapalabra/', // ¡IMPORTANTE! Reemplaza con el nombre de tu repositorio

        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.'),
            }
        }
    };
});
