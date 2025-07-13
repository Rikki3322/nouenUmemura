import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'うめむら農園｜採れたて新鮮なアスパラを直送',
  description: '新鮮なアスパラガスを農家から直送',
  icons: {
    icon: '/favicon.svg',
  },
};

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => (
  <html lang="ja" className="scroll-smooth">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
    >
      {children}
    </body>
  </html>
);

export default RootLayout;
