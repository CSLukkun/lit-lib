import {defineConfig} from "vite";
import path from 'path';
export default defineConfig(({command, mode}) => {
  if(command === 'build') {
    return {
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/components/index.js'),
          name: 'litDemo',
          fileName: (format) => `lit-demo.${format}.js`,
        }
      }
    }
  }
})