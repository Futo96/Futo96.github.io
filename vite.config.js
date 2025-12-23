import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: '.', // Set the root to the 'pages' directory
  resolve: {
    alias: {
      '@supabase/supabase-js': path.resolve(__dirname, 'node_modules/@supabase/supabase-js'),
      '@public': path.resolve(__dirname, 'pages/public'),
      '@user': path.resolve(__dirname, 'pages/user'),
      '@staff': path.resolve(__dirname, 'pages/staff'),
      '@admin': path.resolve(__dirname, 'pages/admin')
    }
  },
  server: {
    port: 3000,
    hmr: true,
    watch: {
      // prevent reload loops from role-based folders
      ignored: [
        '**/user/**',
        '**/staff/**',
        '**/admin/**'
      ]
    },
    fs: {
      allow: ['..'] // Allow serving files from the project root (where scripts/ is located)
    }
  }
})
