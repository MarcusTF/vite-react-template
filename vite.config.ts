import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"
import { defineConfig } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/services/testingSetup.tsx",
    coverage: {
      provider: "v8",
      reporter: ["json-summary", "json", "text"],
    },
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      context: "/src/context",
      hooks: "/src/services/hooks",
      pages: "/src/pages",
      services: "/src/services",
      utilities: "/src/services/utilities",
      rest: "/src/services/api/rest",
      api: "/src/services/api/api.ts",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      context: "/src/context",
      hooks: "/src/services/hooks",
      pages: "/src/pages",
      services: "/src/services",
      utilities: "/src/services/utilities",
      graphql: "/src/services/api/graphql",
      rest: "/src/services/api/rest",
      api: "/src/services/api",
    },
  },
})
