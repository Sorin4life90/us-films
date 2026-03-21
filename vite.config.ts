import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const securityHeaders = {
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
};

export default defineConfig({
  plugins: [react()],
  preview: {
    headers: securityHeaders,
  },
});
