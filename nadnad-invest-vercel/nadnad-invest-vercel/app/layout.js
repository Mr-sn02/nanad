import './globals.css';

export const metadata = {
  title: 'Nadnad Invest – Grow with Confidence',
  description: 'Landing page elegan untuk simulasi investasi Nadnad Invest.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
