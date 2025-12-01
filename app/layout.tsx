import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AmbiSight V2 - Organizational Ambidexterity Platform',
  description: 'Microsoft Copilot-grade diagnostic platform for organizational ambidexterity analysis',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
