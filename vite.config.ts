import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "img-src 'self' data: https:",
  "media-src 'self' https:",
  "font-src 'self' https://fonts.gstatic.com data:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self'",
  "connect-src 'self' https://api.emailjs.com",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com",
].join("; ");

const securityHeaders = {
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "Content-Security-Policy": contentSecurityPolicy,
};

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
  },
  preview: {
    headers: securityHeaders,
  },
});
