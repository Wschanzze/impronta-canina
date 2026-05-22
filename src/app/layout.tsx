import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Impronta - Un aprendizaje que deja huella',
  description:
    'Adiestramiento y educación canina respetuosa en Tandil, Buenos Aires. Cursos de educación en positivo, talleres grupales y transporte de mascotas personalizado.',
  icons: {
    icon: [{ url: '/assets/images/app_logo.png', type: 'image/x-icon' }],
  },
};

import FloatingDoge from '../components/FloatingDoge';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingDoge />
      </body>
    </html>
  );
}
