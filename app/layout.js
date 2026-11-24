import "./globals.css";

export const metadata = {
  title: "Mobile Karobar | Best Mobile Deals",
  description: "Buy the latest smartphones at affordable prices in Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}