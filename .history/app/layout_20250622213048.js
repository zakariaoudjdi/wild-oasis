import Navigation from "./components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navigation />
      <body>{children}</body>
    </html>
  );
}
