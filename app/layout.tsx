import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muscle & Strength Pyramids | Launch",
  description:
    "Launch hub for Grow More Muscles and Be the Buffest Person in the Room with science-backed systems to accelerate muscle growth."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="bg-brand-light text-text-primary">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
