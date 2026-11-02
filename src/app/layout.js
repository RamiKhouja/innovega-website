import './globals.css';
import I18nProvider from './providers/I18nProvider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Oxygen } from 'next/font/google';

export const metadata = {
  title: 'Innovega',
  description: 'Innovative solutions for modern farming challenges',
  icons: {
    icon: '/favicon.ico',
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
    <html lang="en" className={oxygen.variable}>
      <head>
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
