// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedLink UI",
  description: "Doctor dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Ignore extension-injected attributes on hydration (e.g., Grammarly) */}
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}