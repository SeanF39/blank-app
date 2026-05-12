import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manifest ProjectOS',
  description: 'Executive dashboard for Flynn Advisors and Manifest Industries'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
