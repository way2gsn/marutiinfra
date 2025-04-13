// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Website Title', // Change this to your website's title
  description: 'Your website description', // Change this to your website's description
  icons: {
    icon: '/favicon.ico', // Path to your favicon.ico (relative to the public folder)
    apple: '/apple-touch-icon.png', // Path to your apple-touch-icon.png (optional)
    // You can add more icon definitions if needed.
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}