import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRAIT - Engineered to Scale",
  description: "GRAIT Cloud Solutions - Engineered to Scale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
