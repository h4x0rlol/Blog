import { DOMAIN, METADATA } from '@/constants';
import { Metadata } from 'next';
import Script from 'next/script';
import { ReactNode } from 'react';
import '../styles/global.scss';

const setInitialTheme = `
function getUserPreference() {
  if(window?.localStorage?.getItem('theme')) {
    return window.localStorage.getItem('theme')
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
}
document.body.dataset.theme = getUserPreference();
`;

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    template: '%s | h4x0rlol',
    default: 'h4x0rlol',
  },
  keywords: METADATA.KEYWORDS.join(', '),
  description: METADATA.DESCRIPTION,
  generator: 'Next.js',
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script id="theme" dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        {children}
      </body>
    </html>
  );
}
