import './globals.css';
import { Playfair_Display } from 'next/font/google';
import AgeVerify from '../components/AgeVerify';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',    /* use system font unti loaded */
});

export const metadata = {
  title: 'IB Cigars',
  description: 'Luxury cigars for the refined palate.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.variable}>
        <AgeVerify>{children}</AgeVerify>
      </body>
    </html>
  );
}