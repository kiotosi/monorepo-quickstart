import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            "/api": {
                target: `localhost:${process.env["PORT"] || 8001}`,
                changeOrigin: true,
            },
        },
    },
});
