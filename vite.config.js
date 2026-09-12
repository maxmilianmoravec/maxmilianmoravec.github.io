import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

// Automatically pick up every projectX.html / guideX.html file so you
// don't have to edit this config each time you add a new page.
function collectHtmlInputs(dir) {
  const entries = {};
  const fullDir = resolve(__dirname, dir);
  for (const file of readdirSync(fullDir)) {
    if (file.endsWith('.html')) {
      const name = `${dir}-${file.replace('.html', '')}`;
      entries[name] = resolve(fullDir, file);
    }
  }
  return entries;
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: 'about.html',
        ...collectHtmlInputs('project'),
        ...collectHtmlInputs('course'),
      },
    },
  },
});
