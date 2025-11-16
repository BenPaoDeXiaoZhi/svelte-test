import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base:"./",
  build:{
    assetsInlineLimit:0
  },
  plugins: [svelte()],
})
