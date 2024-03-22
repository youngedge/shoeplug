"use strict";

import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react-swc'; 

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    // ... Your other Vite configurations, if any 
    build: {
        rollupOptions: {
          input: {
            // Your existing inputs 
          },
          output: {
            // Your existing outputs
          },
          loader: {
            '.js': 'jsx' 
          }
        }
      }
    });
    