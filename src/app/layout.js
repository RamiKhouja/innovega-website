import './globals.css';
import I18nProvider from './providers/I18nProvider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Noto_Kufi_Arabic, Oxygen, Rubik } from 'next/font/google';

export const metadata = {
  title: 'Innovega',
  description: 'Innovative solutions for modern farming challenges',
  icons: {
    icon: '/favicon.ico',
  },
};

const kufi = Noto_Kufi_Arabic({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-kufi',
  display: 'swap',
});

const rubik = Rubik({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-rubik',
  display: 'swap',
});

const oxygen = Oxygen({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-oxygen',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} ${oxygen.variable}`}>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
