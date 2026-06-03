import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'High-Performance Web Development',
  description: 'Fast, responsive, and pixel-perfect custom websites for growing businesses.',
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
