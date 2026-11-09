import './globals.css';
import I18nProvider from './providers/I18nProvider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Oxygen } from 'next/font/google';

export const metadata = {
  metadataBase: new URL('https://innovega.tn'),
  title: 'Innovega',
  description: 'Innovative solutions for modern farming challenges',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Innovega',
    description: 'Innovative solutions for modern farming challenges',
    images: [
      {
        url: '/images/logo.png',
        width: 400,
        height: 267,
        alt: 'Innovega logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovega',
    description: 'Innovative solutions for modern farming challenges',
    images: ['/images/logo.png'],
  },
};

const oxygen = Oxygen({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-oxygen',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={oxygen.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { if (localStorage.getItem('innovega-theme') === 'dark') document.documentElement.classList.add('dark'); } catch (e) {} })()`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
